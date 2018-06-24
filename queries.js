const promiseLib = require('bluebird');
const pgPromise = require('pg-promise');

const pgp = pgPromise({promiseLib});
const errorCode = pgp.errors.queryResultErrorCode;
const dbPath = 'postgres://localhost:5432/task_avia_marketing';
const db = pgp(dbPath);

const makeGetUserPromise = (ctx, id) => ctx.one('select * from users where id = $1', id);
const makeCreateUserPromise = (ctx, user) => ctx
  .one(
    'insert into users (id, shared, email) values (${id}, ${shared}, ${email}) RETURNING id, shared, email',
    user
  );
const catchErr = cb => err => cb(err);

function getUser(req, res, next) {
  makeGetUserPromise(db, req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(catchErr(next));
}


function createUser(req, res, next) {
  db.task(function* (t) {
      console.log(req.body)
      let user = yield makeGetUserPromise(t, req.body.id).then(r => r, err => {
        if (errorCode.noData === err.code) {
          return null;
        }
        throw err;
      });

      if (!user) {
        user = yield makeCreateUserPromise(t, req.body)
      }
      return user;
    })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(catchErr(next));
}

module.exports = {
  createUser,
  getUser,
};


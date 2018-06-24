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

const makeUpdateUserPromise = (ctx, user) => {
  return ctx
    .one(
      'update users set shared=${shared}, email=${email} where id=${id} RETURNING id, shared, email',
      user
    );
};

const catchErr = cb => err => cb(err);
const successUserPromise = res => promise => promise.then(user => {
  res.status(200).json(user);
});

function getUser(req, res, next) {
  successUserPromise(res)(makeGetUserPromise(db, req.params.id)).catch(catchErr(next));
}

function createUser(req, res, next) {
  successUserPromise(res)(db.task(function* (t) {
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
    }))
    .catch(catchErr(next));
}

function updateUser(req, res, next) {
  const body = {
    ...req.body,
    id: req.params.id,
  };
  successUserPromise(res)(makeUpdateUserPromise(db, body)).catch(catchErr(next));
}

module.exports = {
  createUser,
  getUser,
  updateUser,
};


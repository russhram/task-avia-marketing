const express = require('express');
const queries = require('./queries');
const router = express.Router();

router.post('/api/users', queries.createUser);
router.get('/api/users/:id', queries.getUser);

module.exports = router;
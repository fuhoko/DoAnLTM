const express = require('express');
const scoreRouter = require('../app/Score/Routes/routes.js')

const router = express.Router();

router.use(scoreRouter)

module.exports =  router

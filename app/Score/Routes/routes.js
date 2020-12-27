const express = require('express')
const scoreController = require('../Controllers/ScoreController.js')

const router = express.Router()

router.get('/', scoreController.getDataByQueryParameters, (req, res) => {
  res.render('app/search');
});

router.get('/rank', scoreController.getDataLocations, scoreController.getHighestScoresByQueryParameters, (req, res) => {
  res.render('app/rank');
})

router.get('/chart', scoreController.getDataLocations, (req, res) => {
  res.render('app/chart');
})

router.post('/searchScore', scoreController.getDataByForm)

router.post('/rankedScore', scoreController.getHighestScoresByForm)

router.post('/scoreStatistics', scoreController.scoreStatistics)

module.exports = router
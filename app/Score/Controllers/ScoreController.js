const scoreService = require('../Services/ScoreService')

const getDataByForm = async (req, res) => {
  const data = req.body
  const dataSearch = await scoreService.getDataBySBD(data)
  res.send(dataSearch)
}

const getDataByQueryParameters = async (req, res, next) => {
  const data =  {
    sbd: req.query.sbd
  }
  if (data.sbd) {
    const result = await scoreService.getDataBySBD(data)
    res.locals.result = result
  }
  next()
}

const getDataLocations = async (req, res, next) => {
  const locations = await scoreService.getDataLocations()
  res.locals.locations = locations
  next()
}

const getHighestScoresByQueryParameters = async (req, res, next) => {
  const data = req.query
  const rankingList = await scoreService.getHighestScores(data)
  res.locals.rankingList = rankingList
  next()
}

const getHighestScoresByForm = async (req, res, next) => {
  const data = req.body
  const rankingList = await scoreService.getHighestScores(data)
  res.send(rankingList)
}

const scoreStatistics = async (req, res, next) => {
  const data = req.body
  const statisticalData = await scoreService.scoreStatistics(data)
  res.send(statisticalData)
}

module.exports = { getDataByForm, getDataByQueryParameters, getDataLocations, getHighestScoresByForm, getHighestScoresByQueryParameters, scoreStatistics }
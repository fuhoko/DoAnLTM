const scoreRepository = require('../Repositories/ScoreRepository')

const getDataBySBD = async (data) => {
  return scoreRepository.getDataBySBD(data)
}

const getDataLocations = async() => {
  return scoreRepository.getDataLocations()
}

const getHighestScores = async(data) => {
  let rankedOrder = ['toan', 'van', 'ngoai_ngu']
  if (rankedOrder.indexOf(data.subject) != -1 || !data.subject) {
    rankedOrder.splice(rankedOrder.indexOf(data.subject), 1)
  }
  if (data.location && data.subject) {
    return scoreRepository.getHighestScores(data, rankedOrder)
  }
  return scoreRepository.getHighestScores({location: 'All', subject: 'toan'}, rankedOrder)
}

const scoreStatistics = async(data) => {
  if (data.location && data.subject) {
    return scoreRepository.scoreStatistics(data)
  }
  return scoreRepository.scoreStatistics({location: 'All', subject: 'toan'})
}

module.exports = { getDataBySBD, getDataLocations, getHighestScores, scoreStatistics }
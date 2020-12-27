const scoreRepository = require('../Repositories/ScoreRepository')

const getDataBySBD = async (data) => {
  return scoreRepository.getDataBySBD(data)
}

const getDataLocations = async() => {
  return scoreRepository.getDataLocations()
}

const getHighestScores = async(data) => {
  if (data.location && data.subject) {
    return scoreRepository.getHighestScores(data)
  }
  return scoreRepository.getHighestScores({location: 'All', subject: 'toan'})
}

const scoreStatistics = async(data) => {
  if (data.location && data.subject) {
    return scoreRepository.scoreStatistics(data)
  }
  return scoreRepository.scoreStatistics({location: 'All', subject: 'toan'})
}

module.exports = { getDataBySBD, getDataLocations, getHighestScores, scoreStatistics }
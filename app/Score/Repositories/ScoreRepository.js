const knex = require('../../../database/connection')

const getDataBySBD = async (data) => {
  return knex('score').where({ SBD: data.sbd }).select('sbd', 'cum_thi', 'toan', 'van', 'ngoai_ngu', 'li', 'hoa', 'sinh', 'KHTN', 'su', 'dia', 'GDCD', 'KHXH').first();
}

const getDataLocations = async () => {
  return knex('score').select('cum_thi').groupBy('cum_thi')
}

const getHighestScores = async (data) => {
  if (data.location == 'All') {
    const result = await knex.raw(`SELECT sbd, cum_thi, toan, van, ngoai_ngu, li, hoa, sinh, KHTN, su, dia, GDCD, KHXH FROM score ORDER BY cast(${data.subject} as DECIMAL(8,2)) DESC  limit 10`)
    return result[0];
    }
    const result = await knex.raw(`SELECT sbd, cum_thi, toan, van, ngoai_ngu, li, hoa, sinh, KHTN, su, dia, GDCD, KHXH FROM score WHERE cum_thi = '${data.location}' ORDER BY cast(${data.subject} as DECIMAL(8,2)) DESC  limit 10`)
  return result[0];
}

const scoreStatistics = async (data) => { 
  if (data.location == 'All') {
    return knex('score').count({ amount: `${data.subject}` }).groupBy(`${data.subject}`).select({ score: data.subject })
  }
  return knex('score').where({ cum_thi: data.location }).groupBy(`${data.subject}`).count({ amount: `${data.subject}` }).select({ score: data.subject })
}

module.exports = { getDataBySBD, getDataLocations, getHighestScores, scoreStatistics }
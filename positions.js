const getOF = (lineup) => lineup.filter(function (e) {
  return e.position === 'OF'
})

const getP = (lineup) => lineup.filter(function (e) {
  return e.position === 'P'
})

const getC = (lineup) => lineup.filter(function (e) {
  return e.position === 'C'
})

const get1B = (lineup) => lineup.filter(function (e) {
  return e.position === '1B'
})

const get2B = (lineup) => lineup.filter(function (e) {
  return e.position === '2B'
})

const get3B = (lineup) => lineup.filter(function (e) {
  return e.position === '3B'
})

const getSS = (lineup) => lineup.filter(function (e) {
  return e.position === 'SS'
})

module.exports = {
  getOF,
  getP,
  getC,
  get1B,
  get2B,
  get3B,
  getSS
}

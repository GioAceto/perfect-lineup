const totalSalary = (lineup) => {
  return lineup.reduce((total, player) => {
    return total + player.salary
  }, 0)
}

const validateSalary = (lineup) => totalSalary(lineup) < 45000

const getOF = lineup.filter(function (e) {
  return e.position === 'OF'
})

const getP = lineup.filter(function (e) {
  return e.position === 'P'
})

const getC = lineup.filter(function (e) {
  return e.position === 'C'
})

const get1B = lineup.filter(function (e) {
  return e.position === '1B'
})

const get2B = lineup.filter(function (e) {
  return e.position === '2B'
})

const get3B = lineup.filter(function (e) {
  return e.position === '3B'
})

const getSS = lineup.filter(function (e) {
  return e.position === 'SS'
})

const validatePositions = (lineup) => {
  return ((getOF.length === 3) &&
    (getP.length === 1) &&
    (getC.length === 1) &&
    (get1B.length === 1) &&
    (get2B.length === 1) &&
    (get3B.length === 1) &&
    (getSS.length === 1))
}



const validateLineup = (lineup) => {
  return validateSalary(lineup)
}



module.exports = validateLineup

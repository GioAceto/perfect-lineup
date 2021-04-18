const totalSalary = (lineup) => {
  return lineup.reduce((total, player) => {
    return total + player.salary
  }, 0)
}

const validateSalary = (lineup) => totalSalary(lineup) < 45000

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


const validateLineup = (lineup) => {
  if ((validateSalary(lineup) === true) &&
    (getOF(lineup).length === 3) &&
    (getP(lineup).length === 1) &&
    (getC(lineup).length === 1) &&
    (get1B(lineup).length === 1) &&
    (get2B(lineup).length === 1) &&
    (get3B(lineup).length === 1) &&
    (getSS(lineup).length === 1)) {
    return true
  }

  return false
}



module.exports = validateLineup

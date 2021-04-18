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



const validateLineup = (lineup) => {
  return validateSalary(lineup)
}



module.exports = validateLineup

const {
  getOF, getP, getC, get1B, get2B, get3B, getSS
} = require('./positions')
const validateTeamCount = require('./teams')
const validateSalary = require('./salaries')

const validateLineup = (lineup) => {
  if ((validateSalary(lineup) === true) &&
    (getOF(lineup).length === 3) &&
    (getP(lineup).length === 1) &&
    (getC(lineup).length === 1) &&
    (get1B(lineup).length === 1) &&
    (get2B(lineup).length === 1) &&
    (get3B(lineup).length === 1) &&
    (getSS(lineup).length === 1) &&
    (validateTeamCount(lineup) < 1)) {
    return true
  }

  return false
}



module.exports = validateLineup

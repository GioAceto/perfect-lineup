const {
  getOF, getP, getC, get1B, get2B, get3B, getSS
} = require('./positions')


const totalSalary = (lineup) => {
  return lineup.reduce((total, player) => {
    return total + player.salary
  }, 0)
}

const validateSalary = (lineup) => totalSalary(lineup) < 45000

const getTeamCount = (lineup) => {
  return lineup.map((player) => {
    return (player.teamId)
  })
}

const validateTeamCount = (lineup) => {
  let result = true

  let teamArr = getTeamCount(lineup)
  let arr1 = []
  let arr2 = []
  let arr3 = []

  for (let i = 0; i < teamArr.length; i++) {
    if (arr1.includes(!teamArr[i])) {
      arr1.push(teamArr[i])
    } else if (arr1.includes(teamArr[i]) && (arr3.includes(!teamArr[i]))) {
      arr2.push(teamArr[i])
    } else if (arr3.includes(teamArr[i])) {
      result = false
    }
  }

  return result
}


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

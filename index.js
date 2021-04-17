const totalSalary = (lineup) => {
  return lineup.reduce((total, player) => {
    return total + player.salary
  }, 0)
}

const validateSalary = (lineup) => totalSalary(lineup) < 45000

getPositionCounts = (lineup) => {
  return lineup.reduce((total, player) => {
    total[player.position] = total[player.position] === undefined ? 1 : total[player.position] + 1

    return total
  }, {})
}



const validateLineup = (lineup) => {
  return validateSalary(lineup)
}



module.exports = validateLineup

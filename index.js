const totalSalary = (lineup) => {
  return lineup.reduce((total, player) => {
    return total + player.salary
  }, 0)
}

const validateSalary = (lineup) => totalSalary(lineup) < 45000



const validateLineup = (lineup) => {
  return validateSalary(lineup)
}



module.exports = validateLineup
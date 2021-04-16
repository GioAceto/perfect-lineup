const validateLineup = (lineup) => {
  const sumsSalaries = lineup.reduce((total, player) => (total + player.salary), 0)

  if (sumsSalaries < 45000) {
    return true
  }

  return false
}

module.exports = validateLineup
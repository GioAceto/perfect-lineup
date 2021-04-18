const getTeamCount = (lineup) => {
  return lineup.map((player) => {
    return (player.teamId)
  })
}

const validateTeamCount = (lineup) => {
  let teamArr = getTeamCount(lineup)
  let empty = []
  let empty2 = []

  for (let i = 0; i < teamArr.length; i++) {
    if (empty.indexOf(teamArr[i]) === -1) {
      empty.push(teamArr[i])
    } else if (empty.indexOf(teamArr[i]) !== -1) {
      empty2.push(teamArr[i])
    }
  }

  return empty2.length
}

module.exports = {
  getTeamCount,
  validateTeamCount
}

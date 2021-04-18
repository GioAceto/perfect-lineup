const getTeamCount = (lineup) => {
  return lineup.map((player) => {
    return (player.teamId)
  })
}

const validateTeamCount = (lineup) => {
  let teamArr = getTeamCount(lineup)
  let empty = []
  let empty2 = []
  let empty3 = []

  for (let i = 0; i < teamArr.length; i++) {
    if (empty.indexOf(teamArr[i]) === -1) {
      empty.push(teamArr[i])
    } else if (empty.indexOf(teamArr[i]) !== -1) {
      empty2.push(teamArr[i])
    } else if (empty2.indexOf(teamArr[i]) !== -1) {
      empty3.push(teamArr[i])
    }
  }

  for (let i = 0; i < empty2.length; i++) {
    if (empty3.indexOf(teamArr[i]) === -1) {
      empty3.push(empty2[i])
      empty2.shift()
    }
  }

  return empty2.length
}

module.exports = validateTeamCount

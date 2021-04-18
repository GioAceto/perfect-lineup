const getGameCount = (lineup) => {
  return lineup.map((player) => {
    return (player.gameId)
  })
}

const validateGameCount = (lineup) => {
  let gameArr = getGameCount(lineup)
  let empty = []
  let empty2 = []
  let empty3 = []
  let empty4 = []

  for (let i = 0; i < gameArr.length; i++) {
    if (empty.indexOf(gameArr[i]) === -1) {
      empty.push(gameArr[i])
    } else if (empty.indexOf(gameArr[i]) !== -1) {
      empty2.push(gameArr[i])
    } else if (empty2.indexOf(gameArr[i]) !== -1) {
      empty3.push(gameArr[i])
    }
  }

  for (let i = 0; i < empty2.length; i++) {
    if (empty3.indexOf(gameArr[i]) === -1) {
      empty3.push(empty2[i])
      empty2.shift()
    }
  }

  return empty2.length
}

module.exports = validateGameCount
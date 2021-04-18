const validateGameCount = (lineup) => {
  let filteredGames = lineup.map(player => player.gameId)


  let uniqueGames = []

  for (let i = 0; i < filteredGames.length; i++) {
    const game = filteredGames[i]

    if (!uniqueGames.includes(game)) {
      uniqueGames.push(game)
    }
  }

  let numberOfUses = []

  for (let i = 0; i < uniqueGames.length; i++) {
    const gameId = uniqueGames[i]

    let numberOfOccurances = filteredGames.filter(game => game === gameId).length

    numberOfUses.push(numberOfOccurances)
  }

  if (Math.max(...numberOfUses) > 3) {
    return false
  } else {
    return true
  }
}


module.exports = validateGameCount

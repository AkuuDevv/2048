class Game {
  static status = {
    win: "win",
    lose: "lost",
    playing: "playing",
    idle: "idle"
  }

  constructor (initialState = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]) {
    this.status = Game.status.idle
    this.score = 0
    this.initialState = initialState
    this.state = initialState.map(row => [...row])
    }
    getStatus() {
      return this.status
    }
    getScore() {
      return this.score
    }
    getStatus() {
      return this.status
    }

    moveLeft() {
      if (this.getStatus() !== Game.status.playing)
        return;
      let canMove = false;

      const newState = this.state.map(row => {
        const filteredRow = row.filter(cell => cell !==0)
        const newRow = []
        for (let i = 0; i < filteredRow.length; i++)
        if (filteredRow[i] === filteredRow[i + 1]) {
          const mergedValue = filteredRow[i] * 2

          newRow.push(mergedValue)
          this.score += mergedValue
          i++;
          canMove = true;
        }
        else {
          newRow.push(filteredRow[i])
        }
        
        while (newRow.length < row.length) {
          newRow.push(0)
        }

        if (!canMove && !row.every((cell, index) => cell === newRow[index])) {
          canMove = true;
        }
        return newRow;
      })

      if (canMove) {
        this.state = newState
        // this.addCell()
        // this.setState()
        // this.checkStatus()
      }
      return canMove;
    }

    moveRight() {
      if (this.getStatus() !== Game.status.playing)
        return;
      let canMove = false;

      const newState = this.state.map(row => {
        const filteredRow = row.filter(cell => cell !==0)
        const newRow = []
        for (let i = filteredRow.length; i >= 0; i++)
        if (filteredRow[i] === filteredRow[i - 1]) {
          const mergedValue = filteredRow[i] * 2

          newRow.unshift(mergedValue)
          this.score += mergedValue
          i--;
          canMove = true;
        }
        else {
          newRow.unshift(filteredRow[i])
        }
        
        while (newRow.length < row.length) {
          newRow.unshift(0)
        }

        if (!canMove && !row.every((cell, index) => cell === newRow[index])) {
          canMove = true;
        }
        return newRow;
      })

      if (canMove) {
        this.state = newState
        // this.addCell()
        // this.setState()
        // this.checkStatus()
      }
      return canMove;
    }
}

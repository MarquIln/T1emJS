const fs = require('fs');

function executeCase(Characters, time) {
    const Direction = {
        RIGHT: 1,
        LEFT: 2,
        UP: 3,
        DOWN: 4
    }

    let actualLine = 0
    let actualColumn = 0
    let partialSum = ""
    let sum = 0
    let direction = Direction.RIGHT

    while (Characters[actualLine][actualColumn] !== "-") {
        actualLine ++
    }
    while (Characters[actualLine][actualColumn] !== "#") {
        switch (direction) {
            case Direction.RIGHT:
                if ((parseInt(Characters[actualLine][actualColumn]))) {
                    while ((parseInt(Characters[actualLine][actualColumn]))) {
                        partialSum += Characters[actualLine][actualColumn]
                        actualColumn++
                    }
                    sum += parseInt(partialSum)
                    partialSum = ""
                }
                if (Characters[actualLine][actualColumn] === "\\") {
                    direction = Direction.DOWN
                    actualLine ++
                } else if (Characters[actualLine][actualColumn] === "/") {
                    direction = Direction.UP
                    actualLine --
                } else actualColumn++
                break
            case Direction.LEFT:
                if ((parseInt(Characters[actualLine][actualColumn]))) {
                    while ((parseInt(Characters[actualLine][actualColumn]))) {
                        partialSum += Characters[actualLine][actualColumn]
                        actualColumn --
                    }
                    sum += parseInt(partialSum)
                    partialSum = ""
                }
                if (Characters[actualLine][actualColumn] === "\\") {
                    direction = Direction.UP
                    actualLine --
                } else if (Characters[actualLine][actualColumn] === "/") {
                    direction = Direction.DOWN
                    actualLine ++
                } else actualColumn --
                break
            case Direction.UP:
                if ((parseInt(Characters[actualLine][actualColumn]))) {
                    while ((parseInt(Characters[actualLine][actualColumn]))) {
                        partialSum += Characters[actualLine][actualColumn]
                        actualLine --
                    }
                    sum += parseInt(partialSum)
                    partialSum = ""
                }
                if (Characters[actualLine][actualColumn] === "\\") {
                    direction = Direction.LEFT
                    actualColumn --
                } else if (Characters[actualLine][actualColumn] === "/") {
                    direction = Direction.RIGHT
                    actualColumn++
                } else actualLine --
                break
            case Direction.DOWN :
                if ((parseInt(Characters[actualLine][actualColumn]))) {
                    while ((parseInt(Characters[actualLine][actualColumn]))) {
                        partialSum += Characters[actualLine][actualColumn]
                        actualLine ++
                    }
                    sum += parseInt(partialSum)
                    partialSum = ""
                }
                if (Characters[actualLine][actualColumn] === "\\") {
                    direction = Direction.RIGHT
                    actualColumn++
                } else if (Characters[actualLine][actualColumn] === "/") {
                    direction = Direction.LEFT
                    actualColumn --
                } else actualLine ++
                break
        }
    }
    console.log("Soma total = " + sum)
    console.log("Tempo de leitura do arquivo: " + time.toFixed(3))
}

function readFile(name, callback) {
    const startTime = process.hrtime()
    fs.readFile(name, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        const Characters = data.split('\n').map(line => line.split(''))
        const endTime = process.hrtime(startTime)
        const timeInSeconds = endTime[0] + endTime[1] / 100000000
        callback(Characters, timeInSeconds)
    })
}

readFile("labirinto50.txt", executeCase)
const fs = require('fs')

function readFile(name, callback) {
    const startTime = process.hrtime()

    fs.readFile(name, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        const lineCharacters = data.split('\n').map(line => line.split(''))
        const endTime = process.hrtime(startTime)
        const elapsedTime = endTime[0] * 1000 + endTime[1] / 1000000000

        callback(lineCharacters, elapsedTime)
    })
}

function executeCase(lineCharacters, elapsedTime) {
    let actualLine = 0
    let actualPosition = 0
    let partialSum = ""
    let sum = 0
    let direction = 1

    while (lineCharacters[actualLine][actualPosition] !== "-") {
        actualLine++
    }

    while (lineCharacters[actualLine][actualPosition] !== "#") {
        switch (direction) {
            case 1:
                if ((parseInt(lineCharacters[actualLine][actualPosition]))) {
                    while ((parseInt(lineCharacters[actualLine][actualPosition]))) {
                        partialSum += lineCharacters[actualLine][actualPosition]
                        actualPosition++
                    }
                    sum += parseInt(partialSum)
                    partialSum = ""
                }
                if (lineCharacters[actualLine][actualPosition] === "\\") {
                    direction = 4
                    actualLine++
                } else if (lineCharacters[actualLine][actualPosition] === "/") {
                    direction = 3
                    actualLine--
                } else {
                    actualPosition++
                }
                break
            case 2:
                if ((parseInt(lineCharacters[actualLine][actualPosition]))) {
                    while ((parseInt(lineCharacters[actualLine][actualPosition]))) {
                        partialSum += lineCharacters[actualLine][actualPosition]
                        actualPosition--
                    }
                    sum += parseInt(partialSum)
                    partialSum = ""
                }
                if (lineCharacters[actualLine][actualPosition] === "\\") {
                    direction = 3
                    actualLine--
                } else if (lineCharacters[actualLine][actualPosition] === "/") {
                    direction = 4
                    actualLine++
                } else {
                    actualPosition--
                }
                break
            case 3:
                if ((parseInt(lineCharacters[actualLine][actualPosition]))) {
                    while ((parseInt(lineCharacters[actualLine][actualPosition]))) {
                        partialSum += lineCharacters[actualLine][actualPosition]
                        actualLine--
                    }
                    sum += parseInt(partialSum)
                    partialSum = ""
                }
                if (lineCharacters[actualLine][actualPosition] === "\\") {
                    direction = 2
                    actualPosition--
                } else if (lineCharacters[actualLine][actualPosition] === "/") {
                    direction = 1
                    actualPosition++
                } else {
                    actualLine--
                }
                break
            case 4:
                if ((parseInt(lineCharacters[actualLine][actualPosition]))) {
                    while ((parseInt(lineCharacters[actualLine][actualPosition]))) {
                        partialSum += lineCharacters[actualLine][actualPosition]
                        actualLine++
                    }
                    sum += parseInt(partialSum)
                    partialSum = ""
                }
                if (lineCharacters[actualLine][actualPosition] === "\\") {
                    direction = 1
                    actualPosition++
                } else if (lineCharacters[actualLine][actualPosition] === "/") {
                    direction = 2
                    actualPosition--
                } else {
                    actualLine++
                }
                break
        }
    }
    console.log("Sum total = " + sum)
    console.log("Tempo de leitura do arquivo: " + elapsedTime.toFixed(2) + " segundos")
}

readFile("labirinto2000.txt", executeCase)

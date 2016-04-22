function printLcdString(number) {

    var characters = buildCharacters(number);
    var allDigitsLcdStrings = loadAllDigitsLcdStrings();
    var lcdDigits = buildLcdDigits(characters, allDigitsLcdStrings);

    var lcdString = generateLcdString(lcdDigits);
    console.log(lcdString);
}

function buildCharacters(number) {

    return number.split('');
}

function findLcdStrings(characters, allDigitsLcdStrings) {

    for (var i = 0; i < characters.length; i++) {
        for (var k = 0; k < allDigitsLcdStrings.length; k++) {
            if (allDigitsLcdStrings[k].digit === characters[i])
                return allDigitsLcdStrings[k].lcdStrings;
        }
    }
}

function buildLcdDigits(characters, allDigitsLcdStrings) {

    var lcdDigits = [];

    characters.forEach(function (character) {
        var lcdStrings = findLcdStrings(character, allDigitsLcdStrings);
        lcdDigits.push({
            firstString: lcdStrings[0],
            secondString: lcdStrings[1],
            thirdString: lcdStrings[2]
        });
    });

    return lcdDigits;
}

function generateLcdString(lcdDigits) {

    return generateFirstLineLcdString(lcdDigits) +
        generateSecondLineLcdString(lcdDigits) +
        generateThirdLineLcdString(lcdDigits);
}

function generateFirstLineLcdString(lcdDigits) {

    var firstLineLcdString = '';
    for (var i = 0; i < lcdDigits.length; i++) {
        firstLineLcdString += lcdDigits[i].firstString;
        if (i < lcdDigits.length - 1)
            firstLineLcdString += ' ';
    }

    return firstLineLcdString;
}

function generateSecondLineLcdString(lcdDigits) {

    var secondLineLcdString = '\n';
    for (var i = 0; i < lcdDigits.length; i++) {
        secondLineLcdString += lcdDigits[i].secondString;
        if (i < lcdDigits.length - 1)
            secondLineLcdString += ' ';
    }

    return secondLineLcdString;
}

function generateThirdLineLcdString(lcdDigits) {

    var thirdLineLcdString = '\n';
    for (var i = 0; i < lcdDigits.length; i++) {
        thirdLineLcdString += lcdDigits[i].thirdString;
        if (i < lcdDigits.length - 1)
            thirdLineLcdString += ' ';
    }

    return thirdLineLcdString;
}

function loadAllDigitsLcdStrings() {
    return [
        {
            digit: '0',
            lcdStrings: ['._.', '|.|', '|_|']
        },
        {
            digit: '1',
            lcdStrings: ['...', '..|', '..|']
        },
        {
            digit: '2',
            lcdStrings: ['._.', '._|', '|_.']
        },
        {
            digit: '3',
            lcdStrings: ['._.', '._|', '._|']
        },
        {
            digit: '4',
            lcdStrings: ['...', '|_|', '..|']
        },
        {
            digit: '5',
            lcdStrings: ['._.', '|_.', '._|']
        },
        {
            digit: '6',
            lcdStrings: ['._.', '|_.', '|_|']
        },
        {
            digit: '7',
            lcdStrings: ['._.', '..|', '..|']
        },
        {
            digit: '8',
            lcdStrings: ['._.', '|_|', '|_|']
        },
        {
            digit: '9',
            lcdStrings: ['._.', '|_|', '..|']
        }
    ];
}
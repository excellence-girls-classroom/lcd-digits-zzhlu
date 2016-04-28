describe('Unit Testing', function () {
    var number = 1234;
        
    it('should print correct character array', function () {
        var characters = buildCharacters(number);
        var expectCharacters = ['1', '2', '3', '4'];

        expect(characters).toEqual(expectCharacters);
    });

    it('should print correct lcdDigits', function () {
        var lcdDigits = buildLcdDigits(['1', '2', '3', '4'], loadAllDigitsLcdStrings());
        
        var expectLcdDigits =
            [
                ['...', '..|', '..|'],
                ['._.', '._|', '|_.'],
                ['._.', '._|', '._|'],
                ['...', '|_|', '..|']
            ];

        expect(lcdDigits).toEqual(expectLcdDigits);
    });
});

describe('Integration Testing', function () {
    var number = 12;

    it('should print correct lcd string', function() {

        spyOn(console, 'log');

        printLcdString(number);

        var expectLcdString =
            '...' + ' ' + '._.\n' +
            '..|' + ' ' + '._|\n' +
            '..|' + ' ' + '|_.';

        expect(console.log).toHaveBeenCalledWith(expectLcdString);
    });
});
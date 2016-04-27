describe('Unit Test', function () {
    var number;
    var allDigitsLcdStrings;

    beforeEach(function () {
        number = '910';
        allDigitsLcdStrings = loadAllDigitsLcdStrings();
    });
    
    describe('divide number to character array', function () {
        
        it('should print correct character array', function () {
            
            expect(buildCharacters(number)).toEqual(['9', '1', '0']);
        });
    });
    
    describe('build a array of called lcdDigits', function () {

        it('should print correct lcdDigits', function () {
            var expectLcdDigits =
                [
                    ['._.', '|_|', '..|'],
                    ['...', '..|', '..|'],
                    ['._.', '|.|', '|_|']
                ];

            expect(buildLcdDigits(['9', '1', '0'], allDigitsLcdStrings)).toEqual(expectLcdDigits);
        });
    });

    describe('generate lcd string', function () {

        it('should print correct lcd string', function() {

            spyOn(console, 'log');

            printLcdString(number);

            var expectLcdString =
                '._.'+ ' ' + '...' + ' ' + '._.\n' +
                '|_|' + ' ' + '..|' + ' ' + '|.|\n' +
                '..|' + ' ' + '..|' + ' ' + '|_|';

            expect(console.log).toHaveBeenCalledWith(expectLcdString);
        });
    });
});
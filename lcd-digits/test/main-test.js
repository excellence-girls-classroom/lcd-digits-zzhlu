describe('Unit Testing', function () {
    var number = 123;
    
    describe('buildSplitNumbers', function () {
        
        it('should print correct splitNumbers', function () {
            var splitNumbers = buildSplitNumbers(number);
            var expectSplitNumbers = ['1', '2', '3'];

            expect(splitNumbers).toEqual(expectSplitNumbers);
        });
    });
    
    describe('buildLcdDigits', function () {

        it('one number', function () {
            var lcdDigits = buildLcdDigits(['1'], loadAllDigitsLcdStrings());
            var expectLcdDigits = [['...', '..|', '..|']];

            expect(lcdDigits).toEqual(expectLcdDigits);
        });

        it('two numbers', function () {
            var lcdDigits = buildLcdDigits(['1', '3'], loadAllDigitsLcdStrings());
            var expectLcdDigits =
                [['...', '..|', '..|'], ['._.', '._|', '._|']];

            expect(lcdDigits).toEqual(expectLcdDigits);
        });
        
        it('three numbers', function () {
            var lcdDigits = buildLcdDigits(['1', '2', '3'], loadAllDigitsLcdStrings());
            var expectLcdDigits = [['...', '..|', '..|'], ['._.', '._|', '|_.'], ['._.', '._|', '._|']];

            expect(lcdDigits).toEqual(expectLcdDigits);
        });
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
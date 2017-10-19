export function romanToArabic(romanNumber) {
    // just in case ;) (pun intended)
    romanNumber = romanNumber.toUpperCase();

    var values = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
    var arabic = 0;
    arabic += values[romanNumber[0]];
    for (var i = 1; i < romanNumber.length; i++) {
        // Check if characters are valid roman numeral
        if (!(romanNumber[i] in values) || !(romanNumber[i-1] in values)) {
            return NaN;
        }
        let lastValue = values[romanNumber[i-1]];
        let currentValue = values[romanNumber[i]];
        if (lastValue < currentValue) {
            arabic += currentValue - 2 * lastValue;
        } else {
            arabic += currentValue;
        }
    }
    return arabic;
}

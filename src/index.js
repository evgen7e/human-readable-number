module.exports = function toReadable (number) {
    const dict = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    }

    if (number < 20) {
        return dict[number];
    } else {
        let numArr = number.toString().split('');
        if (numArr.length == 2) {
            return dict[Number(numArr[0]) * 10] + (Number(numArr[1]) != 0 ? ' ' + dict[Number(numArr[1])] : '');
        } else if (numArr.length == 3) {
            let secNumb = Number(numArr[1] + numArr[2]);
            if (secNumb > 0 && secNumb < 20) {
                return dict[Number(numArr[0])] + ' ' + dict[100] + ' ' + dict[secNumb];
            } else {
                return dict[Number(numArr[0])] + ' ' + dict[100] + (Number(numArr[1]) != 0 ? ' ' + dict[Number(numArr[1]) * 10] : '') + (Number(numArr[2]) != 0 ? ' ' + dict[Number(numArr[2])] : '');
            }
        } else {
            return 'Numbers greater than 999 are not supported';
        }
    }
}
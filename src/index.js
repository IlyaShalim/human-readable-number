module.exports = function toReadable (number) {
    let result = '';
    let masofnumber = String(number).split('').reverse();
    for (let i = 0; i< masofnumber.length; i++)
    {
        masofnumber[i] = masofnumber[i] * 10 ** i
        
    }
    masofnumber.reverse()
    const nums = {
        0: '',
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred",
        200: "two hundred",
        300: "three hundred",
        400: "four hundred",
        500: "five hundred",
        600: "six hundred",
        700: "seven hundred",
        800: "eight hundred",
        900: "nine hundred"
        
    }
    
    for (let i = 0; i < masofnumber.length; i++)
    {
        if (masofnumber[i] == 10  && i < masofnumber.length - 1){
            result += ` ${nums[String (masofnumber[i] + masofnumber[i + 1])]}`
            break;
            
        }
        result = result.trim()  + ` ${nums[masofnumber[i]]}`
    }
    
    
    return !(result == ' ') ? result.trim() : 'zero'
}

def intToRoman(num):
    val_to_symbol = [
        (1000, 'M'),
        (900, 'CM'),
        (500, 'D'),
        (400, 'CD'),
        (100, 'C'),
        (90, 'XC'),
        (50, 'L'),
        (40, 'XL'),
        (10, 'X'),
        (9, 'IX'),
        (5, 'V'),
        (4, 'IV'),
        (1, 'I')
    ]

    result = ""

    for value, symbol in val_to_symbol:
        while num >= value:
            result += symbol
            num -= value

    return result

print(intToRoman(3))    # Output: "III"
print(intToRoman(4))    # Output: "IV"
print(intToRoman(9))    # Output: "IX"
print(intToRoman(58))   # Output: "LVIII"
print(intToRoman(1994)) # Output: "MCMXCIV"
print(intToRoman(3999)) # Output: "MMMCMXCIX"


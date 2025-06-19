def roman(s):
    roman_numerals = {
        'I': 1,
        'V': 5, 
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    total = 0
    n = len(s)

    for ch in range(n):
        curr = roman_numerals[s[ch]]

        if ch + 1 < n and roman_numerals[s[ch + 1]] > curr:
            total -= curr
        else:
            total += curr

    return total 

print(roman("III"))  # Output: 3
print(roman("IV"))   # Output: 4
print(roman("IX"))   # Output: 9
print(roman("LVIII"))  # Output: 58
print(roman("MCMXCIV"))  # Output: 1994
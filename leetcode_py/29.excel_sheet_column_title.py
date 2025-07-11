def convertToTitle(columnNumber: int) -> str:
    result = ''

    while columnNumber > 0:
        columnNumber -= 1
        remainder = columnNumber % 26
        result = chr(65 + remainder) + result
        columnNumber //= 26
    
    return result

print(convertToTitle(1))  # Output: "A"
print(convertToTitle(28)) # Output: "AB"
print(convertToTitle(701)) # Output: "ZY"
print(convertToTitle(702)) # Output: "ZZ"
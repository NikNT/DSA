def isHappy(n: int) -> bool:
    seen = set()

    while n != 1:
        if n in seen:
            return False
        seen.add(n)

        n = sum(int(digit) ** 2 for digit in str(n))
    return True

print(isHappy(19))  # Output: True
print(isHappy(2))   # Output: False
print(isHappy(1))   # Output: True          
print(isHappy(7))   # Output: True

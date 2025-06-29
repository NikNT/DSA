def isPalindrome(s: str) -> bool:
    filter_chars = [c for c in s.lower() if c.isalnum()]
    return filter_chars == filter_chars[::-1]

print(isPalindrome("A man, a plan, a canal: Panama"))  # True
print(isPalindrome  ("race a car"))  # False
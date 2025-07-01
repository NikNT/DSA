def canConstruct(ransomNote, magazine):
    magazine_char_count = {}
    for char in magazine:
        if char in magazine_char_count:
            magazine_char_count[char] += 1
        else:
            magazine_char_count[char] = 1
    
    for char in ransomNote:
        if char in magazine_char_count and magazine_char_count[char] > 0:
            magazine_char_count[char] -= 1
        else:
            return False

    return True

print(canConstruct("a", "b"))  # Output: False
print(canConstruct("aa", "ab"))  # Output: False
print(canConstruct("aa", "aab"))  # Output: True
print(canConstruct("a", "a"))  # Output: True
print(canConstruct("a", "aa"))  # Output: True
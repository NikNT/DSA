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

def can_construct_counter(ransomeNote, magazine):
    from collections import Counter

    magazine_count = Counter(magazine)
    for char in ransomeNote:
        if magazine_count[char] <=0 :
            return False
        magazine_count[char] -= 1
    return True

print(can_construct_counter("a", "b"))  # Output: False
print(can_construct_counter("aa", "ab"))  # Output: False            
print(can_construct_counter("aa", "aab"))  # Output: True            
print(can_construct_counter("a", "a"))  # Output: True
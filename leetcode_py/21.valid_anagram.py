def isAnagram(s: str, t:str) -> bool:
    if len(s) != len(t):
        return False
    
    count = {}

    for char in s:
        count[char] = count.get(char, 0) + 1

    for char in t:
        if char not in count or count[char] == 0:
            return False
        count[char] -= 1
    
    return all(value == 0 for value in count.values())

# Example usage:
print(isAnagram("anagram", "nagaram"))  # Output: True
print(isAnagram("rat", "car"))          # Output: False
print(isAnagram("a", "ab"))              # Output: False
print(isAnagram("listen", "silent"))     # Output: True
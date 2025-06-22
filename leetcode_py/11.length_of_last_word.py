def lengthOfLastWord(s):
    return len(s.strip().split()[-1])

print(lengthOfLastWord("Hello World"))  # Output: 5
print(lengthOfLastWord("   "))          # Output: 0
print(lengthOfLastWord("a"))            # Output: 1
print(lengthOfLastWord("a "))           # Output: 1
print(lengthOfLastWord("a b c d e f g"))  # Output:
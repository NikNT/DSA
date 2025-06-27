def reverseWords(s):
    s = s.strip().split()[::-1]
    return ' '.join(s)

print(reverseWords('the sky is blue'))  # Output: 'blue is sky the'
print(reverseWords('  hello world  '))  # Output: 'world! hello
print(reverseWords('a good   example'))  # Output: 'example good a'
print(reverseWords('  Bob    Loves  Alice   '))  # Output: 'Alice
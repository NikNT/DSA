def isSubsequence(s, t):
    i, j = 0, 0 
    while i < len(s) and j < len(t):
      if s[i] == t[j]:
        i += 1
      j += 1
    
    return i == len(s)

print(isSubsequence("", "ahbgdc"))  # True
print(isSubsequence("abc", "ahbgdc"))  # True
print(isSubsequence("axc", "ahbgdc"))  # False
print(isSubsequence("ace", "abcde"))  # True
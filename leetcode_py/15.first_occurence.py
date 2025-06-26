def strStr(haystack, needle):
    for ch in range(len(haystack) - len(needle)+1):
        if haystack[ch:ch+len(needle)] == needle:
            return ch    
    return -1

print(strStr("hello", "ll"))  # Output: 2
print(strStr("aaaaa", "bba"))  # Output: -1
print(strStr("", ""))  # Output: 0
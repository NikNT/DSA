def longestCommonPrefix(strs):
    if not strs:
        return ""
    
    prefix = strs[0]

    for s in strs[1:]:
        while s[:len(prefix)] != prefix and prefix:
            prefix = prefix[:-1]
    
    return prefix

# Example usage:
print(longestCommonPrefix(["flower", "flow", "flight"]))  # Output: "fl"
print(longestCommonPrefix(["dog", "racecar", "car"]))      # Output: ""
print(longestCommonPrefix([]))                               # Output: ""
print(longestCommonPrefix(["a"]))                             # Output: "a"
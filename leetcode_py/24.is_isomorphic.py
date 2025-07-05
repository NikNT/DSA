def isIsomorphic(s: str, t:str) -> bool:

    map_s_to_t = {}
    map_t_to_s = {}
    
    for char_s, char_t in zip(s,t):
        if char_s in map_s_to_t:
            if map_s_to_t[char_s] != char_t:
                return False
        else:
            map_s_to_t[char_s] = char_t

        if char_t in map_t_to_s:
            if map_t_to_s[char_t] != char_s:
                return False
        else:
            map_t_to_s[char_t] = char_s

    return True

print(isIsomorphic("egg", "add"))  # Output: True
print(isIsomorphic("foo", "bar"))  # Output: False
print(isIsomorphic("paper", "title"))  # Output: True
print(isIsomorphic("ab", "aa"))  # Output: False
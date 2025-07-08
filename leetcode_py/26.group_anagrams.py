def groupAnagrams(strs):
    from collections import defaultdict
    anagrams = defaultdict(list)

    for word in strs:
        key = ''.join(sorted(word))
        anagrams[key].append(word)
    
    return list(anagrams.values())

print(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

def groupAnagrams2(strs):
    anagrams = {}

    for word in strs:
        key = ''.join(sorted(word))
        if key in anagrams:
            anagrams[key].append(word)
        else:
            anagrams[key] = [word]

    return list(anagrams.values())

print(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]))
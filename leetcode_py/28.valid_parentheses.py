def isValid(s):
    pairs = {
        '(' : ')', 
        '{' : '}', 
        '[' : ']',
    }
    stack = []
    
    for char in s:
        if char in pairs:  # opening bracket
            stack.append(char)
        elif char in pairs.values():  # closing bracket
            if not stack or pairs[stack.pop()] != char:
                return False
        else:
            return False  # invalid character
    
    return len(stack) == 0

print(isValid("()"))  # True
print(isValid("()[]{}"))  # True        
print(isValid("(]"))  # False



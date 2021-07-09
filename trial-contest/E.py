def make_dict(string):
    new_dict = {}

    for c in string:
        if (not c in new_dict):
            new_dict[c] = 0
        
        new_dict[c] += 1
    
    return new_dict

str1 = input()
dict1 = make_dict(str1)

str2 = input()
dict2 = make_dict(str2)

if dict1 == dict2:
    print(1)
else:
    print(0)

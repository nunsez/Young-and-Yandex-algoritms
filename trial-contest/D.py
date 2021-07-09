def generate(curr, opened, closed, n):
    if len(curr) == 2 * n:
        print(curr)
        return
    
    if opened < n:
        generate(f'{curr}(', opened + 1, closed, n)
    
    if closed < opened:
        generate(f'{curr})', opened, closed + 1, n)

n = int(input())

generate('', 0, 0, n)

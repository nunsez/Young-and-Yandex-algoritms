n = int(input())
prev = None

for _ in range(n):
    k = input()

    if k != prev:
        print(k)
        prev = k

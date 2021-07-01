n, k = map(int, input().split())
numbers = list(map(int, input().split()))

prefix_sum = [0] * (n + 1)

for i in range(1, n + 1):
    prefix_sum[i] = prefix_sum[i - 1] + numbers[i - 1]

counter = 0
length = len(prefix_sum)

for i in range(length - 1):
    current = prefix_sum[i]
    pointer = i + 1

    while pointer < length:
        diff = prefix_sum[pointer] - current

        if diff > k:
            break
        
        if diff == k:
            counter += 1
        
        pointer += 1

print(counter)

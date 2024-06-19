def byte(arr):
    if len(arr) > 8:
        return 255
    else:
        return int(''.join(['1' if b else '0' for b in arr]), 2)

def bits(num):
    if not (0 <= num <= 255):
        return [1, 1, 1, 1, 1, 1, 1, 1]
    else:
        return [int(b) for b in format(num, '08b')]

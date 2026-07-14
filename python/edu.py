# comprehension
'''gro = int(input())
total = sum(int(a) * int(b) for _ in range(int(input())) for a, b in [input().split()])
print('Yes' if total == gro else 'No')'''

# map
'''import sys
input = sys.stdin.readline

for i in range(int(input())):
    n1, n2 = map(int, input().split())
    print(n1+n2)'''

# 리스트 index와 value동시에 반환(enumerate)
'''import sys
input = sys.stdin.readline

li = [0] * 30
for i in range(28):
    num = int(input())
    li[num-1] = 1
print(*[i+1 for i, v in enumerate(li) if v == 0])'''

# 세트 컴프리헨션
'''import sys
input = sys.stdin.readline

print(len({int(input()) % 42 for _ in range(10)}))'''

# 리스트 문자열 연결 변환
'''import sys
input = sys.stdin.readline

num = int(input())
for _ in range(num):
    rep, word = map(str, input().split())
    print(''.join([i * int(rep) for i in word]))'''

# 딕셔너리 컴프리헨션
'''import sys
input = sys.stdin.readline

dial = {'ABC':2, 'DEF':3, 'GHI':4, 'JKL':5, 'MNO':6, 'PQRS':7, 'TUV':8,'WXYZ':9}
dnum = {c : j for i, j in dial.items() for c in i}

tel = input().strip()
print(sum(dnum[k] for k in tel) + len(tel))'''

# 문자열 카운터 
'''import sys
from collections import Counter

word = sys.stdin.readline().strip().upper()
ms = Counter(word).most_common(2)

print('?' if len(ms) >= 2 and ms[0][1] == ms[1][1] else ms[0][0])'''

# 문자열 카운터2
'''import sys
from collections import Counter
input = sys.stdin.readline

mm = 0
for i in range(int(input())):
    dice = list(map(int, input().split()))
    mx = Counter(dice).most_common()

    if mx[0][1] == 3:
        mm = max(mx[0][0]*1000+10000, mm)
    elif mx[0][1] == 2:
        mm = max(mx[0][0]*100+1000, mm)
    else:
        mm = max(max(dice)*100, mm)
print(mm)'''

# 문자열 내 문자열 추출
'''import sys
input = open(0).readline

croa = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
word = input().strip()

for i in croa:
    word = word.replace(i, '.')

print(len([word.replace(i, '.') for i in croa][-1]))'''

# 문자열 내 문자열 추출(re)
'''import sys, re
input = sys.stdin.readline

word = input().strip()
print(len(re.sub('dz=|c=|c-|d-|lj|nj|s=|z=', '*', word)))'''

# 10진수 n진법 변환(1~36)
'''import sys
input = sys.stdin.readline

def conv(n, bi):
    lst = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if n == 0:
        return '0'
    if bi == 1:
        return '1'*n
    if bi == 0:
        return 'NULL'

    res = ''

    while n:
        res = lst[n % bi] + res
        n //= bi

    return res

num, base = map(int, input().split())

print(conv(num, base))'''

# 소수 구하기
'''import sys
input = sys.stdin.readline

num = int(input())
def prime(n):
    lst = [True] * (num+1)
    lst[0] = lst[1] = False

    for i in range(2, int(n ** 0.5) + 1):
        if lst[i]:
            for j in range(i * i, n + 1, i):
                lst[j] = False
    
    return [i for i in range(2, num+1) if lst[i]]

lst = iter(prime(num))
i = next(lst)

while num > 1:
    if num % i == 0:
        print(i)
        num /= i
    else:
        i = next(lst)'''

# 소수 개수 구하기
'''import sys
input = sys.stdin.readline

num = int(input())
prime = [True] * (num+1)
prime[0] = prime[1] = False

for i in range(2, int(num ** 0.5) + 1):
    if prime[i] == True:
        prime[i*i::i] = [False] * len(prime[i*i::i])

prime(*prime)
print(sum(prime))'''

# 최소 공배수
'''import sys
input = sys.stdin.readline

cnt = 1
for i in range(int(input())):
    n1, n2 = map(int, input().split())

    print(n1 * n2 // max([1, *[j for j in range(2, min(n1, n2)+1) if n1 % j == 0 and n2 % j == 0]]))'''



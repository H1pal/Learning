# import asyncio
# class temprary:
#     async def cooltime(self, parameter = 1):
        
#         print('쿨타임 기다리는 중...')
#         print('3초간 쿨타임...')
#         await asyncio.sleep(3)
    
#     async def movement(self):
#         print('움직이는 중')

    
# t1 = temprary()
# async def main():
#     await asyncio.gather(
#         t1.cooltime(),
#         t1.movement()
#     )

# try:
#     asyncio.run(main())
# except KeyboardInterrupt:
#     pass


# import numpy as np
# data = [1, 2, 3, 4, 5]
# arr = np.array(data)

# data[:] = [7, 8, 9]
# print(data)


# import base64
# text = "안녕하세요"
# text_bytes = text.encode("utf-8")
# encoded_bytes = base64.b64encode(text_bytes)
# encoded_str = encoded_bytes.decode("utf-8")
# print(f"인코딩 결과: {encoded_str}")


# add = 'Hello World'

# def func(a, b):
#   # global add
#   add = 'no hello world'
#   print('sysfunc')
#   return add

# def anotherfunc(a, b):
#   # global add
#   return add

# print(func(1, 2))
# print(add)

# print(anotherfunc(1, 2))

# lst = ['python', 'java', 'javascript', 'c++']
# word = 'hello python'
# print('7' * 3)

# print(word.find('front'))
# # print(word.index('front'))

# print(2 ** 3 ** 2)
# print(bool([]) )
# print([i for i in range(5, -2, -2)])

# lst.pop(2)
# print(lst)



# def factorial(n):
#   if n <= 1:
#     return n
#   return n * factorial(n - 1)

# def fibo(n):
#   if n <= 2:
#     return 1
#   return fibo(n - 1) + fibo(n - 2)

# print(factorial(2))
# print(fibo(5))


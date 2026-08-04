#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

int main()
{
    int digit, i, j, strike = 0, ball = 0, len, k, cnt;
    char num[11], answer[11] = {'\0'};

    while (1)
    {
        printf("자릿 수 입력:");
        scanf("%d", &digit);
        if (digit >= 1 || digit <= 10)
        {
            break;
        }
        else
        {
            printf("자릿 수 입력이 잘못되었습니다.");
        }
    }

    srand(time(NULL));

    for (i = 0; i < digit; i++)
    {
        answer[i] = (rand() % 10) + '0';

        for (j = 0; j < i; j++)
        {
            if (answer[j] == answer[i])
            {
                i--;
                break;
            }
        }
    }

    for (i = 0; i < 10; i++)
    {
        printf("숫자 입력:");
        scanf("%s", num);

        if (strcmp(num, answer) == 0)
        {
            cnt++;
            break;
        }

        len = strlen(num);
        if (len == digit)
        {
            for (j = 0; j < digit; j++)
            {
                if (num[j] == answer[j])
                {
                    strike++;
                }
                else
                {
                    for (k = 0; k < digit; k++)
                    {
                        if (num[j] == answer[k])
                        {
                            ball++;
                        }
                    }
                }
            }
            printf("%d 스트라이크\n%d 볼\n\n", strike, ball);
        }

        else
        {
            printf("입력이 잘못되었습니다.\n");
            i--;
        }
        strike = 0;
        ball = 0;
    }

    if (cnt)
    {
        printf("%d 스트라이크! 시도 횟수: %d", digit, i + 1);
    }
    else
    {
        printf("시도 횟수 초과 | 정답 : %s", answer);
    }

    return 0;
}
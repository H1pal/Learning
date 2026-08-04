#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

int arr[5][5];

void printer();

int main()
{
    int num = 0, mine, digi, digj, minea, cnt = 0;

    scanf("%d %d", &digi, &digj);

    srand(time(NULL));

    minea = rand() % 2 + 6;
    printf("%d ", minea);
    for (int k = 0; k < minea; k++)
    {
        mine = rand() % 100 / 4;
        for (int i = 0; i < 5; i++)
        {
            for (int j = 0; j < 5; j++)
            {
                if (num == mine)
                {
                    if (digi == i && digj == j)
                    {
                        cnt++;
                        break;
                    }
                    else
                    {
                        arr[i][j] = -1;
                        break;
                    }
                }

                num++;
            }
            if (cnt > 0)
            {
                k--;
                cnt = 0;
                break;
            }

            printf("%d\n", mine);
        }
        num = 1;
    }

    printer();

    return 0;
}

void printer()
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            printf("%-3d", arr[i][j]);
        }
        printf("\n");
    }
}

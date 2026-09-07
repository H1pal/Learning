#include <stdio.h>
#include <string.h>

int main() {
    char temp[10];
    int cnt = 0;

    while (1) {
        scanf("%s", temp);
        
        if (strcmp(temp, "int") == 0) {
            break;
        }

        cnt++;
    }

    printf("%d", cnt*4);

    return 0;
}


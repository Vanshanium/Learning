#include <stdio.h>

int main(){

    int a = 40, b = 20, c = 30;

    if (a < b)
    {

        if (b < c)
            printf("C is the biggest %d \n",c);

        else
            printf("B is the biggest number %d \n",b);
    }
    else
    {

        if (a < c)
            printf("C is the biggest %d \n",c);            
        else
            printf("A is the biggest %d \n",a);

    }

}
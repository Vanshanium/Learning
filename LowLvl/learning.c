#include<stdio.h>

void fib(int arr_len){
    
    int fib_arr[arr_len];

    fib_arr[0] = 0;
    fib_arr[1] = 1;

    for (size_t i = 2; i < arr_len; i++)
    {

        fib_arr[i] = fib_arr[i-1] + fib_arr[i-2];

    }

    printf("The fibonacci sequence for %d digts is \n \n",arr_len);


    for (size_t i = 0; i < arr_len; i++)
    {

        printf("%d  ",fib_arr[i]);

    }

    printf("\n\n");

}

int main(){

    int len, a = 0, b = 1, c;

    printf("Number of Digits you want in the sequence ");
    scanf("%d",&len);

    printf("\nThe sequence is \n\n\n %d %d ",a,b);

    for (size_t i = 0; i < len-2; i++)
    {
        c = a+b;
        printf("%d ",c);
        a = b;
        b = c;

    }
    
    printf("\n\n\n");

}
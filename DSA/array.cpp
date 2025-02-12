#include <iostream>

// https://www.btubikaner.com/mca.html#google_vignette

using namespace std;

template<typename type>
void print(type input){

    cout << input;

}

void quick_search(int array[], int upper, int lower){

    int a = -1;
    int pivot;
    int temp;

    for (size_t i = lower; i < upper; i++)
    {
        
        if (array[i] < array[upper])
        {

            a += 1;

            //Swap
            temp = array[a];
            array[a] = array[i];
            array[i] = temp;
            

        }


    }

    pivot = a+1;


    temp = array[upper];
    array[upper] = array[pivot];
    array[pivot] = temp;

    quick_search(array,pivot-1,lower);
    quick_search(array,upper,pivot+1);


}


void binary_search(int arr[], int tar){

    int upper_bound = 7;

    int lower_bound = 0;
    int middle;

    if (arr[upper_bound] == tar)
    {
        cout<<"Yah Allah We got the answer!!"<<endl;
    }
    else if (arr[lower_bound] == tar)
    {
        cout<<"Yah Allah We got the answer!!"<<endl;
    }
    else{

        while (upper_bound - lower_bound != 1)
        {

            middle = (upper_bound + lower_bound)/2;

            if (arr[middle] == tar)
            {
                cout<<"Yah Allah We got the answer!!"<<endl;
                return;
            }
            if(arr[middle] < tar)
            {

                lower_bound = middle;
            }
            else{

                upper_bound = middle;
            }
            
        }

        cout << "The element is not in the array!!"<<endl;

    }
    
}

void binary_recur(int arr[], int tar, int upper, int lower){

    if (arr[(upper+lower)/2] == tar)
    {
        cout  << "Yeah!!!" << endl;
    }
    if (arr[(upper+lower)/2] < tar)
    {

        lower = (upper+lower)/2;
    }
    else
    {
        upper = (upper+lower)/2;
    }

    if (upper - lower != 1)
    {
        binary_recur(arr,tar,upper,lower);
    }
    
}

void linear_search(int array[],int tar, int len){
    
    for (int i = 0; i < len; i++)
    {

        if (array[i] == tar)
        {
            cout << "Yeahhh we found it!!!" << endl;            
            return;
        }

    }

    cout << "Shit....." << endl;            

}

int main(){

    int array[8] = {1,3,5,7,9,11,13,14}; // This is a 1-D Array.

    /*
    Array is just a pointer to the first element and then [] does the dereffrencing.
    */

    print(*(array+1)); 
    print("\n");


    /*
        Multi Dimensional array
        it takes in rows and columns
            It is just nested arrays rows are the number of elements and 
            column are no. of element in them.

    */ 

    int mat[4][3] = {
        {1,2,3},
        {3,6,7},
        {6,7,8},
        {9,10,11}
    };

    for (size_t i = 0; i < 4; i++)
    {

        for (size_t j = 0; j < 3; j++)
        {
            print(&mat[i][j]);
            print("     ");
        }
        
        print("\n");

    }
    
    
    print("\n\n\n\n\n\n");
    
    
    int arr[] = {7, 2, 1, 6, 8, 5, 3, 4};
    int n = sizeof(arr) / sizeof(arr[0]);

    quick_search(arr, 0, n - 1);


    cout << "Sorted array: ";

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout << endl;


    // binary_search(array,13);

    // binary_recur(array,12,7,0);

    // linear_search(array,11);

}
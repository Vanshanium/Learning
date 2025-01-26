#include <iostream>

using namespace std;

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


int main(){

    int array[10] = {1,3,5,7,9,11,13,14};

    // binary_search(array,13);

    binary_recur(array,12,7,0);

}
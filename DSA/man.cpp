#include<iostream>
#include <unistd.h>  // For sleep function (Linux/macOS)

using namespace std;

class imaginary
{
private:
    int real;
    int imag;

public:
    
    imaginary(int a, int b){

        real = a;
        imag = b;

    };
    
    void display(){

        cout << real << " + " << imag << "i" << endl;
    }


    imaginary operator+(imaginary other){

        return imaginary(real + other.real,imag+other.imag); 

    };


    ~imaginary(){

        cout << "The number is deleted";
        display();
        
    };


};


int main(){

    imaginary num1(8,10);
    imaginary num2(13,9);

    imaginary num3 = num1 + num2;

    num3.display();


}



#include <iostream>

using namespace std;


// https://www.youtube.com/watch?v=KXDzBglp83M
// https://www.youtube.com/watch?v=T8f4ajtFU9g

template<typename type>
void print(type input){

    cout << input << endl;

}

class animal{
public:

    virtual void speak() = 0;


};  


class dog : private animal{
public: 

    
    void speak(){

    print("Bow Bow Bow");

    }

};

int main(){ 

    animal* my_dog = new dog();

    my_dog->speak();

    animal my_cat;



}
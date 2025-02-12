#include<iostream>

#define max_size 5


using namespace std;

class stack{
private: 
    
    int stack_array[max_size];
    int top_index;

public: 
    
    stack(){

        cout << "The Stack is Created with size of 5" << endl;

        top_index = -1;

    }

    void push(int input_value){

        if (top_index > max_size - 1)
        {
            cout << "Stack Overflow" << endl;
            return;
        }

        top_index += 1;

        stack_array[top_index] = input_value;

    }


    void pop(){

        if (top_index < 0)
        {

            cout << "Stack Underflow" << endl;
            return;

        }
        
        cout << "The Number " << stack_array[top_index] << "Is popped" << endl;

        top_index -= 1;

    }
    
    bool is_empty(){

        if (top_index == -1)
        {
            return 1;
        }

        return 0;
        

    }

    int peek(){

        if (top_index < 0)
        {
            return -1;
        }
        
        return stack_array[top_index];
    }

    void display(){

        cout << "This is the Stack " << endl;

        for (size_t i = 0; i < top_index+1; i++)
        {

            cout << " - " << stack_array[i];

        }
        
        cout << endl;

    }


};



int main(){

    stack my_stack;

    my_stack.push(99);
    my_stack.push(70);
    my_stack.push(67);

    my_stack.pop();
    my_stack.pop();


    my_stack.display();
    
    cout << "Is my array empty " << my_stack.is_empty() << endl;




}
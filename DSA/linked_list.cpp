#include <iostream>

using namespace std;

template<typename type>
void print(type input){

    cout << input << endl;

}



struct link_list
{
    int data = 5;
    link_list* next_node = nullptr; 

};

void insert_head( link_list*& input_list, int input_data ){

    link_list* temp_list = new link_list;
    
    temp_list->data = input_data;
    temp_list->next_node = input_list;

    input_list = temp_list;

}

void link_printer(link_list* input_list){

    while (input_list->next_node != NULL)
    {
        print(input_list->data);
        input_list = input_list->next_node;
    }
    

}

void insert_at(link_list*& input_list, int position,int input_data){

    link_list* cursor = input_list;

    for (size_t i = 0; i < position-1; i++)
    {

        if (cursor == NULL)
        {
            print("The index out of scope");
            return;
        }
        
        cursor = cursor->next_node;

    }

    link_list* temp_list = new link_list;
    temp_list->data = input_data;

    temp_list->next_node = cursor->next_node;
    cursor->next_node = temp_list;

}

void insert_last(link_list*& input_list, int input_data){

    link_list* cursor = input_list;

    while (cursor->next_node->next_node != NULL)
    {

        cursor = cursor->next_node;

    }
    
    link_list* temp_list = new link_list;

    temp_list->data = input_data;
    temp_list->next_node = nullptr; 

    cursor->next_node = temp_list;


}


int main(){

    link_list*  my_list = new link_list;

    insert_head(my_list,4);
    insert_head(my_list,86);
    insert_head(my_list,99);
    insert_head(my_list,100);


    insert_at(my_list,2,999);

    insert_last(my_list,876);

    link_printer(my_list);


}
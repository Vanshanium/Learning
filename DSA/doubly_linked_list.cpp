#include<iostream>

using namespace std;

template<typename type>
void print(type input){

    cout << input << endl;

}


struct doubly_list
{
    
    int data;
    doubly_list* next_node = nullptr;
    doubly_list* prev_node = nullptr;

};



void insert_head(doubly_list* &header, int input_data,doubly_list* &tail){
    
    doubly_list* temp_list = new doubly_list;
    temp_list->data = input_data;
    temp_list->next_node = header;

    if (header == nullptr)
    {
        tail = temp_list;
    }
    else{
        
        header->prev_node = temp_list;
        
    }

    header = temp_list;

}

void insert_tail(doubly_list* &header,int data,doubly_list* &tail){

    doubly_list* temp_list = new doubly_list;
    temp_list->data = data;
    temp_list->prev_node = tail;

    if (tail == nullptr)
    {
        header = temp_list;
    }
    else{

        tail->next_node = temp_list;

    }
    tail = temp_list;

}

void print_from_tail(doubly_list* tail){

    while (tail != nullptr)
    {
        print(tail->data);
        tail = tail->prev_node;
    }

}

void print_from_head(doubly_list* header){

    while (header != nullptr)
    {

        print(header->data);
        header = header->next_node;
    }

}

void insert_at(doubly_list* &header,int input_data, int position){

    doubly_list* temp_list = new doubly_list;
    temp_list->data = input_data;
    
    doubly_list* cursor = header;
    
    for (size_t i = 0; i < position; i++)
    {
        cursor = cursor->next_node;
        if (cursor == nullptr)
        {

            print("The index out of range");
            delete temp_list;
            return;

        }
        

    }
    
    temp_list->prev_node = cursor;
    temp_list->next_node = cursor->next_node;

    if (cursor->next_node != nullptr)
    {
        cursor->next_node->prev_node = temp_list;
    }
    
    cursor->next_node = temp_list;

}


void delete_head(doubly_list* &header){
    
    doubly_list* temp_list = header;

    header->next_node->prev_node = nullptr;
    header = header->next_node;

    delete temp_list;

}

void delete_tail(doubly_list*& tail){

    doubly_list* temp  = tail;

    if (tail->prev_node != nullptr)
    {
        tail->prev_node->next_node = nullptr;
    }
    
    tail = tail->prev_node;

    delete temp;


}

void delete_at(doubly_list* & header, int position){

    doubly_list* cursor = header;

    for (size_t i = 0; i < position; i++)
    {

        cursor = cursor->next_node;
        if (cursor == nullptr)
        {
            return;
        }
        

    }
    
    if (cursor->next_node == nullptr)
    {
        delete_tail(header);
        return;
    }
    

    cursor->prev_node->next_node = cursor->next_node;
    cursor->next_node->prev_node = cursor->prev_node;
    
    delete cursor;

}

int main(){

    doubly_list* head = nullptr;
    doubly_list* tail = nullptr;

    insert_head(head,1998,tail);
    insert_head(head,189,tail);
    insert_head(head,86,tail);
    insert_tail(head,87,tail);
    insert_at(head,788,1);

    delete_at(head,1);
    
    print_from_head(head);
    print_from_tail(tail);


}
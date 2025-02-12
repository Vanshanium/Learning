#include <iostream>
#include <queue>
using namespace std;

template<typename type>
void print(type input){

    cout << input;

}




struct bi_tree
{
    int data;
    bi_tree* left_node = nullptr;
    bi_tree* right_node = nullptr;

    bi_tree(int input){

        data = input;

    }


};

void insert(bi_tree* &root, int input_data){

    if (root == nullptr)
    {
        root = new bi_tree(input_data);
        return;
    }
    
    if (root->data > input_data)
    {
        insert(root->left_node,input_data);

    }
    
    if (root->data < input_data)
    {
        insert(root->right_node,input_data);

    }


}

void print_tree(bi_tree* root){
    
    
    if (root->left_node != nullptr)
    {
        
        print_tree(root->left_node);
        
    }
    
    print(root->data);
    print("  ");
    
    if (root->right_node != nullptr)
    {
        
        print_tree(root->right_node);
        
    }
    
    return;
    

}

bi_tree* search(bi_tree* root, int tar){
    
    if (root == nullptr)
    {
        print("We can't find it!");        
        return nullptr;
    }
    
    if (root->data == tar)
    {
        
        print("We found it!!");
        return root;
    }
    
    if(root->data < tar)
    {
        
        return search(root->right_node,tar);
        
    }
    else{
        return search(root->left_node,tar);
    }
    
    
}

void del(bi_tree* &root, int value){

    if (root->data > value)
    {
        del(root->left_node,value);
    }
    else if(root->data < value){
        del(root->right_node,value);
    }
    else{

        bi_tree* temp = root;

        if (root->left_node == nullptr)
        {

            root = root->right_node;

        }
        else if(root->right_node == nullptr){

            root = root->left_node;

        }        
        else {

            insert(root->right_node,root->left_node->data);
            root = root->right_node;

        }

        delete temp;

    }

}

void bfs(bi_tree* root){

    if (root == nullptr)
        return;
    

    queue<bi_tree*> dis_nodes;

    dis_nodes.push(root);

    print("\n\n\n");


    while (!dis_nodes.empty())
    {
        
        bi_tree* current = dis_nodes.front();
        dis_nodes.pop();
        print(current->data);
        print("     ");


        if (current->left_node != nullptr)
        {
            print("\n");
            dis_nodes.push(current->left_node);
        }
        if (current->right_node != nullptr)
        {
            print("\n");
            dis_nodes.push(current->right_node);
        }


    }
    print("\n\n\n");

    

}

int main(){
    
    bi_tree* root_node = nullptr;

    int array[10] = {8,3,10,1,6,4,7,10,14,13};

    for (size_t i = 0; i < 10; i++)
    {

        insert(root_node,array[i]);

    }
    

    print_tree(root_node);

    bfs(root_node);




}
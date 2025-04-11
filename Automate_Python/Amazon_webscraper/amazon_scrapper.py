import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from helper_functions import string_lizol 

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec


"""
This function is the crazy, if you read it you'll say it too!!!
parameter -
    Url : url of the search_result page(It should be the search page!!)
    search_string : the string you wanna search (You should clear the string before sending here)
    driver : This takes the driver so that it can call it later in recursion
    product_list : It takes in the empty list/array (Design choice, it does not return the list because in recursion it will clear it every single recursion)
    page_searched : This is the number if the pages you have searched, it should be set to zero(It increases with the recursion)
return - 0 if fails and 1 if it works
"""


def result_discombobulator(url,search_string,driver,product_list,page_searched):
    

    driver.get(url) 
    #This calls the url in the chrome driver!!!

    try:
        search_results = WebDriverWait(driver,10).until(
            ec.presence_of_all_elements_located((By.CLASS_NAME,"s-widget-container")))
    
    except TimeoutError:
        print("Page didn't loaded Correctly Please try again.")

    # search_results = driver.find_elements(By.CLASS_NAME,"s-widget-container")
    #This is a html element searched from the class

    search_index = 0
    #This is to check if there is anything related to the search present on the page

    product_dict = {'product_title' : '',
                    'product_price' : '',
                    'product_link' : ''}
    #This is the directory which takes in the information scraped from the amazon

    #This loops on the results of the search!!!
    for result in search_results:

        #This is on of my favourite code in this project, it sperates all the results which are not related to the search

        if search_string in string_lizol(result.text):

            if(search_index == 0):
                search_index += 1

            #Here it ignores the first components(They are not the results, they are text on the amazon)
            else:
                
                try:

                    #This scraps the title of the element
                    title = result.find_element(By.CLASS_NAME,'s-title-instructions-style')
                    
                    product_dict['product_title'] = title.text.replace('\n',' ')

                    #This scrapes the link from the element
                    element_link = (result.find_element(By.TAG_NAME,'a')).get_attribute('href')

                    product_dict['product_link'] = element_link

                    try:
                        #Scrapping the Price of the result
                        price = result.find_element(By.CLASS_NAME,'a-price-whole')

                        product_dict['product_price'] = price.text

                    except:
                        #If the price is not listed on the element then send this none to it!!!
                        product_dict['product_price'] = 'none' 
                        
                except:
                    print("Product not found")
                
                product_list.append(product_dict)
                #appending the dictionary to the list which has to pass!
                
                search_index += 1
                
    if(search_index == 1):
        return 0
    else:
        #This section is the best (and I love it more then that of previous one!
        
        #Finds the next key from the page
        next = driver.find_element(By.CLASS_NAME,'s-pagination-next')
        try:
            #Gets its link
            link = next.get_attribute('href')
            page_searched +=1

            if(page_searched != 6):
                #And recursionnnnn!!!!!!!
                result_discombobulator(link,search_string,driver,product_list,page_searched)
            else:
                return 1
            
        except:
            #The print says it all!!!
            print("No next page!")
            return 1
        



"""
Parameters - 
    Search_string : It takes in a search_string(The thing you wanna search)

Return - It returns the json with all the results along with prices and ratings!!!!
"""

def search_amazon(search_string):
    
    search_string = search_string.replace(' ','+')
   
    url = f"https://amazon.in/s?k={search_string}"

    print(url)

    driver = webdriver.Chrome()

    product_list = []

    result_discombobulator(url,string_lizol(search_string),driver,product_list,0)

    product_json = {'status':'working',
                    'product_list':product_list
                    }
    
    with open("results.json","w") as file:
        file.write(str(product_json))

    return product_json
    



    
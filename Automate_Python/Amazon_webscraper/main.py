from amazon_scrapper import search_amazon

json = search_amazon("thomas calculus")

print(json['product_list'])
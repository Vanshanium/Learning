# This is the resources where i learned all this from !?
# https://www.youtube.com/watch?v=tb8gHvYlCFs&t=711s 
# This is the video to know to work with request librabry and http requests
# Rest api 
# https://mannhowie.com/rest-api
# https://www.youtube.com/watch?v=ZveW4_ZJtVY&t=489s

# https://en.limetorrent-official.site/movies?keyword=due+date //for my torrenting!!!
# I wannt to make a torrent scrapper fr....they are very hard to find nowadays.



import requests


language = 'language=en&'
api_key = 'apiKey=4cdc817a8415482aa1644139166e8e7d'



url = 'https://newsapi.org/v2/'
print("Language is set to english!!!")

if(input('Do you want news from a specific date Y/N')=="Y"):
    date = f"{input('Which dates news do you want!?? YYYY-MM-DD')}&"
else:
    date = ''



if(input("Do You want Top Headlines(t) or a Specific Topic(s)")=='t'):
    
    url = f"{url}top-headlines?"

    if(input("Any specific country(s) or all around the world(w)!???")=='w'):
        url = f"{url}sources=bbc-news&{date}{api_key}"
        r = requests.get(url)

    else:
        country = f"country={input('Which countries top headlines!?')}&"
        url = f"{url}{country}{date}{api_key}"
        r = requests.get(url)

else:

    topic = f"{input('What you wanna search about!?')}&"

    url = f"{url}everything?q={topic}{date}{api_key}"
    print(url)
    r = requests.get(url)


#Getting the list of dictionaries from a dictionary(Hell yeah its complicated!)
articles = r.json()['articles']


index = 0

for article in articles:

    print(f"{article['title']} by {article['author']} [{index}]\n")
    index += 1

input_index = input("Which article would you like to read!!!")


print(articles[int(input_index)]['title']," - ",articles[int(input_index)]['description'],"Read More form here - ",articles[int(input_index)]['url'])
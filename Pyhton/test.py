user_name = input("Enter your name: ")
password = input("Enter your password: ")

correct_password = "12345"

if user_name == "admin" and password == correct_password:
    print("Welcome, admin!")
else:
    print("Wrong username or password. Please try again.")


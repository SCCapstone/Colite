import random

random_number = random.randint(0, 100)
#print(random_number)
user_input = input("Please type in a number: ")

while int(user_input) != random_number:
  if int(user_input) > random_number:
    print("Too high")
  elif int(user_input) < random_number:
    print("Too low")
  user_input = input("Please guess again: ")

print("You win")

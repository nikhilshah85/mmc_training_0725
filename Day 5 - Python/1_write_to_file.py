print('Enter Your name');
name = input();
file = open('users.txt', 'a');
file.write(name + '\n');
file.close();
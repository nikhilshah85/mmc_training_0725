print('Enter Details to add a new user account');

print('Enter Your Name;');
name = input();

print('Enter Last Name');
lastName = input();

print('Enter Initial Deposit Amount');
initilDeposit = input();

print('Enter the userName you want to login with');
userName = input();

print('Enter the Password you want to login with');
password = input();

print('Enter the Secret Code you want to login with');
secretCode = input();


file = open('users.txt', 'a');
file.write(userName + '\n');
file.write(password + '\n');
file.write(name + '\n');
file.write(lastName + '\n');
file.write(initilDeposit + '\n');
file.close();

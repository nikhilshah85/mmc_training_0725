print('!!!!!!!!!!!~~~~~~~~~~~~~~~~Welcome to CitiBank ~~~~~~~~~~~~~~ !!!!!!!!!!!')
print('a. Admin')
print('b. User')
usertype = input('Please select a or b: ')
if usertype == 'a':
    print('Welcome Admin');
    print('Please enter your username, password and secret code');
    adminUsername = input('Username: ');
    adminPassword = input('Password: ');
    adminSecretCode = input('Secret Code: ');
    if adminUsername == 'admin' and adminPassword == 'Nikhil@1234' and adminSecretCode == '1234':
        print('Login successful');
        print('1. Add New User');
        print('2. View User List');
        print('3. Delete User');
        print('4. Update User');
        print('5. Exit');
    else:
        print('Login failed');
elif usertype == 'b':
    print('Welcome User')
    print('Please enter your account number, username and password');
    userAccountNumber = input('Account Number: ');
    userUsername = input('Username: ');
    userPassword = input('Password: ');
    if userAccountNumber == '101' and userUsername == 'Nikhil' and userPassword == 'Nikhil@1234':
        print('Login successful');
        print('1. View Account Details');
        print('2. Check Balance');
        print('3. Withdraw');
        print('4. Deposit');
        print('5. Transfer');
        print('6. Change Pin');
        print('7. Exit');
    else:
        print('Login failed');
else:
    print('Please select a or b')

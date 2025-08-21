from CommonFunctions import *;
print('!!!!!!!!!~~~~~~~~~~ Welcome to CitiBank ~~~~~~~~~~!!!!!!!!!');
print('Please Login');
print('1. Admin');
print('2. User');

userType = int(input('Enter your choice: '));

if(userType == 1):
    print('Login as Admin');
    print('Enter Admin Credentials');
    userName = input('Enter Username: ');
    Password = input('Enter Password: ');
    secretCode = int(input('Enter Secret Code: '));

    adminLoginResult = Login(userName, Password, secretCode);
    if(adminLoginResult == True):        
         print('1. Create User');
         print('2. View User');
         print('3. Update User');
         print('4. Delete User');
         print('5. Exit');
    else:
        print('Login Failed');
        exit();
    

    adminChoice = int(input('Enter your choice: '));

    if(adminChoice == 1):
        print('Create User');
        firstName = input('Enter First Name: ');
        lastName = input('Enter Last Name: ');
        initialBalance = int(input('Enter Initial Balance: '));
        CreateUser(firstName, lastName, initialBalance);        
    elif(adminChoice == 2):
        print('View User');
        autonumber = int(input('Enter Autonumber to view details: '));
        viewUser(autonumber);
    
    elif(adminChoice == 3):
        print('Update User');
        autonumber = int(input('Enter Autonumber to update details: '));
        newName = input('Enter New First Name: ');
        newLastName = input('Enter New Last Name: ');       
        newPin = int(input('Enter New Pin: '));
        initialBalance = int(input('Enter Initial Balance: '));
        updateUserDetails(autonumber, newName, newLastName, newPin, initialBalance);

    elif(adminChoice == 4):
        print('Delete User');
        autonumber = int(input('Enter Autonumber to delete: '));
        deleteUser(autonumber);
    else:
        print('Exit');
else:
    print('Login as User');
    print('1. View Account Details');
    print('2. Check Account Balance');
    print('3. Withdraw Money');
    print('4. Deposit Money');
    print('5. Transfer Money');
    print('6. Change Pin');
    print('7. Exit');

    userChoice = int(input('Enter your choice: '));
import os
def Login(userName, Password, SecretCode):
    if userName == 'admin' and Password == 'admin' and SecretCode == 1234:
        return True
    else:
        return False
    
def CreateUser(firstName, lastName, initialBalance):
    with open("autonumber.txt","r") as file:
        autonumber = int(file.read())
        file.close();
    with open("autonumber.txt","w") as file:
        autonumber = autonumber + 1
        file.write(str(autonumber))
        file.close();
    with open(str(autonumber) +  ".txt","w") as file:
       userName = firstName + lastName + "_" + str(autonumber);
       password =  lastName + "_" + str(autonumber) + "**";
       pin = 1234;
       file.write("Account Number: " + str(autonumber) + "\n");
       file.write("Name: " + firstName + " " + lastName + "\n");
       file.write("Username: " + userName + "\n");
       file.write("Password: " + password + "\n");
       file.write("Balance: " + str(initialBalance) + "\n");
       file.write("Pin: " + str(pin) + "\n");
       file.close();
    

def viewUser(autonumber):
    try:
        with open(str(autonumber) + ".txt","r") as file:
            print(file.read());
            file.close();
    except:
        print("Sorry User does not exist");
        return;
   

def updateUserDetails(accountNumber, newName, newLastName, newPin, initialBalance):
    with open(str(accountNumber) + ".txt","w") as file:
        userName = newName + newLastName + "_" + str(accountNumber);
        password =  newLastName + "_" + str(accountNumber) + "**";
        pin = newPin;
        file.write("Account Number: " + str(accountNumber) + "\n");
        file.write("Name: " + newName + " " + newLastName + "\n");
        file.write("Username: " + userName + "\n");
        file.write("Password: " + password + "\n");
        file.write("Balance: " + str(initialBalance) + "\n");
        file.write("Pin: " + str(pin) + "\n");
        file.close();

def deleteUser(autonumber):
    try:
        os.remove(str(autonumber) + ".txt");
        print("User deleted successfully");
    except:
        print("Sorry User does not exist");
        return;
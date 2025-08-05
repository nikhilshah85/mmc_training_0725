# print('Please enter a number');
# num = int(input());
# i = 1;
# while(i <= num):
#     print(i);
#     i = i + 1;

# while loop to print the table
print('Please enter a number to print the table');
num = int(input());
for i in range(1, 11):
    print(str(num) + ' x ' + str(i) + ' = ' + str(num * i));
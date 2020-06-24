# The task at hand

Create a password generator. The password generator should prompt the user to create a secure password. On clicking a button the user will be asked if they want certain criteria to be included in the password. These criteria are as follows:

- Password length (Min. 8, max 128)
- Special characters 
- Casing (uppercase, lowercase, or both)
- Numbers
- Special characters

The password will then be displayed on the screen, constructed from characters matching the criteria chosen from the options above. 

---

## Getting started with some pseudocode

The script will have to perform the following:

1. A button must be pressed and cue a series of prompts and confirms
2. Prompt the character length
- The prompt must not continue if the users selects an integer lower than 8 or higher than 128
- The prompt must ensure the user only inputs numbers
- Once a valid integer is selected end the loop and move on to the next confirm
3. A confirm will ask if the user wants their password to include special characters
- Proceed to the next confirm after user selection
4. Confirm if the user wants numbers in their password
- Proceed to the next confirm after user selection
5. Confirm if the user wants numbers in their password
6. Display the generated password above the "generate password" button in a div also containing the button 
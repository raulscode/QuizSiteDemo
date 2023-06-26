Raul's IT Quiz Demo Site
My GitHub Account: (github.com/raulscode)

This site is a small demo of a quiz site.

It has three pages:

- The Main Page/Quiz Page -

This presents the user with some IT-related questions, then takes answers (and optionally, personal info from the user), grades the answers with an external JS script and then displays the results below the form as a percentage grade.

Below that, it displays the user's answers with the correct answers beside them. It does this by collecting the values of the user inputs in a hash map in the JS script and then re-displaying them.

- The Suggestions Page -

This page takes suggestions for any new questions and answers to add to the quiz. It is just a dummy page and does not actually send the data anywhere, but it does tell the user that the suggestion was recieved (using an external JS script with an event listener).

- The About Page -
This page is for giving credit for the graphics and also mentioning some sites I found useful while making the pages. It also contains my only use of HTML tables in this project.

There are two script files:

- MainScript.js -

This is the script for the main page that gets the form data, calculates the grade, and displays the results.

- SuggestScript.js -

This is just a simple script that confirms the submission went through.

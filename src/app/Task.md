# Nested Tables App

# Task Description:
[************************************************************]
Let's pretend that is a very large application project, which will contain multiple nested tables and a lot of buttons (icon) functionalities that will update/modified the table data. The size of nesting is not explicit and it may change anytime from 1 to 4 levels or even more.

The main task is to create a generic nested table [Template] that may work as 1 layer (Standard table) and depending of the data to change to multilayers table(s).

All pages that are displaying data must be hidden for non-authorised users. 

Use the provided template and modified the specific pages to complete the task.

* All kind of free libraries are allowed  to complete the task.
[************************************************************]


## Login and Sign-in pages:
[************************************************************]
Login and sign-in pages with the basic forms are provided to You.
Modified and style the pages. Error messages must be provided and displayed to the user.
Connect with API and use the [auth] request to take the user login data to validate the user credentials. Provide an error message if the user credentials are not found into the DB.

For the 'Sign-in' page - validate the input emails for correct format. Validate and the password input data — display error messages for not valid format or non-equal passwords.
In 'datastore' service file create a DB Request to store this new user.


To complete those 2 pages modified the [Guard], [Login] and [sign-in] files.
Use [FormGroup] / [FormControl] for input fields.
Create [FormControl] custom validation function to match the passwords.
For Login and Sign-in page header must not be visible!
Add some styling to the HTML files.
[************************************************************]


## Current Status and Nested Data pages:
[************************************************************]
Next two pages [current-status] and [nested-data] need to display the provided data from the API. Use the [policies] and [policiesDetails] requests to take the data or create a new one.

On [current-status] page display information as one layer table retrieved from the API. The table must contain the following columns - (num, amount and description).
Make a basic page and table style design. The header must be visible for this page.

On [nested-data] page need to be displayed the same and additional data split on two different layers table(s). Connect and take the data from the API - use [getPolicies] and [getPoliciesDetails] functions to retrieve the data or create a similar request.

Table(s) must contain the following columns: 

* ==> Layer 1: num, amount, description
* ==> Layer 2: clientName, amount     

The second layer must be hidden all the time until the user selects the row icon to expand the details. By expanding the details, correct and fresh data need to be retrieved from the API and displayed on the screen each time. 
The details need to be provided as separated row attached to each record.

Create your own basic design.
Header must be visible for this page!

For more information check the images added to [Image] folder. 
[************************************************************]


# Additional Tasks:
[************************************************************]
1. Adding Error Handler component and service. Error message needs to be displayed to the user with proper messages – In case there is no data into the table, or there is no connection with the server (404 and 500) errors.
* use Angular [Interceptor].

2. Caching and reusing the income data. – Data need to be cached only for the current session.
* use Angular [Interceptor].
[************************************************************]



# Bonus Tasks:
[************************************************************]
1. Use Angular [Resolver] to retrieve the data before loading the page.
2. Extended project styling.
[************************************************************]


# Template Structure: 
[************************************************************]
Basic template is provided with 4 pages.

[pages] folder contain all create pages.
1.    Login page
2.    Sign In page.
3.    Current Status and Nested Data pages, where data need to be displayed as:
    a.    Normal table
    b.    Nested table

[components] folder will contain the header, footer, etc. components.
[templates] folder will contain all generic components.
[services] folder will include all services.

Fake API with dummy data is provided to the application. Check [api-data.service] for more details.
[************************************************************]


# Sending the task:
[************************************************************]
Before sending the task for review. Don`t forget to:

1. Check the project for any errors and Build errors.
2. Select and zip/rar all files without the modules folder.

[************************************************************]
# FSL-Application-Project
Angular Application for company X. 

Company X has a very large application project, which will contain multiple nested tables and a lot of functionality accessed by buttons (icons) that will update/modify the table data. The size of nesting is not explicit and it may change anytime from 1 to 4 levels or even more, e.g. the top level table may contain clients details, the next level is taxation transactions, the next level is transaction breakdown, and the next level is transaction source.

The main task is to create a generic nested table [Template] that may work as 1 layer (Standard table) and depending of the data to change to multilayers table.
•	Data must be hidden for non-authorised users!!! 
•	Use the provided template and modified the specific pages to complete the task.
•	An example view is provided. Do not re-create the same style, think of a new style.
* Use any libraries available to complete the task.
Additional Tasks:

Add Error Handler components and services.  Error messages need to be displayed – e.g. no data to display in the table, connection with the server - (404 and 500) errors.
* use Angular [Interceptor].
Use caching and reusing the income data. – Data needs to be cached only for the current session.
* use Angular [Interceptor].
Application Structure

Login and Sign-in pages:

Login and sign-in pages with the basic forms are provided.
Modify and style the pages. Error messages must be provided and displayed to the user.
Connect with the API and use the [auth] request to take the user login data to validate the user credentials. Provide an error message if the user credentials are not found in the DB.
For the 'Sign-in' page - validate the input email for correct format. Validate the password input data — display error messages for not valid format or non-equal passwords.
In the 'datastore' service file create a DB Request to store this new user.
To complete those 2 pages modify the [Guard], [Login] and [sign-in] files.
Use [FormGroup] / [FormControl] for input fields.
Create [FormControl] custom validation function to match the passwords.
For Login and Sign-in page header must not be visible.
Add some styling to the HTML files.

Current Status and Nested Data pages:

Next two pages [current-status] and [nested-data] need to display the provided data from the API. Use the [policies] and [policiesDetails] requests to take the data or create a new one.
On [current-status] page display information as a one layer table retrieved from the API. The table must contain the following columns - (num, amount and description).
Make a basic page and table style design. The header must be visible for this page.
On [nested-data] page, display the same and additional data split on two different layers table(s). Connect and take the data from the API - use [getPolicies] and [getPoliciesDetails] functions to retrieve the data or create a similar request.
Table(s) must contain the following columns: 
•	==> Layer 1: num, amount, description
•	==> Layer 2: clientName, amount     
The second layer must be hidden all the time until the user selects the row icon to expand the details. By expanding the details, the data needs to be retrieved from the API and displayed on the screen each time. 
The details need to be provided as separated row attached to each record.
•	Create your own basic design.
•	Header must be visible for this page.
•	For more information check the images added to [Image] folder.

Bonus Tasks:

1. Use Angular [Resolver] to retrieve the data before loading the page.
2. Extended project styling. 

# NotesApp

# Frontend

Components--> * NavBar - An Addnew button is provided in the NavBar which allows user to Add New Notes
              * Popup - HeadlessUi is used to give the popup effect.
              
Pages--> * Home Page
         * View Page
         * Edit Page
         * Addnew Page
         ** The pages "View Page,Edit Page,Addnew Page" are rendered in the Popup component as a popup window.
         

Layout--> * Default Layout --> is a HOC Component which wrap up the HomePage

** TailwindCss is used for styling purposes (installed as Developer Dependency)

# Backend
Schema--> * NotesSchema

Fields--> * Title (String)
          * Content (String)

API--> 1. Add New Notes
       2. Edit a Note Content by ID
       3. Delete a Note by ID
       4. Get All Notes
       5. Get a Particular Note by ID

Validation--> "Joi" is used to validate inputs of the Notes Content.
              Hence this is an Application to save personal Notes of the user, i thought we don't have to validate input characters.
              So just used Joi to say the Field "Title" and "Content" is requirred.

# Please refer my email to setup Environment Variable (.env) file to successfully connect MongoDB.

# Instruction to Setup and Run this Application
1. Clone this Entire Repo
2. Open the terminal and Change directory to the server file
     i. Type "npm i" in the terminal and make sure all the essential npm packages are installed.
     ii. Please refer "devDependencies" in the Package.json file and install the listed npm packages throught the terminal.
     iii. create a ".env" file in the server directory and paste the MONGO_URI line obtained from my email.
     iv. Type "npm start" in the terminal and hit enter. Hope now the server should be started and connected to the MongoDB.
 3.Open the terminal and Change directory to the client file.
     i. Type "npm i" in the terminal and make sure all the essential npm packages are installed.
     ii.  Please refer "devDependencies" in the Package.json file and install the listed npm packages throught the terminal (Here You will have to install TailwindCSS)
     iii. Type "npm start" in the terminal and hit enter. Hope now the App should be opened in th Browser.

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

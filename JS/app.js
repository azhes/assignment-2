/* Function to make dark mode button work
    - select dark mode button class
    - use toggle method to switch between dark mode and light mode themes
*/
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // change theme
    var slideout = document.getElementById("slideout")
    var newnote = document.getElementById("newnote")
    var nav = document.getElementById("nav")
    var nav2 = document.getElementById("nav2")

    document.body.classList.toggle('light');
    slideout.classList.toggle('light')
    newnote.classList.toggle('light')
    nav.classList.toggle('light')
    nav2.classList.toggle('light')
})

/* Function to make the new note button create note taking area 
    - select new note button class
    - user innerHTML method to change to textarea HTML
*/

/* Function to make the save button work 
    - select save button class
    - if save button is clicked, then for each word in textarea,
    append to notesArray
*/

/* Function to display note title and list of notes in sidebar 
    - extension of previous function
    - if save button is clicked, take first three words of notesArray
    and use innerHTML method to store in .noteslist list in sidebar
*/

/* Function to make the delete button work 
    - select delete button class
    - if delete button is clicked, then user innerHTML method to change
    textarea HTML back to the HTML for the new note button
*/

/* Function to display note when title in sidebar is clicked on 
    - for each title in .noteslist, if title is clicked, select corresponding
    notesArray and use innerHTML method to add notesArray to textarea
    - display save and delete buttons as well*/

/* Function to make sidebar scrollable if many notes are saved
    - research or ask Nathan how to do this
*/
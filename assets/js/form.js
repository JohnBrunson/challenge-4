
// TODO: Create a variable that selects the form element
const form = document.querySelector('form');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function saveBlog(event) {
    // Prevent default behavior from happening
    event.preventDefault();
    console.log("INFO: saveBlog function was called.")
    // Setup query selectors
    const username = document.querySelector('#username');
    const title = document.querySelector('#title');
    const content = document.querySelector('#content')
    //if username, title, or value don't have data, fire an error stating to complete the form.
    if (username.value === "" || title.value === "" || content.value === "") {
       const error = document.querySelector('#error');
       error.textContent = "Please complete the form."
       console.log("ERROR: error has occurred This is likely because there is a missing value for the blog form.")
    }else {
        storeLocalStorage();
    }
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener(submitBtn, saveBlog);
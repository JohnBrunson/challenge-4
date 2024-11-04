
// TODO: Create a variable that selects the form element
const form = document.querySelector('form');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function saveBlog(event) {
    event.preventDefault();
    console.log("saveBlog was called.")
    const username = document.querySelector('#username');
    const title = document.querySelector('#title');
    const content = document.querySelector('#content')
    if (username.value === "" || title.value === "" || content.value === "") {
       const error = document.querySelector('#error');
       error.textContent = "Please complete the form."
       console.log("error has occurred.")
    }else {
        let blog = {
            username: username.value,
            title: title.value,
            content: content.value
        }
        console.log(`blog: ${blog.username}`);
        console.log(`blog: ${blog.title}`);
        console.log(`blog: ${blog.content}`);
    }


}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', saveBlog);
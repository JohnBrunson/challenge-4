//do not change the following line
let isTest = false
//your coding begins here


// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
//property will change the CSS circle color.

// this is ugly. WAY too much violation of DRY. Fix this later because we're on a deadline. 
const toggleBtn = document.querySelector('#toggle');

toggleBtn.addEventListener('click', () => {
    currentMode = localStorage.getItem('mode')
    if (currentMode === 'dark')
    {
      document.body.classList.remove('dark');
      document.body.classList.add ('light');
      localStorage.setItem('mode', 'light');
      document.documentElement.style.setProperty('--circle-color', '#ffb100');
    }
      else{
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('mode', 'dark');
        document.documentElement.style.setProperty('--circle-color', '#000');
      }
  }
);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array. It does not need to take any arguments, It just needs to return the blogs stored in local storage as an array. Please use the key 'blogs' for storing and retrieving your blogs to/from local storage

function readLocalStorage() {
  let blogs = JSON.parse(localStorage.getItem('blogs'))
  if(!blogs){
    blogs = []
  }
  return blogs

// let blogs = [];
//   // this should take no argument and return an array.
//   console.log ("INFO: readLocalStorage function was called.")
//  //let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
//  if (!blogs) {
//   console.log("No blogs found. Returning empty array for blogs.")
//   return blogs;
//  }else{
//   const blogs = JSON.parse(localStorage.getItem('blogs'));
//   //console.log(`blogs as read are ${JSON.parse(blogs)}`);
//     //For best results, return the blogs. You spent HOW LONG figuring this out when the TA told you this?
//   return blogs;
//  }

}



// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage. Please use the key 'blogs' for storing blog data in local storage, otherwise the local tests will not work properly. This function should utilize your readLocalStorage function for getting the existing data


function storeLocalStorage(blog) {
  // read localStorage
  let blogs = readLocalStorage();
  // append the new object to an existing array.
  blogs.push(blog);
  // save the new array to localStorage.
  localStorage.setItem('blogs', JSON.stringify(blogs));

}

// function oldStoreLocalStorage(blog) {
// // this should read storage, add the object, then store the item
 
//   //Missing calling read storage. Is anything there? If it is, load that first.
 
//   //If this is uncommented, stuff gets broken
//   //blogs = readLocalStorage();
//   console.log(`blogs after reading from localStorage is ${blogs}`)
//   // This is not appending anything.
//   console.log ("INFO: storeLocalStorage function was called");
//   //Below line Reserved  for if I can get this accepted into an array. That's what it should do, but if this assignment doesn't test for it, I may not worry about it. This isn't how the thing is supposed to work, but I've spent forever on this challenge.
//   //blogs.push(blog);
//   localStorage.setItem('blogs', JSON.stringify(blog));
//   console.log (`INFO: localStorage length after setting is is ${localStorage.length}`);
// }




// !!!!! Use the following redirectPage function whenever you need to redirect to a different page.  Do not modify any of the code below
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url
  if (!isTest) {
    // Only redirect if the event is user-initiated
    redirectURL = url
    location.assign(redirectURL)

  }else{
    redirectURL = url
  }
};




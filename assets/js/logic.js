//do not change the following line
let isTest = false

//your coding begins here

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array. It does not need to take any arguments, It just needs to return the blogs stored in local storage as an array. Please use the key 'blogs' for storing and retrieving your blogs to/from local storage
// BRUNSON TODO: This needs Testing... doesn't work yet.
function readLocalStorage () {
  console.log ("INFO: readLocalStorage function was called.")
  console.log(`INFO: localStorage length is currently ${localStorage.length}`);
  
  let blogs = [];
  if (localStorage.length === 0) {
    return blogs;
  }
  else{

  }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage. Please use the key 'blogs' for storing blog data in local storage, otherwise the local tests will not work properly. This function should utilize your readLocalStorage function for getting the existing data

// BRUNSON TODO: Needs testing... seems to be getting called on start by one of the testing scripts?
function storeLocalStorage() {
  console.log ("INFO: storeLocalStorage function was called");
  console.log (`INFO: blog was received as ${blog}`);
  console.log (`INFO: localStorage length prior to setting is ${localStorage.length}`);
  localStorage.set('blogs', JSON.stringify(blog));
  console.log (`INFO: localStorage length after setting is is ${localStorage.length}`);
}


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




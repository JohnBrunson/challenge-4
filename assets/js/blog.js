// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backBtn = document.querySelector('#back')
// TODO: Create a function that builds an element and appends it to the DOM
function domAppend(el, parent) {
    //append item to DOM using two arguments
    const element = document.createElement(el);
    parent.appendChild(element);
    return element
}
// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogPosts(){
    console.log("INFO: noBlogPosts was called.")
    const p = domAppend ('p', main);
    console.log (`INFO: p is ${p}`);
    p.textContent = "No Blog posts yet..."
    
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    blogs = readLocalStorage();
    console.log(`blogs is read by renderBlogList as ${blogs}`);
    if (!blogs) {
        console.log(`INFO: No Blog posts were found... Calling noBlogPosts`)
        noBlogPosts();
    } else{
        console.log("INFO: There are blogs here, attempting to render.")

        blogs.forEach(blog => {
            //setup the article and append
            const article = domAppend('article', main);
            //setup the h2 and append to article
            const h2 = domAppend('h2', article);
            //setup the paragraph and append to h2
            const p = domAppend('p', article);
            //setup the blockquote and append to paragraph
            const blockquote = domAppend('blockquote', article)
            h2.textContent = blog.title;
            blockquote.textContent = blog.content;
            p.textContent = blog.username;
            

        });
    }
}
    

// TODO: Call the `renderBlogList` function
    renderBlogList();

    // TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
//uncomment the line to see the system kick you back to index automagically
backBtn.addEventListener ("click", function(){
    redirectPage("index.html");
    }
)

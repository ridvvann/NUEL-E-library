const menuIcon = document.querySelector(".menu-icon");
let mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.getElementById("close-menu-icon");


// Open menu
menuIcon.addEventListener("click", function () {
    mobileMenu.classList.add("active")
})

//close menu
closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("active")
})

//search bar
function searchContent() {
    // Get the search box text
    let searchBox = document.querySelector('.search-box');
    let searchText = searchBox.value.toLowerCase();
    
    // Get all posts
    let posts = document.getElementsByClassName('post');
    
    // Loop through all posts with basic for loop
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        let title = post.getElementsByTagName('h2')[0].innerText.toLowerCase();
        let tutor = post.getElementsByTagName('p')[1].innerText.toLowerCase();
        
        // Simple if statement to check if search text is in title or tutor
        if (title.indexOf(searchText) > -1 || tutor.indexOf(searchText) > -1) {
            post.style.display = "grid";
        } else {
            post.style.display = "none";
        }
    }
}
let hoverLinks = document.querySelector(".hover-links");
let resources = document.querySelector("li > a[href='contentPage.html']"); // Selects "Resources" link
let timeout; // Variable to handle delay

// Show the dropdown when hovering over "Resources"
resources.parentElement.addEventListener("mouseenter", function () {
    hoverLinks.classList.add("active");
    clearTimeout(timeout); // Cancel any hiding delay
});

// Hide the dropdown when the mouse leaves the "Resources" `<li>` with a delay
resources.parentElement.addEventListener("mouseleave", function () {
    timeout = setTimeout(hideDropdown, 200); // Slight delay for smooth UX
});

// Prevent hiding when hovering over the dropdown itself
hoverLinks.addEventListener("mouseenter", function () {
    clearTimeout(timeout); // Cancel hiding delay
});

// Hide dropdown when leaving the dropdown
hoverLinks.addEventListener("mouseleave", function () {
    timeout = setTimeout(hideDropdown, 200);
});

// Function to hide the dropdown
function hideDropdown() {
    hoverLinks.classList.remove("active");
}

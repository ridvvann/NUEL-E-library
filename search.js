document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-box");
    const searchButton = document.querySelector(".search-button");
    const cards = document.querySelectorAll(".card"); // Select all cards on the page

    function searchContent() {
        // Get the search box text
        var searchBox = document.querySelector('.search-box');
        var searchText = searchBox.value.toLowerCase();
        
        // Get all posts
        var posts = document.getElementsByClassName('post');
        
        // Loop through all posts with basic for loop
        for (var i = 0; i < posts.length; i++) {
            var post = posts[i];
            var title = post.getElementsByTagName('h2')[0].innerText.toLowerCase();
            var tutor = post.getElementsByTagName('p')[1].innerText.toLowerCase();
            
            // Simple if statement to check if search text is in title or tutor
            if (title.indexOf(searchText) > -1 || tutor.indexOf(searchText) > -1) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }
        }
    }

    // Run search when user types
    searchInput.addEventListener("keyup", searchContent);
    // Run search when button is clicked
    searchButton.addEventListener("click", searchContent);
});

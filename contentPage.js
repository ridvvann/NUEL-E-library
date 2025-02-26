document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenuIcon = document.getElementById("close-menu-icon");

    menuIcon.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    closeMenuIcon.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });

    // Close menu if user clicks outside of it
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            mobileMenu.style.display = "none";
        }
    });

    // Search Box Filter Posts
    const searchBox = document.querySelector(".search-box");
    const posts = document.querySelectorAll(".post");

    searchBox.addEventListener("input", function () {
        const searchTerm = searchBox.value.toLowerCase().trim();

        posts.forEach(post => {
            const title = post.querySelector("h2").textContent.toLowerCase();
            const tutor = post.querySelector("p:nth-of-type(2)").textContent.toLowerCase();
            
            if (title.includes(searchTerm) || tutor.includes(searchTerm)) {
                post.style.display = ""; // Show post
            } else {
                post.style.display = "none"; // Hide post
            }
        });
    });
});
    document.addEventListener("DOMContentLoaded", function () {
        let hoverLinks = document.querySelector(".hover-links");
        let resources = document.querySelector("li > a[href='contentPage.html']"); // Select "Resources" link
        let resourcesLi = resources.parentElement; // The <li> containing "Resources"
        let timeout; // Variable for delayed hiding
    
        // ✅ Show dropdown when hovering over "Resources"
        resourcesLi.addEventListener("mouseenter", function () {
            hoverLinks.classList.add("active"); // Add active class
            clearTimeout(timeout); // Cancel any pending hide
        });
    
        // ✅ Hide dropdown when the mouse leaves "Resources" <li> (with delay)
        resourcesLi.addEventListener("mouseleave", function () {
            timeout = setTimeout(hideDropdown, 200); // Delay hiding
        });
    
        // ✅ Prevent hiding when hovering over the dropdown itself
        hoverLinks.addEventListener("mouseenter", function () {
            clearTimeout(timeout); // Cancel hide delay if mouse enters the dropdown
        });
    
        // ✅ Hide dropdown when leaving the dropdown
        hoverLinks.addEventListener("mouseleave", function () {
            timeout = setTimeout(hideDropdown, 200); // Delay hiding
        });
    
        // ✅ Function to hide the dropdown
        function hideDropdown() {
            hoverLinks.classList.remove("active");
        }
    });    
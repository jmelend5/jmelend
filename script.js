function showPage(pageId, button) {

    // Hide every page
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });


    // Find the selected page
    const selectedPage = document.getElementById(pageId);


    // Show the selected page
    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    // Remove active status from every navigation button
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach(navButton => {
        navButton.classList.remove("active");
    });


    // Make the clicked button active
    if (button) {
        button.classList.add("active");
    }


    // Scroll back to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

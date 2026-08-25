function showPage(pageId) {

    // Hide every page
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });


    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    // Remove active status from every button
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach(button => {
        button.classList.remove("active");
    });


    // Make the clicked button active
    const clickedButton = event.target;

    clickedButton.classList.add("active");


    // Scroll to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

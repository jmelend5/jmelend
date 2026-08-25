function showPage(pageId) {

    
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });


    
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach(button => {
        button.classList.remove("active");
    });


    
    const clickedButton = event.target;

    clickedButton.classList.add("active");


    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

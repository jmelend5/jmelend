function showPage(pageId, button) {

    // Hide every page
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }

    // Remove active status from every button
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach(navButton => {
        navButton.classList.remove("active");
    });

    // Make the clicked button active
    if (button) {
        button.classList.add("active");
    }

    // Scroll to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}    });

    .standard {
    margin-top: 35px;
    padding: 25px 30px;

    background: #f4f6f8;

    border-left: 4px solid #172b4d;

    border-radius: 0 8px 8px 0;
}

.standard-label {
    font-size: 11px !important;
    font-weight: bold;

    letter-spacing: 1.5px;

    color: #58749b !important;

    margin-bottom: 10px !important;
}

.standard blockquote {
    margin: 0;

    font-size: 20px;

    font-style: italic;

    font-weight: 500;

    line-height: 1.5;

    color: #172b4d;
}
}

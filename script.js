/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* =========================
   BODY
========================= */

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f4f6f8;
    color: #222;
}


/* =========================
   HEADER
========================= */

.header {
    height: 80px;

    background: #172b4d;
    color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 35px;

    position: fixed;

    top: 0;
    left: 0;
    right: 0;

    z-index: 1000;
}

.header h1 {
    font-size: 22px;
    font-weight: 600;
}

.header p {
    font-size: 13px;
    color: #cbd5e1;
    margin-top: 3px;
}

.course {
    font-size: 14px;
    color: #dbe5f1;
}


/* =========================
   SIDEBAR
========================= */

.sidebar {
    position: fixed;

    top: 80px;
    left: 0;
    bottom: 0;

    width: 235px;

    background: #ffffff;

    border-right: 1px solid #dfe3e8;

    padding: 25px 15px;

    overflow-y: auto;
}


/* =========================
   NAVIGATION
========================= */

.nav-button {
    width: 100%;

    border: none;
    background: transparent;

    text-align: left;

    padding: 12px 15px;

    margin-bottom: 4px;

    border-radius: 6px;

    font-size: 14px;

    color: #374151;

    cursor: pointer;

    transition: 0.2s;
}

.nav-button:hover {
    background: #eef2f7;
}

.nav-button.active {
    background: #172b4d;
    color: white;
}

.assignment-title {
    font-size: 12px;

    font-weight: bold;

    color: #7b8491;

    text-transform: uppercase;

    letter-spacing: 1px;

    margin: 25px 15px 10px;
}


/* =========================
   MAIN CONTENT
========================= */

.content {
    margin-left: 235px;

    padding: 120px 50px 60px;

    max-width: 1200px;
}


/* =========================
   PAGES
========================= */

.page {
    display: none;

    animation: fadeIn 0.25s ease;
}

.active-page {
    display: block;
}

@keyframes fadeIn {

    from {
        opacity: 0;
        transform: translateY(5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}


/* =========================
   HOME
========================= */

.hero {
    background: white;

    border-radius: 10px;

    padding: 55px;

    border: 1px solid #e1e5ea;

    margin-bottom: 25px;
}

.small-title {
    color: #58749b;

    font-size: 13px;

    font-weight: bold;

    letter-spacing: 1.5px;

    margin-bottom: 12px;
}

.hero h2 {
    font-size: 38px;

    color: #172b4d;

    margin-bottom: 20px;
}

.hero p {
    max-width: 700px;

    line-height: 1.7;

    color: #59636f;

    margin-bottom: 25px;
}


/* =========================
   ENGINEERING STANDARD
========================= */

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


/* =========================
   CARDS
========================= */

.cards {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 20px;
}

.card {
    background: white;

    border: 1px solid #e1e5ea;

    border-radius: 10px;

    padding: 25px;
}

.card h3 {
    color: #172b4d;

    margin-bottom: 10px;
}

.card p {
    color: #697586;

    font-size: 14px;

    line-height: 1.6;
}


/* =========================
   SECTIONS
========================= */

.page > h2 {
    color: #172b4d;

    font-size: 32px;

    margin-bottom: 25px;
}

.section-box {
    background: white;

    border: 1px solid #e1e5ea;

    border-radius: 10px;

    padding: 35px;

    max-width: 900px;
}

.section-box h3 {
    color: #172b4d;

    margin-bottom: 10px;

    margin-top: 25px;
}

.section-box h3:first-child {
    margin-top: 0;
}

.section-box h4 {
    color: #172b4d;

    margin-top: 25px;

    margin-bottom: 10px;
}

.section-box h5 {
    color: #172b4d;

    font-size: 15px;

    margin-top: 25px;

    margin-bottom: 8px;
}

.section-box p {
    color: #59636f;

    line-height: 1.7;

    margin-bottom: 20px;
}


/* =========================
   LINKS
========================= */

.section-box a {
    color: #58749b;

    text-decoration: none;
}

.section-box a:hover {
    color: #172b4d;

    text-decoration: underline;
}


/* =========================
   ASSIGNMENT IMAGES
========================= */

.assignment-image {
    display: block;

    max-width: 100%;

    width: 700px;

    height: auto;

    margin: 25px auto;

    border-radius: 8px;

    border: 1px solid #dfe3e8;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {

    .header {
        height: 70px;

        padding: 0 20px;
    }

    .course {
        display: none;
    }

    .sidebar {
        top: 70px;

        width: 190px;
    }

    .content {
        margin-left: 190px;

        padding: 100px 25px 40px;
    }

    .hero {
        padding: 35px 25px;
    }

    .hero h2 {
        font-size: 30px;
    }

    .cards {
        grid-template-columns: 1fr;
    }

}


/* =========================
   SMALL SCREENS
========================= */

@media (max-width: 600px) {

    .sidebar {
        width: 160px;
    }

    .content {
        margin-left: 160px;

        padding-left: 15px;
        padding-right: 15px;
    }

    .header h1 {
        font-size: 18px;
    }

    .nav-button {
        font-size: 12px;

        padding: 10px;
    }

    .assignment-title {
        font-size: 10px;
    }

}    margin-top: 35px;
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

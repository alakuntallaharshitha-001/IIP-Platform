/* =========================================================
   IIP — INSTITUTION INTELLIGENCE PLATFORM
   Interactive Frontend
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       ELEMENTS
    ----------------------------------------------------- */

    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");
    const exampleButton = document.querySelector(".search-example button");

    const demoBanner = document.querySelector(".demo-banner");

    /* -----------------------------------------------------
       DEMO COLLEGE DATA
    ----------------------------------------------------- */

    const colleges = {

        "abc institute of technology": {
            name: "DRK Institute of Technology",
            location: "Hyderabad, Telangana",
            established: "2004",
            ownership: "Private / Trust",
            university: "XYZ University",
            aishe: "SAMPLE-12345",
            intake: "1,200",
            admissions: "820",
            utilisation: "68%",
            placement: "73%",
            naac: "A",
            nirf: "Not Ranked",
            risk: "Review"
        },

        "abc": {
            name: "DRK Institute of Technology",
            location: "Hyderabad, Telangana",
            established: "2004",
            ownership: "Private / Trust",
            university: "XYZ University",
            aishe: "SAMPLE-12345",
            intake: "1,200",
            admissions: "820",
            utilisation: "68%",
            placement: "73%",
            naac: "A",
            nirf: "Not Ranked",
            risk: "Review"
        }

    };


    /* -----------------------------------------------------
       SEARCH FUNCTION
    ----------------------------------------------------- */

    function searchCollege() {

        const query = searchInput.value.trim().toLowerCase();

        if (query === "") {

            showMessage(
                "Please enter a college name, university or AISHE code."
            );

            searchInput.focus();

            return;
        }


        /* Demo search */

        if (colleges[query]) {

            loadCollege(colleges[query]);

            return;
        }


        /* Partial search */

        const result = Object.values(colleges).find(function (college) {

            return (
                college.name.toLowerCase().includes(query) ||
                college.location.toLowerCase().includes(query) ||
                college.university.toLowerCase().includes(query) ||
                college.aishe.toLowerCase().includes(query)
            );

        });


        if (result) {

            loadCollege(result);

        } else {

            showMessage(
                "No matching institution found in the demo database. Try: ABC Institute of Technology"
            );

        }

    }


    /* -----------------------------------------------------
       LOAD COLLEGE
    ----------------------------------------------------- */

    function loadCollege(college) {
       document.querySelector(".dashboard").style.display = "block";
       
        const institutionName =
            document.querySelector(".institution-header h2");

        const institutionLocation =
            document.querySelector(".institution-header p");


        if (institutionName) {
            institutionName.textContent = college.name;
        }


        if (institutionLocation) {
            institutionLocation.textContent =
                college.location + " • Established " + college.established;
        }


        /* Update metric cards */

        updateMetric("Current Intake", college.intake);
        updateMetric("Current Admissions", college.admissions);
        updateMetric("Capacity Utilisation", college.utilisation);
        updateMetric("Placement", college.placement);


        /* Update banner */

        if (demoBanner) {

            demoBanner.innerHTML =
                "<strong>Demo institution loaded:</strong> " +
                college.name +
                " — sample data for frontend demonstration only.";

            demoBanner.style.background = "#eaf7f0";
            demoBanner.style.borderColor = "#cce8d9";
            demoBanner.style.color = "#276a4b";
        }


        /* Scroll to dashboard */

        setTimeout(function () {

            document.querySelector(".dashboard").scrollIntoView({
                behavior: "smooth"
            });

        }, 150);


        console.log("Institution loaded:", college);

    }


    /* -----------------------------------------------------
       UPDATE METRIC
    ----------------------------------------------------- */

    function updateMetric(label, value) {

        const cards = document.querySelectorAll(".metric-card");

        cards.forEach(function (card) {

            const title = card.querySelector("span");

            const number = card.querySelector("strong");

            if (
                title &&
                number &&
                title.textContent.trim().toLowerCase() ===
                label.toLowerCase()
            ) {

                number.textContent = value;

            }

        });

    }


    /* -----------------------------------------------------
       MESSAGE
    ----------------------------------------------------- */

    function showMessage(message) {

        let messageBox =
            document.querySelector(".search-message");


        if (!messageBox) {

            messageBox =
                document.createElement("div");

            messageBox.className =
                "search-message";

            messageBox.style.marginTop = "12px";
            messageBox.style.padding = "10px 14px";
            messageBox.style.borderRadius = "8px";
            messageBox.style.background = "rgba(255,255,255,0.08)";
            messageBox.style.color = "#c6d8ed";
            messageBox.style.fontSize = "11px";
            messageBox.style.textAlign = "center";

            document
                .querySelector(".search-box")
                .parentElement
                .appendChild(messageBox);

        }


        messageBox.textContent = message;


        setTimeout(function () {

            messageBox.textContent = "";

        }, 4000);

    }


    /* -----------------------------------------------------
       SEARCH BUTTON
    ----------------------------------------------------- */

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            searchCollege
        );

    }


    /* -----------------------------------------------------
       ENTER KEY SEARCH
    ----------------------------------------------------- */

    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    searchCollege();

                }

            }
        );

    }


    /* -----------------------------------------------------
       EXAMPLE BUTTON
    ----------------------------------------------------- */

    if (exampleButton) {

        exampleButton.addEventListener(
            "click",
            function () {

                searchInput.value =
                    "ABC Institute of Technology";

                searchCollege();

            }
        );

    }


    /* -----------------------------------------------------
       NAVIGATION
    ----------------------------------------------------- */

    document
        .querySelectorAll(".navbar nav a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const target =
                        link.getAttribute("href");

                    if (
                        target &&
                        target.startsWith("#")
                    ) {

                        const section =
                            document.querySelector(target);

                        if (section) {

                            event.preventDefault();

                            section.scrollIntoView({
                                behavior: "smooth"
                            });

                        }

                    }

                }
            );

        });


    /* -----------------------------------------------------
       REPORT BUTTON
    ----------------------------------------------------- */

    const reportButton =
        document.querySelector(".report-btn");


    if (reportButton) {

        reportButton.addEventListener(
            "click",
            function () {

                alert(
                    "Executive Brief generation will be connected to the backend in the next stage."
                );

            }
        );

    }


    /* -----------------------------------------------------
       HEADER BUTTON
    ----------------------------------------------------- */

    const headerButton =
        document.querySelector(".header-btn");


    if (headerButton) {

        headerButton.addEventListener(
            "click",
            function () {

                document
                    .querySelector(".search-box")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

                setTimeout(function () {

                    searchInput.focus();

                }, 500);

            }
        );

    }


    /* -----------------------------------------------------
       SIMPLE CARD HOVER EFFECT
    ----------------------------------------------------- */

    const cards =
        document.querySelectorAll(
            ".metric-card, .info-card, .campus-card, .risk-card"
        );


    cards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.style.transition =
                    "transform 0.25s ease, box-shadow 0.25s ease";

            }
        );

    });


    console.log(
        "IIP frontend initialized successfully."
    );

});

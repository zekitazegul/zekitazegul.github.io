document.addEventListener("DOMContentLoaded", () => {


/* =========================================
   TRANSLATIONS
========================================== */

const translations = {
    "en": {
        "navProfile": "Profile",
        "navSkills": "Skills",
        "navCompetencies": "Strengths",
        "navExperience": "Experience",
        "navEducation": "Education",
        "navLanguages": "Languages",
        "navOther": "Hobbies",
        "navContact": "Contact",
        "heroLabel": "IT PROFESSIONAL",
        "heroSubtitle": "QA Engineer | IT Support Technician | System Administrator",
        "heroLocation": "06 44955335 - zekitazegul@gmail.com - Poortugaal – Rotterdam",
        "heroDescription": "IT professional with a broad background in IT support, software testing, system administration and education, combining technical skills with strong communication and problem-solving abilities.",
        "contactButton": "Contact Me",
        "downloadCvButton": "Download CV",
        "heroCard1Title": "IT Support",
        "heroCard1Text": "Desktop support, hardware and software troubleshooting, Windows and Microsoft 365.",
        "heroCard2Title": "Quality Assurance",
        "heroCard2Text": "API and end-to-end testing using Playwright, Postman, GitHub Actions and k6.",
        "heroCard3Title": "System Administration",
        "heroCard3Text": "Infrastructure, users, devices, networking and day-to-day IT operations.",
        "heroCard4Title": "Education & ICT",
        "heroCard4Text": "Extensive experience in education combined with IT and ICT coordination skills.",
        "profileTitle": "Profile",
        "profileParagraph1": "I am an IT professional with a multidisciplinary background combining IT support, software testing, system administration and education.",
        "profileParagraph2": "My technical background includes Windows environments, hardware and software troubleshooting, Microsoft 365, networking, Python, databases, web technologies and modern QA tools such as Playwright, Postman and k6.",
        "profileParagraph3": "Through my experience in education and IT, I have developed strong communication, organisation, problem-solving and user-support skills. I enjoy helping people solve technical problems while also improving systems and processes.",
        "skillsTitle": "Skills",
        "skillCard1Title": "Desktop & End-User Support",
        "skill1": "Windows 10 / 11 support",
        "skill2": "Hardware troubleshooting and repair",
        "skill3": "Device preparation and migration",
        "skill4": "User account and profile support",
        "skill5": "Microsoft 365 support",
        "skillCard2Title": "IT & Technical Skills",
        "skill6": "Microsoft Windows environments",
        "skill7": "Networking and connectivity",
        "skill8": "Python",
        "skill9": "Java",
        "skill10": "MySQL",
        "skill11": "HTML / CSS / JavaScript",
        "skillCard3Title": "QA & Development",
        "skill12": "Playwright",
        "skill13": "API testing",
        "skill14": "Postman",
        "skill15": "k6 performance testing",
        "skill16": "Git & GitHub Actions",
        "skill17": "Test automation",
        "competenciesTitle": "Strengths",
        "competenciesText": "Problem solving, analytical thinking, clear communication, patience, organisation, teamwork, adaptability, responsibility and a strong customer-focused approach.",
        "experienceTitle": "Experience",
        "experience1Title": "ICT Administrator – Wereldwijs Basisschool Rotterdam",
        "experience1Date": "April 2024 – Present",
        "experience1Bullet1": "Provide day-to-day ICT support to staff and students.",
        "experience1Bullet2": "Prepare, configure and maintain computers, laptops and other devices.",
        "experience1Bullet3": "Troubleshoot hardware, software, network and user-access issues.",
        "experience1Bullet4": "Support Microsoft 365 and school ICT systems.",
        "experience1Bullet5": "Coordinate ICT-related activities and help improve digital workflows.",
        "experience2Title": "Software Tester – Motopp – Amsterdam",
        "experience2Date": "2026",
        "experience2Bullet1": "Designed and executed automated API tests using Playwright.",
        "experience2Bullet2": "Created end-to-end and functional test scenarios for application features.",
        "experience2Bullet3": "Tested authentication, RBAC, security, privacy and request workflows.",
        "experience2Bullet4": "Worked with Swagger / OpenAPI, Postman, Git and GitHub Actions.",
        "experience2Bullet5": "Performed performance testing with k6 and integrated automated tests into CI.",
        "experience3Title": "Volunteer Python Instructor – AZC Echt",
        "experience3Date": "April 2023",
        "experience3Bullet1": "Introduced learners to programming and Python.",
        "experience3Bullet2": "Prepared practical exercises and learning activities.",
        "experience3Bullet3": "Supported learners with different technical backgrounds and learning needs.",
        "experience4Title": "ICT Teacher – Huda Integrated School",
        "experience4Date": "January 2016 – January 2022",
        "experience4Bullet1": "Taught ICT and digital skills to students.",
        "experience4Bullet2": "Managed and supported classroom technology and digital learning environments.",
        "experience4Bullet3": "Supported teachers and students with technology-related issues.",
        "experience4Bullet4": "Contributed to the planning and implementation of digital education initiatives.",
        "additionalExperienceTitle": "Earlier Professional Experience",
        "additionalExperienceDate": "1996 – 2016",
        "additionalExperience1": "Extensive experience in education and school management.",
        "additionalExperience2": "Progressed through roles including Teacher, Head of Department, Deputy Headmaster and School Headmaster.",
        "additionalExperience3": "Developed strong leadership, organisation, communication and team-management skills.",
        "educationTitle": "Education",
        "education1Title": "IT Traineeship",
        "education1Institution": "Motopp – Amsterdam",
        "education1Status": "Completed",
        "education2Title": "Associate Degree – Computer Science",
        "education2Institution": "University of the People",
        "education2Location": "California, USA",
        "education3Title": "Master of Arts in Education, Innovation in Learning and Teaching",
        "education3Institution": "University of South Wales",
        "education3Location": "Cardiff, UK",
        "education4Title": "Bachelor's Degree in Primary Education",
        "education4Institution": "Canakkale Onsekiz Mart University",
        "coursesTitle": "Courses & Certifications",
        "courseCard1Title": "IT Support & Productivity",
        "course1": "Google IT Support Professional Certificate - Coursera",
        "course2": "Microsoft 365",
        "course3": "Jira",
        "course4": "Agile & Scrum",
        "courseCard2Title": "Software Testing & Development",
        "course5": "Playwright",
        "course6": "Postman",
        "course7": "Git & GitHub",
        "course8": "API Testing",
        "continuousLearningTitle": "Continuous Learning",
        "continuousLearningText": "Currently developing my knowledge of Microsoft Intune and planning further Microsoft 365 E5 training to strengthen my skills in modern workplace and device management.",
        "languagesTitle": "Languages",
        "language1Name": "Dutch",
        "language1Level": "B1+",
        "language2Name": "English",
        "language2Level": "Fluent",
        "language3Name": "Russian",
        "language3Level": "Fluent",
        "language4Name": "Turkish",
        "language4Level": "Native",
        "hobbiesTitle": "Hobbies & Interests",
        "hobby1": "Chess",
        "hobby2": "Badminton",
        "hobby3": "Woodworking",
        "hobby4": "Following technology trends",
        "hobby5": "Nature walks and outdoor activities",
        "hobby6": "Learning new things and developing skills",
        "contactTitle": "Contact",
        "whatsappLabel": "WhatsApp",
        "emailLabel": "Email",
        "linkedinLabel": "LinkedIn",
        "footerText": "© 2026 Zeki Tazegul. All rights reserved.",
        "documentTitle": "Zeki Tazegul | IT Professional",
        "menuOpen": "Open navigation menu",
        "menuClose": "Close navigation menu",
        "navigationLabel": "Main navigation",
        "languageSelection": "Language selection",
        "switchEnglish": "Switch to English",
        "switchDutch": "Switch to Dutch",
        "whatsappAria": "Contact Zeki Tazegul on WhatsApp",
        "emailAria": "Send an email to Zeki Tazegul",
        "linkedinAria": "View Zeki Tazegul’s LinkedIn profile"
    },
    "nl": {
        "navProfile": "Profiel",
        "navSkills": "Vaardigheden",
        "navCompetencies": "Sterke punten",
        "navExperience": "Werkervaring",
        "navEducation": "Opleiding",
        "navLanguages": "Talen",
        "navOther": "Hobby’s",
        "navContact": "Contact",
        "heroLabel": "IT-PROFESSIONAL",
        "heroSubtitle": "QA-engineer | IT-supportmedewerker | Systeembeheerder",
        "heroLocation": "06 44955335 - zekitazegul@gmail.com - Poortugaal – Rotterdam",
        "heroDescription": "IT-professional met een brede achtergrond in IT-support, softwaretesten, systeembeheer en onderwijs, die technische vaardigheden combineert met sterke communicatie en probleemoplossend vermogen.",
        "contactButton": "Neem contact op",
        "downloadCvButton": "CV downloaden",
        "heroCard1Title": "IT-ondersteuning",
        "heroCard1Text": "Desktopondersteuning, oplossen van hardware- en softwareproblemen, Windows en Microsoft 365.",
        "heroCard2Title": "Kwaliteitsborging",
        "heroCard2Text": "API- en end-to-endtesten met Playwright, Postman, GitHub Actions en k6.",
        "heroCard3Title": "Systeembeheer",
        "heroCard3Text": "Infrastructuur, gebruikers, apparaten, netwerken en dagelijkse IT-werkzaamheden.",
        "heroCard4Title": "Onderwijs & ICT",
        "heroCard4Text": "Uitgebreide onderwijservaring gecombineerd met vaardigheden in IT en ICT-coördinatie.",
        "profileTitle": "Profiel",
        "profileParagraph1": "Ik ben een IT-professional met een multidisciplinaire achtergrond waarin IT-support, softwaretesten, systeembeheer en onderwijs samenkomen.",
        "profileParagraph2": "Mijn technische achtergrond omvat Windows-omgevingen, het oplossen van hardware- en softwareproblemen, Microsoft 365, netwerken, Python, databases, webtechnologieën en moderne QA-tools zoals Playwright, Postman en k6.",
        "profileParagraph3": "Door mijn ervaring in onderwijs en IT heb ik sterke vaardigheden ontwikkeld in communicatie, organisatie, probleemoplossing en gebruikersondersteuning. Ik help graag mensen met technische problemen en verbeter daarbij systemen en processen.",
        "skillsTitle": "Vaardigheden",
        "skillCard1Title": "Desktop- & eindgebruikersondersteuning",
        "skill1": "Ondersteuning voor Windows 10 / 11",
        "skill2": "Hardwareproblemen oplossen en reparaties uitvoeren",
        "skill3": "Apparaten voorbereiden en migreren",
        "skill4": "Ondersteuning voor gebruikersaccounts en profielen",
        "skill5": "Ondersteuning voor Microsoft 365",
        "skillCard2Title": "IT & technische vaardigheden",
        "skill6": "Microsoft Windows-omgevingen",
        "skill7": "Netwerken en connectiviteit",
        "skill8": "Python",
        "skill9": "Java",
        "skill10": "MySQL",
        "skill11": "HTML / CSS / JavaScript",
        "skillCard3Title": "QA & ontwikkeling",
        "skill12": "Playwright",
        "skill13": "API-testen",
        "skill14": "Postman",
        "skill15": "Prestatietesten met k6",
        "skill16": "Git & GitHub Actions",
        "skill17": "Testautomatisering",
        "competenciesTitle": "Sterke punten",
        "competenciesText": "Probleemoplossend vermogen, analytisch denken, duidelijke communicatie, geduld, organisatie, samenwerken, aanpassingsvermogen, verantwoordelijkheidsgevoel en een sterk klantgerichte aanpak.",
        "experienceTitle": "Werkervaring",
        "experience1Title": "ICT-beheerder – Wereldwijs Basisschool Rotterdam",
        "experience1Date": "April 2024 – heden",
        "experience1Bullet1": "Dagelijkse ICT-ondersteuning bieden aan medewerkers en leerlingen.",
        "experience1Bullet2": "Computers, laptops en andere apparaten voorbereiden, configureren en onderhouden.",
        "experience1Bullet3": "Problemen met hardware, software, netwerken en gebruikerstoegang oplossen.",
        "experience1Bullet4": "Microsoft 365 en ICT-systemen van de school ondersteunen.",
        "experience1Bullet5": "ICT-gerelateerde activiteiten coördineren en digitale werkprocessen helpen verbeteren.",
        "experience2Title": "Softwaretester – Motopp – Amsterdam",
        "experience2Date": "2026",
        "experience2Bullet1": "Geautomatiseerde API-tests ontworpen en uitgevoerd met Playwright.",
        "experience2Bullet2": "End-to-end- en functionele testscenario’s opgesteld voor applicatiefuncties.",
        "experience2Bullet3": "Authenticatie, RBAC, beveiliging, privacy en aanvraagprocessen getest.",
        "experience2Bullet4": "Gewerkt met Swagger / OpenAPI, Postman, Git en GitHub Actions.",
        "experience2Bullet5": "Prestatietests uitgevoerd met k6 en geautomatiseerde tests geïntegreerd in CI.",
        "experience3Title": "Vrijwillig Python-docent – AZC Echt",
        "experience3Date": "April 2023",
        "experience3Bullet1": "Deelnemers laten kennismaken met programmeren en Python.",
        "experience3Bullet2": "Praktische oefeningen en leeractiviteiten voorbereid.",
        "experience3Bullet3": "Deelnemers met verschillende technische achtergronden en leerbehoeften ondersteund.",
        "experience4Title": "ICT-docent – Huda Integrated School",
        "experience4Date": "Januari 2016 – januari 2022",
        "experience4Bullet1": "ICT en digitale vaardigheden onderwezen aan leerlingen.",
        "experience4Bullet2": "Technologie in de klas en digitale leeromgevingen beheerd en ondersteund.",
        "experience4Bullet3": "Docenten en leerlingen ondersteund bij technische problemen.",
        "experience4Bullet4": "Bijgedragen aan de planning en uitvoering van initiatieven voor digitaal onderwijs.",
        "additionalExperienceTitle": "Eerdere werkervaring",
        "additionalExperienceDate": "1996 – 2016",
        "additionalExperience1": "Uitgebreide ervaring in onderwijs en schoolmanagement.",
        "additionalExperience2": "Doorgegroeid in functies als docent, afdelingshoofd, adjunct-directeur en schooldirecteur.",
        "additionalExperience3": "Sterke vaardigheden ontwikkeld in leiderschap, organisatie, communicatie en teammanagement.",
        "educationTitle": "Opleiding",
        "education1Title": "IT-traineeship",
        "education1Institution": "Motopp – Amsterdam",
        "education1Status": "Afgerond",
        "education2Title": "Associate degree – Informatica",
        "education2Institution": "University of the People",
        "education2Location": "Californië, Verenigde Staten",
        "education3Title": "Master of Arts in Onderwijs, Innovatie in Leren en Lesgeven",
        "education3Institution": "University of South Wales",
        "education3Location": "Cardiff, Verenigd Koninkrijk",
        "education4Title": "Bachelor in het basisonderwijs",
        "education4Institution": "Canakkale Onsekiz Mart University",
        "coursesTitle": "Cursussen & certificeringen",
        "courseCard1Title": "IT-ondersteuning & productiviteit",
        "course1": "Google IT Support Professional Certificate - Coursera",
        "course2": "Microsoft 365",
        "course3": "Jira",
        "course4": "Agile & Scrum",
        "courseCard2Title": "Softwaretesten & ontwikkeling",
        "course5": "Playwright",
        "course6": "Postman",
        "course7": "Git & GitHub",
        "course8": "API-testen",
        "continuousLearningTitle": "Voortdurend leren",
        "continuousLearningText": "Ik verdiep mij momenteel in Microsoft Intune en plan aanvullende Microsoft 365 E5-training om mijn vaardigheden in moderne werkplekken en apparaatbeheer te versterken.",
        "languagesTitle": "Talen",
        "language1Name": "Nederlands",
        "language1Level": "B1+",
        "language2Name": "Engels",
        "language2Level": "Vloeiend",
        "language3Name": "Russisch",
        "language3Level": "Vloeiend",
        "language4Name": "Turks",
        "language4Level": "Moedertaal",
        "hobbiesTitle": "Hobby’s & interesses",
        "hobby1": "Schaken",
        "hobby2": "Badminton",
        "hobby3": "Houtbewerking",
        "hobby4": "Technologische ontwikkelingen volgen",
        "hobby5": "Wandelen in de natuur en buitenactiviteiten",
        "hobby6": "Nieuwe dingen leren en vaardigheden ontwikkelen",
        "contactTitle": "Contact",
        "whatsappLabel": "WhatsApp",
        "emailLabel": "E-mail",
        "linkedinLabel": "LinkedIn",
        "footerText": "© 2026 Zeki Tazegul. Alle rechten voorbehouden.",
        "documentTitle": "Zeki Tazegul | IT-professional",
        "menuOpen": "Navigatiemenu openen",
        "menuClose": "Navigatiemenu sluiten",
        "navigationLabel": "Hoofdnavigatie",
        "languageSelection": "Taalkeuze",
        "switchEnglish": "Overschakelen naar Engels",
        "switchDutch": "Overschakelen naar Nederlands",
        "whatsappAria": "Neem contact op met Zeki Tazegul via WhatsApp",
        "emailAria": "Stuur een e-mail naar Zeki Tazegul",
        "linkedinAria": "Bekijk het LinkedIn-profiel van Zeki Tazegul"
    }
};


/* =========================================
   DOM ELEMENTS
========================================== */

const mobileMenuToggle =
    document.getElementById("mobile-menu-toggle");

const mobileNavigation =
    document.getElementById("mobile-navigation");

const languageEn =
    document.getElementById("language-en");

const languageNl =
    document.getElementById("language-nl");


/* =========================================
   MOBILE MENU
========================================== */

function closeMobileMenu() {

    if (!mobileNavigation || !mobileMenuToggle) {
        return;
    }

    mobileNavigation.classList.remove("menu-open");

    mobileMenuToggle.classList.remove("active");

    mobileMenuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    mobileMenuToggle.setAttribute(
        "aria-label",
        translations[document.documentElement.lang].menuOpen
    );
}


function toggleMobileMenu() {

    if (!mobileNavigation || !mobileMenuToggle) {
        return;
    }

    const isOpen =
        mobileNavigation.classList.toggle(
            "menu-open"
        );

    mobileMenuToggle.classList.toggle(
        "active",
        isOpen
    );

    mobileMenuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    mobileMenuToggle.setAttribute(
        "aria-label",
        isOpen
            ? translations[document.documentElement.lang].menuClose
            : translations[document.documentElement.lang].menuOpen
    );
}


if (mobileMenuToggle) {

    mobileMenuToggle.addEventListener(
        "click",
        toggleMobileMenu
    );
}


/* =========================================
   CLOSE MOBILE MENU AFTER NAVIGATION
========================================== */

if (mobileNavigation) {

    const navigationLinks =
        mobileNavigation.querySelectorAll(
            "ul a"
        );

    navigationLinks.forEach((link) => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });
}


/* =========================================
   CLOSE MOBILE MENU WHEN RESIZING
========================================== */

window.addEventListener(
    "resize",
    () => {

        if (window.innerWidth > 768) {
            closeMobileMenu();
        }

    }
);


/* =========================================
   LANGUAGE SWITCHING
========================================== */

function setLanguage(language) {

    if (!translations[language]) {
        language = "en";
    }

    const currentTranslations =
        translations[language];


    /* Change HTML language */

    document.documentElement.lang =
        language;


    /* Translate all elements */

    const translatableElements =
        document.querySelectorAll(
            "[data-i18n]"
        );

    translatableElements.forEach(
        (element) => {

            const translationKey =
                element.getAttribute(
                    "data-i18n"
                );

            if (
                Object.prototype.hasOwnProperty.call(
                    currentTranslations,
                    translationKey
                )
            ) {

                element.textContent =
                    currentTranslations[
                        translationKey
                    ];
            }
        }
    );


    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        element.setAttribute("aria-label", currentTranslations[element.getAttribute("data-i18n-aria")]);
    });

    if (mobileMenuToggle) {
        mobileMenuToggle.setAttribute("aria-label", currentTranslations[
            mobileMenuToggle.getAttribute("aria-expanded") === "true" ? "menuClose" : "menuOpen"
        ]);
    }

    /* Update page title */

    document.title =
        currentTranslations.documentTitle;


    /* Update active language */

    if (languageEn) {

        const isEnglish =
            language === "en";

        languageEn.classList.toggle(
            "active",
            isEnglish
        );

        languageEn.setAttribute(
            "aria-pressed",
            String(isEnglish)
        );
    }


    if (languageNl) {

        const isDutch =
            language === "nl";

        languageNl.classList.toggle(
            "active",
            isDutch
        );

        languageNl.setAttribute(
            "aria-pressed",
            String(isDutch)
        );
    }


    /* Remember selected language */

    try {

        localStorage.setItem(
            "preferredLanguage",
            language
        );

    } catch (error) {

        console.warn(
            "Unable to save language preference.",
            error
        );
    }
}


/* =========================================
   LANGUAGE BUTTON EVENTS
========================================== */

if (languageEn) {

    languageEn.addEventListener(
        "click",
        () => {

            setLanguage("en");

            closeMobileMenu();

        }
    );
}


if (languageNl) {

    languageNl.addEventListener(
        "click",
        () => {

            setLanguage("nl");

            closeMobileMenu();

        }
    );
}


/* =========================================
   LOAD SAVED LANGUAGE
========================================== */

let savedLanguage = "en";

try {

    const storedLanguage =
        localStorage.getItem(
            "preferredLanguage"
        );

    if (
        storedLanguage === "en" ||
        storedLanguage === "nl"
    ) {

        savedLanguage =
            storedLanguage;
    }

} catch (error) {

    console.warn(
        "Unable to read saved language preference.",
        error
    );
}


/* =========================================
   INITIALIZE WEBSITE
========================================== */

setLanguage(savedLanguage);

});
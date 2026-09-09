document.addEventListener("DOMContentLoaded", () => {


/* =========================================
   TRANSLATIONS
========================================== */

const translations = {

    /* =========================================
       ENGLISH
    ========================================== */

    en: {

        /* Page */

        documentTitle:
            "Zeki Tazegul | IT Professional",


        /* Navigation */

        navProfile:
            "Profile",

        navSkills:
            "Skills",

        navCompetencies:
            "Strengths",

        navExperience:
            "Experience",

        navEducation:
            "Education",

        navLanguages:
            "Languages",

        navOther:
            "Hobbies",

        navContact:
            "Contact",


        /* Hero */

        heroLabel:
            "IT PROFESSIONAL",

        heroSubtitle:
            "QA Engineer | IT Support Technician | System Administrator",

        heroDescription:
            "IT professional with a strong combination of hands-on IT support, system administration, software testing and educational experience. Experienced in troubleshooting, device management, Microsoft 365, Windows environments, networking and modern QA practices.",

        contactButton:
            "Contact Me",

        experienceButton:
            "View Experience",

        downloadButton:
            "Download CV",


        /* Hero Cards */

        heroCard1Title:
            "Desktop Support",

        heroCard1Text:
            "End-user support, troubleshooting and device management",

        heroCard2Title:
            "Hardware & Devices",

        heroCard2Text:
            "Hardware repair, upgrades, preparation and deployment",

        heroCard3Title:
            "Troubleshooting",

        heroCard3Text:
            "System, software, network and user support",

        heroCard4Title:
            "IT & Software",

        heroCard4Text:
            "QA testing, automation, scripting and technical problem solving",


        /* Profile */

        profileTitle:
            "Profile",

        profileText1:
            "I am an IT professional with a multidisciplinary background combining IT support, system administration, software testing and education.",

        profileText2:
            "My practical experience includes desktop and end-user support, Windows environments, hardware and software troubleshooting, Microsoft 365, device preparation, networking and school ICT administration.",

        profileText3:
            "During my IT traineeship at Motopp, I developed hands-on experience in software testing, API testing, test automation, Playwright, Postman, k6, Git and GitHub Actions.",

        profileText4:
            "My previous career in education also strengthened my communication, problem-solving, leadership and organisational skills. I am particularly interested in roles where I can combine technical expertise with practical support and continuous learning.",


        /* Skills */

        skillsTitle:
            "Technical Skills",

        skill1Title:
            "Desktop & End-User Support",

        skill1Item1:
            "Windows 10/11 installation, configuration and troubleshooting",

        skill1Item2:
            "Desktop and laptop support",

        skill1Item3:
            "Hardware and software troubleshooting",

        skill1Item4:
            "Microsoft 365 and Office support",

        skill1Item5:
            "User account and login troubleshooting",

        skill1Item6:
            "Network and connectivity troubleshooting",

        skill1Item7:
            "Printer and peripheral support",

        skill1Item8:
            "Device setup and deployment",

        skill1Item9:
            "Onsite and deskside support",

        skill1Item10:
            "Clear communication with end users",


        skill2Title:
            "Device Preparation & Migration",

        skill2Item1:
            "Laptop and desktop preparation",

        skill2Item2:
            "Windows installation and configuration",

        skill2Item3:
            "Software and application installation",

        skill2Item4:
            "User profile and data migration",

        skill2Item5:
            "Hardware replacement and upgrades",

        skill2Item6:
            "Device inventory and documentation",

        skill2Item7:
            "Basic understanding of Intune and Autopilot",

        skill2Item8:
            "Systematic deployment and troubleshooting",


        skill3Title:
            "IT & Technical Skills",

        skill3Item1:
            "Windows 10/11",

        skill3Item2:
            "Hardware repair and upgrades",

        skill3Item3:
            "Microsoft 365 / Microsoft Office",

        skill3Item4:
            "Networking and basic system administration",

        skill3Item5:
            "Python, Java and MySQL",

        skill3Item6:
            "HTML, CSS and JavaScript",

        skill3Item7:
            "Playwright, Postman and k6",

        skill3Item8:
            "Git and GitHub Actions",

        skill3Item9:
            "API and software testing",


        /* Competencies */

        competenciesTitle:
            "Personal Competencies",

        competenciesText:
            "Analytical thinking, problem solving, adaptability, responsibility, teamwork, communication, organisation, continuous learning and a strong service-oriented approach. I am comfortable working independently as well as part of a technical or multidisciplinary team.",


        /* Experience */

        experienceTitle:
            "Experience",

        experience1Title:
            "ICT Administrator",

        experience1Date:
            "April 2024 – Present",

        experience1Item1:
            "Provide day-to-day ICT support to teachers, staff and students.",

        experience1Item2:
            "Troubleshoot Windows devices, applications, accounts and connectivity issues.",

        experience1Item3:
            "Prepare, configure and maintain laptops, desktops and other ICT equipment.",

        experience1Item4:
            "Support Microsoft 365 and Office applications.",

        experience1Item5:
            "Manage and troubleshoot printers, peripherals and classroom technology.",

        experience1Item6:
            "Assist with user accounts, access and basic system administration tasks.",

        experience1Item7:
            "Support network connectivity and basic infrastructure troubleshooting.",

        experience1Item8:
            "Perform hardware upgrades, replacements and preventive maintenance.",

        experience1Item9:
            "Document technical issues and solutions where required.",

        experience1Item10:
            "Communicate technical solutions clearly to non-technical users.",


        experience2Title:
            "Software Tester",

        experience2Date:
            "2026",

        experience2Item1:
            "Performed functional and API testing of web applications.",

        experience2Item2:
            "Created automated API tests using Playwright.",

        experience2Item3:
            "Developed and maintained end-to-end test scenarios.",

        experience2Item4:
            "Tested authentication, authorisation and RBAC behaviour.",

        experience2Item5:
            "Performed security and privacy testing including IDOR, XSS and SQL injection checks.",

        experience2Item6:
            "Created performance tests using k6.",

        experience2Item7:
            "Integrated automated tests into GitHub Actions CI pipelines.",

        experience2Item8:
            "Worked with API documentation, Swagger/OpenAPI and test environments.",

        experience2Item9:
            "Reported defects and collaborated with development teams to improve software quality.",


        experience2AdditionalTitle:
            "Additional Technical Support",

        experience2AdditionalItem1:
            "Provided practical hardware and technical support during the traineeship.",

        experience2AdditionalItem2:
            "Assisted with computer setup, configuration and troubleshooting.",

        experience2AdditionalItem3:
            "Diagnosed hardware and software issues.",

        experience2AdditionalItem4:
            "Supported users with technical problems.",

        experience2AdditionalItem5:
            "Applied systematic troubleshooting and problem-solving techniques.",


        experience3Title:
            "Volunteer Python Instructor",

        experience3Date:
            "April 2023",

        experience3Item1:
            "Introduced learners to fundamental Python programming concepts.",

        experience3Item2:
            "Prepared practical exercises and learning activities.",

        experience3Item3:
            "Supported learners with programming problems and debugging.",

        experience3Item4:
            "Adapted explanations to different learning levels and backgrounds.",


        experience4Title:
            "ICT Teacher",

        experience4Date:
            "January 2016 – January 2022",

        experience4Item1:
            "Taught ICT and computer-related subjects to students.",

        experience4Item2:
            "Planned and delivered technology-focused lessons.",

        experience4Item3:
            "Supported students with computer hardware and software.",

        experience4Item4:
            "Managed classroom technology and digital learning resources.",

        experience4Item5:
            "Integrated technology into teaching and learning activities.",

        experience4Item6:
            "Provided technical guidance and troubleshooting support.",

        experience4Item7:
            "Developed strong communication, organisation and leadership skills.",


        /* Education */

        educationTitle:
            "Education",

        education1Title:
            "IT Traineeship",

        education1Status:
            "Completed",

        education2Title:
            "Associate Degree – Computer Science",

        education3Title:
            "Master of Arts – Education, Innovation in Learning and Teaching",

        education4Title:
            "Bachelor's Degree – Primary Education",


        /* Courses */

        coursesTitle:
            "Courses & Certifications",

        course1Item1:
            "Google IT Support Professional Certificate",

        course2Item1:
            "Jira",

        course2Item2:
            "Git & GitHub",

        course2Item3:
            "Postman",

        course2Item4:
            "Playwright",

        course3Item1:
            "Agile principles and practices",

        course3Item2:
            "Scrum framework",

        course3Item3:
            "Agile software development",

        course4Item1:
            "Microsoft Intune",

        course4Item2:
            "Microsoft 365 E5",

        courseOngoing:
            "Ongoing",

        coursePlanned:
            "Planned",

        continuousLearningTitle:
            "Continuous Learning",

        continuousLearningText:
            "I continuously develop my technical skills through practical projects, professional training and self-directed learning, with a particular focus on IT support, Microsoft technologies, system administration, software testing and automation.",


        /* Languages */

        languagesTitle:
            "Language Skills",

        languageDutch:
            "Dutch",

        languageDutchLevel:
            "B1+",

        languageEnglish:
            "English",

        languageEnglishLevel:
            "Fluent",

        languageRussian:
            "Russian",

        languageRussianLevel:
            "Fluent",

        languageTurkish:
            "Turkish",

        languageTurkishLevel:
            "Native",


        /* Hobbies */

        otherTitle:
            "Hobbies",

        hobby1:
            "Chess",

        hobby2:
            "Badminton",

        hobby3:
            "Woodworking",

        hobby4:
            "Nature walks and outdoor activities",

        hobby5:
            "Following technology trends",

        hobby6:
            "Learning new things and developing skills",


        /* Contact */

        contactTitle:
            "Contact",

        whatsappLabel:
            "WhatsApp",

        emailLabel:
            "Email",

        linkedinLabel:
            "LinkedIn",


        /* Footer */

        footerText:
            "© 2026 Zeki Tazegul. All rights reserved."
    },


    /* =========================================
       DUTCH
    ========================================== */

    nl: {

        /* Page */

        documentTitle:
            "Zeki Tazegul | IT Professional",


        /* Navigation */

        navProfile:
            "Profiel",

        navSkills:
            "Vaardigheden",

        navCompetencies:
            "Sterke punten",

        navExperience:
            "Werkervaring",

        navEducation:
            "Opleiding",

        navLanguages:
            "Talen",

        navOther:
            "Hobby's",

        navContact:
            "Contact",


        /* Hero */

        heroLabel:
            "IT PROFESSIONAL",

        heroSubtitle:
            "QA Engineer | IT Support Technician | Systeembeheerder",

        heroDescription:
            "IT-professional met een sterke combinatie van praktische IT-support, systeembeheer, softwaretesten en onderwijservaring. Ervaring met probleemoplossing, devicebeheer, Microsoft 365, Windows-omgevingen, netwerken en moderne QA-methoden.",

        contactButton:
            "Neem contact op",

        experienceButton:
            "Werkervaring bekijken",

        downloadButton:
            "CV downloaden",


        /* Hero Cards */

        heroCard1Title:
            "Desktop Support",

        heroCard1Text:
            "Eindgebruikersondersteuning, probleemoplossing en devicebeheer",

        heroCard2Title:
            "Hardware & Devices",

        heroCard2Text:
            "Hardware reparatie, upgrades, voorbereiding en implementatie",

        heroCard3Title:
            "Probleemoplossing",

        heroCard3Text:
            "Ondersteuning voor systemen, software, netwerken en gebruikers",

        heroCard4Title:
            "IT & Software",

        heroCard4Text:
            "QA-testen, automatisering, scripting en technische probleemoplossing",


        /* Profile */

        profileTitle:
            "Profiel",

        profileText1:
            "Ik ben een IT-professional met een brede achtergrond waarin IT-support, systeembeheer, softwaretesten en onderwijs samenkomen.",

        profileText2:
            "Mijn praktische ervaring omvat desktop- en eindgebruikersondersteuning, Windows-omgevingen, hardware- en softwareproblemen, Microsoft 365, devicevoorbereiding, netwerken en ICT-beheer binnen een schoolomgeving.",

        profileText3:
            "Tijdens mijn IT-traineeship bij Motopp heb ik praktijkervaring opgedaan met softwaretesten, API-testen, testautomatisering, Playwright, Postman, k6, Git en GitHub Actions.",

        profileText4:
            "Mijn eerdere carrière in het onderwijs heeft daarnaast mijn communicatie-, probleemoplossings-, leiderschaps- en organisatorische vaardigheden versterkt. Ik ben vooral geïnteresseerd in functies waarin ik technische kennis kan combineren met praktische ondersteuning en voortdurend leren.",


        /* Skills */

        skillsTitle:
            "Technische Vaardigheden",

        skill1Title:
            "Desktop & Eindgebruikersondersteuning",

        skill1Item1:
            "Windows 10/11 installatie, configuratie en probleemoplossing",

        skill1Item2:
            "Ondersteuning van desktops en laptops",

        skill1Item3:
            "Hardware- en softwareproblemen oplossen",

        skill1Item4:
            "Ondersteuning voor Microsoft 365 en Office",

        skill1Item5:
            "Problemen met gebruikersaccounts en inloggen oplossen",

        skill1Item6:
            "Netwerk- en verbindingsproblemen oplossen",

        skill1Item7:
            "Ondersteuning voor printers en randapparatuur",

        skill1Item8:
            "Devices instellen en implementeren",

        skill1Item9:
            "Onsite en deskside support",

        skill1Item10:
            "Duidelijke communicatie met eindgebruikers",


        skill2Title:
            "Devicevoorbereiding & Migratie",

        skill2Item1:
            "Voorbereiden van laptops en desktops",

        skill2Item2:
            "Windows installeren en configureren",

        skill2Item3:
            "Software en applicaties installeren",

        skill2Item4:
            "Migratie van gebruikersprofielen en data",

        skill2Item5:
            "Hardware vervangen en upgraden",

        skill2Item6:
            "Device-inventarisatie en documentatie",

        skill2Item7:
            "Basiskennis van Intune en Autopilot",

        skill2Item8:
            "Systematische implementatie en probleemoplossing",


        skill3Title:
            "IT & Technische Vaardigheden",

        skill3Item1:
            "Windows 10/11",

        skill3Item2:
            "Hardware reparatie en upgrades",

        skill3Item3:
            "Microsoft 365 / Microsoft Office",

        skill3Item4:
            "Netwerken en basis systeembeheer",

        skill3Item5:
            "Python, Java en MySQL",

        skill3Item6:
            "HTML, CSS en JavaScript",

        skill3Item7:
            "Playwright, Postman en k6",

        skill3Item8:
            "Git en GitHub Actions",

        skill3Item9:
            "API- en softwaretesten",


        /* Competencies */

        competenciesTitle:
            "Persoonlijke Competenties",

        competenciesText:
            "Analytisch denken, probleemoplossend vermogen, aanpassingsvermogen, verantwoordelijkheid, teamwork, communicatie, organisatie, continu leren en een sterke servicegerichte instelling. Ik werk zowel zelfstandig als binnen een technisch of multidisciplinair team.",


        /* Experience */

        experienceTitle:
            "Werkervaring",

        experience1Title:
            "ICT-beheerder",

        experience1Date:
            "April 2024 – heden",

        experience1Item1:
            "Dagelijkse ICT-ondersteuning bieden aan leraren, medewerkers en leerlingen.",

        experience1Item2:
            "Windows-devices, applicaties, accounts en verbindingsproblemen oplossen.",

        experience1Item3:
            "Laptops, desktops en andere ICT-apparatuur voorbereiden, configureren en onderhouden.",

        experience1Item4:
            "Ondersteuning bieden voor Microsoft 365 en Office-applicaties.",

        experience1Item5:
            "Printers, randapparatuur en technologie in klaslokalen beheren en problemen oplossen.",

        experience1Item6:
            "Ondersteunen bij gebruikersaccounts, toegangsrechten en basis systeembeheertaken.",

        experience1Item7:
            "Netwerkverbindingen ondersteunen en basisproblemen met infrastructuur oplossen.",

        experience1Item8:
            "Hardware-upgrades, vervangingen en preventief onderhoud uitvoeren.",

        experience1Item9:
            "Technische problemen en oplossingen documenteren wanneer nodig.",

        experience1Item10:
            "Technische oplossingen duidelijk communiceren aan niet-technische gebruikers.",


        experience2Title:
            "Software Tester",

        experience2Date:
            "2026",

        experience2Item1:
            "Functionele en API-tests uitgevoerd voor webapplicaties.",

        experience2Item2:
            "Geautomatiseerde API-tests ontwikkeld met Playwright.",

        experience2Item3:
            "End-to-end tests ontwikkeld en onderhouden.",

        experience2Item4:
            "Authenticatie, autorisatie en RBAC-functionaliteit getest.",

        experience2Item5:
            "Security- en privacytests uitgevoerd, waaronder controles op IDOR, XSS en SQL-injectie.",

        experience2Item6:
            "Performance tests ontwikkeld met k6.",

        experience2Item7:
            "Geautomatiseerde tests geïntegreerd in GitHub Actions CI-pipelines.",

        experience2Item8:
            "Gewerkt met API-documentatie, Swagger/OpenAPI en testomgevingen.",

        experience2Item9:
            "Defecten gerapporteerd en samengewerkt met developmentteams om softwarekwaliteit te verbeteren.",


        experience2AdditionalTitle:
            "Aanvullende Technische Ondersteuning",

        experience2AdditionalItem1:
            "Praktische hardware- en technische ondersteuning geboden tijdens het traineeship.",

        experience2AdditionalItem2:
            "Geholpen met computerinstallatie, configuratie en probleemoplossing.",

        experience2AdditionalItem3:
            "Hardware- en softwareproblemen gediagnosticeerd.",

        experience2AdditionalItem4:
            "Gebruikers ondersteund bij technische problemen.",

        experience2AdditionalItem5:
            "Systematische probleemoplossing toegepast.",


        experience3Title:
            "Vrijwilliger Python Docent",

        experience3Date:
            "April 2023",

        experience3Item1:
            "Cursisten geïntroduceerd in de basisprincipes van Python-programmeren.",

        experience3Item2:
            "Praktische oefeningen en leeractiviteiten voorbereid.",

        experience3Item3:
            "Cursisten ondersteund bij programmeerproblemen en debugging.",

        experience3Item4:
            "Uitleg aangepast aan verschillende niveaus en achtergronden.",


        experience4Title:
            "ICT-docent",

        experience4Date:
            "Januari 2016 – januari 2022",

        experience4Item1:
            "ICT- en computergerelateerde vakken gegeven aan leerlingen.",

        experience4Item2:
            "Technologiegerichte lessen gepland en uitgevoerd.",

        experience4Item3:
            "Leerlingen ondersteund bij computerhardware en software.",

        experience4Item4:
            "Klaslokaaltechnologie en digitale leermiddelen beheerd.",

        experience4Item5:
            "Technologie geïntegreerd in onderwijs- en leeractiviteiten.",

        experience4Item6:
            "Technische begeleiding en probleemoplossing geboden.",

        experience4Item7:
            "Sterke communicatie-, organisatie- en leiderschapsvaardigheden ontwikkeld.",


        /* Education */

        educationTitle:
            "Opleiding",

        education1Title:
            "IT Traineeship",

        education1Status:
            "Afgerond",

        education2Title:
            "Associate Degree – Computer Science",

        education3Title:
            "Master of Arts – Education, Innovation in Learning and Teaching",

        education4Title:
            "Bachelor's Degree – Primary Education",


        /* Courses */

        coursesTitle:
            "Cursussen & Certificeringen",

        course1Item1:
            "Google IT Support Professional Certificate",

        course2Item1:
            "Jira",

        course2Item2:
            "Git & GitHub",

        course2Item3:
            "Postman",

        course2Item4:
            "Playwright",

        course3Item1:
            "Agile-principes en werkwijzen",

        course3Item2:
            "Scrum-framework",

        course3Item3:
            "Agile softwareontwikkeling",

        course4Item1:
            "Microsoft Intune",

        course4Item2:
            "Microsoft 365 E5",

        courseOngoing:
            "Lopend",

        coursePlanned:
            "Gepland",

        continuousLearningTitle:
            "Continu Leren",

        continuousLearningText:
            "Ik ontwikkel mijn technische vaardigheden voortdurend door middel van praktijkprojecten, professionele trainingen en zelfstandig leren, met speciale aandacht voor IT-support, Microsoft-technologieën, systeembeheer, softwaretesten en automatisering.",


        /* Languages */

        languagesTitle:
            "Taalvaardigheden",

        languageDutch:
            "Nederlands",

        languageDutchLevel:
            "B1+",

        languageEnglish:
            "Engels",

        languageEnglishLevel:
            "Vloeiend",

        languageRussian:
            "Russisch",

        languageRussianLevel:
            "Vloeiend",

        languageTurkish:
            "Turks",

        languageTurkishLevel:
            "Moedertaal",


        /* Hobbies */

        otherTitle:
            "Hobby's",

        hobby1:
            "Schaken",

        hobby2:
            "Badminton",

        hobby3:
            "Houtbewerking",

        hobby4:
            "Wandelen in de natuur en buitenactiviteiten",

        hobby5:
            "Technologische ontwikkelingen volgen",

        hobby6:
            "Nieuwe dingen leren en vaardigheden ontwikkelen",


        /* Contact */

        contactTitle:
            "Contact",

        whatsappLabel:
            "WhatsApp",

        emailLabel:
            "E-mail",

        linkedinLabel:
            "LinkedIn",


        /* Footer */

        footerText:
            "© 2026 Zeki Tazegul. Alle rechten voorbehouden."
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
        "Open navigation menu"
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
            ? "Close navigation menu"
            : "Open navigation menu"
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
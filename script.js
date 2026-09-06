document.addEventListener("DOMContentLoaded", () => {

const translations = {
en: {

navProfile: "Profile",
navSkills: "Skills",
navCompetencies: "Strengths",
navCourses: "Courses",
navOther: "Hobbies",
navExperience: "Experience",
navEducation: "Education",
navLanguages: "Languages",
navContact: "Contact",

heroLabel: "IT PROFESSIONAL",
heroLocation: "Poortugaal – Rotterdam",
heroDescription: "Hands-on IT professional with practical experience in desktop support, workplace management, hardware, software troubleshooting and end-user support.",
contactButton: "Contact Me",
experienceButton: "View Experience",
heroCard1Title: "Desktop Support",
heroCard1Text: "End-user & workplace support",
heroCard2Title: "Hardware & Devices",
heroCard2Text: "Installation, repair & maintenance",
heroCard3Title: "Troubleshooting",
heroCard3Text: "Technical analysis & problem solving",
heroCard4Title: "IT & Software",
heroCard4Text: "Windows, Microsoft 365 & IT tools",

profileEyebrow: "ABOUT ME",
skillsEyebrow: "EXPERTISE",
competenciesEyebrow: "STRENGTHS",
experienceEyebrow: "CAREER",
educationEyebrow: "EDUCATION",
languagesEyebrow: "COMMUNICATION",
otherEyebrow: "PERSONAL INTERESTS",
contactEyebrow: "GET IN TOUCH",

profileTitle: "Profile",
profileText1: "Enthusiastic and service-oriented IT professional with practical experience in desktop support, workplace management, hardware and software support, and technical troubleshooting.",
profileText2: "Experienced in installing, configuring, maintaining and repairing laptops and workstations, as well as supporting end users with daily IT problems.",
profileText3: "I am used to analysing technical problems independently, supporting users directly and explaining solutions clearly. I work accurately, solution-oriented and independently and feel comfortable in an onsite environment with direct end-user contact.",
profileText4: "My combination of practical hardware experience, IT knowledge, software testing and Dutch language skills makes me suitable for Desktop Support, Deskside Support and PC Migration positions.",

skillsTitle: "Core Skills",
desktopSupportTitle: "Desktop & End-User Support",
skillDesktop1: "Onsite end-user support",
skillDesktop2: "Workplace management and user support",
skillDesktop3: "Laptop and desktop installation and configuration",
skillDesktop4: "Hardware installation, maintenance, repair and upgrades",
skillDesktop5: "Software installation and configuration",
skillDesktop6: "Windows 10/11",
skillDesktop7: "Hardware and software troubleshooting",
skillDesktop8: "Technical problem solving",
skillDesktop9: "Technical user support",
skillDesktop10: "User instruction and technical explanation",

migrationTitle: "Device Preparation & Migration",
skillMigration1: "Preparing and configuring laptops and workstations",
skillMigration2: "Windows installation, configuration and updates",
skillMigration3: "Installing and configuring required software",
skillMigration4: "Hardware checks and maintenance before deployment",
skillMigration5: "Repairing and preparing defective laptops for reuse",
skillMigration6: "Supporting users during and after device replacement",
skillMigration7: "Hardware upgrades and maintenance",
skillMigration8: "Systematic documentation of technical work",

technicalSkillsTitle: "IT & Technical Skills",
technicalSkill1: "Windows 10/11 installation, configuration, migration, updates and troubleshooting",
technicalSkill2: "Computer hardware repair and upgrades",
technicalSkill3: "Microsoft 365 / Office",
technicalSkill8: "API testing and technical analysis",

competenciesTitle: "Personal Competencies",
competenciesText: "Service-oriented and customer-focused IT professional with a practical, solution-oriented mindset. Comfortable working independently and taking responsibility for assigned tasks, while contributing effectively as part of a team. Open to change and able to adapt quickly to new technologies, systems, processes, and working environments. Professional and calm under pressure, with strong communication skills, attention to detail, and a strong commitment to continuous learning and improvement.",

experienceTitle: "Work Experience",
experience1Title: "ICT Administrator",
experience1Bullet1: "Responsible for daily IT management and user support within the school environment.",
experience1Bullet2: "Installing, configuring and maintaining laptops, workstations and other IT equipment.",
experience1Bullet3: "Preparing devices for teachers, administration and students.",
experience1Bullet4: "Resolving hardware and software issues and performing technical troubleshooting.",
experience1Bullet5: "Supporting end users with daily IT, workplace and software problems.",
experience1Bullet6: "Performing system updates, maintenance and hardware upgrades.",
experience1Bullet7: "Analysing technical problems and independently finding appropriate solutions.",
experience1Bullet8: "Repairing and maintaining computer equipment to support workplace continuity.",
experience1Bullet9: "Guiding users in the use of hardware, software and digital systems.",
experience1Bullet10: "Identifying recurring IT problems and contributing to practical improvements.",

experience2Title: "Software Tester",
experience2Bullet1: "Completed an IT traineeship with practical experience as a software tester in a professional IT environment.",
experience2Bullet2: "Performed functional and technical testing within a software development project.",
experience2Bullet3: "Analysed error messages, technical problems and unexpected system behaviour.",
experience2Bullet4: "Performed systematic troubleshooting and root-cause analysis.",
experience2Bullet5: "Worked with APIs, test environments and various IT tools.",
experience2Bullet6: "Documented test results, technical findings and defects.",
experience2Bullet7: "Collaborated with developers and IT professionals to analyse and resolve technical issues.",
experience2Bullet8: "Worked independently on technical tasks and followed up on findings.",
experience2Bullet9: "Experience with Playwright, Postman, API testing, Git, GitHub Actions and k6.",

volunteerHardwareTitle: "Additional Volunteer Hardware Support at Motopp",
hardwareBullet1: "Maintained and repaired defective Motopp laptops.",
hardwareBullet2: "Investigated hardware problems and identified technical defects.",
hardwareBullet3: "Maintained laptops, checked components and performed hardware upgrades where required.",
hardwareBullet4: "Tested repaired devices and prepared them for reuse.",
hardwareBullet5: "Independently resolved technical problems to make available hardware usable again.",

experience3Title: "Volunteer Python Instructor",
experience3Bullet1: "Delivered introductory Python lessons for participants interested in IT.",
experience3Bullet2: "Supported participants with technical exercises and problem solving.",
experience3Bullet3: "Explained technical subjects clearly and accessibly.",
experience3Bullet4: "Provided individual guidance for technical questions.",

experience4Title: "ICT Teacher",
experience4Bullet1: "Delivered lessons in digital skills and basic IT.",
experience4Bullet2: "Supported students and colleagues in using computers and digital tools.",
experience4Bullet3: "Assisted users with technical questions and problems.",
experience4Bullet4: "Worked with different digital learning environments and educational software.",
experience4Bullet5: "Installed and used software and digital tools within the educational environment.",
experience4Bullet6: "Contributed to the daily use and effective implementation of technology.",
experience4Bullet7: "Communicated daily with users with different levels of technical knowledge.",

educationTitle: "Education",
education1: "IT Traineeship – completed. IT bootcamp and practical internship successfully completed in a professional IT environment.",
education2: "Associate Degree – Computer Science",
education3: "Master of Arts – Education, Innovation in Learning and Teaching",
education4: "Bachelor's Degree – Primary Education",

languagesTitle: "Languages",
dutchLanguage: "Dutch",
englishLanguage: "English",
russianLanguage: "Russian",
turkishLanguage: "Turkish",
fluent: "Fluent",
native: "Native",

otherTitle: "Hobbies",
other1: "Chess",
other2: "Badminton",
other3: "Woodworking",
other4: "Nature walks and outdoor activities",
other5: "Following technology trends",
other6: "Learning new things and developing new skills",


contactTitle: "Contact",
phoneLabel: "Phone:",
emailLabel: "Email:",
locationLabel: "Location:",

footerText: "All rights reserved."

},

nl: {

navProfile: "Profiel",
navSkills: "Vaardigheden",
navCompetencies: "Sterke punten",
navCourses: "Cursussen",
navOther: "Hobby's",
navExperience: "Werkervaring",
navEducation: "Opleiding",
navLanguages: "Talen",
navContact: "Contact",

heroLabel: "IT PROFESSIONAL",
heroLocation: "Poortugaal – Rotterdam",
heroDescription: "Praktisch ingestelde IT-professional met ervaring in desktop support, werkplekbeheer, hardware, softwaretroubleshooting en ondersteuning van eindgebruikers.",
contactButton: "Neem contact op",
experienceButton: "Werkervaring bekijken",
heroCard1Title: "Desktop Support",
heroCard1Text: "Ondersteuning van eindgebruikers en werkplekken",
heroCard2Title: "Hardware & Devices",
heroCard2Text: "Installatie, reparatie & onderhoud",
heroCard3Title: "Troubleshooting",
heroCard3Text: "Technische analyse & probleemoplossing",
heroCard4Title: "IT & Software",
heroCard4Text: "Windows, Microsoft 365 & IT-tools",

profileEyebrow: "OVER MIJ",
skillsEyebrow: "EXPERTISE",
competenciesEyebrow: "STERKE PUNTEN",
experienceEyebrow: "WERKERVARING",
educationEyebrow: "OPLEIDING",
languagesEyebrow: "COMMUNICATIE",
otherEyebrow: "PERSOONLIJKE INTERESSES",
contactEyebrow: "NEEM CONTACT OP",

profileTitle: "Profiel",
profileText1: "Enthousiaste en servicegerichte IT-professional met praktische ervaring in desktop support, werkplekbeheer, hardware- en softwareondersteuning en technische troubleshooting.",
profileText2: "Ervaring met het installeren, configureren, onderhouden en repareren van laptops en werkstations en met het ondersteunen van eindgebruikers bij dagelijkse IT-problemen.",
profileText3: "Ik ben gewend om technische problemen zelfstandig te analyseren, gebruikers persoonlijk te ondersteunen en oplossingen duidelijk uit te leggen. Ik werk nauwkeurig, oplossingsgericht en zelfstandig en voel mij comfortabel in een onsite omgeving met direct end-user contact.",
profileText4: "Mijn combinatie van praktische hardware-ervaring, IT-kennis, software testing en Nederlandse taalvaardigheid maakt mij geschikt voor functies binnen Desktop Support, Deskside Support en PC Migration.",

skillsTitle: "Kernvaardigheden",
desktopSupportTitle: "Desktop & End-User Support",
skillDesktop1: "Onsite ondersteuning van eindgebruikers",
skillDesktop2: "Werkplekbeheer en gebruikerssupport",
skillDesktop3: "Installatie en configuratie van laptops en desktops",
skillDesktop4: "Hardware-installatie, onderhoud, reparatie en upgrades",
skillDesktop5: "Software-installatie en configuratie",
skillDesktop6: "Windows 10/11",
skillDesktop7: "Hardware- en softwaretroubleshooting",
skillDesktop8: "Storingsanalyse en probleemoplossing",
skillDesktop9: "Ondersteuning bij technische gebruikersproblemen",
skillDesktop10: "Gebruikersinstructie en technische uitleg",

migrationTitle: "Device Preparation & Migration",
skillMigration1: "Voorbereiden en configureren van laptops en werkstations",
skillMigration2: "Windows-installatie, configuratie en updates",
skillMigration3: "Installeren en configureren van benodigde software",
skillMigration4: "Hardwarecontrole en onderhoud vóór ingebruikname",
skillMigration5: "Repareren en opnieuw gebruiksklaar maken van defecte laptops",
skillMigration6: "Ondersteunen van gebruikers tijdens en na device replacement",
skillMigration7: "Hardware-upgrades en onderhoud",
skillMigration8: "Systematisch opvolgen en documenteren van technische werkzaamheden",

technicalSkillsTitle: "IT & Technische Vaardigheden",
technicalSkill1: "Windows 10/11 installatie, configuratie, migratie, updates en troubleshooting",
technicalSkill2: "Computerhardware reparatie en upgrades",
technicalSkill3: "Microsoft 365 / Office",
technicalSkill8: "API testing en technische analyse",

competenciesTitle: "Persoonlijke Competenties",
competenciesText: "Servicegerichte en klantgerichte IT-professional met een praktische en oplossingsgerichte instelling. Ik werk zelfstandig en neem verantwoordelijkheid voor mijn taken, terwijl ik ook effectief en prettig samenwerk binnen een team. Ik sta open voor veranderingen en kan mij snel aanpassen aan nieuwe technologieën, systemen, processen en werkomgevingen. Ik blijf professioneel en rustig onder druk en beschik over sterke communicatieve vaardigheden, oog voor detail en een sterke motivatie om mij voortdurend te blijven ontwikkelen.",

experienceTitle: "Werkervaring",
experience1Title: "ICT-beheerder",
experience1Bullet1: "Verantwoordelijk voor het dagelijkse IT-beheer en de ondersteuning van gebruikers binnen de schoolomgeving.",
experience1Bullet2: "Installeren, configureren en onderhouden van laptops, werkstations en andere IT-apparatuur.",
experience1Bullet3: "Voorbereiden van devices voor gebruik door leerkrachten, administratie en leerlingen.",
experience1Bullet4: "Oplossen van hardware- en softwarestoringen en uitvoeren van technische troubleshooting.",
experience1Bullet5: "Ondersteunen van eindgebruikers bij dagelijkse IT-, werkplek- en softwareproblemen.",
experience1Bullet6: "Uitvoeren van systeemupdates, onderhoud en hardware-upgrades.",
experience1Bullet7: "Analyseren van technische problemen en zelfstandig zoeken naar passende oplossingen.",
experience1Bullet8: "Repareren en onderhouden van computerapparatuur om de continuïteit van de digitale werkplek te ondersteunen.",
experience1Bullet9: "Gebruikers begeleiden bij het gebruik van hardware, software en digitale systemen.",
experience1Bullet10: "Signaleren van terugkerende IT-problemen en bijdragen aan praktische verbeteringen van de digitale werkplek.",

experience2Title: "Software Tester",
experience2Bullet1: "Afgerond IT-traineeship met praktijkervaring als softwaretester in een professionele IT-omgeving.",
experience2Bullet2: "Uitvoeren van functionele en technische tests binnen een softwareontwikkelingsproject.",
experience2Bullet3: "Analyseren van foutmeldingen, technische problemen en onverwacht systeemgedrag.",
experience2Bullet4: "Systematisch uitvoeren van troubleshooting en root-cause-analyse.",
experience2Bullet5: "Werken met API's, testomgevingen en verschillende IT-tools.",
experience2Bullet6: "Documenteren van testresultaten, technische bevindingen en defects.",
experience2Bullet7: "Samenwerken met developers en andere IT-professionals om technische problemen te analyseren en op te lossen.",
experience2Bullet8: "Zelfstandig uitvoeren van technische werkzaamheden en opvolgen van bevindingen.",
experience2Bullet9: "Ervaring met Playwright, Postman, API testing, Git, GitHub Actions en k6.",

volunteerHardwareTitle: "Aanvullende vrijwillige hardware-ondersteuning bij Motopp",
hardwareBullet1: "Onderhoud en reparatie uitgevoerd aan defecte laptops van Motopp.",
hardwareBullet2: "Hardwareproblemen onderzocht en technische defecten geïdentificeerd.",
hardwareBullet3: "Laptops onderhouden, onderdelen gecontroleerd en waar nodig hardware-upgrades uitgevoerd.",
hardwareBullet4: "Defecte devices na reparatie opnieuw gecontroleerd en gebruiksklaar gemaakt.",
hardwareBullet5: "Zelfstandig technische problemen opgelost om beschikbare hardware opnieuw inzetbaar te maken.",

experience3Title: "Vrijwillig Python-instructeur",
experience3Bullet1: "Introductielessen Python verzorgd voor deelnemers met interesse in IT.",
experience3Bullet2: "Deelnemers ondersteund bij technische opdrachten en probleemoplossing.",
experience3Bullet3: "Technische onderwerpen op een duidelijke en toegankelijke manier uitgelegd.",
experience3Bullet4: "Deelnemers individueel begeleid bij technische vragen.",

experience4Title: "ICT-docent",
experience4Bullet1: "Lessen verzorgd in digitale vaardigheden en basis-IT.",
experience4Bullet2: "Leerlingen en collega's ondersteund bij het gebruik van computers en digitale middelen.",
experience4Bullet3: "Gebruikers ondersteund bij technische vragen en problemen.",
experience4Bullet4: "Gewerkt met verschillende digitale leeromgevingen en educatieve software.",
experience4Bullet5: "Software en digitale hulpmiddelen geïnstalleerd en gebruikt binnen de onderwijsomgeving.",
experience4Bullet6: "Bijgedragen aan de dagelijkse inzet en het effectieve gebruik van technologie.",
experience4Bullet7: "Dagelijks gecommuniceerd met gebruikers met verschillende niveaus van technische kennis.",

educationTitle: "Opleiding",
education1: "IT Traineeship – afgerond. IT-bootcamp en praktijkstage succesvol afgerond binnen een professionele IT-omgeving.",
education2: "Associate Degree – Computer Science",
education3: "Master of Arts – Education, Innovation in Learning and Teaching",
education4: "Bacheloropleiding – Basisonderwijs (PABO)",

languagesTitle: "Talen",
dutchLanguage: "Nederlands",
englishLanguage: "Engels",
russianLanguage: "Russisch",
turkishLanguage: "Turks",
fluent: "Vloeiend",
native: "Moedertaal",

otherTitle: "Hobby's",
other1: "Schaken",
other2: "Badminton",
other3: "Houtbewerking",
other4: "Wandelen in de natuur en buitenactiviteiten",
other5: "Technologische trends volgen",
other6: "Nieuwe dingen leren en nieuwe vaardigheden ontwikkelen",


contactTitle: "Contact",
phoneLabel: "Telefoon:",
emailLabel: "E-mail:",
locationLabel: "Locatie:",

footerText: "Alle rechten voorbehouden."

}

};

function setLanguage(language) {

const selectedTranslations = translations[language];

if (!selectedTranslations) {
return;
}

document.documentElement.lang = language;

document.querySelectorAll("[data-i18n]").forEach((element) => {

const key = element.dataset.i18n;

if (Object.prototype.hasOwnProperty.call(selectedTranslations, key)) {
element.textContent = selectedTranslations[key];
}

});

const sectionEyebrows = {

"#profile .section-eyebrow":
selectedTranslations.profileEyebrow,

"#skills .section-eyebrow":
selectedTranslations.skillsEyebrow,

"#competencies .section-eyebrow":
selectedTranslations.competenciesEyebrow,

"#experience .section-eyebrow":
selectedTranslations.experienceEyebrow,

"#education .section-eyebrow":
selectedTranslations.educationEyebrow,

"#languages .section-eyebrow":
selectedTranslations.languagesEyebrow,

"#other .section-eyebrow":
selectedTranslations.otherEyebrow,

"#contact .section-eyebrow":
selectedTranslations.contactEyebrow

};

Object.entries(sectionEyebrows).forEach(([selector, text]) => {

const element = document.querySelector(selector);

if (element && text) {
element.textContent = text;
}

});

const englishButton =
document.getElementById("language-en");

const dutchButton =
document.getElementById("language-nl");

if (englishButton) {
englishButton.classList.toggle(
"active",
language === "en"
);
}

if (dutchButton) {
dutchButton.classList.toggle(
"active",
language === "nl"
);
}

document.title = "Zeki Tazegul | IT Professional";

localStorage.setItem(
"preferredLanguage",
language
);

}

/* =========================================
LANGUAGE SWITCHER
========================================= */

const englishButton =
document.getElementById("language-en");

const dutchButton =
document.getElementById("language-nl");

if (englishButton) {

englishButton.addEventListener(
"click",
() => setLanguage("en")
);

}

if (dutchButton) {

dutchButton.addEventListener(
"click",
() => setLanguage("nl")
);

}

/* =========================================
MOBILE SANDWICH MENU
========================================= */

const mobileMenuToggle =
document.getElementById("mobile-menu-toggle");

const mobileNavigation =
document.getElementById("mobile-navigation");

if (mobileMenuToggle && mobileNavigation) {

mobileMenuToggle.addEventListener("click", () => {

const isOpen =
mobileNavigation.classList.toggle("menu-open");

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

});

/* Close menu after selecting a navigation link */

mobileNavigation
.querySelectorAll("a")
.forEach((link) => {

link.addEventListener("click", () => {

mobileNavigation.classList.remove(
"menu-open"
);

mobileMenuToggle.classList.remove(
"active"
);

mobileMenuToggle.setAttribute(
"aria-expanded",
"false"
);

mobileMenuToggle.setAttribute(
"aria-label",
"Open navigation menu"
);

});

});

/* Close menu when switching back to desktop */

window.addEventListener("resize", () => {

if (window.innerWidth > 768) {

mobileNavigation.classList.remove(
"menu-open"
);

mobileMenuToggle.classList.remove(
"active"
);

mobileMenuToggle.setAttribute(
"aria-expanded",
"false"
);

mobileMenuToggle.setAttribute(
"aria-label",
"Open navigation menu"
);

}

});

}

const savedLanguage =
localStorage.getItem("preferredLanguage");

if (savedLanguage === "nl" || savedLanguage === "en") {

setLanguage(savedLanguage);

} else {

setLanguage("en");

}

console.log(
"Zeki Tazegul CV website loaded successfully."
);

});
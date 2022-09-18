/*
    Project object template: 
    {
        title: "Project Title",
        description: "Lorem ipsum",
        image: [""],
        techStacks: "",
        links: { code: "", live: "" },
    },

*/

const projectList = [
    {
        // * CALCULATOR * //
        title: "Calculator",
        description:
            "A project that recreates a calculator based on an image of choice capable of handling basic mathematical equations.",
        image: "https://github.com/edlyn-e/calculator/blob/main/calculatorApp.png?raw=true",
        techStacks: ["HTML", "Sass", "CSS", "JavaScript"],
        links: {
            code: "https://github.com/edlyn-e/calculator",
            live: "https://edlyn-e.github.io/calculator/",
        },
    },
    {
        // * MORSE TRANSLATOR * //
        title: "Morse Translator",
        description:
            "Inpired by a childhood favourite Etch-a-Sketch, I created an application that allows for the translation of English letters to Morse characters and vice versa using JavaScript.",
        image: "https://github.com/edlyn-e/morse-translator/blob/main/morsetranslator.png?raw=true",
        techStacks: ["HTML", "CSS", "Sass", "JavaScript"],
        links: {
            code: "https://github.com/edlyn-e/morse-translator",
            live: "",
        },
    },
    {
        // * GOOGLE BOOKS API * //
        title: "Opus Invenire",
        description:
            "Starting a new chapter, this project involves asynchronous programming and DOM manipulation that allows the user to search for a book using the Google Books API.",
        image: "https://github.com/edlyn-e/opus-invenire/blob/main/google-book-api.png?raw=true",
        techStacks: ["JavaScript", "Sass", "React"],
        links: {
            code: "https://github.com/edlyn-e/opus-invenire/blob/main/README.md",
            live: "https://edlyn-e.github.io/opus-invenire/",
        },
    },
    {
        // * ECOMMERCE WEBSITE * //
        title: "Shibui",
        description:
            "Referring to a simple aesthetic, this project focusses on using React and Firestore to create an e-commerce website complete with a functioning cart. Due to Firestore constraits, the live version is not available for view.",
        image: "https://github.com/edlyn-e/shibui/blob/main/assets/header2.png?raw=true",
        techStacks: ["JavaScript", "Sass", "React"],
        links: {
            code: "https://github.com/edlyn-e/shibui",
            live: "https://github.com/edlyn-e/shibui",
        },
    },
];

export default projectList;

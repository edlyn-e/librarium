/*
    Project object template: 
    {
        title: "Project Title",
        description: "Lorem ipsum",
        images: "",
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
        images: "",
        techStacks: ["HTML", "Sass", "CSS", "JavaScript"]
        links: { code: "https://github.com/edlyn-e/calculator", live: "" },
    },
    {
        // * MORSE TRANSLATOR * //
        title: "Morse Translator",
        description: "Inpired by a childhood favourite Etch-a-Sketch, I created an application that allows for the translation of English letters to Morse characters and vice versa using JavaScript.",
        images: "",
        techStacks: ["HTML", "CSS","Sass", "JavaScript"]
        links: { code: "https://github.com/edlyn-e/morse-translator", live: "" },
    },
    {
        // * GOOGLE BOOKS API * //
        title: "Opus Invenire",
        description: "Starting a new chapter, this project involves asynchronous programming and DOM manipulation that allows the user to search for a book using the Google Books API.",
        images: "",
        techStacks: ["JavaScript", "Sass", "React",]
        links: { code: "https://github.com/edlyn-e/opus-invenire/blob/main/README.md", live: "" },
    },
        {
        // * ECOMMERCE WEBSITE * //
        title: "Shibui",
        description: "Referring to a simple aesthetic, this project focusses on using React and Firestore to create an e-commerce website that accounts for stock levels and cart use.",
        images: "",
        techStacks:[ "JavaScript", "Sass", "React",]
        links: { code: "https://github.com/edlyn-e/shibui", live: "" },
    },

];

export default projectList;

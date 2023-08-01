const sentenceToManipulateInput = document.getElementById("sentence-input-for-character-manipulation");
const maxLengthBeforeCuttingInput = document.getElementById("length-of-cut");
const typeOfCutSelect = document.getElementById("type-of-sentence-cut");
const typeOfTransformationSelect = document.getElementById("type-of-transformation");

const resultOfWordContainer = document.getElementById("word-manipulation-result");
const generateManipulatedWord = document.getElementById("generate-manipulated-word");

let sentence = "";
let maxLengthBeforeCutting = 0;

function transformLettersToUppercase() {
    const typeOfTransformation = typeOfTransformationSelect.value;

    if (typeOfTransformation === "all-the-characters") {
        const characters = sentence.split("");
        const newWord = [];
        for (const char of characters) {
            newWord.push(char.toUpperCase());
        }

        return newWord.join("");
    }

    if (typeOfTransformation === "each-word") {
        const words = sentence.split(" ");
        const newSentence = [];
        for (const word of words) {
            const transformedLetter = word.charAt(0).toUpperCase();
            const characters = word.split("");
            characters.shift();
            characters.unshift(transformedLetter);
            newSentence.push(characters.join(""));
        }

        return newSentence.join(" ");
    }
};

sentenceToManipulateInput.addEventListener("keyup", (e) => {
    sentence = e.target.value;
});

maxLengthBeforeCuttingInput.addEventListener("change", (e) => {
    maxLengthBeforeCutting = e.target.value;
});

generateManipulatedWord.addEventListener("click", () => {
    let text = transformLettersToUppercase();
    let cutText;
    const typeOfCut = typeOfCutSelect.value;
    if (maxLengthBeforeCutting !== 0) {
        if (typeOfCut === "by-character") {
            cutText = text.split("").splice(0, maxLengthBeforeCutting).join("");
        }

        if (typeOfCut === "by-word") {
            cutText = text.split(" ").splice(0, maxLengthBeforeCutting).join(" ");
        }
    }
    

    if (cutText && text.length !== cutText.length) {
        cutText += "...";
    }

    resultOfWordContainer.textContent = cutText || text;
});
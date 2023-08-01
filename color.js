const generateColorButton = document.getElementById("generate-color");
const colorFormat = document.getElementById("color-type");
const colorResultText = document.getElementById("color-result-text");
const colorResult = document.getElementById("color-result");

function generateHexColor() {
    const hexLetters = "0123456789abcdef".split("");
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hexLetters[Math.floor(Math.random() * hexLetters.length)];
    };

    return color;
};

function generateRgbColor() {
    const colors = [];
    let color = "rgb";
    for (let i = 0; i < 3; i++) {
        colors.push(Math.floor(Math.random() * 255));
    };

    color += "(" + colors.join(", ") + ")";

    return color;
};

function generateHslColor() {
    const colors = [];
    let color = "hsl";

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            colors.push(Math.floor(Math.random() * 360));
        } else {
            colors.push(Math.floor(Math.random() * 100) + "%");
        }
    };

    color += "(" + colors.join(", ") + ")";

    return color;
};

function generateColor() {
    const format = colorFormat.value;
    let color;
    if (format === "hex") {
        color = generateHexColor();
    }

    if (format === "rgb") {
        color = generateRgbColor();
    }

    if (format === "hsl") {
        color = generateHslColor();
    }

    colorResultText.textContent = color;
    colorResult.style.background = color;
};

generateColorButton.addEventListener("click", generateColor);
generateColor();
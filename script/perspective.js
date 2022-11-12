// import "./styles.css";

const container = document.querySelector(".container");
const textWrapper = document.querySelector(".text-wrapper");
const text = document.querySelector(".text-wrapper h1");
const textDimensions = textWrapper.getBoundingClientRect();

let screenLog = document.querySelector("#screen-log");

// container.addEventListener("mousemove", e => animateOnMouseOver(e));
// text transforms only if mouse is over it 👇
textWrapper.addEventListener("mousemove", e => animateOnMouseOver(e));

function animateOnMouseOver(e) {
    const cursorPositionInsideText = {
        x: e.clientX - Math.round(textDimensions.left),
        y: e.clientY - Math.round(textDimensions.top)
    };

    const deg = {
        x: 15 * ((cursorPositionInsideText.x / textDimensions.width) * 2 - 1),
        y: 15 * ((cursorPositionInsideText.y / textDimensions.height) * 2 - 1)
        // if the mouse is inside the textWrapper, this object will have values from -15 to 15
        // try 45
    };

    text.style.transform = `rotateX(${-deg.y}deg)  rotateY(${deg.x}deg)`;

    //   screenLog.innerText = `
    //     X= ${deg.x}
    //     Y= ${deg.y}
    //     `;
}

// change the perspective value in styles.css

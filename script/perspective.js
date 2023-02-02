// import "./styles.css";

// const container = document.querySelector(".container");
// const wrapper = document.querySelector(".text-wrapper");
// const text = document.querySelector(".text-wrapper h1");



// container.addEventListener("mousemove", e => animateOnMouseOver(e));
// text transforms only if mouse is over it 👇

function perspectiveInit() {
    const wrappers = document.getElementsByClassName("perspective");
    for (let i = 0; i < wrappers.length; i++) {

        wrappers[i].addEventListener("mousemove", e => animateOnMouseOver(e));
        wrappers[i].addEventListener("mouseout", e => animateOnMouseOut(e));
        // wrappers[i].addEventListener("mouseover", e => animateOnMouseOver(e));
    }
}

function animateOnMouseOver(e) {
    const textDimensions = e.currentTarget.getBoundingClientRect();

    const cursorPositionInsideText = {
        x: e.clientX - Math.round(textDimensions.left),
        y: e.clientY - Math.round(textDimensions.top)
    };

    const deg = {
        x: 15 * ((cursorPositionInsideText.x / textDimensions.width) * 2 - 1),
        y: 15 * ((cursorPositionInsideText.y / textDimensions.height) * 2 - 1)
        // if the mouse is inside the wrapper, this object will have values from -15 to 15
        // try 45
    };

    e.currentTarget.style.transform = `rotateX(${-deg.y}deg)  rotateY(${deg.x}deg)`;

    //   screenLog.innerText = `
    //     X= ${deg.x}
    //     Y= ${deg.y}
    //     `;
}

function animateOnMouseOut(e) {
    // if (e.relatedTarget !=  )
    e.currentTarget.style.transform = `rotateX(${0}deg)  rotateY(${0}deg)`;
}

// change the perspective value in styles.css

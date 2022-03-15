
const headerColorOptions = [
    'red',
    'blue',
    'green',
    'pink',
    'purple'
]

document.addEventListener('DOMContentLoaded', function () {
    const changeHeaderHTML = $1('#change-header-text');
    changeHeaderHTML.addEventListener("click", changeHeaderText);

    const changeHeaderCSS = $1('#change-header-style');
    changeHeaderCSS.addEventListener("click", changeHeaderStyle);

    const alertBtn = $1('#alert-btn');
    alertBtn.addEventListener("click", function () {
        alert( $1('#text-alert-input').value );
    });

    const getRandNumBtn = $1('#get-num-btn');
    getRandNumBtn.addEventListener('click', getRandNum);
});

function changeHeaderText() {
    const headers = $('h1');
    for (const header of headers) {
        header.innerHTML = 'Killer Fish';
    }
}

function changeHeaderStyle() {
    const headers = $('h1');
    for (const header of headers) {
        let colorIndex = Math.floor(Math.random() * headerColorOptions.length);
        header.style.color = headerColorOptions[colorIndex];
    }
}

function getRandNum() {
    const min = parseInt( $1('#min-num-input').value );
    const max = parseInt( $1('#max-num-input').value );
    if (min && max) {
        const randNum = Math.floor(Math.random() * (max - min) + min);
        $1('#random-num-output').innerHTML = randNum.toString();
    }

}


/*** HELPER FUNCTIONS ***/
function $(selector, context) {
    return (context || document).querySelectorAll(selector);
}
// select the first match only, context is optional
function $1(selector, context) {
    return (context || document).querySelector(selector);
}

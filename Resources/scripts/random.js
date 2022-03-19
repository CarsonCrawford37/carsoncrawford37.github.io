
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
        $1('#random-num-output').innerHTML = "<h2 class='col-12'>" + randNum.toString() + " Spongebobs!</h2>";
        let spongebob = '<br /> <img class="mx-auto d-block row col" style="padding: 15px;"src="https://thumbs.gfycat.com/SnarlingCreativeEnglishsetter-size_restricted.gif" />';

        for (let i = 0; i < randNum; i++) {
            $1('#random-num-output').innerHTML += spongebob;
        }
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

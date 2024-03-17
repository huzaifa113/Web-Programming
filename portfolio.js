let c1 = 0; c2 = 0;

let projs = document.getElementById("comProjs");
let custs = document.getElementById("cusRevs");

custs.innerText = c2;


let counter_1 = setInterval(function () {
    c1++;
    projs.innerText = c1;
    if( c1 == 300 ) {
        clearInterval(counter_1)
    }
}, 10);


let counter_2 = setInterval(function () {
    c2++;
    custs.innerText = c2;
    if( c2 == 400 ) {
        clearInterval(counter_2)
    }
}, 10);

function wordsChanging() {
    let word = ["-- CODER", "-- LEARNER", "-- DESIGNER", "-- CREATOR"];
    let inrHt = document.getElementById("changing");
    let index = 0;

    function changeWord() {
        inrHt.classList.add('fall-backward');

        setTimeout(() => {
            inrHt.innerText = word[index];
            inrHt.classList.remove('fall-backward');
            inrHt.classList.add('stand-from-front');
        }, 500);

        setTimeout(() => {
            inrHt.classList.remove('stand-from-front');
        }, 1000);

        index = (index + 1) % word.length;
    }

    setInterval(changeWord, 2000);
}

wordsChanging();


function displayVideo() {
    var videoContainer = document.getElementById("videoContainer");
    videoContainer.style.display = "block";
}
function closeVideo() {
    var videoContainer = document.getElementById("videoContainer");
    videoContainer.style.display = "none";
}
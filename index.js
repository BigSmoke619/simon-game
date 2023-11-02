// g = 1   r= 2  y =3   b =4
let seq = []
let myseq = []
let best = localStorage.getItem("best_score")
let buttoncolour = ["red", " yellow ", "blue", "green"]
$(".bestscore").text("Best Score: " + localStorage.getItem("best_score"))
let gamep = false
let lvl = 0;

function animatedpress(currentcolur) {
    $(currentcolur).addClass('pressed')
    setTimeout(() => {
        $(currentcolur).removeClass('pressed');
    }, 100);
    console.log('animations' + currentcolur)
}

function changeh1() {
    $(".hh1").text("Game Started");
    console.log("scsc")
}

function currentscor() {
    $(".currentscore").text("Current Score:" + myseq.length);
}

function bestscore() {
    if (best < myseq.length) {
        localStorage.setItem("best_score", myseq.length)
        $(".bestscore").text("Best Score: " + localStorage.getItem("best_score"))
        console.log("bs")
    }
}


function renderseq() {
    if (seq[lvl] == 'g') {
        render(green)
        animatedpress(green)
    }
    if (seq[lvl] == 'r') {
        render(red)
        animatedpress(red)
    }
    if (seq[lvl] == 'y') {
        render(yellow)
        animatedpress(yellow)
    }
    if (seq[lvl] == 'b') {
        render(blue)
        animatedpress(blue)
    }
}

function nextSequence() {
    let r = parseInt(Math.random() * 4 + 1)

    if (r === 1) {
        r = "g"
    }
    if (r === 2) {
        r = "r"
    }
    if (r === 3) {
        r = "y"
    }
    if (r === 4) {
        r = "b"
    }
    seq.push(r)
    console.log("called nextseq : " + r)
}

function render(x) {
    console.log(myseq)
    console.log(seq)
    changeh1();
    currentscor();
    bestscore()
    var dio
    $(x).fadeOut(25, function() {
        $(x).fadeIn()
    })
    if (x === 'green') {
        dio = new Audio('./sounds/green.mp3')
        dio.muted = true;
        dio.play()
    }
    if (x === 'yellow') {
        dio = new Audio('./sounds/yellow.mp3')
        dio.muted = true;
        dio.play()
    }
    if (x === 'blue') {
        dio = new Audio('./sounds/blue.mp3')
        dio.muted = true;
        dio.play()
    }
    if (x === 'red') {
        dio = new Audio('./sounds/red.mp3')
        dio.muted = true;
        dio.play()
    }
    lvl++
}

$(document).on("keydown", function(event) {

    if (seq.length < 1) {
        changeh1()
        gamep = true
        nextSequence()
        renderseq()
        console.log("else")
        console.log(myseq)
        console.log(seq)
    } else {
        if (event.key === 'w' || event.key === 'W') {
            myseq.push("g")
            nextSequence()
            render(green)
            animatedpress(green)
        }
        if (event.key === 'a' || event.key === 'A') {
            myseq.push("r")
            nextSequence()
            render(red)
            animatedpress(red)
        }
        if (event.key === 's' || event.key === 'S') {
            myseq.push("y")
            nextSequence()
            render(yellow)
            animatedpress(yellow)
        }
        if (event.key === 'd' || event.key === 'D') {
            myseq.push("b")
            nextSequence()
            render(blue)
            animatedpress(blue)
        }
    }
})

$("[ id='green']").click(function() {
    W: myseq.push("g")
    nextSequence()
    render(green)
    animatedpress(green)
})
$("[ id='yellow']").click(function() {
    S: myseq.push("y")
    nextSequence()
    render(yellow)
    animatedpress(yellow)
})
$("[ id='red']").click(function() {
    A: myseq.push("r")
    nextSequence()
    render(red)
    animatedpress(red)
})
$("[ id='blue']").click(function() {
    D: myseq.push("b")
    nextSequence()
    render(blue)
    animatedpress(blue)
})

function cheackmyseq() {
    if (myseq[myseq.length - 1] === seq[seq.length - 1]) {
        console.log("correct")
    } else {
        console.log("not correct")
        gamep = false
    }
}
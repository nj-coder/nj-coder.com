(function () {

    var typewriter = new Typewriter(document.getElementById('typewriter'), {
        loop: false,
        autoStart: true
    });

    typewriter
        .typeString('Hi')
        .pauseFor(1000)
        .deleteChars(2)
        .typeString('I\'m <b>Nidhin Joseph</b>')
        .start();

    setTimeout(function () {
        document.querySelector('.links').style.bottom = '-0px';
    }, 6000);

})();
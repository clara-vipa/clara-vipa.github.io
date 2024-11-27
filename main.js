var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Licenciada en Estudios Sociales')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteChars(33)
    .typeString('<strong>¡Entusiasta de las ciencias sociales!</strong>')
    .pauseFor(2500)
    .start();
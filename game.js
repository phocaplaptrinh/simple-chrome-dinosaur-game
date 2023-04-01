let screen = new Two({
    width: 500,
    height: 300,
    type: Two.Types.canvas
});
screen.appendTo(document.body);

let dinosaur = screen.makeSprite('dinosaur.png', 50, 200);
dinosaur.scale = 0.5;

let ground = screen.makeLine(0, 235, 500, 235);

let cactus = screen.makeSprite('cactus.png', 600, 200);
cactus.scale = 0.5;

document.addEventListener('keypress', function(e) {
    if (e.key == ' ' && dinosaur.position.y >= 200) {
        dinosaur.position.y -= 150;
    }
})

function update() {
    cactus.position.x -= 5;

    if (dinosaur.position.y <= 200) {
        dinosaur.position.y += 3;
    }

    if (cactus.position.x < 0) {
        cactus.position.x = 600;
    }

    if (dinosaur.position.x + 35 >
        cactus.position.x - 15 &&
        dinosaur.position.y + 35 >
        cactus.position.y - 35
    ) {
        screen.pause();
    }
}

screen.bind('update', update);

screen.play();
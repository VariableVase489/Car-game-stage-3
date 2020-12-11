class Form {
    constructor() {
        this.input = createInput("");
        this.input.position(displayWidth/2 - 50, displayHeight/2 - 100);

        this.sbutton = createButton("Start");
        this.sbutton.position(displayWidth/2 + 100, displayHeight/2 - 50);

        this.greeting = createElement("h2");
        this.greeting.position(displayWidth/2 - 100, displayHeight/2);

        this.rbutton = createButton("Reset");
        this.rbutton.position(displayWidth - 100, 100)
    }

    display() {
        var title = createElement("h1");
        title.position(displayWidth/2 - 100, 20);
        title.html("Car Racing Game");        

        this.sbutton.mousePressed(() => {
            this.input.hide();
            this.sbutton.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.updateCount(playerCount);
            player.index = playerCount;
            player.update();
            this.greeting.html("Hello There " + player.name);
        });

        this.rbutton.mousePressed(() => {
            game.updateState(0);
            player.updateCount(0);
            player.updatePAE(0);
            db.ref("players").remove();
        });

    }
}


class Player{
    constructor(){
        this.name = "";
        this.distance = 750;
        this.index = 0;
        this.rank = 0;
    }

    getCount(){
        var playerCountRef = db.ref("Playercount");
        playerCountRef.on("value",function(data){
        playerCount = data.val();
        });
    }
    updateCount(count){
        db.ref("/").update({
            Playercount : count
        });
    }
    getPAE(){
        var PAERef = db.ref("PAE");
        PAERef.on("value",function(data){
        PAE = data.val();
        })
    }
    updatePAE(num){
        db.ref("/").update({
            PAE : num 
        })
    }

    update() {
        var node = db.ref("players/player" + this.index);
        node.set({
            name : player.name,
            distance : player.distance
        });
    }

    static getPlayersInfo() {
        var playersRef = db.ref("players");
        playersRef.on("value", function(data) {
            allPlayers = data.val();
        })
    }
}


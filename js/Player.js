class Player {
  constructor(){
    this.index = null
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  static getPlayerInfo(){
    database.ref("players").on("value",function(data){
      allPlayers = data.val();
    })
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance: this.distance
    });
  }
  getPlayerRank(){
    database.ref("playerRank").on("value",(data)=>{
      this.rank = data.val();
    });
  }
  static updatePlayerRank(rank){
    database.ref('/').update({
      playerRank: rank
    })
  }
}

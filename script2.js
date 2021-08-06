
const body = document.getElementById("body");
const section = document.createElement("section");
const mapDiv = document.createElement("array");
body.appendChild(section);
section.appendChild(mapDiv);

const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const tela = () =>{


   for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map[i].length; j++){
            
            if(map[i][j] === "W"){
                const block = document.createElement("div");
                block.classList.add("block");
               
                section.appendChild(block);
            }
            if(map[i][j] === "S"){
                const way = document.createElement("div");
                way.classList.add("use")
            }
            if(map[i][j] !== "W"){
                const way = document.createElement("div");
                way.classList.add("way");
                way.id= "way";
                section.appendChild(way);
            }
            
        }
    }

}
tela();

const jugar =()=>{

const mapa =()=>{
    let final =[];
    for (let i = 0; i <  map.length; i++){
        final[i] = [];
        for (let j = 0; j < map[i].length; j++){
            if(map[i][j] == "W"){
            final[i][j] = 1;
            }
            if(map[i][j] !="W"){
            final[i][j] = 0; 
            }
        }
    }
//    console.table(final)
}
mapa();

 const player = document.createElement("div");
  const way = document.getElementById("way")
    way.appendChild(player);
    player.classList.add("use");
    player.id = "player";
    let boxTop = 8;
    let boxLeft = 0;
    const key = document.addEventListener("keydown", (event) => {
      let keyName = event.key;
      if ( keyName == "ArrowUp" && boxTop > -1 ) {
          console.log(player.parentNode)
        boxTop -= 1;
      }
      if (keyName == "ArrowDown" && boxTop < 13) {
          console.log(player.parentNode)
        boxTop += 1;
      }
      if (keyName == "ArrowLeft" && boxLeft > -1) {
          console.log(player.parentNode)
        boxLeft -= 1;
      }
      if (keyName == "ArrowRight" && boxLeft < 19) {
          console.log(player.parentNode)
        boxLeft += 1;
      }

      player.style.top = boxTop + "rem";
      player.style.left = boxLeft + "rem";
     //   console.log(player.style.left)
     //   console.log(player.parentNode)
 
    })
    }
jugar();

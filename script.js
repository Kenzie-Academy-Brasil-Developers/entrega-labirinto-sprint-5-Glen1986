const body = document.getElementById("body");
const section = document.createElement("section");
const mapDiv = document.createElement("div");
body.appendChild(section);

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
const jugar = () => {

 const player = document.createElement("div");
  const way = document.getElementById("way")
    way.appendChild(player);
    player.classList.add("use");
    player.id = "player";

      let camino = [];
      for (let i = 0; i < section.length; i++){
        camino[i]=[];
        for (let j = 0; j < section[i].length;j++){
          camino[i].push(...section[i])
          console.log(camino[i][j])
        }
      }
    let boxTop = -6;
    let boxLeft = 0;
        
    const suma = () => {
      boxTop -= 1;
      return boxTop;
    };
    const resta = () => {
      boxTop += 1;
      return boxTop;
    };
    const left = () => {
      boxLeft -= 1;
      return boxLeft;
    };
    const right = () => {
      boxLeft += 1;
      return boxLeft;
    };

/*  const show = () =>{
  const text = document.createElement("p");
  text.innerText = "Play"
  return body.appendChild(text)
  };
  */
   
    const gamer = document.getElementById("player");
    const text = document.createElement("p");
    body.appendChild(text)

    const key = document.addEventListener("keydown", (event) => {
      let keyName = event.key;

      if (keyName == "ArrowUp") {
        suma();
      }
      if (keyName == "ArrowDown") {
        resta();
      }
      if (keyName == "ArrowLeft") {
        left();
      }
      if (keyName == "ArrowRight") {
        right();
      }

      let cuenta = `${player.style.top} ${player.style.left}`
      text.innerText = cuenta
      player.style.top = boxTop + "rem";
      player.style.left = boxLeft + "rem";
     // console.log("key: " + keyName);
    });
}
jugar();


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
           if(map[i][j] !== "W"){
                const block = document.createElement("div");
                block.classList.add("way");
                block.id= "way";
                section.appendChild(block);
            }
            
        }
    }

}
tela();

 const player = document.createElement("div");
  const way = document.getElementById("way")

    section.appendChild(player);
    player.classList.add("use");
    player.id = "player";
    let boxTop = -6;
    let boxLeft = 0;
    const key = document.addEventListener("keydown", (event) => {

    let final = []
       for(let i = 0; i < map.length; i++){
          final[i]=[];
         for(let j = 0; j < map[i].length; j++){
                if(map[i][j] === "W"){
                    final[i][j] = 0
                }
               if(map[i][j] !== "W"){
                  final[i][j] = 1
                }
                
            }
        }
      let itemBlock = map[boxTop + 15][boxLeft ] 

      let keyName = event.key;
      if ( keyName == "ArrowUp" && boxTop > -15 ) {
          if(itemBlock == "W"){
        alert("de Novo");
          }else{
            boxTop -=1;
          }
      }
      if (keyName == "ArrowDown" && boxTop < -1) {
        if(itemBlock === "W"){
          console.log(itemBlock)
        alert("de Novo");
         }else{
           boxTop += 1;
         }
      }

      if (keyName == "ArrowLeft" && boxLeft > 0) {
        if(itemBlock === "W"){
        alert("de Novo");
        }else{
        boxLeft -= 1;
        }
      }
      if (keyName == "ArrowRight" && boxLeft < 20) {
        if(itemBlock === "W"){
        alert("de Novo");
        }else{
        boxLeft += 1;
        }

      }
        if(itemBlock == "F"){
          alert("youWin")
        }
      player.style.top = boxTop + "rem";
      player.style.left = boxLeft + "rem";
        console.log(player.style.left, player.style.top)
     //   console.log(player.parentNode)
 
          console.log(map[boxTop + 15][boxLeft ] )
    })


const body = document.getElementById("body");
const section = document.createElement("section");
const mapDiv = document.createElement("array");
const media = document.createElement('audio');
body.appendChild(section);
section.appendChild(mapDiv);

const left = () =>{
 if(map[boxTop + 15][boxLeft -1 ] ==="W"){
        }else{
          body.appendChild(media)
          media.src="./media/Cartoon Metal Thunk.mp3"
          media.currentTime =1.8,2.2;
          media.play();
          boxLeft -= 1;
        }
}
const right = () =>{
  if(map[boxTop + 15][boxLeft +1 ] ==="W"){
        }else{
          body.appendChild(media)
          media.src="./media/Cartoon Metal Thunk.mp3"
          media.currentTime =1.8;
          media.play();
          boxLeft += 1;
        }
}
const up = () =>{
      if(map[boxTop + 14][boxLeft ] ==="W"){
          }else{
            body.appendChild(media)
            media.src="./media/Cartoon Metal Thunk.mp3"
            media.currentTime =1.8,2.2;
            media.play();
            boxTop -=1;
          }
}
const down = () =>{
 if(map[boxTop + 16][boxLeft ] ==="W"){
         }else{
          body.appendChild(media)
          media.src="./media/Cartoon Metal Thunk.mp3"
          media.currentTime =1.8,2.2;
          media.play();
          boxTop += 1;
         }
  }
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
/////
/////position
/////
const position = () =>{
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
  return final
}
 const player = document.createElement("div");
 const way = document.getElementById("way");
 const mensaje = document.createElement("h2");
 mensaje.innerText = "Press Enter"
 body.appendChild(mensaje)
 section.appendChild(player);
 player.classList.add("use");
 player.id = "player";
 let boxTop = -6;
 let boxLeft = 0;


///teclado
const key = document.addEventListener("keydown", (event) => {
  mensaje.classList.add('none');
  position();
  let itemBlock = map[boxTop + 15][boxLeft ] 
  let keyName = event.key;

  if(keyName == "ArrowUp"){
    up();
  }
  if(keyName == "ArrowDown"){
    down();
  }
  if(keyName == "ArrowLeft"){
    left();
  }
  if(keyName== "ArrowRight"){
    right();
  }
    if(itemBlock == "F"){
    media.src="./media/Cumbia City - An Jone.mp3"
    media.currentTime =1.8,2.2;
    media.play();
    alert("youWin")
    }
  player.style.top = boxTop + "rem";
  player.style.left = boxLeft + "rem";
})
//
/////////////barra de botones mobile//////////////////
//
  const navBa = document.createElement("navBar");
  navBa.id = "buttons"
  navBa.addEventListener("click", (event)=>{
    let itemBlock = map[boxTop + 15][boxLeft ] 
  })
  body.appendChild(navBa);
  for(let i = 0; i < 4; i++){
    const but = document.createElement("button");
    but.classList.add("button"+[i+1])
    navBa.appendChild(but);
  }

const buttons = () =>{
  
  const but1 = document.querySelector(".button1");
  const but2 = document.querySelector(".button2");
  const but3 = document.querySelector(".button3");
  const but4 = document.querySelector(".button4");
  but1.innerText = "left"
  but2.innerText = "up"
  but3.innerText = "down"
  but4.innerText = "right";
 }
buttons();
///
///clicks
//

const click = document.addEventListener("click", (event)=>{

    mensaje.classList.add('none');
    position();
    let itemBlock = map[boxTop + 15][boxLeft ] 
    let keyName = event.originalTarget.className;
  if(keyName == "button1"){
    left();
  }
  if(keyName == "button2"){
    up();
  }
  if(keyName == "button3"){
    down();
  }
  if(keyName == "button4"){
    right();
  }
  if(itemBlock == "F"){
    media.src="./media/Cumbia City - An Jone.mp3"
    media.currentTime =1.8,2.2;
    media.play();
    alert("youWin")
    }

    console.log(keyName)
    player.style.top = boxTop + "rem";
    player.style.left = boxLeft + "rem";
})
const touch = document.addEventListener("touch", (event) =>{
    mensaje.classList.add('none');
    position();
    let itemBlock = map[boxTop + 15][boxLeft ] 
    let keyName = event.originalTarget.className;
  if(keyName == "button1"){
    left();
  }
  if(keyName == "button2"){
    up();
  }
  if(keyName == "button3"){
    down();
  }
  if(keyName == "button4"){
    right();
  }
  if(itemBlock == "F"){
    media.src="./media/Cumbia City - An Jone.mp3"
    media.currentTime =1.8,2.2;
    media.play();
    alert("youWin")
    }

    console.log(keyName)
    player.style.top = boxTop + "rem";
    player.style.left = boxLeft + "rem"; 
})

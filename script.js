
const body = document.getElementById("body");
const section = document.createElement("section");
const mapDiv = document.createElement("array");
const media = document.createElement('audio');
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
  const way = document.getElementById("way");
  const mensaje = document.createElement("h2");
  mensaje.innerText = "Press Enter"
  body.appendChild(mensaje)
    section.appendChild(player);
    player.classList.add("use");
    player.id = "player";
    let boxTop = -6;
    let boxLeft = 0;

    const key = document.addEventListener("keydown", (event) => {
    mensaje.classList.add('none');
    //  buttons();
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
      if ( keyName == "ArrowUp"&& boxTop > -15  ) {
        if(map[boxTop + 14][boxLeft ] ==="W"){
          }else{
            body.appendChild(media)
            media.src="./media/Cartoon Metal Thunk.mp3"
            media.currentTime =1.8,2.2;
            media.play();
            boxTop -=1;
          }
      }
      if (keyName == "ArrowDown" && boxTop < -1) {
        if(map[boxTop + 16][boxLeft ] ==="W"){
         }else{
          body.appendChild(media)
          media.src="./media/Cartoon Metal Thunk.mp3"
          media.currentTime =1.8,2.2;
          media.play();
          boxTop += 1;
         }
      }

      if (keyName == "ArrowLeft" && boxLeft > 0) {
        if(map[boxTop + 15][boxLeft -1 ] ==="W"){
        }else{
          body.appendChild(media)
          media.src="./media/Cartoon Metal Thunk.mp3"
          media.currentTime =1.8,2.2;
          media.play();
          boxLeft -= 1;
        }
      }
      if (keyName == "ArrowRight" && boxLeft < 20) {
        if(map[boxTop + 15][boxLeft +1 ] ==="W"){
        }else{
          body.appendChild(media)
          media.src="./media/Cartoon Metal Thunk.mp3"
          media.currentTime =1.8;
          media.play();
          boxLeft += 1;
        }

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

const barra = () =>{
  const navBa = document.createElement("navBar");
  body.appendChild(navBa);
  for(let i = 0; i < 4; i++){
    const but = document.createElement("button");
    but.classList.add("button"+[i+1])
    navBa.appendChild(but);
  }
}
//but.forEach(but => but.addEventListener("click"))
const left = () =>{
  console.log(event.click)
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
  console.log("right")
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
  console.log("up")
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
  console.log("down")
 if(map[boxTop + 16][boxLeft ] ==="W"){
         }else{
          body.appendChild(media)
          media.src="./media/Cartoon Metal Thunk.mp3"
          media.currentTime =1.8,2.2;
          media.play();
          boxTop += 1;
         }
}
barra();
const buttons = () =>{
  
  const but1 = document.querySelector(".button1");
  const but2 = document.querySelector(".button2");
  const but3 = document.querySelector(".button3");
  const but4 = document.querySelector(".button4");
 // but1.id = "button1"
  let itemBlock = map[boxTop + 15][boxLeft ] 
  but1.value = "ArrowLeft";
  but1.innerText = "left"
  but2.value = "ArrowUp";
  but2.innerText = "up"
  but3.value = "ArrowDown";
  but3.innerText = "down"
  but4.value = "ArrowRight";
  but4.innerText = "right";

  but1.addEventListener("click", left)
  but2.addEventListener("click", up )
  but3.addEventListener("click", down)
  but4.addEventListener("click", right)
 // but1.hreff = "ArrowLeft";
}
buttons();
//buttons.forEach(button => button.addEventListener("click"))


const body = document.getElementById("body");
const section = document.createElement("section");
const mapDiv = document.createElement("div");
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
            
            if(map[i][j] == "W"){
              //  console.log(map[i])
                const block = document.createElement("div");
                block.classList.add("block");
               section.appendChild(block);
            }else if(map[i][j] !== "W"){
                const way = document.createElement("div");
                way.classList.add("way");
                section.appendChild(way);
            }
        }
    }
    return mapDiv;

}
tela();
 

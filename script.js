// abrir sobre
const sobre = document.getElementById("sobre");

sobre.addEventListener("click",()=>{
    sobre.classList.toggle("abierto");
});

// corazones animados
const canvas = document.getElementById("corazones");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let corazones=[];

function crearCorazon(){
    corazones.push({
        x:Math.random()*canvas.width,
        y:canvas.height,
        size:Math.random()*20+10,
        speed:Math.random()*2+1
    });
}

function dibujar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i=0;i<corazones.length;i++){
        let c=corazones[i];
        ctx.fillStyle="rgba(255,0,100,0.7)";
        ctx.beginPath();
        ctx.arc(c.x,c.y,c.size,0,Math.PI*2);
        ctx.fill();
        c.y-=c.speed;
    }
}

setInterval(crearCorazon,300);
setInterval(dibujar,30);

// contador desde fecha
let inicio = new Date("2025-09-11");

function actualizarContador(){
    let hoy = new Date();
    let diferencia = hoy - inicio;

    let dias = Math.floor(diferencia/(1000*60*60*24));

    document.getElementById("contador").innerHTML =
    "Han pasado "+dias+" días desde que empezaste a hacer mi vida más bonita ❤️";
}

setInterval(actualizarContador,1000);
const canvas = document.getElementById("js-canvas"),
    ctx = canvas.getContext("2d"),
    range= document.getElementById("js-range");
    colors = document.getElementsByClassName("jsColor"),
    fillBtn = document.getElementById("js-fill"),
    paintBtn = document.getElementById("js-paint");
    saveBtn = document.getElementById("js-save");

let painting = false,    
    rangeValue = 2.5,
    fiilling = false,
    color = "";


ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "#000000";

function onMouseMoving(event){
    let x = event.offsetX,
        y= event.offsetY;
    

    if(painting){
        ctx.lineTo(x,y);
        ctx.stroke();
    }else{
        ctx.beginPath();
        ctx.moveTo(x,y);
    }
    
    
}

function onMouseDown(){painting = true;}
function stopPainting(){painting = false ;}


function changeColor(event){
    color =  event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function handleRange(event){
    rangeValue = event.target.value;
    ctx.lineWidth=rangeValue;
}

function handleClick(event){
    if(filling){
    ctx.fillStyle = color;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}

function handleFilling(){
    filling = true;
    painting= false;
}

function handlePainting(){
    filling = false;
    painting = true; 
}

const handleSaving = () => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/jpeg");
    a.download = "paintJSExport";
    a.click();
  };



Array.from(colors).forEach(color => color.addEventListener("click",changeColor ) );
canvas.addEventListener("mousemove", onMouseMoving );
canvas.addEventListener("mousedown", onMouseDown );
canvas.addEventListener("mouseup", stopPainting );
canvas.addEventListener("mouseleave", stopPainting );
canvas.addEventListener("click", handleClick );
range.addEventListener("input", handleRange);
fillBtn.addEventListener("click", handleFilling );
paintBtn.addEventListener("click", handlePainting );
saveBtn.addEventListener("click", handleSaving );





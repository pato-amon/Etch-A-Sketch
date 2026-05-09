const container = document.querySelector("#container");
const btn = document.querySelector("#btn-grid");

function createGrid(size){
    container.innerHTML = "";

    const squareSize= 600/size;

    for(let i=0; i<size*size; i++){
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width =`${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", ()=>{
            square.classList.add("hovered");
        });

        container.appendChild(square);

    }
}

btn.addEventListener("click", ()=>{
    let userSize = prompt("Enter squares per side (max 100): ");

    if(userSize != null){
        userSize = parseInt(userSize);
        if(userSize > 0 && userSize <= 100){
            createGrid(userSize);
        }else{
            alert("Please enter a number between 1 and 100. ")
        }
    }
});

createGrid(16);
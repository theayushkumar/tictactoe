let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector(".new_game");
let msg = document.querySelector(".message");

let turn = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
       
        if(turn){
            box.innerText = "O";
            turn = false;
        }
        else{
            box.innerText = "X";
            turn = true;
        }
        box.disabled=true;

        checkWinner();
    })
})


const checkWinner=() =>{
    for(pattern of winPatterns){
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if(post1Val != "" && post2Val != "" && post3Val !=""){
            if(post1Val === post2Val && post2Val === post3Val){

                showWinner(post1Val);
            }
        }
    }
}
const disabledBtn = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enableBtn = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText=""
    }
}

const showWinner=(winner)=>{
    msg.classList.remove("hide")
    msg.innerText = `Congratulation, Winner is ${winner}`
    disabledBtn()
}

const restGame = ()=>{
    enableBtn()
    turn=true;
    msg.classList.add("hide");
}
newGame.addEventListener("click", restGame);

// let count = 0;

// for (let i = 0; i<100000 ; i++){
//     console.log(i);
// }



let count = 0;

let whatToDo = function (){
    
    count += 1;
    let div = document.querySelector("div");
    div.innerHTML = count;
    
}

setInterval(whatToDo, 3000);

function generateArray(){
let arr = [];
let n = 20;
for( let i = 1 ; i<=n ; ++i ) {
     let x = Math.floor(Math.random()*20); 
     if(x<2) x = 2;
     arr[i] = x;
}

 
for ( let i = 1 ; i<=n ; ++i ) {
    let s = "._"+i;
    let x = arr[i];
    document.querySelector(s).innerHTML = x;
    let rem = 20 - x;
    rem+="rem";
    x+="rem";
    document.querySelector(s).style.margin = rem + " 0.2rem 0 0.2rem";
    document.querySelector(s).style.height = x;
    document.querySelector(s).style.height = x;
}
}
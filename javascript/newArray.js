
let arr = [];
let n = 20;

function get(index){
    index = "._"+index;
    return index;
}


//  Array Generation

function generateArray(){
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

// Bubble sort

function BubbleSort(){
    
    let brr = [];

    for ( let i = 1 ; i<=n ; ++i ) brr[i] = arr[i];

    let id = null;
    
    for(let i = 1; i<=n; i++){
      for(let j = 1; j<=n-i; j++){
        if(brr[j] > brr[j+1]){
          let element1 = document.querySelector(get(j));
          let element2 = document.querySelector(get(j+1));

          let pos = 0;
          
          clearInterval(id);
          id = setInterval(frame, 100);

          element1.style.backgroundColor = "red";
          element2.style.backgroundColor = "red";  

          function frame() {
            
            if (pos >= 1.9) {
              clearInterval(id);
            } else {
              pos+=0.1;
              element1.style.left = pos + "rem";
              element2.style.right = pos + 'rem';
            }
          }

          element1.style.backgroundColor = "white";
          element2.style.backgroundColor = "white";
          let temp = brr[j];
          brr[j] = brr[j + 1];
          brr[j+1] = temp;
        }
      }
    }
   }
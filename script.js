

const windowOuterWidth = Math.floor(window.innerWidth/50) ;
const windowOuterHeight = Math.floor(window.innerHeight/50) ;


/* console.log (Math.floor((Math.random()*10))); */

function createArr(rows, cols){

    var arr1 = [];
    let r=0;
    for(var i=0; i < rows; i++){

        // Creates an empty line
        arr1.push([]);
        /* console.log (i.toString);  */
        // Adds cols to the empty line:
        arr1[i].push( new Array(cols));
  
        for(var j=0; j < cols; j++){
          // Initializes:
          /* console.log (i.toString() + j.toString());  */
          arr1[i][j] = r;
          r++;
        }
        /* console.log (i.toString);  */
    }
    return arr1;
}



let tableElement= document.querySelector("table");
let arr = createArr(windowOuterHeight,windowOuterWidth);
/* console.log (arr);  */
  function Get(i) {
    let trGet= document.querySelector(".trjs"+i);
    return trGet;
  }

  for(let i=0; i<arr.length; i++){
    let tr= document.createElement('tr');
    tr.className = "trjs"+i;
    tableElement.append(tr);
    for(let j=0; j<arr[i].length; j++){
        let td= document.createElement('td');
        td.className = "msg"+j;
        /* td.innerHTML = arr[i][j]; */
        Get(i).append(td);
 
        let divcard= document.createElement('div');
        divcard.className = "flipcard h";
        td.append(divcard);

        let divcardfront= document.createElement('div');
        divcardfront.className = "front";
        divcard.append(divcardfront);

        let divcardback= document.createElement('div');
        divcardback.className = "back";
        divcard.append(divcardback);

    }
    
}

function cutRec(){
    let xCord=Math.floor(x/50);
    let yCord=Math.floor(y/50);
    /* console.log(yCord+":"+xCord);  */
elX=".msg"+String(xCord);
elY=".trjs"+String(yCord);
/* console.log(elX+":"+elY);  */
let elMass= document.querySelector(elY+" "+elX+" .flipcard.h .front");
/* console.log(elMass); */
elMass.setAttribute("style", "background-color:black");

}

tableElement.addEventListener('mousemove', (e) => {
  x = e.pageX,
    y = e.pageY;
    if(x<windowOuterWidth*50 && y<windowOuterHeight*50){
    cutRec();
    }
   
}, {
  capture: true
})

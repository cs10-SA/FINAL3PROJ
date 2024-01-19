document.getElementById("dont-btn").addEventListener("click",btnClicked)
function btnClicked(){
    let displaySetting =document.getElementById("gif-glitch").style.display
    let element =document.getElementById("display-div")
 
    if(displaySetting=== "none"){
document.getElementById("gif-glitch").style.display="block"
document.body.style.background=
"url('img/giphy.gif') no-repeat center fixed"
document.body.style.backgroundSize="cover"; 
//   element.remove();
    }else{
        document.getElementById("gif-glitch").style.display="none"
        
document.body.style.background=
"url('img/beach.jpg') no-repeat center fixed"
document.body.style.backgroundSize="cover"; 
    }
    

}



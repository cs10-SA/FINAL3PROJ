// Landing Page
// Event Listener on Ham icon
document.getElementById("ham-icon").addEventListener("click", hamIconClicked);
document.getElementById("btn").addEventListener("click",btnClicked)
document.getElementById("settings-btn").addEventListener("click",btn2Clicked)

function hamIconClicked() {
  // Get current display setting
  let displaySetting = document.getElementById("chat-div").style.display;
  // test currecnt display setting
  if (displaySetting === "none") {
    document.getElementById("chat-div").style.display = "block";
  } else {
    document.getElementById("chat-div").style.display = "none";
  }
}

function updateDateTime(){
  let now= new Date();
  let currentDateTime= now.toLocaleString();
  document.querySelector('#datetime').textContent=currentDateTime
}
setInterval(updateDateTime,1000);


function btnClicked(){
  let text= document.getElementById("text-in").value.toLowerCase();
  let msg=`hello ${text} ! would you like to customize your home page? You can enter it below`
  
  document.getElementById("text-out").innerHTML=msg

}
  function btn2Clicked(){
let list1=document.getElementById("list").value
let list2=document.getElementById("list2").value
let list3=document.getElementById("list3").value
let list4=document.getElementById("list4").value
let todolist=`
<p>To-Do</p>
<ul>
<li>${list1}</li>
<li>${list2}</li>
<li>${list3}</li>
<li>${list4}</li>
</ul>`
document.getElementById("text-out2").innerHTML=todolist
  }
  
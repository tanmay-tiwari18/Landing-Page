let toggleMenu = document.querySelector(".menuButtons");
  toggleMenu.style.maxHeight = "0px";

function togglenav() {
  if (toggleMenu.style.maxHeight == "0px") {
    toggleMenu.style.maxHeight = "300px";
  } else {
    toggleMenu.style.maxHeight = "0px";
  }
}
function AssignActive(navClicked){
 const activebutton = document.getElementById('active');
 const checknavCLicked=document.getElementsByClassName(navClicked)[0];
 
 if(checknavCLicked){
  if(activebutton){
    activebutton.removeAttribute('id');
    const activeHr = document.querySelector('hr');
    if(activeHr){
      activeHr.remove();
    }
  }
  if (checknavCLicked.id === 'active'){
   checknavCLicked.removeAttribute('id');
  }else{
    const selected = document.createElement('hr');
    selected.id = 'selectedNav';
    checknavCLicked.appendChild(selected);
    checknavCLicked.id = 'active';
  }
 }
}
var options = false;


function showOptions(){
  options = !options;
  if (options) {
    document.getElementById('nav-bar-menu-id').style.display = "flex";
  }else{
    document.getElementById('nav-bar-menu-id').style.display = "none";
  }
}

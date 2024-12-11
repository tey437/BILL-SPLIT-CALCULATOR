function openNav(){

  var nav = document.getElementById("nav")

  if((nav.style.width == "70%")&&(nav.style.padding == "24px")){
    nav.style.width = "0%"
    nav.style.padding = "0px"
  }else{
    nav.style.width = "70%"
    nav.style.padding = "24px"
  }
}
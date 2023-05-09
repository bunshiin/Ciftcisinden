var menu = document.getElementById("menu-toggle");
var linkler = document.getElementById("collapse");
var konya = document.getElementById("konya");
var myDropdown = document.getElementById("myDropdown");
var icon = document.getElementById("icon-content");


konya.addEventListener("click",function(){
    myDropdown.classList.toggle("show");
    icon.classList.toggle("dondur");
});


menu.addEventListener("click",function(){

var img = document.getElementById('menu-toggle').src;
    linkler.classList.toggle("ac-kapa");
    
 var img = document.getElementById('menu-toggle').src;
        if (img.indexOf('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png') !=-1) {
            document.getElementById('menu-toggle' ).src  =  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png';
        }
         else {
           document.getElementById('menu-toggle').src ='https://cdn3.iconfinder.com/data/icons/faticons/32/remove-01-512.png';
       }

});



<<<<<<< HEAD
let viewportWidth = window.innerWidth;
console.log(viewportWidth);
if(viewportWidth<'1024'){
	var scrollelement = 800;
}
else{
	var scrollelement = 675;
}
console.log(scrollelement);
function changeCss () {
	var navElement = document.querySelector(".navbar-moveable");
	this.scrollY < scrollelement ? navElement.style.visibility = 'hidden' : navElement.style.visibility = 'visible';
	this.scrollY < scrollelement ? navElement.style.transform = "translateY(0px)" : navElement.style.transform = 'translateY(5em)';
  }
  window.addEventListener("scroll", changeCss , true);
  history.scrollRestoration = "manual";
  window.onbeforeunload = function () {
    window.scrollTo(0);
=======
let viewportWidth = window.innerWidth;
console.log(viewportWidth);
if(viewportWidth<'1024'){
	var scrollelement = 800;
}
else{
	var scrollelement = 675;
}
console.log(scrollelement);
function changeCss () {
	var navElement = document.querySelector(".navbar-moveable");
	this.scrollY < scrollelement ? navElement.style.visibility = 'hidden' : navElement.style.visibility = 'visible';
	this.scrollY < scrollelement ? navElement.style.transform = "translateY(0px)" : navElement.style.transform = 'translateY(5em)';
  }
  window.addEventListener("scroll", changeCss , true);
  history.scrollRestoration = "manual";
  window.onbeforeunload = function () {
    window.scrollTo(0);
>>>>>>> 95af5e95daa49f971d48d13893346c162d27cf51
};
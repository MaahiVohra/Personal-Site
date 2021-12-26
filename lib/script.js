let viewportWidth = window.innerWidth;

if(viewportWidth<1024){
	var scrollelement = 810;
}
else{
	var scrollelement = 675;
}

function changeCss () {
	var navElement = document.querySelector(".navbar-moveable");
	this.scrollY < scrollelement ? navElement.style.visibility = 'hidden' : navElement.style.visibility = 'visible';
	this.scrollY < scrollelement ? navElement.style.transform = "translateY(0em)" : navElement.style.transform = 'translateY(5em)';
  }
  window.addEventListener("scroll", changeCss , true);
  history.scrollRestoration = "manual";
  window.onbeforeunload = function () {
    window.scrollTo(0);
};
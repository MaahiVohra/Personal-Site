function changeCss () {
	var navElement = document.querySelector(".navbar-moveable");
	this.scrollY < 675 ? navElement.style.visibility = 'hidden' : navElement.style.visibility = 'visible';
	this.scrollY < 675 ? navElement.style.transform = "translateY(0em)" : navElement.style.transform = 'translateY(5em)';
  }
  window.addEventListener("scroll", changeCss , true);
  history.scrollRestoration = "manual";
  window.onbeforeunload = function () {
    window.scrollTo(0);
};
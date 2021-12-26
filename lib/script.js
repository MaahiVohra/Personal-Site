function changeCss () {
	var bodyElement = document.querySelector("body");
	var navElement = document.querySelector(".top-navbar");
	this.scrollY < 712 ? navElement.style.visibility = 'hidden' : navElement.style.visibility = 'visible';
	this.scrollY < 712 ? navElement.style.transform = "translateY(0em)" : navElement.style.transform = 'translateY(5em)';

	
  }
  
  window.addEventListener("scroll", changeCss , true);
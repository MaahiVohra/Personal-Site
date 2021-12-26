var targetElm = document.querySelector('#work');  // reference to scroll target
var scrollbutton = document.querySelector('#worklink');        // button that triggers the scroll
  
// bind "click" event to a button 
scrollbutton.addEventListener('click', function(){
   targetElm.scrollIntoView()
})


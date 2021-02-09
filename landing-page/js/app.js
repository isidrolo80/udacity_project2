/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
*/
let currentSection = [document.getElementById("home"), document.getElementById("section1"), document.getElementById("section2"), document.getElementById("section3"), document.getElementById("section4")];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


//Called using onload on the body section in the HTML 


function initialLoad() {
	buildNav();
	
}


//Function that changes the navbar active status based on location. 
window.addEventListener("scroll", function() {  
	const navVarOptions = document.querySelectorAll('.navOptions');
  	navVarOptions.forEach(tab => tab.addEventListener('scroll',changeOptionNavBar));
  	let index;
  	navVarOptions.forEach(function(object, i){
  		console.log(currentSection[i].offsetTop);	
  		if (window.scrollY >= currentSection[i].offsetTop && window.scrollY < currentSection[i].offsetTop*1.1) {
  			navVarOptions.forEach(tab => {
	    	tab.classList.remove('active');
			});
			index = i; 
		} else if (window.scrollY < currentSection[0].offsetTop) {
			navVarOptions.forEach(tab => {
	    	tab.classList.remove('active');
			});
			index = 0;
		} 
  	});
  	
  	navVarOptions[index].classList.add('active');

  function changeOptionNavBar(element) {
	navVarOptions.forEach(tab => {
	    tab.classList.remove('active');
	});
	element.currentTarget.classList.toggle('active');
	}


});



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the hamburger icon */
function toggleresponsive() {
  let myTopnav = document.getElementById("myTopnav");
  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive";
  } else {
    myTopnav.className = "topnav";
  }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
	const loadOptions = document.querySelector('#myTopnav');
	let navElement = [document.createElement('li'), document.createElement('li'), document.createElement('li'), document.createElement('li'), document.createElement('li')];	
	let link = [document.createElement('a'), document.createElement('a'), document.createElement('a'), document.createElement('a'), document.createElement('a')];

	navElement[0].setAttribute('class', 'navOptions');
	navElement[0].textContent = "Home";
	navElement[0].addEventListener('click', function goToScreen(){
		window.location.hash = "home";
	});
	loadOptions.appendChild(navElement[0]);

	for (let numberOfElements = 1; numberOfElements < 5; numberOfElements++) {
		navElement[numberOfElements].setAttribute('class', 'navOptions');
		navElement[numberOfElements].textContent = "Section " + numberOfElements;
		navElement[numberOfElements].addEventListener('click', function goToScreen(){
			window.location.hash = "section"+ numberOfElements;
			});
		loadOptions.appendChild(navElement[numberOfElements]);
	}
	//let initialOptionsHTML = '<a href="#home" class="navOptions active">Home</a> <a href="#section1" class="navOptions">Section 1</a><a href="#section2" class="navOptions">Section 2</a> <a href="#section3" class="navOptions">Section 3</a><a href="#section4" class="navOptions">Section 4</a>';
	//loadOptions.insertAdjacentHTML('afterbegin', initialOptionsHTML);
}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 




// Scroll to section on link click


// Set sections as active



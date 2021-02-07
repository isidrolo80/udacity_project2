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
let currentSection = [document.getElementById("home"), document.getElementById("section1"), document.getElementById("section2"), document.getElementById("section3")];

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
  if (window.scrollY > currentSection[0].offsetTop && window.scrollY <= currentSection[1].offsetTop+10) {
  	navVarOptions[0].classList.remove('active');
	navVarOptions[1].classList.add('active');
	navVarOptions[2].classList.remove('active');
	navVarOptions[3].classList.remove('active');
  } else if (window.scrollY > (currentSection[1].offsetTop) && window.scrollY <= currentSection[2].offsetTop ) {
  	navVarOptions[0].classList.remove('active');
	navVarOptions[1].classList.remove('active');
	navVarOptions[2].classList.add('active');
	navVarOptions[3].classList.remove('active');
  } else if (window.scrollY >= currentSection[2].offsetTop) {
  	navVarOptions[0].classList.remove('active');
	navVarOptions[1].classList.remove('active');
	navVarOptions[2].classList.remove('active');
	navVarOptions[3].classList.add('active');
  } else {
  	navVarOptions[0].classList.add('active');
  	navVarOptions[1].classList.remove('active');
	navVarOptions[2].classList.remove('active');
	navVarOptions[3].classList.remove('active');
  }
  
  function changeOptionNavBar(element) {
	navVarOptions.forEach(tab => {
	    tab.classList.remove('active');
	});
	element.currentTarget.classList.toggle('active');
	}
});



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the hamburger icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
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
	let initialOptionsHTML = '<a href="#home" class="navOptions active">Home</a> <a href="#section1" class="navOptions">Section 1</a><a href="#section2" class="navOptions">Section 2</a> <a href="#section3" class="navOptions">Section 3</a>';
	loadOptions.insertAdjacentHTML('afterbegin', initialOptionsHTML);
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


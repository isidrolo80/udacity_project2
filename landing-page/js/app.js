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
  if (window.scrollY > currentSection[0].offsetTop && window.scrollY <= currentSection[1].offsetTop+10) {
  	navVarOptions[0].classList.remove('active');
	navVarOptions[1].classList.add('active');
	navVarOptions[2].classList.remove('active');
	navVarOptions[3].classList.remove('active');
	navVarOptions[4].classList.remove('active');
  } else if (window.scrollY > (currentSection[1].offsetTop) && window.scrollY <= currentSection[2].offsetTop ) {
  	navVarOptions[0].classList.remove('active');
	navVarOptions[1].classList.remove('active');
	navVarOptions[2].classList.add('active');
	navVarOptions[3].classList.remove('active');
	navVarOptions[4].classList.remove('active');
  } else if (window.scrollY >= currentSection[2].offsetTop && window.scrollY <= currentSection[3].offsetTop) {
  	navVarOptions[0].classList.remove('active');
	navVarOptions[1].classList.remove('active');
	navVarOptions[2].classList.remove('active');
	navVarOptions[3].classList.add('active');
	navVarOptions[4].classList.remove('active');
  } else if (window.scrollY >= currentSection[3].offsetTop) {
  	navVarOptions[0].classList.remove('active');
  	navVarOptions[1].classList.remove('active');
	navVarOptions[2].classList.remove('active');
	navVarOptions[3].classList.remove('active');
	navVarOptions[4].classList.add('active');
  } else {
  	navVarOptions[0].classList.add('active');
  	navVarOptions[1].classList.remove('active');
	navVarOptions[2].classList.remove('active');
	navVarOptions[3].classList.remove('active');
	navVarOptions[4].classList.remove('active');
  }
  
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

	const navElement = document.createElement('li');
	const link0 = document.createElement('a');
	navElement.setAttribute('class', 'navOptions');
	link0.textContent = "Home";
	link0.setAttribute('href', "#home");
	loadOptions.appendChild(navElement);
	navElement.appendChild(link0);


	const navElement1 = document.createElement('li');
	const link1 = document.createElement('a');
	navElement1.setAttribute('class', 'navOptions');
	link1.textContent = "Section 1";
	link1.setAttribute('href', "#section1");
	loadOptions.appendChild(navElement1);
	navElement1.appendChild(link1);

	const navElement2 = document.createElement('li');
	const link2 = document.createElement('a');
	navElement2.setAttribute('class', 'navOptions');
	link2.textContent = "Section 2";
	link2.setAttribute('href', "#section2");
	loadOptions.appendChild(navElement2);
	navElement2.appendChild(link2);

	const navElement3 = document.createElement('li');
	const link3 = document.createElement('a');
	navElement3.setAttribute('class', 'navOptions');
	link3.textContent = "Section 3";
	link3.setAttribute('href', "#section3");
	loadOptions.appendChild(navElement3);
	navElement3.appendChild(link3);

	const navElement4 = document.createElement('li');
	const link4 = document.createElement('a');
	navElement4.setAttribute('class', 'navOptions');
	link4.textContent = "Section 4";
	link4.setAttribute('href', "#section4");
	loadOptions.appendChild(navElement4);
	navElement4.appendChild(link4);



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




const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//Selects Elements:
//Locate The First Element With Class ‘Nav-Toggle’ —>Stores It As {Navtoggle}. Opening, Surfacing , Dropping - Closing, Hiding , Lifting The Menu Nav
//Locating All Elements ≈ Class Nav__Link : The Menu Items
//> Stores Them As ‘Navlinks’
//Click On Navtoggle:
 //‘Navtoggle’ Is Clicked —> Toggles The ‘Nav-Open’ Class In The <Body> This Class 
//—> The Visibility Of The Nav Menu Opening // Closing 

 //Clicks On Each Navlink:
//Links Within Menu (Navlink) Clicked- Removes The Nav-Open Class From The <Body>. 
//Closes The Menu After A Link Clicked.
//Simple Navigation Menu That Opens When A T Button Is Clicked
  //Closes When A Link Is Clicked or The Toggle Is Clicked .

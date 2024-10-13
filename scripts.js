// Redirect to home page
const homeBtn = document.getElementById("home-btn");
if (homeBtn) {
  homeBtn.addEventListener("click", function() {
    window.location.href = "index.html"; // Change this to the actual name of your home page file
  });
} else {
  console.error("Home button not found!");
}

// Toggle the "About" content
const aboutBtn = document.getElementById("about-btn");
const aboutContent = document.getElementById("about-content");
const buttonContainer = document.querySelector(".button-container");

if (aboutBtn && aboutContent && buttonContainer) {
  aboutBtn.addEventListener("click", function() {
    const isHidden = aboutContent.style.display === "none" || aboutContent.style.display === "";
    aboutContent.style.display = isHidden ? "block" : "none"; // Toggle visibility
    buttonContainer.style.display = isHidden ? "none" : "flex"; // Hide or show buttons
  });
} else {
  console.error("About button or content not found!");
}

// Back button to return to main content
const backBtn = document.getElementById("back-btn");
if (backBtn && aboutContent && buttonContainer) {
  backBtn.addEventListener("click", function() {
    aboutContent.style.display = "none"; // Hide the about content
    buttonContainer.style.display = "flex"; // Show buttons again
  });
} else {
  console.error("Back button not found!");
}

// Toggle the Dropdown Menu
const menuBtn = document.getElementById("menu-btn");
const dropdownContent = document.getElementById("dropdown-content");

if (menuBtn && dropdownContent) {
  menuBtn.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent event from bubbling up to window
    dropdownContent.classList.toggle("show");
  });
} else {
  console.error("Menu button or dropdown content not found!");
}

// Select the Survey Details link from the dropdown
const surveydetailsLink = document.querySelector('#dropdown-content a:nth-child(2)');
const surveydetailsSection = document.getElementById('st_viewport');

if (surveydetailsLink && surveydetailsSection) {
  surveydetailsLink.addEventListener('click', function(event){
    event.preventDefault();
    
    // Hide other sections
    const questionnairesSection = document.getElementById('questionnaires-section');
    if (questionnairesSection) {
      questionnairesSection.classList.remove('active');
    }

    // Show the Survey Details section
    surveydetailsSection.classList.add('active');

    // Change background to white
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.classList.add('white-bg');
    }

    // Hide other content
    const departmentTitle = document.querySelector('.department-title');
    const projectTitle = document.querySelector('.project-title');
    const description = document.querySelector('.description');
    const aboutContentElem = document.getElementById('about-content');

    if (departmentTitle) departmentTitle.style.display = 'none';
    if (projectTitle) projectTitle.style.display = 'none';
    if (description) description.style.display = 'none';
    if (aboutContentElem) aboutContentElem.style.display = 'none';

    // Optionally, hide the dropdown
    dropdownContent.classList.remove("show");
  });
} else {
  console.error("Survey Details link or section not found!");
}

// Select the Questionnaires link from the dropdown
const questionnairesLink = document.querySelector('#dropdown-content a:nth-child(1)'); // Assuming Questionnaires is the first link
const questionnairesSection = document.getElementById('questionnaires-section');

if (questionnairesLink && questionnairesSection && buttonContainer && aboutContent) {
  questionnairesLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Hide the dropdown after clicking
    dropdownContent.classList.remove("show");
    const departmentTitle = document.querySelector('.department-title');
    const projectTitle = document.querySelector('.project-title');
    const description = document.querySelector('.description');

    if (departmentTitle) departmentTitle.style.display = 'none';
    if (projectTitle) projectTitle.style.display = 'none';
    if (description) description.style.display = 'none';

    // Show the Questionnaires section
    questionnairesSection.classList.add('active'); // Ensure it's shown

    // Change background to white
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.classList.add('white-bg');
    }

    // Hide about section if shown
    aboutContent.style.display = 'none';

    // Hide Survey Details section if visible
    if (surveydetailsSection) {
      surveydetailsSection.classList.remove('active');
    }
  });
} else {
  console.error("Questionnaires link or section not found!");
}

// Close dropdown if clicked outside
window.addEventListener('click', function(event) {
  if (!event.target.matches('#menu-btn')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});

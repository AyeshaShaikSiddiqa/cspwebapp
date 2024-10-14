// Function to change background to white for the main-content section and set height to 0
function changeMainContentBackgroundToWhite() {
  const mainContent = document.querySelector('section.main-content');
  if (mainContent) {
    mainContent.style.backgroundImage = 'none'; // Remove background image
    mainContent.style.backgroundColor = 'white'; // Set background color to white
    mainContent.style.height = '0'; // Set height to 0 when no background is needed
  } else {
    console.error("Main content section not found!");
  }
}

// Function to restore the background image for the main-content section (for Photos) and set height to 100vh
function restoreMainContentBackgroundImage() {
  const mainContent = document.querySelector('section.main-content');
  if (mainContent) {
    mainContent.style.backgroundImage = "url('bg12.svg')"; // Restore background image
    mainContent.style.backgroundColor = ''; // Reset background color to default
    mainContent.style.height = '100vh'; // Restore height to 100vh for photos
  } else {
    console.error("Main content section not found!");
  }
}

// Function to hide the department, project titles, and description
function hideTitles() {
  const departmentTitle = document.querySelector('.department-title');
  const projectTitle = document.querySelector('.project-title');
  const description = document.querySelector('.description');

  if (departmentTitle) departmentTitle.style.display = 'none';
  if (projectTitle) projectTitle.style.display = 'none';
  if (description) description.style.display = 'none';
}

// Function to hide all sections
function hideAllSections() {
  const sections = [surveydetailsSection, questionnairesSection, gallerySection, aboutContent, analysisSection];
  sections.forEach(section => {
    if (section) {
      section.style.display = "none"; // Hide all sections
      section.classList.remove('active'); // Ensure active class is removed
    }
  });
}

// Show the Survey Details section
const surveydetailsLink = document.querySelector('#dropdown-content a:nth-child(2)');
const surveydetailsSection = document.getElementById('st_viewport');

if (surveydetailsLink && surveydetailsSection) {
  surveydetailsLink.addEventListener('click', function(event) {
    aboutContent.style.display = "none"; // Hide about content
    questionnairesSection.style.display = "block"; // Show questionnaires section
    
    event.preventDefault();
    hideAllSections();
    hideTitles(); // Hide titles when selecting Survey Details
    surveydetailsSection.style.display = "block"; // Show Survey Details
    surveydetailsSection.classList.add('active'); // Ensure it's marked as active
    dropdownContent.classList.remove("show");
    changeMainContentBackgroundToWhite(); // Change background to white and set height to 0
  });
} else {
  console.error("Survey Details link or section not found!");
}

// Show the Questionnaires section
const questionnairesLink = document.querySelector('#dropdown-content a:nth-child(1)'); // Assuming Questionnaires is the first link
const questionnairesSection = document.getElementById('questionnaires-section');

if (questionnairesLink && questionnairesSection) {
  questionnairesLink.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllSections();
    hideTitles(); // Hide titles when selecting Questionnaires
    questionnairesSection.style.display = "block"; // Show Questionnaires
    questionnairesSection.classList.add('active'); // Ensure it's marked as active
    dropdownContent.classList.remove("show");
    changeMainContentBackgroundToWhite(); // Change background to white and set height to 0
  });
} else {
  console.error("Questionnaires link or section not found!");
}

// Photos Link and Gallery Section
const photosLink = document.getElementById('photos-link');
const gallerySection = document.getElementById('gallery-section');

if (photosLink && gallerySection) {
  photosLink.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllSections(); // Hide all sections first
    hideTitles(); // Hide titles when selecting Photos
    gallerySection.style.display = 'block'; // Show gallery
    gallerySection.classList.add('active'); // Ensure it's marked as active
    dropdownContent.classList.remove("show"); // Hide dropdown
    restoreMainContentBackgroundImage(); // Restore background image and set height to 100vh
  });
} else {
  console.error("Photos link or gallery section not found!");
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

// Close dropdown if clicked outside
window.addEventListener('click', function(event) {
  if (!event.target.matches('#menu-btn')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});

// Home button functionality
const homeBtn = document.getElementById("home-btn");
if (homeBtn) {
  homeBtn.addEventListener("click", function() {
    window.location.href = "index.html"; // Change this to your actual home page URL
  });
} else {
  console.error("Home button not found!");
}

// Toggle the "About the Project" content
const aboutBtn = document.getElementById("about-btn");
const aboutContent = document.getElementById("about-content");
const backBtn = document.getElementById("back-btn");
const buttonContainer = document.querySelector(".button-container");

 // Event listener for the "About the Project" button
 if (aboutBtn && aboutContent && backBtn) {
  aboutBtn.addEventListener("click", function () {
      aboutContent.style.display = "block"; // Show about content
      buttonContainer.style.display = "none"; // Hide button container
      questionnairesSection.style.display = "none";
      hideTitles();
  });

  // Event listener for the "Back" button
  backBtn.addEventListener("click", function () {
      aboutContent.style.display = "none"; // Hide about content
      buttonContainer.style.display = "flex"; // Show button container
  });
} else {
  console.error("Button or content not found!");
}
const aboutTeamBtn = document.getElementById("about-team-link");
const aboutTeamSection = document.getElementById("about-team");

// Check if the button and section exist before adding the event listener
if (aboutTeamBtn && aboutTeamSection) {
    aboutTeamBtn.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        hideTitles();
        aboutContent.style.display = "none"; // Hide about content
        questionnairesSection.style.display = "none"; // Hide questionnaires section
        aboutTeamSection.style.display = "block"; // Show about team section
        buttonContainer.style.display = "none"; // Hide button container
        changeMainContentBackgroundToWhite();
        
    });
} else {
    console.error("About Team button or section not found!");
}
const analysisLink = document.getElementById("analysis-link");
const analysisSection = document.getElementById("analysis-section");

if (analysisLink && analysisSection) {
  analysisLink.addEventListener("click", function(event) {
    event.preventDefault();
    hideTitles();
    hideAllSections(); // Hide other sections
    analysisSection.style.display = "block"; // Show the analysis section
    analysisSection.classList.add('active');
    dropdownContent.classList.remove("show"); // Hide dropdown
    changeMainContentBackgroundToWhite(); // Optional: Change background to white
  });
} else {
  console.error("Analysis link or section not found!");
}
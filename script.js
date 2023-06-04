document.getElementById("openButton").addEventListener("click", function() {
    var popup = document.getElementById("popupContainer");
    popup.classList.add("visible");
});

document.addEventListener("click", function(event) {
    var popup = document.getElementById("popupContainer");

    // Close the popup if a click occurs outside of it
    if (event.target === popup) {
        popup.classList.remove("visible");
    }
});

function createDivBox() {
    var divBox = document.createElement("div");
    divBox.classList.add("box");
    document.getElementById("contentContainer").appendChild(divBox);
}


let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get form data
    var formData = new FormData(event.target);
  
    // Create an object for the form submission
    var submission = {};
  
    // Store form field values in the object
    for (var pair of formData.entries()) {
      submission[pair[0]] = pair[1];
    }
  
    // Use the object data to add divs to the page
    var resultContainer = document.getElementById("resultContainer");
  
    var submissionDiv = document.createElement("div");
    submissionDiv.className = "submission";
  
    for (var field in submission) {
      var fieldDiv = document.createElement("div");
      fieldDiv.textContent = field + ": " + submission[field];
      submissionDiv.appendChild(fieldDiv);
    }
  
    resultContainer.appendChild(submissionDiv);
  });


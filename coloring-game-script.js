const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const submitButton = document.getElementById('submitQuiz');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    if (checkedCheckboxes.length === 3) {
      submitButton.disabled = false; // Enable the button
    } else {
      submitButton.disabled = true; // Disable the button
    }

    if (checkedCheckboxes.length > 3) {
      this.checked = false; // Prevent checkbox from being checked
    }
    
  
  });
});


submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    quiz.style.display = 'none';
    submitQuiz.style.display = 'none';
  
    canvasContainer.style.display = 'block';
  
    displayCanvas();
 });
  
 
  
  
  



  
  
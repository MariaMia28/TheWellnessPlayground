// Object to store audio elements
const audioElements = {};

// Get all the checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Function to handle checkbox change
function handleCheckboxChange() {
  const instrument = this.id; // Get the id of the checkbox clicked

  if (this.checked) {
    // If checkbox is checked, create and play the audio
    const audio = new Audio(`./audio/${instrument}.mp3`); // Create a new Audio object
    audio.loop = true; // Set the audio to loop
    audio.play(); // Play the audio
    audioElements[instrument] = audio; // Store the audio element in the object
  } else {
    // If checkbox is unchecked, stop and remove the audio
    const audio = audioElements[instrument]; // Retrieve the audio element from the object
    if (audio) {
      audio.pause(); // Pause the audio
      audio.currentTime = 0; // Reset the audio to the beginning
      delete audioElements[instrument]; // Remove the audio element from the object
    }
  }
}

// Add event listener to each checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', handleCheckboxChange);
});

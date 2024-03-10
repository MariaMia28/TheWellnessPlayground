document.addEventListener('DOMContentLoaded', function() {
  const apiKey = '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'; // Replace 'YOUR_API_KEY' with your actual API key
  const generateButton = document.getElementById('generateButton');
  const musicPlayer = document.getElementById('musicPlayer');

  generateButton.addEventListener('click', async function() {
      try {
          const response = await fetch('https://api.openai.com/v1/jukebox/token', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${apiKey}`
              },
              body: JSON.stringify({
                  'model': 'gpt-4-0125',
                  'length': 120  // Length of the generated music in seconds
              })
          });
          const data = await response.json();
          const audioUrl = data.url;
          musicPlayer.src = audioUrl;
          musicPlayer.play();
      } catch (error) {
          console.error('Error generating music:', error);
      }
  });
});

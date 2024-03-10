document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submitQuiz");
  const colorPalette = document.getElementById("colorPalette");
  const canvasContainer = document.getElementById("canvas-container");
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const checkboxes = document.querySelectorAll(".answer");
  const selectedEmotions = [];
  let paletteColors = [];
  let isDrawing = false;

  submitButton.addEventListener("click", function() {
      
      document.getElementById("question").style.display = "none";
      document.querySelectorAll("ul li").forEach(function(li) {
          li.style.display = "none";
      });
      submitButton.style.display = "none";

      
      checkboxes.forEach(function(checkbox) {
          if (checkbox.checked && selectedEmotions.length < 3) {
              selectedEmotions.push(checkbox.id);
          }
      });

    
      if (selectedEmotions.length > 0) {
          selectedEmotions.forEach(function(emotion) {
              const color = getColorForEmotion(emotion);
              paletteColors.push(color);
              createPaletteColor(color);
          });

          canvasContainer.style.display = "block";
          loadImage();
      }
  });

  
  checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function() {
          
          const checkedCount = document.querySelectorAll(".answer:checked").length;
          if (checkedCount > 3) {
              checkbox.checked = false;
          }
      });
  });

  function getColorForEmotion(emotion) {
      switch (emotion) {
          case "yellow":
              return "yellow";
          case "purple":
              return "purple";
          case "blue":
              return "blue";
          case "green":
              return "green";
          case "red":
              return "red";
          case "orange":
              return "orange";
          case "grey":
              return "grey";
          case "pink":
              return "pink";
          default:
              return "black";
      }
  }

  function createPaletteColor(color) {
      const paletteColor = document.createElement("div");
      paletteColor.className = "palette-color";
      paletteColor.style.backgroundColor = color;
      paletteColor.addEventListener("click", function() {
          if (paletteColors.includes(color)) {
              context.fillStyle = color;
          }
      });
      colorPalette.appendChild(paletteColor);
  }

  function loadImage() {
      const image = new Image();
      image.src = "images/fluture.jpg";
      image.onload = function() {
          const aspectRatio = image.width / image.height;
          const canvasWidth = 700;
          const canvasHeight = canvasWidth / aspectRatio;
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;

          const x = (canvasWidth - image.width) / 2;
          const y = (canvasHeight - image.height) / 2;
          context.drawImage(image, x, y, image.width, image.height);
      };
  }


  canvas.addEventListener("mousedown", function(event) {
      isDrawing = true;
      draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop);
  });

  canvas.addEventListener("mousemove", function(event) {
      if (isDrawing) {
          draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop);
      }
  });

  canvas.addEventListener("mouseup", function() {
      isDrawing = false;
  });

  function draw(x, y) {
      if (isDrawing) {
          context.beginPath();
          context.arc(x, y, 5, 0, Math.PI * 2);
          context.fill();
          context.closePath();
      }
  }

//   function saveImage() {
//     var dataURL = canvas.toDataURL('image/jpg');
//     var link = document.createElement('a');
//     link.href = dataURL;
//     link.download = 'drawing.jpg';
//     link.click();
// }
});
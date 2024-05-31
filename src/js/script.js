const buttonContainer = document.getElementById('button-container');

buttonContainer.addEventListener('click', async (event) => {
  const clickedButton = event.target;  // Get the clicked element
  
  if (clickedButton.tagName === 'BUTTON') { // Check if it's a button
    const buttonId = clickedButton.id.split('-')[1]; // Extract text element ID
    
    try {
      await navigator.clipboard.writeText(clickedButton.textContent);
      clickedButton.classList.add('botao-clicado'); // Add class after successful copy
    } catch (err) {
      console.error('Error copying text:', err);
      alert('Oops! Something went wrong while copying the text.');
    }
  }
});
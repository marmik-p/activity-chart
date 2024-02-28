const nameInput = document.getElementById('name-input');
const generateButton = document.getElementById('generate-button');
const nameGridContainer = document.getElementById('name-grid-container');

generateButton.addEventListener('click', () => {
  const name = nameInput.value.toUpperCase();
  nameGridContainer.innerHTML = ""; // Clear previous grids

  // Define character patterns 
   const charPatterns =  {
                'A': [
                    [0, 0, 1, 0, 0],
                    [0, 1, 0, 1, 0],
                    [1, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1]
                ],
                'B': [
                    [1, 1, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 1, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 1, 1, 1, 0]
                ],
                'C': [
                    [0, 1, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 1],
                    [0, 1, 1, 1, 0]
                ],
                // Add matrices for other characters as needed
                'D': [
                    [1, 1, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 1, 1, 1, 0]
                ],
                'E': [
                    [1, 1, 1, 1, 1],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 1, 1, 1, 1],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 1, 1, 1, 1]
                ],
                'F': [
                    [1, 1, 1, 1, 1],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 1, 1, 1, 1],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0]
                ],
                'G': [
                    [0, 1, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0],
                    [1, 0, 1, 1, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [0, 1, 1, 1, 0]
                    ],
                'H': [
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1]
                    ],
                'I': [
                    [1, 1, 1, 1, 1],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [1, 1, 1, 1, 1]
                    ],
                'J': [
                    [1, 1, 1, 1, 1],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [1, 0, 1, 0, 0],
                    [1, 0, 1, 0, 0],
                    [0, 1, 1, 0, 0]
                    ],
                'K': [
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 1, 0],
                    [1, 0, 1, 0, 0],
                    [1, 1, 0, 0, 0],
                    [1, 0, 1, 0, 0],
                    [1, 0, 0, 1, 0],
                    [1, 0, 0, 0, 1]
                    ],
                'L': [
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 1, 1, 1, 1]
                    ],
                'M': [
                    [1, 0, 0, 0, 1],
                    [1, 1, 0, 1, 1],
                    [1, 0, 1, 0, 1],
                    [1, 0, 1, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1]
                    ],
                'N': [
                    [1, 0, 0, 0, 1],
                    [1, 1, 0, 0, 1],
                    [1, 1, 1, 0, 1],
                    [1, 0, 1, 0, 1],
                    [1, 0, 0, 1, 1],
                    [1, 0, 0, 1, 1],
                    [1, 0, 0, 0, 1]
                    ],
                'O': [
                    [0, 1, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [0, 1, 1, 1, 0]
                    ],
                'P': [
                    [1, 1, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 1, 1, 1, 0],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0]
                    ],
                'Q': [
                    [0, 1, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 1, 0, 1],
                    [1, 0, 0, 1, 0],
                    [0, 1, 1, 0, 1]
                    ],
                'R': [
                    [1, 1, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 1, 1, 1, 0],
                    [1, 0, 1, 0, 0],
                    [1, 0, 0, 1, 0],
                    [1, 0, 0, 0, 1]
                    ],
                'S': [
                    [0, 1, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0],
                    [0, 1, 1, 1, 0],
                    [0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [0, 1, 1, 1, 0]
                    ],
                'T': [
                    [1, 1, 1, 1, 1],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0]
                    ],
                'U': [
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [0, 1, 1, 1, 0]
                    ],
                'V': [
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [0, 1, 0, 1, 0],
                    [0, 1, 0, 1, 0],
                    [0, 0, 1, 0, 0]
                    ],
                'W': [
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 1, 0, 1],
                    [1, 1, 0, 1, 1],
                    [0, 1, 0, 1, 0]
                    ],
                'X': [
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [0, 1, 0, 1, 0],
                    [0, 0, 1, 0, 0],
                    [0, 1, 0, 1, 0],
                    [1, 0, 0, 0,
                    
                    1],
                    [1, 0, 0, 0, 1]
                    ],
                'Y': [
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [0, 1, 0, 1, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0]
                    ],
                'Z': [
                    [1, 1, 1, 1, 1],
                    [0, 0, 0, 0, 1],
                    [0, 0, 0, 1, 0],
                    [0, 0, 1, 0, 0],
                    [0, 1, 0, 0, 0],
                    [1, 0, 0, 0, 0],
                    [1, 1, 1, 1, 1]
                    ]
};

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"];

  let gridIndex = -1; // Index to track grid number for month name

  // Loop through each character of the name
  for (let i = 0; i < name.length; i++) {
    const charCode = name.charCodeAt(i);
    // Skip non-alphanumeric characters
    if (charCode < 65 || charCode > 90) {
      continue;
    }

    const charGridContainer = document.createElement('div');
    charGridContainer.classList.add('char-grid-container');

    // Set month name based on index
    gridIndex++; // Increment index for next grid

    const charGrid = document.createElement('div');
    charGrid.classList.add('char-grid');

    // Loop through rows and columns to set cell colors
    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 5; x++) {
        const cell = document.createElement('div');

        // Check if the cell needs to be colored based on the character pattern
        const patternIndex = name[i];
        if (charPatterns[patternIndex][y][x] === 0) {
          cell.classList.add('char-grid__uncolored'); // Uncolored cell class
        } else {
          // Choose a random green class and apply it
          const randomGreenClass = "green" + Math.floor(Math.random() * 3 + 1);
          cell.classList.add('colored-cell', randomGreenClass);
        }

        charGrid.appendChild(cell);
      }
    }

    charGridContainer.appendChild(charGrid);
    charGridContainer.appendChild(document.createTextNode(monthNames[gridIndex % monthNames.length]));
    nameGridContainer.appendChild(charGridContainer);
  }
});

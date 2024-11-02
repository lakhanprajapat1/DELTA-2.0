console.log("Day 24")

        // Change the text content of the heading
        function changeText() {
            const title = document.getElementById('title');
            title.textContent = "Hello, JavaScript!";
        }

        // Add a new paragraph element to the container
        function addElement() {
            const container = document.getElementById('container');
            const newParagraph = document.createElement('p');
            newParagraph.textContent = "This is a new paragraph added by JavaScript.";
            container.appendChild(newParagraph);
        }
    

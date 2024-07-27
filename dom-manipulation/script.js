let quotes = JSON.parse(localStorage.getItem('quotes')) || [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", category: "Optimism" },
    { text: "Don't let yesterday take up too much of today.", category: "Inspirational" },
    { text: "well this one qoute was originally created by tdog himslef i dont what to say buhh as you can its actually quite good.", category: "tdog" } ,
    { text: "Do what you can with all you have, wherever you are.", category: "Capability" },
    { text: "Develop an ‘Attitude of Gratitude’. Say thank you to everyone you meet for everything they do for you.", category: "Gratitude" },
    { text: "You are never too old to set another goal or to dream a new dream.", category: "Aspirations" },
    { text: "To see what is right and not do it is a lack of courage.", category: "Integrity" },
    { text: "Reading is to the mind, as exercise is to the body.", category: "Learning" },
    { text: "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.", category: "Confidence" },
    { text: "The future belongs to the competent. Get good, get better, be the best!", category: "Excellence" },
    { text: "For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded.", category: "Possibility" },
    { text: "Things work out best for those who make the best of how things work out.", category: "Perspective" },
    { text: "A room without books is like a body without a soul.", category: "Knowledge" },
    { text: "I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time.", category: "Goals" },
    { text: "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals.", category: "Authenticity" }
  ];

function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

 // Function to show a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = `${quote.text} - ${quote.category}`;
  }
  
  // Function to add a new quote
  function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;
  
    if (newQuoteText && newQuoteCategory) {
      quotes.push({ text: newQuoteText, category: newQuoteCategory });
      document.getElementById('newQuoteText').value = '';
      document.getElementById('newQuoteCategory').value = '';
      alert('Quote added successfully!');
    } else {
      alert('Please enter both a quote and a category.');
    }
  }

  // Function to export quotes as a JSON file
function exportQuotes() {
  const dataStr = JSON.stringify(quotes, null, 2); 
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob); 

  const a = document.createElement('a'); 
  a.href = url; 
  a.download = 'quotes.json'; 
  a.click(); 
  URL.revokeObjectURL(url); 
}

// Function to import quotes from a JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader(); 
  fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result); 
      quotes.push(...importedQuotes); 
      saveQuotes(); 
      alert('Quotes imported successfully!'); 
  };
  fileReader.readAsText(event.target.files[0]); 
}
  
  document.getElementById('newQuote').addEventListener('click', showRandomQuote);
  document.getElementById('addQuote').addEventListener('click', addQuote);
  // document.getElementById('exportQuotes').addEventListener('click', exportQuotes);
  // document.getElementById('importFile').addEventListener('change', importFromJsonFile);
  
  
  showRandomQuote();

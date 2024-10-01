// Get elements
const logArrivalBtn = document.getElementById('log-arrival');
const logDepartureBtn = document.getElementById('log-departure');
const logEntriesList = document.getElementById('log-entries');

// Initialize local storage
let logEntries = JSON.parse(localStorage.getItem('busLog')) || [];

// Display stored entries on page load
displayLogEntries();

// Function to log a time entry
function logEntry(type) {
  const currentTime = new Date().toLocaleString();
  const entry = `${type} - ${currentTime}`;
  logEntries.push(entry);
  
  // Update local storage
  localStorage.setItem('busLog', JSON.stringify(logEntries));

  // Update the UI
  displayLogEntries();
}

// Display log entries
function displayLogEntries() {
  logEntriesList.innerHTML = '';
  logEntries.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = entry;
    logEntriesList.appendChild(li);
  });
}

// Event listeners for logging
logArrivalBtn.addEventListener('click', () => logEntry('Arrival'));
logDepartureBtn.addEventListener('click', () => logEntry('Departure'));
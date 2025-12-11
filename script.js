// Get all price elements
const prices = document.querySelectorAll(".prices");

let total = 0;

// Sum all prices
prices.forEach(p => {
  total += Number(p.textContent);
});

// Get the table
const table = document.querySelector("table");

// Create a row
const row = document.createElement("tr");

// Create one cell
const cell = document.createElement("td");

// Set total price
cell.textContent = total;

// Append cell to row
row.appendChild(cell);

// Append row to table
table.appendChild(row);

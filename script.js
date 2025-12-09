// Create button
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get the table
  const table = document.querySelector('table');

  if (!table) return;

  // Select all price cells in item rows
  const priceElements = table.querySelectorAll('tr td.price');

  // Calculate total
  let totalPrice = 0;
  priceElements.forEach(priceEl => {
    const value = parseFloat(priceEl.textContent);
    if (!isNaN(value)) totalPrice += value;
  });

  // Remove existing total row if present
  const prevTotal = table.querySelector('.total-row');
  if (prevTotal) prevTotal.remove();

  // Create total row
  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row');

  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', table.rows[0].cells.length); // span all columns
  totalCell.textContent = totalPrice; // just the number

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

// Add event listener
getSumBtn.addEventListener("click", getSum);

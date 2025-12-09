const getSum = () => {
  // Get all price elements
  const priceElements = document.querySelectorAll('.prices');

  // Calculate total
  let totalPrice = 0;
  priceElements.forEach(priceEl => {
    totalPrice += parseFloat(priceEl.textContent);
  });

  // Remove previous total row if it exists
  const existingTotalRow = document.querySelector('.total-row');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row for total
  const table = document.querySelector('table'); // assumes only one table
  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row');

  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', '2'); // span across all columns
  totalCell.textContent = `Total: ${totalPrice}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

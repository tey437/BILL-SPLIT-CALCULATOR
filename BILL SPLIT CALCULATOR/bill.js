function calculateSplit() {
  const totalAmount = parseFloat(document.getElementById('totalAmount').value);
  const numPeople = parseInt(document.getElementById('numPeople').value);
  const result = document.getElementById('result');

  if (isNaN(totalAmount) || totalAmount <= 0) {
      result.textContent = "Please enter a valid total amount.";
      return;
  }

  if (isNaN(numPeople) || numPeople <= 0) {
      result.textContent = "Please enter a valid number of people.";
      return;
  }

  const amountPerPerson = totalAmount / numPeople;
  result.textContent = `Each person should pay: $${amountPerPerson.toFixed(2)}`;
}

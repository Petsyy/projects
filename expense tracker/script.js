const expenseLocation = document.getElementById("expenseLocation");
const expenseDate = document.getElementById("expenseDate");
const expenseAmount = document.getElementById("expenseAmount");
const addExpenseButton = document.querySelector(".addExpenseButton");
const expenseList = document.querySelector(".expense-list");

addExpenseButton.addEventListener("click", () => {
  if (
    expenseLocation.value.trim() === "" ||
    expenseDate.value.trim() === "" ||
    expenseAmount.value.trim() === ""
  ) {
    alert("Please fill in all fields before adding an expense.");
    return;
  }

  
  if (expenseList.querySelector("p")) {
    expenseList.innerHTML = "";
  }

  const expenseItem = document.createElement("div");
  expenseItem.classList.add("expense-item");
  expenseItem.innerHTML = `
    <p><strong>Name:</strong> ${expenseLocation.value}</p>
    <p><strong>Date:</strong> ${expenseDate.value}</p>
    <p><strong>Amount:</strong> $${parseFloat(expenseAmount.value).toFixed(2)}</p>
  `;

  expenseList.appendChild(expenseItem);

  expenseLocation.value = "";
  expenseDate.value = "";
  expenseAmount.value = "";
});


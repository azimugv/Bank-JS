let totalBalance = 1240;
const totalBalanceContainer = document.getElementById("total-balance");
totalBalanceContainer.innerText = totalBalance;
// Deposit
let totalDeposit = 0;
const totalDepositContainer = document.getElementById("total-deposit");
totalDepositContainer.innerText = totalDeposit;

document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit");
  const depositAmount = parseInt(depositInput.value);
  totalDeposit = totalDeposit + depositAmount;
  totalDepositContainer.innerText = totalDeposit;
  totalBalance = totalBalance + depositAmount;
  totalBalanceContainer.innerText = totalBalance;
  depositInput.value = "";
});

// Withdraw
let totalWithdraw = 0;
const totalWithdrawContainer = document.getElementById("total-withdraw");
totalWithdrawContainer.innerText = totalWithdraw;

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw");
  const withdrawAmount = parseInt(withdrawInput.value);

  if (withdrawAmount <= totalBalance) {
    totalWithdraw = totalWithdraw + withdrawAmount;
    totalWithdrawContainer.innerText = totalWithdraw;
    totalBalance = totalBalance - withdrawAmount;

    totalBalanceContainer.innerText = totalBalance;
    withdrawInput.value = "";
  } else {
    alert("Balance is low");
  }
});

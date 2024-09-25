// noakhali
const donateButton = document.getElementById("donate-btn");
donateButton.addEventListener("click", function (event) {
  event.preventDefault();
  const inputAddMoney = getInputNumber('donation-input-btn');
  if(inputAddMoney <= 0 || isNaN(inputAddMoney)){
    alert('Invalid Donation Amount');
    return;
  }
  const balance = parseFloat(document.getElementById("amount-1").innerText);
  const newBalance = balance + inputAddMoney;
  document.getElementById("amount-1").innerText = newBalance.toFixed(2);
  const amountElement = parseFloat(document.getElementById("amount").innerText);
  const totalAmount = amountElement - inputAddMoney;
  document.getElementById("amount").innerText = totalAmount.toFixed(2);
  my_modal_1.showModal();

  setHistory(inputAddMoney, "Donate for Flood at Noakhali, Bangladesh");
});
// feni
const donateButton2 = document.getElementById("donate-btn2");
donateButton2.addEventListener("click", function (event) {
  event.preventDefault();
  const inputAddMoney2 = getInputNumber('donation-input-btn2');
  if(inputAddMoney2 <= 0 || isNaN(inputAddMoney2)){
    alert('Invalid Donation Amount');
    return;
  }
  const balance2 = parseFloat(document.getElementById("amount-2").innerText);
  const newBalance2 = balance2 + inputAddMoney2;
  document.getElementById("amount-2").innerText = newBalance2.toFixed(2);

  const amountElement2 = parseFloat(
    document.getElementById("amount").innerText
  );
  const totalAmount2 = amountElement2 - inputAddMoney2;
  document.getElementById("amount").innerText = totalAmount2.toFixed(2);
  console.log(totalAmount2);
  my_modal_1.showModal();

  setHistory(inputAddMoney2, "Donate for Flood Relief in Feni,Bangladesh");
});
// quata
const donateButton3 = document.getElementById("donate-btn3");
donateButton3.addEventListener("click", function (event) {
  event.preventDefault();
  const inputAddMoney3 = getInputNumber('donation-input-btn3');
  if(inputAddMoney3 <= 0 || isNaN(inputAddMoney3)){
    alert('Invalid Donation Amount');
    return;
  }
  const balance3 = parseFloat(document.getElementById("amount-3").innerText);
  const newBalance3 = balance3 + inputAddMoney3;
  document.getElementById("amount-3").innerText = newBalance3.toFixed(2);

  const amountElement3 = parseFloat(
    document.getElementById("amount").innerText
  );
  const totalAmount3 = amountElement3 - inputAddMoney3;
  document.getElementById("amount").innerText = totalAmount3.toFixed(2);
  console.log(totalAmount3);
  my_modal_1.showModal();

  setHistory(inputAddMoney3, "Aid for Injured in the Quota Movement");  
});

const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "bg-primary-color",
    "hover:bg-primary-color",
    "font-bold"
  );
  historyTab.classList.remove("bg-primary-color");
  donationTab.classList.remove("bg-primary-color", "font-bold");
  historyTab.classList.add("bg-primary-color");
  document.getElementById("donation-form").classList.add("hidden");
  document.getElementById("history-sec").classList.remove("hidden");

});

donationTab.addEventListener('click', function(){
  donationTab.classList.add(
    "bg-primary-color",
    "hover:bg-primary-color",
    "font-bold"
  );
  historyTab.classList.remove("bg-primary-color");

  document.getElementById("history-sec").classList.add("hidden");
  document.getElementById("donation-form").classList.remove("hidden");
  document.getElementById("footer").classList.add("hidden");
});

const blogButton = document.getElementById("blog-btn");
blogButton.addEventListener("click", function () {
  window.location.href = "./home.html";
});



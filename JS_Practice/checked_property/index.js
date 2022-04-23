document.getElementById("submit").onclick = function () {
  const checked = document.getElementById("checkbox").checked;
  const visa = document.getElementById("visaBtn").checked;
  const mastercard = document.getElementById("mastercardBtn").checked;
  const paypal = document.getElementById("paypalBtn").checked;

  if (checked) {
    if (visa) {
      alert("YOU SUBSCRIBED WITH VISA");
    } else if (mastercard) {
      alert("YOU SUBSCRIBED WITH MASTERCARD");
    } else if (paypal) {
      alert("YOU SUBSCRIBED WITH PAYPAL");
    } else {
      alert("Please select a payment method to continue");
    }
  } else {
    alert("YOU DID NOT SUBSCRIBE!");
  }
};

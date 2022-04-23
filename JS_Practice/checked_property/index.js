document.getElementById("submit").onclick = function () {
  const checked = document.getElementById("checkbox").checked;

  if (checked) {
    alert("YOU SUBSCRIBED!");
  } else {
    alert("YOU DID NOT SUBSCRIBE!");
  }
};

document.addEventListener("DOMContentLoaded", () => {
let acc = document.getElementsByClassName("questionHeader");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.margin = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.marginBottom = "20px";
    }
  });
}

  const name = document.getElementById("name");
  const confirmation = document.getElementById("confirmation");
  const requiredMessage = document.getElementById("requiredMessage");
  const submitButton = document.getElementById("submitButton");
  const rsvpForm = document.getElementById("rsvpForm");
  const formResponse = document.getElementById("formResponse");
  const thankYou = document.getElementById("thankYou");
  const header = document.getElementById("header");

  let randomImage = Math.floor(Math.random() * 41);

  function switchImages() {
    if (randomImage < 41) {
      randomImage ++;
    } else {
      randomImage = 0;
    }
    header.style.backgroundImage = `url("/images/image${randomImage}.jpg"), linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))`
  }

  window.setInterval(switchImages, 5000);

  rsvpForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (name.value != "" && confirmation.value != "") {
      if (confirmation.value == "No") {
        thankYou.innerHTML = "We're sorry to hear you can't make it, but we'd love to see you before our wedding! Feel free to get in touch and let us know when you're next free!";
      }
      const data = new FormData(rsvpForm);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      requiredMessage.style.display = "none";
      rsvpForm.style.display = "none";
      formResponse.style.display = "block";

    } else {
      requiredMessage.style.display = "block";
    }
  });

});

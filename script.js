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

const confirmation = document.getElementById("confirmation");
const submitButton = document.getElementById("submitButton");
const rsvpForm = document.getElementById("rsvpForm");
const formResponse = document.getElementById("formResponse");

rsvpForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(rsvpForm);
  const action = e.target.action;
  fetch(action, {
    method: 'POST',
    body: data,
  })
});

submitButton.addEventListener("click", function() {
    rsvpForm.style.display = "none";
    formResponse.style.display = "block";
  }
)

confirmation.addEventListener("change", function() {
    if (confirmation.value == "Yes") {
      document.querySelector('#origin').style.display = "block";
      document.querySelector('#dietary').style.display = "block";
      document.querySelector('#access').style.display = "block";
      document.querySelector('#family').style.display = "block";
      document.querySelector('#kids').style.display = "block";
      document.querySelector('#volunteer').style.display = "block";
    } else {
      document.querySelector('#origin').style.display = "none";
      document.querySelector('#dietary').style.display = "none";
      document.querySelector('#access').style.display = "none";
      document.querySelector('#family').style.display = "none";
      document.querySelector('#kids').style.display = "none";
      document.querySelector('#volunteer').style.display = "none";
    }
  }
)

});

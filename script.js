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

const submitButton = document.getElementById("submitButton");
const rsvpForm = document.getElementById("rsvpForm");
const formResponse = document.getElementById("formResponse");

rsvpForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(form);
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

});

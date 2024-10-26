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

let logicList = document.getElementsByClassName("logicGate");
let j;

confirmation.addEventListener("change", function() {
  for (j = 0; j < logicList.length; j++) {
    if (confirmation.value == "Yes") {
      logicList[j].style.display = "block";
      logicList[j].style.maxHeight = "null";
    } else {
      logicList[j].style.display = "none";
      logicList[j].style.maxHeight = "0";
    }
  }
})

});

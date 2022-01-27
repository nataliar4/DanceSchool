const instructorEmail = document.querySelector(".instructorEmail")
const courseName = document.querySelector(".courseName")
const earnings = document.querySelector(".earnings")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  fetch("http://localhost:3000/instructor/assignment", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({instructorEmail:instructorEmail.value, courseName: courseName.value, earnings: earnings.value >= 0 ? earnings.value : 0})
  }).then(response => response.json()).then(data => { 
    if (data.message != undefined) {
      if (data.message != "blad serwera") {
        window.alert(data.message);
      } else {
        window.alert("Wprowadzono niepoprawne dane")
      }
    }})
  
})
const email = document.querySelector(".email")
const courseName = document.querySelector(".courseName")
const attendance = document.querySelector(".attendance")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  fetch("http://localhost:3000/instructor/registration", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({
      participant: email.value, 
      courseName: courseName.value,
      attendance: attendance.value
    })
  }).then(response => response.json()).then(data => { 
    if (data.message != undefined) {
      if (data.message != "blad serwera") {
        window.alert(data.message);
      } else {
        window.alert("Wprowadzono niepoprawne dane")
      }
    }})
})
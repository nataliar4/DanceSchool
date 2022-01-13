const email = document.querySelector(".email")
const courseName = document.querySelector(".courseName")
const attendance = document.querySelector(".attendance")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(email.value)
  console.log(courseName.value)
  console.log(attendance.value)
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
  }).then(response => response.json()).then(data => console.log(data))
  // loginSubmit.innerText="Log In"
})
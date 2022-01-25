const instructorEmail = document.querySelector(".instructorEmail")
const courseName = document.querySelector(".courseName")
const earnings = document.querySelector(".earnings")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(instructorEmail.value)
  console.log(courseName.value)
  console.log(earnings.value)
  fetch("http://localhost:3000/instructor/assignment", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({instructorEmail:instructorEmail.value, courseName: courseName.value, earnings: earnings.value})
  }).then(response => response.json()).then(data => window.alert(data.message))
  
})
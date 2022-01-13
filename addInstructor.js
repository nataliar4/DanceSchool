const instructorEmail = document.querySelector(".instructorEmail")
const password = document.querySelector(".password")
const instructorName = document.querySelector(".name")
const surname = document.querySelector(".surname")
const isAdmin = document.querySelector(".admin")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(instructorEmail)
  console.log(password)  
  console.log(instructorName)
  console.log(surname)
  console.log(isAdmin)
  fetch("http://localhost:3000/instructor", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({
      email: instructorEmail.value,
      password: password.value,
      name: instructorName.value,
      surname: surname.value,
      isAdmin: isAdmin.value
    })
  }).then(response => response.json()).then(data => console.log(data))
  // loginSubmit.innerText="Log In"
})
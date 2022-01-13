const instructorEmail = document.querySelector(".instructorEmail")
const password = document.querySelector(".password")
const instructorName = document.querySelector(".name")
const surname = document.querySelector(".surname")
const isAdmin = document.querySelector(".admin")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(instructorEmail.value)
  console.log(password.value)  
  console.log(instructorName.value)
  console.log(surname.value)
  console.log(isAdmin.checked)
  fetch("http://localhost:3000/admin/instructor", {
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
      isAdmin: isAdmin.checked
    })
  }).then(response => response.json()).then(data => console.log(data))
  // loginSubmit.innerText="Log In"
})
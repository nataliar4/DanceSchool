const email = document.querySelector(".email")
const password = document.querySelector(".password")
const participantName = document.querySelector(".participantName")
const surname = document.querySelector(".surname")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(email.value)
  console.log(password.value)
  console.log(participantName.value)
  console.log(surname.value)
  fetch("http://localhost:3000/instructor/participant", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({
      email: email.value,
      password: password.value,
      name: participantName.value,
      surname: surname.value
    })
  }).then(response => response.json()).then(data => console.log(data))
})
const loginUsername = document.querySelector(".loginUsername")
const loginPassword = document.querySelector(".loginPassword")
const loginSubmit = document.querySelector(".loginSubmit")


loginSubmit.addEventListener("click", ()=>{
  // console.log(loginUsername.value)
  // console.log(loginPassword.value)
  fetch("http://localhost:3000/login/in", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // body:JSON.stringify({email:loginUsername.value, password:loginPassword.value})
  }).then(response => response.json()).then(data => console.log(data))
  // loginSubmit.innerText="Log In"
})


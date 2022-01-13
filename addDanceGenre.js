const danceName = document.querySelector("label.input")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(danceName)
  fetch("http://localhost:3000/danceGenre", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({
      name: danceName.value,
    })
  }).then(response => response.json()).then(data => console.log(data))
  // loginSubmit.innerText="Log In"
})
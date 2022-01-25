const danceName = document.querySelector(".danceGenreName")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(danceName.value)
  fetch("http://localhost:3000/admin/danceGenre", {
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
  }).then(response => response.json()).then(data => window.alert(data.message))
  // loginSubmit.innerText="Log In"
})
const instructorEmail = document.querySelector(".instructorEmail")
const danceGenreName = document.querySelector(".danceGenreName")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(instructorEmail)
  console.log(danceGenreName)  
  fetch("http://localhost:3000/instructorAndGenre", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({
      instructorEmail: instructorEmail.value,
      danceGenreName: danceGenreName.value
    })
  }).then(response => response.json()).then(data => console.log(data))
  // loginSubmit.innerText="Log In"
})
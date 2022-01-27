const instructorEmail = document.querySelector(".instructorEmail")
const danceGenreName = document.querySelector(".danceGenreName")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  fetch("http://localhost:3000/admin/instructorAndGenre", {
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
  }).then(response => response.json()).then(data => { 
    if (data.message != undefined) {
      if (data.message != "blad serwera") {
        window.alert(data.message);
      } else {
        window.alert("Wprowadzono niepoprawne dane")
      }
    }})
})
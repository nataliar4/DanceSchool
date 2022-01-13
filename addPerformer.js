const performerName = document.querySelector(".performerName")
const musicGenreName = document.querySelector(".musiGenreName")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(performerName.value)
  console.log(musicGenreName.value)
  fetch("http://localhost:3000/admin/performer", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({name:performerName.value, musicGenre: musicGenreName.value})
  }).then(response => response.json()).then(data => console.log(data))
  // loginSubmit.innerText="Log In"
})
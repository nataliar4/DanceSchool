const performerName = document.querySelector(".performerName")
const musicGenreName = document.querySelector(".musicGenreName")
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
  }).then(response => response.json()).then(data => data.message == undefined ? console.log(): window.alert(data.message))
  // loginSubmit.innerText="Log In"
})
const roomName = document.querySelector(".roomName")
const capacity = document.querySelector(".capacity")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(roomName.value)
  console.log(capacity.value)
  fetch("http://localhost:3000/admin/room", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({
      name: roomName.value, 
      capacity: capacity.value
    })
  }).then(response => response.json()).then(data => data.message == undefined ? console.log(): window.alert(data.message))
  // loginSubmit.innerText="Log In"
})
const levelName = document.querySelector(".levelName")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(levelName.value)
  fetch("http://localhost:3000/admin/level", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({name: levelName.value})
  }).then(response => response.json()).then(data => console.log(data))
})
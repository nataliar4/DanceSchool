const title = document.querySelector(".title")
const source = document.querySelector(".source")
const performer = document.querySelector(".performer")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(title.value)
  console.log(source.value)
  console.log(performer.value)
  fetch("http://localhost:3000/admin/song", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({
      title: title.value, 
      capacity: capacity.value,
      performerName: performer
    })
  }).then(response => response.json()).then(data => window.alert(data.message))
  // loginSubmit.innerText="Log In"
})
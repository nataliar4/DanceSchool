const recordingName = document.querySelector(".recordingName")
const source = document.querySelector(".source")
const courseName = document.querySelector(".courseName")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(recordingName.value)
  console.log(source.value)
  console.log(courseName.value)
  fetch("http://localhost:3000/instructor/recording", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({
      name:recordingName.value, 
      source: source.value,
      courseName: courseName.value
    })
  }).then(response => response.json()).then(data => window.alert(data.message))
  // loginSubmit.innerText="Log In"
})
const courseName = document.querySelector(".courseName")
const price = document.querySelector(".price")
const numberOfClasses = document.querySelector(".numberOfClasses")
const startTime = document.querySelector(".startTime")
const requirements = document.querySelector(".requirements")
const rommName = document.querySelector(".roomName")
const songTitle = document.querySelector(".songTitle")
const levelName = document.querySelector(".levelName")
const danceGenreName = document.querySelector(".danceGenreName")
const addButton = document.querySelector(".addButton")


addButton.addEventListener("click", ()=>{
  console.log(courseName.value)
  console.log(price.value)
  console.log(numberOfClasses.value)
  console.log(startTime.value)
  console.log(requirements.value)
  console.log(roomName.value)
  console.log(songTitle.value)
  console.log(levelName.value)
  console.log(danceGenreName.value)  
  fetch("http://localhost:3000/instructor/instructor/course", {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({
      name: courseName.value,
      price: price.value,
      numberClasses: numberOfClasses.value,
      startTime: startTime.value,
      requirements: requirements.value,
      roomName: rommName.value,
      songTitle: songTitle.value,
      levelName: levelName.value,
      danceGenreName: danceGenreName.value
    })
  }).then(response => response.json()).then(data => console.log(data))
  // loginSubmit.innerText="Log In"
})
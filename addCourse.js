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
  console.log(courseName)
  console.log(price)
  console.log(numberOfClasses)
  console.log(startTime)
  console.log(requirements)
  console.log(roomName)
  console.log(songTitle)
  console.log(levelName)
  console.log(danceGenreName)  
  fetch("http://localhost:3000/course", {
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
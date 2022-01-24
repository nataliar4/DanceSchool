const someContainer = document.querySelector(".someContainer")
function addName(container, txt) {
  var newParagraph = document.createElement("p");
  var text = document.createTextNode(txt);
  newParagraph.appendChild(text);
  container.appendChild(newParagraph);
  newParagraph.classList.add("courseName");
}
async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/participant/registration", {
      method:"GET",
      mode:"cors",
      credentials:"include",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const jsonSomeResponse = await someResponse.json();
    console.log(jsonSomeResponse);
    for (const response in jsonSomeResponse) {
      const newDiv = addDiv(someContainer);
      addName(newDiv, jsonSomeResponse[response]["course"]);
      addParagraph(newDiv, "Attendance: "+jsonSomeResponse[response]["attendance"]);
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  



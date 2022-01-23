const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/admin/instructorAndGenre", { // change---------------------
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
      const instructorEmail = jsonSomeResponse[response]["instructor"];
      const danceGenreName = jsonSomeResponse[response]["danceGenre"];
      addParagraph(newDiv, "instructor: "+instructorEmail); 
      addParagraph(newDiv, danceGenreName);
      addLink(newDiv, "Modify", "modifyElement");
      addLink(newDiv, "Delete", "deleteElement", "http://localhost:3000/admin/instructorAndGenre", {instructorEmail, danceGenreName});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  



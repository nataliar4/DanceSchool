const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/admin/danceGenre", {
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
      const name = jsonSomeResponse[response]["name"];
      addParagraph(newDiv, name);
      addLabel(newDiv, "Name: ");
      addInput(newDiv, "danceGenreName", "text", name, response);
      addLinkCallback(newDiv, "Modify", "modifyElement", async () => {
        const genreInput = document.querySelector(`#danceGenreName-input-${response}`);

          try {
            const assignmentResponse = await fetch("http://localhost:3000/admin/danceGenre", {
              method:"PUT",
              mode:"cors",
              credentials:"include",
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify({byName: name, name: genreInput.value})
            });
            const jsonAssignmentResponse = await assignmentResponse.json();
            console.log(jsonAssignmentResponse);
          } catch (err) {
            console.log(err);
          }
        
      });
      addLink(newDiv, "Delete", "deleteElement", "http://localhost:3000/admin/danceGenre", {name});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  



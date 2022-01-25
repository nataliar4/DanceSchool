const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/admin/performer", {
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
      const name = jsonSomeResponse[response]["name"]
      const genre = jsonSomeResponse[response]["musicGenre"];
      addParagraph(newDiv, name);
      addParagraph(newDiv, genre);
      addLabel(newDiv, "Performer name: ");
      addInput(newDiv, "perfName", "text", name, response);
      addLabel(newDiv, "Music genre: ");
      addInput(newDiv, "genre", "text", genre, response);
      addLinkCallback(newDiv, "Modify", "modifyElement", async () => {
        const perfName = document.querySelector(`#perfName-input-${response}`);
        const genreName = document.querySelector(`#genre-input-${response}`);

          try {
            const assignmentResponse = await fetch("http://localhost:3000/admin/performer/"+name, {
              method:"PUT",
              mode:"cors",
              credentials:"include",
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify({name: perfName.value, musicGenre: genreName.value})
            });
            const jsonAssignmentResponse = await assignmentResponse.json();
            window.alert(jsonAssignmentResponse.message);
            clearDiv();
            loadList();
          } catch (err) {
            console.log(err);
          }
        
      });
      addLink(newDiv, "Delete", "deleteElement", "http://localhost:3000/admin/performer/"+name, {name});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  



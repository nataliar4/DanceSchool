const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/admin/level", {
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
      addParagraph(newDiv, name);
      addLabel(newDiv, "Name: ");
      addInput(newDiv, "levelName", "text", name, response);
      addLinkCallback(newDiv, "Modify", "modifyElement", async () => {
        const lvlName = document.querySelector(`#levelName-input-${response}`);

          try {
            const assignmentResponse = await fetch("http://localhost:3000/admin/level/"+name, {
              method:"PUT",
              mode:"cors",
              credentials:"include",
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify({name: lvlName.value})
            });
            const jsonAssignmentResponse = await assignmentResponse.json();
            jsonAssignmentResponse.message == undefined ? console.log(): window.alert(jsonAssignmentResponse.message);
            clearDiv();
            loadList();
          } catch (err) {
            console.log(err);
          }
        
      });
      addLink(newDiv, "Delete", "deleteElement", "http://localhost:3000/admin/level/"+name, {name});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  



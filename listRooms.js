const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/admin/room", {
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
      const cap = jsonSomeResponse[response]["capacity"];
      addParagraph(newDiv, name);
      addParagraph(newDiv, "Max number of people: "+cap);
      addLabel(newDiv, "Room name: ");
      addInput(newDiv, "rmName", "text", name, response);
      addLabel(newDiv, "Max number of people: ");
      addInput(newDiv, "capac", "number", cap, response);

      addLinkCallback(newDiv, "Modify", "modifyElement", async () => {
        const rmIn = document.querySelector(`#rmName-input-${response}`);
        const capIn = document.querySelector(`#capac-input-${response}`).value >= 0 ? document.querySelector(`#capac-input-${response}`) : cap;

          try {
            const assignmentResponse = await fetch("http://localhost:3000/admin/room/"+name, {
              method:"PUT",
              mode:"cors",
              credentials:"include",
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify({name: rmIn.value, capacity: capIn.value})
            });
            const jsonAssignmentResponse = await assignmentResponse.json();
            jsonAssignmentResponse.message == undefined ? console.log(): window.alert(jsonAssignmentResponse.message);
            clearDiv();
            loadList();
          } catch (err) {
            console.log(err);
          }
        
      });
      addLink(newDiv, "Delete", "deleteElement");
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  






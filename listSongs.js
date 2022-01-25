const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/admin/song", {
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
      const title = jsonSomeResponse[response]["title"];
      const perf = jsonSomeResponse[response]["performer"];
      const source = jsonSomeResponse[response]["source"];
      addParagraph(newDiv, title);
      addSource(newDiv, source);
      addParagraph(newDiv, "Performer: "+perf);
      addLabel(newDiv, "Title: ");
      addInput(newDiv, "title", "text", title, response);
      addLabel(newDiv, "Performer name: ");
      addInput(newDiv, "perfName", "text", perf, response);
      addLabel(newDiv, "Source: ");
      addInput(newDiv, "source", "text", source, response);


      addLinkCallback(newDiv, "Modify", "modifyElement", async () => {
        const perfName = document.querySelector(`#perfName-input-${response}`);
        const sourceIn = document.querySelector(`#source-input-${response}`);
        const titleIn = document.querySelector(`#title-input-${response}`);

          try {
            const assignmentResponse = await fetch("http://localhost:3000/admin/song/", {
              method:"PUT",
              mode:"cors",
              credentials:"include",
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify({byTitle: title, title: titleIn.value, 
                source: sourceIn.value, performerName: perfName.value})
            });
            const jsonAssignmentResponse = await assignmentResponse.json();
            window.alert(jsonAssignmentResponse.message);
            clearDiv();
            loadList();
          } catch (err) {
            console.log(err);
          }
        
      });
      addLink(newDiv, "Delete", "deleteElement", "http://localhost:3000/admin/song", {title});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  



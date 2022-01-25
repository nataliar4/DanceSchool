const coursesContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const courseResponse = await fetch("http://localhost:3000/instructor/course", {
      method:"GET",
      mode:"cors",
      credentials:"include",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const jsonCourseResponse = await courseResponse.json();
    console.log(jsonCourseResponse);
    for (const response in jsonCourseResponse) {
      const newDiv = addDiv(coursesContainer);
      const name = jsonCourseResponse[response];

      const cResponse = await fetch("http://localhost:3000/instructor/course/form/edit", {
        method:"POST",
        mode:"cors",
        credentials:"include",
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({byName: name})
      });
      const jsonCResponse = await cResponse.json();
      console.log(jsonCResponse);

      addParagraph(newDiv, name);
      addLabel(newDiv, "Name: ");
      addInput(newDiv, "courseName", "text", name, response);

      addLabel(newDiv, "Price: ");
      addInput(newDiv, "price", "number", jsonCResponse.price, response, "0.01");

      addLabel(newDiv, "Number of classes: ");
      addInput(newDiv, "numberOfClasses", "number", jsonCResponse.numberClasses, response);

      addLabel(newDiv, "Start time: ");
      addInput(newDiv, "startTime", "datetime-local", jsonCResponse.startTime, response);

      addLabel(newDiv, "Requirements: ");
      addInput(newDiv, "requirements", "text", jsonCResponse.requirements, response);

      addLabel(newDiv, "Room name: ");
      addInput(newDiv, "roomName", "text", jsonCResponse.room, response);

      addLabel(newDiv, "Song title: ");
      addInput(newDiv, "songTitle", "text", jsonCResponse.song, response);

      addLabel(newDiv, "Level name: ");
      addInput(newDiv, "levelName", "text", jsonCResponse.level, response);

      addLabel(newDiv, "Dance genre: ");
      addInput(newDiv, "danceGenreName", "text", jsonCResponse.danceGenre, response);




      addLinkCallback(newDiv, "Modify", "modifyElement", async () => {
        const courseInput = document.querySelector(`#courseName-input-${response}`);
        console.log(courseInput)
        const priceInput = document.querySelector(`#price-input-${response}`);
        const numClassesInput = document.querySelector(`#numberOfClasses-input-${response}`);
        const startInput = document.querySelector(`#startTime-input-${response}`);
        const requirementsInput = document.querySelector(`#requirements-input-${response}`);
        const roomInput = document.querySelector(`#roomName-input-${response}`);
        const songInput = document.querySelector(`#songTitle-input-${response}`);
        const levelInput = document.querySelector(`#levelName-input-${response}`);
        const genreInput = document.querySelector(`#danceGenreName-input-${response}`);
        console.log(priceInput);
          try {
            const assignmentResponse = await fetch("http://localhost:3000/instructor/course", {
              method:"PUT",
              mode:"cors",
              credentials:"include",
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify({byName: name, name: courseInput.value, price: priceInput.value,
                numberClasses: numClassesInput.value, startTime: startInput.value, 
                requirements: requirementsInput.value, roomName: roomInput.value, 
                songTitle: songInput.value, levelName: levelInput.value, danceGenreName: genreInput.value})
            });
            const jsonAssignmentResponse = await assignmentResponse.json();
            window.alert(jsonAssignmentResponse.message);
            clearDiv();
            loadList();
          } catch (err) {
            console.log(err);
          }
        
      });

      addLink(newDiv, "Delete", "deleteElement","http://localhost:3000/instructor/course", {name});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  



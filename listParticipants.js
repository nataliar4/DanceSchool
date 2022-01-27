const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/instructor/participant", {
      method:"GET",
      mode:"cors",
      credentials:"include",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const jsonSomeResponse = await someResponse.json();
    // console.log(jsonSomeResponse);
    for (const response in jsonSomeResponse) {
      const newDiv = addDiv(someContainer);
      const email = jsonSomeResponse[response]["email"];
      const partName = jsonSomeResponse[response]["name"];
      const partSurname = jsonSomeResponse[response]["surname"];
      addParagraph(newDiv, partName+" "+partSurname);
      addParagraph(newDiv, email);
      addLabel(newDiv, "Name: ");
      addInput(newDiv, "instName", "text", partName, response);
      addLabel(newDiv, "Surname: ");
      addInput(newDiv, "instSurname", "text", partSurname, response);
      addLabel(newDiv, "Email: ");
      addInput(newDiv, "email", "email", email, response);
      addLabel(newDiv, "Current Password: ");
      addInput(newDiv, "passwd1", "password", "", response);
      addLabel(newDiv, "New Password: ");
      addInput(newDiv, "passwd2", "password", "", response);
      addLabel(newDiv, "Repeat New Password: ")
      addInput(newDiv, "passwd3", "password", "", response);

      addLinkCallback(newDiv, "Modify", "modifyElement", async () => {
        const mail = document.querySelector(`#email-input-${response}`);
        const pass1 = document.querySelector(`#passwd1-input-${response}`);
        const pass2 = document.querySelector(`#passwd2-input-${response}`);
        const pass3 = document.querySelector(`#passwd3-input-${response}`);
        const instName = document.querySelector(`#instName-input-${response}`);
        const instSurname = document.querySelector(`#instSurname-input-${response}`);

        try {
            const checkResponse = await fetch("http://localhost:3000/login/check", {
            method:"POST",
              mode:"cors",
              credentials:"include",
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify({email: email, password: pass1.value})
            });
            const jsonCheckResponse = await checkResponse.json();
            // console.log(jsonCheckResponse);


            if (jsonCheckResponse.message == 'Password correct') {
              if(pass2.value == pass3.value) {
                try {
                  const assignmentResponse = await fetch("http://localhost:3000/instructor/participant", {
                    method:"PUT",
                    mode:"cors",
                    credentials:"include",
                    headers: {
                      'Content-Type': 'application/json'
                      // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body:JSON.stringify({byEmail: email, email: mail.value, password: pass2.value,
                      name: instName.value, surname: instSurname.value})
                  });
                  const jsonAssignmentResponse = await assignmentResponse.json();
                  if (jsonAssignmentResponse.message != undefined) {
                    if (jsonAssignmentResponse.message != "blad serwera") {
                      window.alert(jsonAssignmentResponse.message);
                    } else {
                      window.alert("Wprowadzono niepoprawne dane")
                    }
                  }
                  clearDiv();
                  loadList();
                } catch (err) {
                  console.log(err);
                }
              } else {
                window.alert("New passwords are different!");
              }
            } else {
              window.alert("Current password incorect!");
            }
        } catch (err) {
          console.log(err);
        }  
      });
      addLink(newDiv, "Delete", "deleteElement", "http://localhost:3000/instructor/participant", {email});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  



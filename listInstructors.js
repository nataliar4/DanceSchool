const someContainer = document.querySelector(".someContainer")

async function loadList() {
  try {
    const someResponse = await fetch("http://localhost:3000/admin/instructor", {
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
      const email = jsonSomeResponse[response]["email"];
      const isAdmin = jsonSomeResponse[response]["isAdmin"];
      const instName = jsonSomeResponse[response]["name"];
      const instSurname = jsonSomeResponse[response]["surname"];
      const isAdm = (isAdmin) ? "Admin" : "";
      addParagraph(newDiv, instName+" "+instSurname);
      addParagraph(newDiv, email);
      addParagraph(newDiv, isAdm);
      addLabel(newDiv, "Email: ");
      addInput(newDiv, "email", "email", email, response);
      // addLabel(newDiv, "Current Password: ");
      // addInput(newDiv, "passwd1", "password", "", response);
      addLabel(newDiv, "New Password: ");
      addInput(newDiv, "passwd2", "password", "", response);
      addLabel(newDiv, "Repeat New Password: ")
      addInput(newDiv, "passwd3", "password", "", response);
      addLabel(newDiv, "Name: ");
      addInput(newDiv, "instName", "text", instName, response);
      addLabel(newDiv, "Surname: ");
      addInput(newDiv, "instSurname", "text", instSurname, response);
      addLabel(newDiv, "Is Admin? ");
      addCheckbox(newDiv, "isAdmin", "checkbox", isAdm, response);
      addLinkCallback(newDiv, "Modify", "modifyElement", async () => {
              const mail = document.querySelector(`#email-input-${response}`);
              // const pass1 = document.querySelector(`#passwd1-input-${response}`);
              const pass2 = document.querySelector(`#passwd2-input-${response}`);
              const pass3 = document.querySelector(`#passwd3-input-${response}`);
              const instName = document.querySelector(`#instName-input-${response}`);
              const instSurname = document.querySelector(`#instSurname-input-${response}`);
              const isAdmin = document.querySelector(`#isAdmin-input-${response}`);
              if(pass2.value == pass3.value) {
                try {
                  const assignmentResponse = await fetch("http://localhost:3000/admin/instructor", {
                    method:"PUT",
                    mode:"cors",
                    credentials:"include",
                    headers: {
                      'Content-Type': 'application/json'
                      // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body:JSON.stringify({byEmail: email, email: mail, password: pass2.value,
                      name: instName.value, surname: instSurname.value,isAdmin: isAdmin.checked})
                  });
                  const jsonAssignmentResponse = await assignmentResponse.json();
                  console.log(jsonAssignmentResponse);
                } catch (err) {
                  console.log(err);
                }
              }              
            });
      addLink(newDiv, "Delete", "deleteElement", "http://localhost:3000/admin/instructor", {email, isAdmin});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  



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
      addParagraph(newDiv, jsonSomeResponse[response]["name"]+" "+jsonSomeResponse[response]["surname"]);
      addParagraph(newDiv, email);
      addParagraph(newDiv, ((isAdmin) ? "Admin" : ""))
      addLink(newDiv, "Modify", "modifyElement");
      addLink(newDiv, "Delete", "deleteElement", "http://localhost:3000/admin/instructor", {email, isAdmin});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  



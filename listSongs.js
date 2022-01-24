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
      addParagraph(newDiv, title);
      addParagraph(newDiv, "Performer: "+jsonSomeResponse[response]["performer"]);
      addSource(newDiv, jsonSomeResponse[response]["source"]);
      addLink(newDiv, "Modify", "modifyElement");
      addLink(newDiv, "Delete", "deleteElement", "http://localhost:3000/admin/song", {title});
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  



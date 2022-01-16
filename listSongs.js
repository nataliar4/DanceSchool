const someContainer = document.querySelector(".someContainer")

function addSource(element, url) {
  var newLink = document.createElement("a");
  var text = document.createTextNode("Source");
  newLink.appendChild(text);
  element.appendChild(newLink);
  newLink.href = url;
  newLink.classList.add("someDetails");
}

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
      addParagraph(newDiv, jsonSomeResponse[response]["title"]);
      addParagraph(newDiv, "Performer: "+jsonSomeResponse[response]["performer"]);
      addSource(newDiv, jsonSomeResponse[response]["source"]);
      addLink(newDiv, "Modify");
      addLink(newDiv, "Delete");
    }
  } catch (err) {
    console.log(err);
  }
}
loadList();  



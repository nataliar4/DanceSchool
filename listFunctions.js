function addDiv(container) {
  var newDiv = document.createElement("div");
  container.appendChild(newDiv);
  newDiv.classList.add("oneElement");
  return newDiv;
}

function addParagraph(element, txt) {
  var newParagraph = document.createElement("p");
  var text = document.createTextNode(txt);
  newParagraph.appendChild(text);
  element.appendChild(newParagraph);
  newParagraph.classList.add("someDetails");
}
function addLink(element, txt) {
  var newLink = document.createElement("a");
  var text = document.createTextNode(txt);
  newLink.appendChild(text);
  element.appendChild(newLink);
  newLink.classList.add("modify_delete");
}
const searchValue = document.querySelector(".find");
const button = document.querySelector(".findButton");

button.addEventListener("click", async () => {
  console.log(searchValue.value);
  const searchResponse = await fetch("http://localhost:3000/instructor/course/form/edit", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({byName: searchValue.value})
  })
  
  // console.log(parseCookies());
  const jsonSearchResponse = await searchResponse.json();
  console.log(jsonSearchResponse.message);
  console.log(jsonSearchResponse);

  const resultsDiv = document.querySelector(".found");
  if (jsonSearchResponse.message == undefined) {
    
  for (const detail in jsonSearchResponse){    
    if (detail == "name") {
      console.log(jsonSearchResponse[detail]);
      addName(resultsDiv, jsonSearchResponse[detail]);
    } else if (detail == "startTime"){
      console.log(jsonSearchResponse[detail]);
      var date = new Date(jsonSearchResponse[detail]).toLocaleString('pl-PL');
      addDetails(resultsDiv, detail+": "+date);
    } else {
      console.log(jsonSearchResponse[detail]);
      addDetails(resultsDiv, detail+": "+jsonSearchResponse[detail]);
    }
  }


    
  }

})
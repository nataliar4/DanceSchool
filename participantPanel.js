const instructorPanel = document.querySelector(".instructorPanel")
const adminPanel = document.querySelector(".adminPanel")
const participantPanel = document.querySelector(".participantPanel")

function parseCookies() {
  const result = {};
  document.cookie.split("; ").forEach(cookie => {
    const [name,value] = cookie.split("=");
    result[name] = value;
  })
  return result;
}

function displayPanel() {
  instructorPanel.classList.add("inactive");
  adminPanel.classList.add("inactive");
  participantPanel.classList.add("inactive")
  const role = parseCookies().role;
  if(role == "instructor") {
    instructorPanel.classList.remove("inactive");
  } else if (role == "admin") {
    adminPanel.classList.remove("inactive");
  } else if (role == "participant"){
    participantPanel.classList.remove("inactive");
  }
}
displayPanel();
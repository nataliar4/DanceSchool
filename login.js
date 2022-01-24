const loginUsername = document.querySelector(".loginUsername")
const loginPassword = document.querySelector(".loginPassword")

const loginSubmit = document.querySelector(".loginSubmit")
const logoutButton = document.querySelector(".logoutButton")

const loginForm = document.querySelector(".LogIn")
const logoutForm = document.querySelector(".LogOut")

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

function displayLogin() {
  loginForm.classList.add("inactive");
  logoutForm.classList.add("inactive");
  if(parseCookies().userId) {
    logoutForm.classList.remove("inactive");
  } else {
    loginForm.classList.remove("inactive");
  }
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
displayLogin();
displayPanel();
loginSubmit.addEventListener("click", async (e)=>{
  try{
    e.preventDefault()
    // console.log(loginUsername.value)
    // console.log(loginPassword.value)
    console.log(document.cookie);
    const loginResponse = await fetch("http://localhost:3000/login/in", {
      method:"POST",
      mode:"cors",
      credentials:"include",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify({email:loginUsername.value, password:loginPassword.value})
    });
    console.log(parseCookies());
    displayLogin();
    displayPanel();
    const jsonLoginResponse = await loginResponse.json();
    console.log(jsonLoginResponse);
  } catch(err) {
    console.log(err);
  }

})
logoutButton.addEventListener("click", async e => {
  e.preventDefault();
  const logoutResponse = await fetch("http://localhost:3000/login/out", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  loginUsername.value="";
  loginPassword.value="";
  console.log(parseCookies());
  displayLogin();
  displayPanel();
  const jsonLogoutResponse = await logoutResponse.json();
  console.log(jsonLogoutResponse);
})
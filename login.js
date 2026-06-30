function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  const msg = document.getElementById("msg");
  
  // simple admin credentials (demo)
  const adminUser = "Rekha Yogi";
  const adminPass = "8224860502";
  
  if (username === adminUser && password === adminPass) {
    localStorage.setItem("login", "true");
    window.location.href = "admin.html";
  } else {
    msg.innerText = "Wrong username or password";
    msg.style.color = "red";
  }
}
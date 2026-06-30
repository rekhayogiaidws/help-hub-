if (localStorage.getItem("login") !== "true") {
  window.location.href = "login.html";
}
import { db } from "./firebase.js";


import {
  collection,
  deleteDoc,
  doc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

function loadFeedback() {
  const search = document.getElementById("search");
  const feedbackList = document.getElementById("feedbackList");
  const count = document.getElementById("count");
  
  const q = collection(db, "feedbacks");
  
  onSnapshot(q, (querySnapshot) => {
    
    count.innerHTML = "Total Feedback : " + querySnapshot.size;
    document.getElementById("totalFeedback").textContent = querySnapshot.size;
    if (querySnapshot.empty) {
      feedbackList.innerHTML =
        "<h3 style='text-align:center'>No Feedback Available</h3>";
      return;
    }
    const keyword = search.value.toLowerCase();
    let html = "";
    
    querySnapshot.forEach((docItem) => {
      
      const id = docItem.id;
      const item = docItem.data();
      if (
  !item.name.toLowerCase().includes(keyword) &&
  !item.email.toLowerCase().includes(keyword)
) {
  return;
}
      html += `
<div class="feedback-card">
    <h3>${item.name}</h3>
    <p><b>Email:</b> ${item.email}</p>
    <p>${item.feedback}</p>
    <small>${item.date}</small>

    <br><br>

    <button onclick="deleteFeedback('${id}')">
        Delete
    </button>
</div>
`;
    });
    
    feedbackList.innerHTML = html;
    
    
  });
}
loadFeedback();

document.getElementById("search").addEventListener("input", loadFeedback);
window.deleteFeedback = async function(id) {
  try {
    await deleteDoc(doc(db, "feedbacks", id));
    alert("Deleted successfully!");
  } catch (error) {
    console.log(error);
    alert("Delete failed");
  }
};
window.logout = function() {
  localStorage.removeItem("login");
  window.location.href = "login.html";
};
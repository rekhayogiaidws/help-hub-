
import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
const form = document.getElementById("feedbackForm");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback").value.trim();
    const message = document.getElementById("message");

    if (name === "" || email === "" || feedback === "") {
        message.style.color = "red";
        message.innerHTML = "❌ Please fill all fields.";
        return;
    }

    const feedbackData = {
        name: name,
        email: email,
        feedback: feedback,
        date: new Date().toLocaleString()
    };

    await addDoc(collection(db, "feedbacks"), feedbackData);
    message.style.color = "green";
    message.innerHTML = "✅ Thank you! Your feedback has been submitted.";

    form.reset();
displayFeedback();
});
displayFeedback();

async function displayFeedback() {

    const feedbackList = document.getElementById("feedbackList");

    const querySnapshot = await getDocs(collection(db, "feedbacks"));

    if (querySnapshot.empty) {
        feedbackList.innerHTML = "<p>No feedback submitted yet.</p>";
        return;
    }

    let html = "";

    querySnapshot.forEach((docItem) => {

        const item = docItem.data();

        html += `
        <div style="border:1px solid #ddd;padding:15px;border-radius:10px;margin-top:15px;">
            <h3>${item.name}</h3>
            <p><b>Email:</b> ${item.email}</p>
            <p>${item.feedback}</p>
            <small>${item.date}</small>
        </div>
        `;
    });

    feedbackList.innerHTML = html;
}




const qa = [{
  keywords: [
    "hello",
    "hi",
    "hey",
    "namaste",
    "hii",
    "help",
    "mujhe help chahiye",
    "can you help me",
    "support"
  ],
  answer: "👋 Namaste! Main Help Hub AI hoon. Main Students, Scholarships, Government Schemes, Health aur Helplines se jude sawalon mein madad kar sakta hoon. Aap kya jaana chahte hain?"
},
  {
    keywords: [
      "scholarship",
      "student",
      "college",
      "admission",
      "course",
      "study",
      "fees",
      "education"
    ],
    answer: "🎓 Student section mein scholarships, free courses aur career guidance available hai."
  },
  
  {
    keywords: [
      "women",
      "girl",
      "safety",
      "self defence",
      "mahila"
    ],
    answer: "👩 Women section mein safety tips, helplines aur government schemes available hain."
  },
  
  {
    keywords: [
      "health",
      "hospital",
      "doctor",
      "medicine",
      "ayushman",
      "medical"
    ],
    answer: "🏥 Health section mein hospitals, Ayushman Card aur health services ki jankari milegi."
  },
  
  {
    keywords: [
      "police",
      "ambulance",
      "emergency",
      "helpline",
      "childline",
      "fire"
    ],
    answer: "🚨 Emergency Helpline page par sabhi important numbers available hain."
  }
];

function getReply(message) {
  
  message = message.toLowerCase();
  
  for (let item of qa) {
    
    for (let word of item.keywords) {
      
      if (message.includes(word)) {
        return item.answer;
      }
      
    }
    
  }
  
  return "❌ Sorry, mujhe iska answer nahi mila. Aap Student, Women, Health, Government ya Helpline ke baare mein pooch sakte hain.";
  
}
const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const messages = document.getElementById("messages");

chatBtn.onclick = () => {
  chatBox.classList.remove("hidden");
};

closeChat.onclick = () => {
  chatBox.classList.add("hidden");
};





function sendMessage() {
  const text = userInput.value.trim();

  if (text === "") return;

  messages.innerHTML += `<div class="user">${text}</div>`;

  const reply = getReply(text);

  messages.innerHTML += `<div class="bot">${reply}</div>`;

  userInput.value = "";
  messages.scrollTop = messages.scrollHeight;
}

sendBtn.onclick = sendMessage;

userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
chatBtn.onclick = () => {
    chatBox.style.display = "block";
};

closeChat.onclick = () => {
    chatBox.style.display = "none";
};
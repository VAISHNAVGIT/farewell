// admin.js

// Default mock data (same as main site)
const defaultStudents = [
    { id: 1, name: "AAKASH MURALI NAIR", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg" },
    { id: 2, name: "ABEL SUNIL", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/2.jpg" },
    { id: 3, name: "ABHIJITH K S", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/3.jpg" },
    { id: 4, name: "ADITHYA KALARIKAL SAJKUMAR", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/4.jpg" },
    { id: 5, name: "AFEEFA SHERIN T A", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/5.jpg" },
    { id: 6, name: "AIVIN SIMON", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/6.jpg" },
    { id: 7, name: "AKSHAYA M R", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/7.jpg" },
    { id: 8, name: "ALBIN BABU", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/8.jpg" },
    { id: 9, name: "ALOKA ANIL", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/9.jpg" },
    { id: 10, name: "ANGEL MARIA DIAS", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/10.jpg" },
    { id: 11, name: "ANITTA PALAMUTTAM THOMAS", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/11.jpg" },
    { id: 12, name: "ANJALI K", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/12.jpg" },
    { id: 13, name: "ANLY ANDERS", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/13.jpg" },
    { id: 14, name: "ANNLIYA ROSE DAVID", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/14.jpg" },
    { id: 15, name: "ANN MARIYA PAUL", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/15.jpg" },
    { id: 16, name: "ANTONY JOHNSON", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/16.jpg" },
    { id: 17, name: "ANUSYOOTH A S", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/17.jpg" },
    { id: 18, name: "ARUN SHANKAR T K", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/18.jpg" },
    { id: 19, name: "ASWIN K", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/19.jpg" },
    { id: 20, name: "BHANUPRIYA", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/20.jpg" },
    { id: 21, name: "C SANJANA MANOJ", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/21.jpg" },
    { id: 22, name: "DARSANA C K", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/22.jpg" },
    { id: 23, name: "DIYOSH BENNY K", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/23.jpg" },
    { id: 24, name: "DURGA C K", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/24.jpg" },
    { id: 25, name: "EDWIN SHAJAN", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/25.jpg" },
    { id: 26, name: "FATHIMA SHILNA M", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/26.jpg" },
    { id: 27, name: "HARI KRISHNAN", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Hari.png" },
    { id: 28, name: "INDRADATHAN K G", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/28.jpg" },
    { id: 29, name: "JEROSH JAMES", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/29.jpg" },
    { id: 30, name: "JOYAL JAIMY", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/30.jpg" },
    { id: 31, name: "KRISHNENDU R", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg" },
    { id: 32, name: "K ROHITH", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/32.jpg" },
    { id: 33, name: "MARIYAM ROSA BABU", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/33.jpg" },
    { id: 34, name: "MERIN MARIA SUNNY", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/34.jpg" },
    { id: 35, name: "M G MITHUN", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/35.jpg" },
    { id: 36, name: "NANDITHA SREEKUMAR B T", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/36.jpg" },
    { id: 37, name: "NIKHIL K", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/37.jpg" },
    { id: 38, name: "NIRANJAN R", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/38.jpg" },
    { id: 39, name: "PAVIN JOSHY ANDERSON", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/39.jpg" },
    { id: 40, name: "PIYUSH K C", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/40.jpg" },
    { id: 41, name: "RASHA HANNAN K V", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/41.jpg" },
    { id: 42, name: "SAAHIL K LAZAR", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/42.jpg" },
    { id: 43, name: "SACHIN SHIV K", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/43.jpg" },
    { id: 44, name: "SIVAJYOTHIK M", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/44.jpg" },
    { id: 45, name: "SOUMYA P V", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/45.jpg" },
    { id: 46, name: "SREELAKSHMI K G", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/46.jpg" },
    { id: 47, name: "SUJIL P U", tag: "Class of 2k26 🎓", votes: 0, img: "pic/sujil.png" },
    { id: 48, name: "VISMAYA K", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/48.jpg" },
    { id: 49, name: "YADHU KRISHNA M R", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/49.jpg" },
    { id: 50, name: "DENIL DAVIS", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/50.jpg" },
    { id: 51, name: "RONIT PAULSON", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg" },
    { id: 52, name: "SHERIN SAJAN", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/2.jpg" },
    { id: 53, name: "SHREYA MARIYA T P", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/3.jpg" },
    { id: 54, name: "SREELAKSHMI P N", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/4.jpg" },
    { id: 55, name: "VIVEK P", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/5.jpg" }
];

// --- Firebase Configuration ---
const firebaseConfig = {
    apiKey: "AIzaSyCRFA0Pr1igBUdOleGu3xgTzuX2AJ8zAks",
    authDomain: "farewell-d61b4.firebaseapp.com",
    databaseURL: "https://farewell-d61b4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "farewell-d61b4",
    storageBucket: "farewell-d61b4.firebasestorage.app",
    messagingSenderId: "374039442657",
    appId: "1:374039442657:web:f61cbd7a2fc4b6876bf3a0",
    measurementId: "G-TGGGZLZ2BJ"
};

let database;
if (firebaseConfig.apiKey) {
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
}

// State
let students;
let mainQuestion = localStorage.getItem('farewellQuestion') || "Who is the Ultimate Senior? 👑";

// Local Storage Fallback
if (!database) {
    try {
        let rawStudents = localStorage.getItem('farewellStudents');
        students = rawStudents ? JSON.parse(rawStudents) : null;
    } catch (e) { }

    if (!students || !Array.isArray(students)) {
        students = JSON.parse(JSON.stringify(defaultStudents));
    }

    let needUpdate = false;
    if (students.length !== defaultStudents.length) {
        needUpdate = true;
        students = JSON.parse(JSON.stringify(defaultStudents));
    } else {
        for (let i = 0; i < defaultStudents.length; i++) {
            if (students[i].name !== defaultStudents[i].name || students[i].tag !== defaultStudents[i].tag || students[i].img !== defaultStudents[i].img) {
                students[i].name = defaultStudents[i].name;
                students[i].tag = defaultStudents[i].tag;
                students[i].img = defaultStudents[i].img;
                needUpdate = true;
            }
        }
    }
    if (needUpdate) {
        try { localStorage.setItem('farewellStudents', JSON.stringify(students)); } catch (e) { }
    }
}

// DOM Elements
const loginScreen = document.getElementById("login-screen");
const adminContent = document.getElementById("admin-content");
const loginBtn = document.getElementById("login-btn");
const adminPass = document.getElementById("admin-pass");
const errorMsg = document.getElementById("error-msg");
const logoutBtn = document.getElementById("logout-btn");

const mainQuestionInput = document.getElementById("main-question");
const saveQuestionBtn = document.getElementById("save-question-btn");
const resetVotesBtn = document.getElementById("reset-votes-btn");
const adminStudentList = document.getElementById("admin-student-list");
const newNameInput = document.getElementById("new-name");
const newTagInput = document.getElementById("new-tag");
const newImgInput = document.getElementById("new-img");
const addSeniorBtn = document.getElementById("add-senior-btn");

// --- Auth ---
function checkAuth() {
    if (sessionStorage.getItem("adminAuth") === "true") {
        loginScreen.style.display = "none";
        adminContent.style.display = "block";
        initDashboard();
    } else {
        loginScreen.style.display = "block";
        adminContent.style.display = "none";
    }
}

loginBtn.addEventListener("click", () => {
    // Basic hardcoded password: 'pookie'
    if (adminPass.value.toLowerCase() === "pookie") {
        sessionStorage.setItem("adminAuth", "true");
        errorMsg.style.display = "none";
        checkAuth();
    } else {
        errorMsg.style.display = "block";
    }
});

logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("adminAuth");
    adminPass.value = "";
    checkAuth();
});

// --- Dashboard Logic ---
function initDashboard() {
    mainQuestionInput.value = mainQuestion;

    if (database) {
        database.ref('students').on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                students = data;
            } else {
                students = JSON.parse(JSON.stringify(defaultStudents));
                database.ref('students').set(students);
            }
            renderAdminStudents();
        });

        database.ref('question').on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                mainQuestion = data;
                mainQuestionInput.value = mainQuestion;
            } else {
                database.ref('question').set(mainQuestion);
            }
        });
    } else {
        renderAdminStudents();
    }
}

function saveState() {
    if (database) {
        database.ref('students').set(students);
        database.ref('question').set(mainQuestion);
    } else {
        try { localStorage.setItem("farewellStudents", JSON.stringify(students)); } catch (e) { }
    }
    try { localStorage.setItem("farewellQuestion", mainQuestion); } catch (e) { }
}

// Add Senior
addSeniorBtn.addEventListener("click", () => {
    const name = newNameInput.value.trim();
    const tag = newTagInput.value.trim();
    const img = newImgInput.value.trim() || `https://xsgames.co/randomusers/assets/avatars/pixel/${Math.floor(Math.random() * 50) + 1}.jpg`;

    if (name && tag) {
        const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
        const newSenior = {
            id: newId,
            name: name,
            tag: tag,
            votes: 0,
            img: img
        };
        students.push(newSenior);
        saveState();
        renderAdminStudents();

        newNameInput.value = "";
        newTagInput.value = "";
        newImgInput.value = "";

        triggerConfetti();
        alert(`${name} added successfully!`);
    } else {
        alert("Please provide both a Name and a Tagline.");
    }
});

// Question Edit
saveQuestionBtn.addEventListener("click", () => {
    const val = mainQuestionInput.value.trim();
    if (val) {
        mainQuestion = val;
        saveState();
        alert("Question updated successfully! Users refreshing the main page will see the new question.");
    }
});

// Reset Votes
resetVotesBtn.addEventListener("click", () => {
    const confirmReset = confirm("Are you sure you want to reset ALL votes to 0? This cannot be undone.");
    if (confirmReset) {
        students.forEach(s => s.votes = 0);
        // Also clear out individual vote trackers if we want people to vote again
        localStorage.removeItem("votedSeniorId");
        saveState();
        renderAdminStudents();

        triggerConfetti(true); // Red explosion or something for reset
        alert("All votes have been successfully reset to 0.");
    }
});

function renderAdminStudents() {
    adminStudentList.innerHTML = "";
    students.forEach((student, index) => {
        const item = document.createElement("div");
        item.className = "admin-student-card";

        item.innerHTML = `
            <img src="${student.img}" alt="${student.name}">
            <div class="info">
                <strong style="display:block;">${student.name}</strong>
                <span style="font-size:0.8rem; color:#666;">${student.tag}</span>
            </div>
            <div class="votes">${student.votes} Votes</div>
            <button class="btn-primary" style="padding: 5px 10px; font-size: 0.9rem; margin-right: 5px;" onclick="editVotes(${index})">Edit Votes</button>
            <button class="btn-danger" style="padding: 5px 10px; font-size: 0.9rem;" onclick="deleteSenior(${index})">Delete</button>
        `;
        adminStudentList.appendChild(item);
    });
}

window.editVotes = function (index) {
    const newVotes = prompt(`Enter new exact vote count for ${students[index].name}:`, students[index].votes);
    if (newVotes !== null && !isNaN(newVotes)) {
        students[index].votes = Math.max(0, parseInt(newVotes));
        saveState();
        renderAdminStudents();
    }
}

window.deleteSenior = function (index) {
    const confirmDelete = confirm(`Are you sure you want to remove ${students[index].name}?`);
    if (confirmDelete) {
        students.splice(index, 1);
        saveState();
        renderAdminStudents();
    }
}

// Effect for reset
function triggerConfetti(isReset = false) {
    if (typeof confetti !== "undefined") {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: isReset ? ['#ff0000', '#ff4500'] : ['#ffb6c1', '#e6e6fa', '#ffdab9', '#87ceeb']
        });
    }
}

// Init
checkAuth();

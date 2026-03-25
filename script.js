// script.js

// --- Mock Data ---
const defaultStudents = [
    { id: 1, name: "AAKASH MURALI NAIR", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Aakash.jpg" },
    { id: 2, name: "ABEL SUNIL", tag: "Class of 2k26 🎓", votes: 0, img: "pic/abel.jpg" },
    { id: 3, name: "ABHIJITH K S", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Abhijith.jpg" },
    { id: 4, name: "ADITHYA KALARIKAL SAJKUMAR", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Adithya.JPG" },
    { id: 5, name: "AFEEFA SHERIN T A", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Afeefa_.jpg" },
    { id: 6, name: "AIVIN SIMON", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Aivin.jpg" },
    { id: 7, name: "AKSHAYA M R", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Akshaya.png" },
    { id: 8, name: "ALBIN BABU", tag: "Class of 2k26 🎓", votes: 0, img: "pic/ALBIN BABU.JPG" },
    { id: 9, name: "ALOKA ANIL", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Aloka Anil.jpg" },
    { id: 10, name: "ANGEL MARIA DIAS", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Angel Maria.jpg" },
    { id: 11, name: "ANITTA PALAMUTTAM THOMAS", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Anitta Palamuttam Thomas_.jpg" },
    { id: 12, name: "ANJALI K", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Anjali.jpg" },
    { id: 13, name: "ANLY ANDERS", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Anly Anders.png" },
    { id: 14, name: "ANNLIYA ROSE DAVID", tag: "Class of 2k26 🎓", votes: 0, img: "pic/NILIYA .jpeg" },
    { id: 15, name: "ANN MARIYA PAUL", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Ann mariya Paul_.jpg" },
    { id: 16, name: "ANTONY JOHNSON", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Antony.jpg" },
    { id: 17, name: "ANUSYOOTH A S", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Anusyooth A S.jpg" },
    { id: 18, name: "ARUN SHANKAR T K", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Arun Shankar T K.jpg" },
    { id: 19, name: "ASWIN K", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Aswin.jpg" },
    { id: 20, name: "BHANUPRIYA", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Bhanupriya_.jpg" },
    { id: 21, name: "C SANJANA MANOJ", tag: "Class of 2k26 🎓", votes: 0, img: "pic/C Sanjana Manoj.jpeg" },
    { id: 22, name: "DARSANA C K", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Darsana C K.jpg" },
    { id: 23, name: "DIYOSH BENNY K", tag: "Class of 2k26 🎓", votes: 0, img: "pic/diyosh.jpg" },
    { id: 24, name: "DURGA C K", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Durga C K.jpg" },
    { id: 25, name: "EDWIN SHAJAN", tag: "Class of 2k26 🎓", votes: 0, img: "pic/EDWIN SHAJAN .jpg" },
    { id: 26, name: "FATHIMA SHILNA M", tag: "Class of 2k26 🎓", votes: 0, img: "pic/fathima.jpg" },
    { id: 27, name: "HARI KRISHNAN", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Hari.png" },
    { id: 28, name: "INDRADATHAN K G", tag: "Class of 2k26 🎓", votes: 0, img: "pic/INDRADATHAN.jpg" },
    { id: 29, name: "JEROSH JAMES", tag: "Class of 2k26 🎓", votes: 0, img: "pic/jerosh.jpg" },
    { id: 30, name: "JOYAL JAIMY", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Joyal.jpg" },
    { id: 31, name: "KRISHNENDU R", tag: "Class of 2k26 🎓", votes: 0, img: "pic/krishnendu.jpg" },
    { id: 32, name: "K ROHITH", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Rohith_.webp" },
    { id: 33, name: "MARIYAM ROSA BABU", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Mariyam.jpg" },
    { id: 34, name: "MERIN MARIA SUNNY", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Merin.png" },
    { id: 35, name: "M G MITHUN", tag: "Class of 2k26 🎓", votes: 0, img: "pic/M G MITHUN.jpg" },
    { id: 36, name: "NANDITHA SREEKUMAR B T", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Nanditha.jpg" },
    { id: 37, name: "NIKHIL K", tag: "Class of 2k26 🎓", votes: 0, img: "pic/nikhil.jpg" },
    { id: 38, name: "NIRANJAN R", tag: "Class of 2k26 🎓", votes: 0, img: "pic/niranjan.jpg" },
    { id: 39, name: "PAVIN JOSHY ANDERSON", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Pavin.jpg" },
    { id: 40, name: "PIYUSH K C", tag: "Class of 2k26 🎓", votes: 0, img: "pic/PIYUSH.jpg" },
    { id: 41, name: "RASHA HANNAN K V", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Rasha.jpg" },
    { id: 42, name: "SAAHIL K LAZAR", tag: "Class of 2k26 🎓", votes: 0, img: "pic/SAAHIL.jpg" },
    { id: 43, name: "SACHIN SHIV K", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Sachin.jpg" },
    { id: 44, name: "SIVAJYOTHIK M", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Sivajyothik M.jpeg" },
    { id: 45, name: "SOUMYA P V", tag: "Class of 2k26 🎓", votes: 0, img: "pic/soumya.jpg" },
    { id: 46, name: "SREELAKSHMI K G", tag: "Class of 2k26 🎓", votes: 0, img: "pic/SREELAKSHMI.K G.jpg" },
    { id: 47, name: "SUJIL P U", tag: "Class of 2k26 🎓", votes: 0, img: "pic/sujil.png" },
    { id: 48, name: "VISMAYA K", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Vismaya .jpg" },
    { id: 49, name: "YADHU KRISHNA M R", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Yadhu krishna_.jpg" },
    { id: 50, name: "DENIL DAVIS", tag: "Class of 2k26 🎓", votes: 0, img: "pic/denil.jpg" },
    { id: 51, name: "RONIT PAULSON", tag: "Class of 2k26 🎓", votes: 0, img: "pic/ronit.jpg" },
    { id: 52, name: "SHERIN SAJAN", tag: "Class of 2k26 🎓", votes: 0, img: "pic/sherinsajan.jpg" },
    { id: 53, name: "SHREYA MARIYA T P", tag: "Class of 2k26 🎓", votes: 0, img: "pic/shreya.jpg" },
    { id: 54, name: "SREELAKSHMI P N", tag: "Class of 2k26 🎓", votes: 0, img: "pic/Sreelakshmi P N.jpg" },
    { id: 55, name: "VIVEK P", tag: "Class of 2k26 🎓", votes: 0, img: "pic/vivek.jpg" }
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

let students;
let userVotedId = localStorage.getItem("votedSeniorId");
let mainQuestion = localStorage.getItem('farewellQuestion') || "Who is the Ultimate Senior? 👑";

// --- Local Storage Fallback ---
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

// --- DOM Elements ---
const landingPage = document.getElementById("landing-page");
const gamePage = document.getElementById("game-page");
const goToGameBtn = document.getElementById("go-to-game-btn");
const backBtn = document.getElementById("back-btn");
const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");
const searchBar = document.getElementById("search-bar");
const autocompleteList = document.getElementById("autocomplete-list");
const studentGrid = document.getElementById("student-grid");
const top10Btn = document.getElementById("top10-btn");
const top10Modal = document.getElementById("top10-modal");
const closeModalBtn = document.getElementById("close-modal");
const rankingList = document.getElementById("ranking-list");
const particlesContainer = document.getElementById("particles-container");

// --- State Variables Handled Above ---

// --- Initialize ---
document.addEventListener("DOMContentLoaded", () => {
    const mainQuestionDisplay = document.getElementById("main-question-display");
    if (mainQuestionDisplay) {
        mainQuestionDisplay.textContent = mainQuestion;
    }
    generateParticles();

    if (database) {
        // Firebase Live Global Data Sync
        database.ref('students').on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                students = data;
            } else {
                database.ref('students').set(defaultStudents);
                students = defaultStudents;
            }
            // Preserve search query if actively searching
            const rawQuery = searchBar ? searchBar.value : "";
            const currentQuery = rawQuery.toLowerCase().trim();
            const listToRender = currentQuery ? students.filter(s => s.name.toLowerCase().includes(currentQuery) || s.tag.toLowerCase().includes(currentQuery)) : students;
            renderStudents(listToRender);

            // Live update Top 10 if modal is open
            if (top10Modal && !top10Modal.classList.contains("hidden")) {
                renderTop10();
            }
        });

        // Sync main question from Firebase
        database.ref('question').on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                mainQuestion = data;
                const mainQuestionDisplay = document.getElementById("main-question-display");
                if (mainQuestionDisplay) {
                    mainQuestionDisplay.textContent = mainQuestion;
                }
            } else {
                database.ref('question').set(mainQuestion);
            }
        });
    } else {
        renderStudents(students);
    }
});

// --- Navigation SPA ---
goToGameBtn.addEventListener("click", () => {
    landingPage.classList.remove("active");
    landingPage.classList.add("hidden");

    setTimeout(() => {
        gamePage.classList.remove("hidden");
        gamePage.classList.add("active");
        window.scrollTo(0, 0);
    }, 800);
});

backBtn.addEventListener("click", () => {
    gamePage.classList.remove("active");
    gamePage.classList.add("hidden");

    setTimeout(() => {
        landingPage.classList.remove("hidden");
        landingPage.classList.add("active");
        window.scrollTo(0, 0);
    }, 800);
});

// --- Music Toggle ---


// --- Render Students ---
function renderStudents(list) {
    studentGrid.innerHTML = "";
    list.forEach(student => {
        const card = document.createElement("div");
        card.className = "student-card glass-panel";

        const isVoted = userVotedId == student.id;
        const btnClass = isVoted ? "vote-btn voted" : "vote-btn";
        const btnText = isVoted ? "Voted 💖" : "Vote 💖";

        card.innerHTML = `
            <div class="avatar-container">
                <img src="${student.img}" alt="${student.name}" loading="lazy">
            </div>
            <h3 class="student-name">${student.name}</h3>
            <button class="${btnClass}" data-id="${student.id}" onclick="handleVote(${student.id})">
                ${btnText} <span class="vote-count">(${student.votes})</span>
            </button>
        `;
        studentGrid.appendChild(card);
    });
}

// --- Search & Autocomplete ---
searchBar.addEventListener("input", (e) => {
    const rawQuery = e.target.value || "";
    const query = rawQuery.toLowerCase().trim();
    autocompleteList.innerHTML = "";

    if (query === "") {
        autocompleteList.classList.add("hidden");
        renderStudents(students);
        return;
    }

    const filtered = students.filter(s => s.name.toLowerCase().includes(query) || s.tag.toLowerCase().includes(query));

    if (filtered.length > 0) {
        autocompleteList.classList.remove("hidden");
        filtered.forEach(s => {
            const li = document.createElement("li");
            li.textContent = `${s.name} - ${s.tag}`;
            li.addEventListener("click", () => {
                searchBar.value = s.name;
                autocompleteList.classList.add("hidden");
                renderStudents([s]);
            });
            autocompleteList.appendChild(li);
        });
    } else {
        autocompleteList.classList.add("hidden");
    }

    renderStudents(filtered);
});

// Close autocomplete when clicking outside
document.addEventListener("click", (e) => {
    if (!searchBar.contains(e.target) && !autocompleteList.contains(e.target)) {
        autocompleteList.classList.add("hidden");
    }
});

// --- Voting Logic ---
window.handleVote = function (id) {
    if (userVotedId) {
        alert("You have already done your voting 💖");
        return;
    }

    const student = students.find(s => s.id === id);
    if (!student) return;

    const studentIndex = students.findIndex(s => s.id === id);
    if (studentIndex === -1) return;

    // Register vote locally to prevent re-voting
    userVotedId = id;
    localStorage.setItem("votedSeniorId", id);

    if (database) {
        // Increment securely on Firebase globally
        database.ref('students/' + studentIndex + '/votes').transaction((currentVotes) => {
            return (currentVotes || 0) + 1;
        });
    } else {
        // Local fallback voting
        students[studentIndex].votes += 1;
        try { localStorage.setItem("farewellStudents", JSON.stringify(students)); } catch (e) { }

        const currentQuery = searchBar.value ? searchBar.value.toLowerCase().trim() : "";
        const listToRender = currentQuery ? students.filter(s => s.name.toLowerCase().includes(currentQuery) || s.tag.toLowerCase().includes(currentQuery)) : students;
        renderStudents(listToRender);
    }

    // Confetti Effect
    triggerConfetti();
};

// --- Top 10 Highscore ---
top10Btn.addEventListener("click", () => {
    renderTop10();
    top10Modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
    top10Modal.classList.add("hidden");
});

// Close modal on outside click
top10Modal.addEventListener("click", (e) => {
    if (e.target === top10Modal) {
        top10Modal.classList.add("hidden");
    }
});

function renderTop10() {
    rankingList.innerHTML = "";
    
    // Filter anyone with 0 votes, sort by votes descending, take top 10
    const sortedList = [...students]
        .filter(s => s.votes > 0)
        .sort((a, b) => b.votes - a.votes)
        .slice(0, 10);

    if (sortedList.length === 0) {
        rankingList.innerHTML = "<p style='text-align: center; padding: 20px; font-weight: bold; color: #555;'>No votes cast yet! Be the first to vote. 💖</p>";
        return;
    }

    sortedList.forEach((student, index) => {
        const item = document.createElement("div");
        item.className = "rank-item";

        // Medals for top 3
        let medal = `#${index + 1}`;
        if (index === 0) medal = "🥇";
        else if (index === 1) medal = "🥈";
        else if (index === 2) medal = "🥉";

        item.innerHTML = `
            <div class="rank-medal">${medal}</div>
            <div class="avatar-container" style="width: 40px; height: 40px; margin: 0;">
                <img src="${student.img}" alt="${student.name}">
            </div>
            <div class="rank-name">${student.name}</div>
            <div class="rank-votes">${student.votes} Votes</div>
        `;
        rankingList.appendChild(item);
    });
}

// --- Effects ---
function triggerConfetti() {
    var duration = 3000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ffb6c1', '#e6e6fa', '#ffdab9', '#87ceeb']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ffb6c1', '#e6e6fa', '#ffdab9', '#87ceeb']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function generateParticles() {
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Randomize size, position, and duration
        const size = Math.random() * 15 + 5;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `-${delay}s`;

        particlesContainer.appendChild(particle);
    }
}

// --- ECE Section Animations ---
document.addEventListener("DOMContentLoaded", () => {
    // ECE Section Intersection Observer
    const eceSection = document.querySelector('.ece-farewell-section');
    const typingTextElement = document.getElementById('ece-typing-text');
    const hiddenTextElement = document.getElementById('ece-hidden-text');
    const fullText = "four years of circuits, signals, laughter, and lifelong bonds. 🌸";
    let isTypingStarted = false;

    if (eceSection && typingTextElement) {
        // Hide fallback text
        if (hiddenTextElement) hiddenTextElement.style.display = 'none';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Start typing text if not already started
                    if (!isTypingStarted) {
                        isTypingStarted = true;
                        typeText(typingTextElement, fullText, 0);
                    }
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(eceSection);
    }
    
    function typeText(element, text, index) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => {
                typeText(element, text, index + 1);
            }, 60); // typing speed
        } else {
            // Typing done, remove cursor effect
            element.classList.remove('typing-text');
        }
    }

    // Parallax background effect
    window.addEventListener('scroll', () => {
        const parallaxBg = document.getElementById('parallax-bg');
        if (parallaxBg && isTypingStarted) {
            const scrolled = window.scrollY;
            parallaxBg.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    });

    // Sparkle Cursor Effect
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.8) { // Create sparkle on 20% of mouse moves
            createSparkle(e.clientX, e.clientY);
        }
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle-particle";
        // Slightly random offset around cursor
        sparkle.style.left = (x + (Math.random() * 10 - 5)) + "px";
        sparkle.style.top = (y + (Math.random() * 10 - 5)) + "px";
        document.body.appendChild(sparkle);
        
        // Remove after animation completes
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }

    // Background Music Toggle
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    let isMusicPlaying = false;

    if (musicBtn && bgMusic) {
        bgMusic.volume = 0.4; // Soft volume
        
        // Attempt to auto play
        bgMusic.play().then(() => {
            musicBtn.classList.add('playing');
            isMusicPlaying = true;
        }).catch(() => {
            console.log("Autoplay blocked by browser. User must click the play button.");
        });

        musicBtn.addEventListener('click', () => {
            if (isMusicPlaying) {
                bgMusic.pause();
                musicBtn.classList.remove('playing');
                isMusicPlaying = false;
            } else {
                bgMusic.play().catch(e => console.log("Audio play failed, user interaction may be required:", e));
                musicBtn.classList.add('playing');
                isMusicPlaying = true;
            }
        });
    }
});

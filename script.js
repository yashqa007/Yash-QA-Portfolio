/* =========================
   TYPING ANIMATION (ENHANCED)
========================= */
const typingEl = document.querySelector(".typing");

if (typingEl) {
  const roles = [
    "AI QA Engineer",
    "Playwright Automation Expert",
    "Specialist in FinTech Testing"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let lastTime = 0;
  const typingSpeed = 100; // milliseconds per char
  const deletingSpeed = 50;
  const pauseTime = 1200;

  function typeEffect(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const delta = timestamp - lastTime;

    const current = roles[roleIndex];

    if (!isDeleting && delta > typingSpeed) {
      charIndex++;
      typingEl.textContent = current.substring(0, charIndex);
      lastTime = timestamp;

      if (charIndex > current.length) {
        isDeleting = true;
        setTimeout(() => requestAnimationFrame(typeEffect), pauseTime);
        return;
      }
    } else if (isDeleting && delta > deletingSpeed) {
      charIndex--;
      typingEl.textContent = current.substring(0, charIndex);
      lastTime = timestamp;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    requestAnimationFrame(typeEffect);
  }

  requestAnimationFrame(typeEffect);
}


/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


/* =========================
   PARTICLES (NETWORK STYLE)
========================= */
const canvas = document.getElementById("particles");

if (canvas) {
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let particles = [];

  function initParticles() {
    particles = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1
      });
    }
  }

  initParticles();

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "#00ffff";
      ctx.fill();

      // CONNECTION LINES
      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let dist = Math.hypot(p.x - p2.x, p.y - p2.y);

        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(0,255,255,0.08)";
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animateParticles);
  }

  animateParticles();
}


/* =========================
   TERMINAL LOGS (REALISTIC LOOP)
========================= */
const terminal = document.getElementById("terminal");

if (terminal) {
  const logs = [
    "[INFO] Launching Playwright tests...",
    "[INFO] Connecting to environment...",
    "[SUCCESS] Login Successful ✔",
    "[INFO] Send Onboarding Link...",
    "[INFO] Validating API's and OCR data...",
    "[INFO] All conditions met...",
    "[PASS] Test case Passed ✅"
  ];

  function startLogs() {
    terminal.innerHTML = "";
    let index = 0;

    function run() {
      if (index < logs.length) {
        terminal.innerHTML += logs[index] + "<br>";
        terminal.scrollTop = terminal.scrollHeight;
        index++;
        setTimeout(run, 700);
      } else {
        setTimeout(startLogs, 2500);
      }
    }

    run();
  }

  startLogs();
}


/* =========================
   MODAL
========================= */
const modal = document.getElementById("modal");

function openModal() {
  if (modal) modal.style.display = "block";
}

function closeModal() {
  if (modal) modal.style.display = "none";
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


/* =========================
   THEME TOGGLE (PERSISTENT)
========================= */
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("light-mode") ? "light" : "dark"
    );
  });
}


/* =========================
   PLAYWRIGHT ANIMATION
========================= */
const steps = document.querySelectorAll(".step");

if (steps.length > 0) {
  let index = 0;

  setInterval(() => {
    steps.forEach(s => s.classList.remove("active"));
    steps[index].classList.add("active");
    index = (index + 1) % steps.length;
  }, 1200);
}


/* =========================
   SCROLL REVEAL (OPTIMIZED)
========================= */
const revealElements = document.querySelectorAll(
  ".section, .card, .project-card"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); // only once
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});


/* =========================
   GITHUB BUTTON
========================= */
function openGithub() {
  window.open("https://github.com/", "_blank");
}
// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
// 🔥 Typing Effect
const roles = [
  "AI QA Engineer",
  "Playwright Automation Expert",
  "FinTech Testing Specialist"
];

let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = roles[i];
  document.querySelector(".typing").textContent = current.substring(0, j);

  if (!deleting) j++; else j--;

  if (j === current.length) deleting = true;
  if (j === 0) {
    deleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();


// 🌙 Dark Mode
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("light");
};


// 🔥 Scroll Reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


// 🤖 AI Generator
function generateTest() {
  const input = document.getElementById("input").value;

  const output = `
Manual Test Cases:
1. Verify ${input}
2. Validate edge cases
3. Check API responses

Playwright Script:
test('${input}', async ({ page }) => {
  await page.goto('URL');
});
  `;

  document.getElementById("output").textContent = output;
}


// 📥 Download
function downloadTest() {
  const content = document.getElementById("output").textContent;
  const blob = new Blob([content], { type: "text/plain" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "test.spec.ts";
  a.click();
}
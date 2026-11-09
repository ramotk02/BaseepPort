const EMAIL = "basmaessaid3@gmail.com";
const button = document.getElementById("copy-mail");
const note = document.getElementById("note");

button.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    note.textContent = "Adresse copiée ✓";
  } catch {
    note.textContent = EMAIL;
  }
  setTimeout(() => (note.textContent = ""), 3000);
});
const quotes = [
  "You’re not behind. You’re just building in silence.",
  "you’re a storm in disguise.",
  "Magic happens when you stop doubting your weirdness.",
  "Trust your timeline. Even stars take time to form."
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];

function showSecret() {
  const msg = new SpeechSynthesisUtterance("You found the hidden message, Janhavi.");
  speechSynthesis.speak(msg);
  document.getElementById("secret").classList.remove("hidden");
}

const emojiList = ["❤", "♥", "💛"];

function main() {
  const envelope = document.querySelector("#envelope");
  const open = document.querySelector("#open");
  const reset = document.querySelector("#reset");

  const toggle = (open) => {
    envelope.classList.toggle("close", !open);
    envelope.classList.toggle("open", open);
  };

  envelope?.addEventListener("click", () => toggle(true));
  open?.addEventListener("click", () => toggle(true));
  reset?.addEventListener("click", () => toggle(false));

  const accept = document.querySelector("#accept");

  accept.addEventListener("click", () => {
    const canvas = document.getElementById("confetti");
    const envelopConfetti = new JSConfetti({ canvas });
    const globalConfetti = new JSConfetti();

    setTimeout(() => {
      envelopConfetti.addConfetti({
        emojis: emojiList,
        confettiNumber: 100,
        emojiSize: 40,
      });
    }, 300);
    globalConfetti.addConfetti({
      emojis: emojiList,
      confettiNumber: 400,
      emojiSize: 40,
    });
  });
}

const isDOMLoaded =
  document.readyState === "complete" || document.readyState === "interactive";

if (isDOMLoaded) {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}

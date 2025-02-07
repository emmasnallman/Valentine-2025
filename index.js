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
}

const isDOMLoaded =
  document.readyState === "complete" || document.readyState === "interactive";

if (isDOMLoaded) {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}

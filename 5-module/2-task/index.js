function toggleText() {
  const button = document.querySelector(".toggle-text-button");

  button.addEventListener("click", () => {
    const div = document.getElementById("text");

    div.hidden = !div.hidden;
  });
}

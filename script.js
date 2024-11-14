const durationInput = document.getElementById("duration");

function moveBalls() {
  const duration = parseFloat(durationInput.value);
  if (isNaN(duration) || duration <= 0) {
    alert("Please enter a valid positive number for duration.");
    return;
  }
  document.documentElement.style.setProperty(
    "--duration",
    `${duration}s`
  );
  document.getElementById("ball1").style.left = "calc(100% - 50px)";
  document.getElementById("ball2").style.left =
    "calc(100% - 50px - 60px)";
  document.getElementById("ball3").style.left =
    "calc(100% - 50px - 120px)";
}
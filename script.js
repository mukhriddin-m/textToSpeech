var btn = document.getElementById("btn");
btn.addEventListener("click", (ea) => {
  btn.classList.add("fade");

  let recognition = new webkitSpeechRecognition();
  recognition.lang = "en-GB";
  recognition.addEventListener("results", (e) => {
    document.getElementById("text").value = e.results[0][0].transcript;
      btn.classList.remove("fade");
    document.execCommand(text)
  });
  recognition.start();
})
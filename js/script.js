const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");
const output4 = document.getElementById("output4");
const messageInput = document.getElementById("message");

if (btn1 && output1) {
  btn1.addEventListener("click", () => {
    const paragraph = output1.querySelector("p");
    if (paragraph) {
      paragraph.style.color = "red";
    }
  });
}

if (btn2 && output2) {
  btn2.addEventListener("click", () => {
    const paragraph = output2.querySelector("p");
    if (paragraph) {
      let span = output2.querySelector("span.data-hello-word");
      if (!span) {
        span = document.createElement("span");
        span.classList.add("data-hello-word");
        span.textContent = "Hello word";
        paragraph.insertAdjacentElement("afterend", span);
      }
    }
  });
}

if (btn3 && output3) {
  btn3.addEventListener("click", () => {
    const paragraph = output3.querySelector("p");
    if (paragraph) {
      paragraph.classList.remove("small-text");
    }
  });
}

if (btn4 && output4) {
  btn4.addEventListener("click", () => {
    const paragraphs = output4.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      paragraph.style.color = "red";
    });
  });
}

if (btn5 && messageInput) {
  btn5.addEventListener("click", () => {
    console.log(messageInput.value);
  });
}

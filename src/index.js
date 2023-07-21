

if (document.readyState !== "loading") {
  console.log("Document is ready");
  initializecode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting");
    initializecode();
  });
}

function initializecode() {
  const myButton = document.getElementById("my-button");

  myButton.addEventListener("click", function () {
    const notes = document.getElementById("add-notes");
    const heading = document.getElementById("heading");
    notes.innerHTML = "Hello World";
    heading.innerHTML = "My notebook";
  });

  const addDataButton = document.getElementById("add-data");

  addDataButton.addEventListener("click", function () {
    const ul = document.getElementById("unorderlist");
    const text = document.getElementById("text").value;
    let li = document.createElement("li");
    li.innerHTML = text;
    ul.appendChild(li);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input")
  const log = document.getElementById("new-task-description")
  input.addEventListener("input", updateValue);
  function updateValue(e){
    log.textContent = e.target.value;
  }
});


document.getElementById("button").addEventListener("click", function(event){
  event.preventDefault()
  const log = document.getElementById("new-task-description")
  const ul = document.getElementById("tasks")
  const li = document.createTextNode(log.textContent)
  ul.appendChild(li)
});


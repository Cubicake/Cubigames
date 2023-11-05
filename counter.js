let counter = 0;
const counterElement = document.getElementById("counter");
function updateCounter() {
  counter++;
  counterElement.textContent = counter;
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/write_visitor_count.php", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify({ count: counter }));
}
updateCounter();

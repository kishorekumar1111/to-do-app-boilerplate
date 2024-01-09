var todo = [];
var container = document.getElementsByClassName("container");
var form = document.getElementsByClassName("form");
var input = document.getElementById("input");
document.getElementById("button").onclick = click;
var todolist =document.getElementById("todolist");
function click() {
    todo.push(input.value);
    console.log(todo)
input.value = "";
showList();
}
function showList() {
    todolist.innerHTML =" ";
todo.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}
function deleteItem(i) {
    todo.splice(i, 1);
    showList();
  }
   
  function editItem(i) {
    var newValue = prompt("Please insert your new value");
    todo.splice(i, 1, newValue);
    showList();
  }


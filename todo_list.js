const todos =  JSON.parse(localStorage.getItem("todos"))||[];
  const render= () =>{
  const todoListp = document.getElementById('todolistp')
  const todosTemplate = todos.map( t=>'<li>' + t +'</li>' );
  todoListp.innerHTML=todosTemplate.join("");
  const elementos = document.querySelectorAll("#todolistp li")
  elementos.forEach((elemento , i) => {
  elemento.addEventListener('click', () =>{
    elemento.parentNode.removeChild(elemento)
    todos.splice(i,1)
  actualizatods()
    render()
    })
  })
}
const actualizatods=()=> {
  const todoStrings=  JSON.stringify(todos)
  localStorage.setItem("todos",todoStrings)
}
window.onload = () =>{
render()
const form =document.getElementById('todo-form')
form.onsubmit= (e) => {
e.preventDefault();
  const todo= document.getElementById('todo')
  const todoText= todo.value;
  todo.value="";
  todos.push(todoText);
actualizatods()
render()
  }
}
render()

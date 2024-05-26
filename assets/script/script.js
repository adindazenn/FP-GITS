document.getElementById('orderNowBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display === 'block' ? document.getElementById('overlay').style.display = 'none' : document.getElementById('overlay').style.display = 'block';
    document.getElementById('orderPopup').style.display === 'block' ? document.getElementById('orderPopup').style.display = 'none' : document.getElementById('orderPopup').style.display = 'block';
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display === 'none' ? document.getElementById('overlay').style.display = 'block' : document.getElementById('overlay').style.display = 'none';
    document.getElementById('orderPopup').style.display === 'none' ? document.getElementById('orderPopup').style.display = 'block' : document.getElementById('orderPopup').style.display = 'none';
});

//carousell brand
document.addEventListener("DOMContentLoaded", function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const images = carouselTrack.querySelectorAll('img');
    
    images.forEach(image => {
        const clone = image.cloneNode(true);
        carouselTrack.appendChild(clone);
    });
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

document.addEventListener('DOMContentLoaded', function () {
    const todosMenu = document.getElementById('todosMenu');
    const todosPopup = document.getElementById('todosPopup');
    const todosOverlay = document.getElementById('todosOverlay');
    const closeTodosPopupBtn = document.getElementById('closeTodosPopupBtn');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const seeTodosBtn = document.getElementById('seeTodosBtn');
    const saveTodoBtn = document.getElementById('saveTodoBtn');
    const newTodoInput = document.getElementById('newTodo');
    const todoList = document.getElementById('todoList');
    const todoInputSection = document.getElementById('todoInputSection');

    todosMenu.addEventListener('click', function () {
        todosPopup.style.display = 'block';
        todosOverlay.style.display = 'block';
    });

    closeTodosPopupBtn.addEventListener('click', function () {
        todosPopup.style.display = 'none';
        todosOverlay.style.display = 'none';
        todoInputSection.style.display = 'none';
        todoList.style.display = 'none';
    });

    addTodoBtn.addEventListener('click', function () {
        todoInputSection.style.display = 'block';
        todoList.style.display = 'none';
    });

    seeTodosBtn.addEventListener('click', function () {
        todoInputSection.style.display = 'none';
        todoList.style.display = 'block';
        loadTodos();
    });

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo;
            li.addEventListener('click', function () {
                const filteredTodos = todos.filter((_, i) => i !== index); 
                localStorage.setItem('todos', JSON.stringify(filteredTodos));
                loadTodos();
            });
            todoList.appendChild(li);
        });
    }

    saveTodoBtn.addEventListener('click', function () {
        const newTodo = newTodoInput.value.trim();
        if (newTodo !== '') { 
            const todos = JSON.parse(localStorage.getItem('todos')) || [];
            todos.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(todos));
            newTodoInput.value = '';
            loadTodos();
        }
    });

    loadTodos();
});


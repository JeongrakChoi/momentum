const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoForm input")
const todoList = document.querySelector(".todoList");

const TODO_KEYS = "todos"

let todos = [];

//5. 로컬스토리지 todos에 배열 todos에 입력된 값을 삽입
function saveTodo(){
    localStorage.setItem(TODO_KEYS, JSON.stringify(todos))
}

//4. todo 삭제 이벤트
function deleteTodo(event){
    const thisLi = event.target.parentElement;
    thisLi.remove();

    todos = todos.filter((todo) => todo.id !== parseInt(thisLi.id))
    saveTodo();
}

//3. 엘리먼트 생성 이벤트
function paintTodo(todoObject){
    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    const todoButton = document.createElement("button");

    todoLi.id = todoObject.id;

    todoLi.appendChild(todoSpan);
    todoSpan.innerText = todoObject.text;

    todoLi.appendChild(todoButton);
    todoButton.innerText = "❌";
    todoButton.addEventListener("click", deleteTodo)

    todoList.appendChild(todoLi);
}

//2. todo form submit 이벤트
function handleTodo(event){
    //새로고침 방지
    event.preventDefault();

    //입력 값 담기
    const todoValue = todoInput.value;

    //submit시 텍스트 value 비우기
    todoInput.value = '';

    //todos 오브젝트 생성 id는 랜덤값
    const todoObject = {
        text : todoValue,
        id : Date.now()
    }

    //todos 오브젝트 todos 배열에 푸쉬
    todos.push(todoObject);

    //엘리먼트 생성 이벤트 실행
    paintTodo(todoObject);

    //saveTodo 실행
    saveTodo();
}

//7. 값 개수만큼 실행
function pasteTodo(item){
    paintTodo(item);
}

const saveTodos = localStorage.getItem(TODO_KEYS);

//6. 로컬스토리지 todos가 존재한다면 실행
if(saveTodos){
    const parsedTodos = JSON.parse(saveTodos);
    todos = parsedTodos;
    parsedTodos.forEach(pasteTodo);
    // parsedTodos.forEach((item) => paintTodo(item))
}

//1. todo form에 submit 이벤트 추가
todoForm.addEventListener("submit", handleTodo);


function todosFilter(item){
    return item !== 3
}

[1,2,3,4].filter(todosFilter);
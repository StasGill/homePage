const editor = document.querySelector('.js-inputForm')
const todoList = document.querySelector('.js-listItems')

editor.addEventListener('submit', handleEditorSubmit)
todoList.addEventListener('click', handleTodoListClick)


const todos = {
    items:[],
    add(text){
        const todo = {
            id: Date.now(),
            text
        }
        this.items.push(todo);
        return todo;
    },
    delete (id){
        this.items = this.items.filter(item => item.id !== id)
    }
}

function firstLoading(){
    if(localStorage.getItem('posts')){
        const dataLocal = JSON.parse(localStorage.getItem('posts'))
        todos.items = dataLocal

        const todomarkUp = dataLocal.map(item => buildTodoItem(item)).join('')
        appendTodoItem(todoList,todomarkUp)
        // console.log(todomarkUp)
    }
}
firstLoading()

function handleEditorSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.elements.text.value;
    const todo = todos.add(inputValue);
    const todomarkUp = buildTodoItem(todo)
    appendTodoItem(todoList,todomarkUp )
    form.reset();
    localStorage.setItem('posts',JSON.stringify(todos.items))
}
function buildTodoItem(item){
    return `<li class="listItem" data-id ="${item.id}">
    <p class="listItemP">${item.text}</p>
    <button class="listItemBTN">X</button>
</li>`
}
 
function appendTodoItem(parentRef, todoEl){
    parentRef.insertAdjacentHTML('beforeend', todoEl)
}

function handleTodoListClick(e){
    
    if(e.target.nodeName !== 'BUTTON'){
        return
    }
    
    const button = e.target;
    const li = button.closest('li.listItem');
    const todoId = Number(li.dataset.id);
    todos.delete(todoId)
    localStorage.setItem('posts',JSON.stringify(todos.items))
    // todoList.removeChild(li)
    li.remove();
}

localStorage.getItem('posts')
const dataLocal = JSON.parse(localStorage.getItem('posts'))

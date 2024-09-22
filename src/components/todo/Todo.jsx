

function Todo ({todo, deleteTodo, updateTodo, inputValue, setInputValue}) {
    return (
        <li>
            <input type="checkbox"
                   onChange={(e) => updateTodo(todo.id, e.target.checked)}/>
            <span className={todo.status && "checked"}>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>удалить</button>
            <input type="text" placeholder="new heading"
            onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={()=> updateTodoTitle(todo.id)}>Update</button>
        </li>
    );
    function updateTodoTitle(id) {
        const updatedTodo = {
            title: inputValue,
        };
        updateTodo(id,updatedTodo);
    }
}

export default Todo;
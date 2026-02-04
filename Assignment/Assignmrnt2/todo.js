const fs = require("fs");

const readTodo = () => {
    const data = fs.readFileSync("./todo.json", "utf-8");
    return JSON.parse(data);
};

const writeTodos = (newTodos) => {
    fs.writeFileSync("./todo.json", JSON.stringify(newTodos, null, 2));
};

function addTodo(task) {
    const currentTodos = readTodo();

    const newTodo = {
        task: task,
        id: Date.now(),
        status: false
    };

    currentTodos.push(newTodo);
    writeTodos(currentTodos);
}
addTodo("Say hi to class!");
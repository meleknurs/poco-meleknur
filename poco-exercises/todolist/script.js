class TodoList {
    constructor() {
        this.list = [];
    }

    addTodo() {
        const newItem = prompt(this.list.length === 0
            ? "Your to-do list is empty. Please add one to-do:"
            : `You have ${this.list.length} item(s) in the list. You can add a new to-do:`);

        if (newItem === null) {
            alert("Operation canceled. No to-do added.");
        } else {
            const normalizedItem = newItem.toLowerCase();
            if (this.list.some(item => item.toLowerCase() === normalizedItem)) {
                alert("You already have this to-do. Please add a new one.");
            } else {
                this.list.push(newItem);
                console.log(this.list);
            }
        }
    }

    viewList() {
        if (this.list.length === 0) {
            alert("Your to-do list is empty.");
        } else {
            alert(`To-Do List:\n${this.list.join('\n')}`);
        }
    }
}

const myTodoList = new TodoList();

while (true) {
    const choice = prompt("Choose an option:\n1. Add a to-do\n2. View to-do list\n3. Quit");

    if (choice === null) {
        alert("Goodbye!");
        break;
    }

    switch (choice) {
        case "1":
            myTodoList.addTodo();
            break;
        case "2":
            myTodoList.viewList();
            break;
        case "3":
            alert("Goodbye!");
            break;
        default:
            alert("Invalid choice. Please choose a valid option.");
    }
}

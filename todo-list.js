// array of objects created for testing porpuses.
// const todoList = [
//   {
//     id: 1,
//     description: "Learn C# Basic Programming",
//     completed: true,
//   },
//   {
//     id: 2,
//     description: "Practice JS Data Structures",
//     completed: true,
//   },
//   {
//     id: 3,
//     description: "Deploy a Web App with Azure Kubernetes Service",
//     completed: false,
//   },
// ];

// console.log(todoList);

// for (const element of todoList) {
//   console.log(element);
// }

const tasks = [];

incrementCounter = (function () {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();

const addTask = function (description) {
  if (description === "") {
    return "Empty description, please provide it";
  }
  tasks.push({
    id: incrementCounter(),
    descriptionTask: description,
    completed: false,
  });
};

const removeTask = function (id) {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    console.log("The task doesn't exist");
  }

  tasks.splice(index, 1);
  console.log("Task succesfully removed");
};

const updateTask = function (id, newDescription) {
  const task = tasks.find((task) => task.id === id);

  if (task === -1) {
    console.log("The task doesn't exist");
  }
  console.log(task);

  task.descriptionTask = newDescription;

  // console.log(index.descriptionTask);
};

const toggleTaskCompletion = function (id) {
  const task = tasks.find((task) => task.id === id);
  if (task) task.completed = !task.completed;
};

const listTasks = function () {
  if (tasks.length === 0) {
    console.log("No tasks available");
    return;
  }
  tasks.forEach((task) => {
    const status = task.completed ? "Completed!" : "Not completed.";
    console.log(`${status} ID: (${task.id} ${task.descriptionTask})`);
  });
};

addTask("Learning JS");
addTask("Learning C");
addTask("Learning GO");
listTasks();
toggleTaskCompletion(tasks[0].id);
toggleTaskCompletion(tasks[1].id);
updateTask(tasks[1].id, "Learning CSharp (C#)");
removeTask(tasks[2].id);
listTasks();
console.log(tasks);

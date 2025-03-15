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

const addTask = function (description) {
  if (description === "") {
    return "Empty description, please provide it";
  }
  tasks.push({
    id: Date.now(),
    descriptionTask: description,
    completed: false,
  });

  console.log(tasks);
};

const removeTask = function (id) {
  return !tasks.find((task) => task.id === id)
    ? "The task doesn't exist"
    : "Task succesfully removed";
};

const updateTask = function (id, newDescription) {
  const tasks = tasks.find((task) => task.id === id);
  if ((task.id = id)) {
    task.description = newDescription;
    return `Task ${task.name} description updated`;
  } else {
    return `Task ${task.name} not found`;
  }
};

// const toggleTaskCompletion = function (id) {};

// const listTasks = function () {};

// addTask("Learning JS");
// addTask("Learning C");
// addTask("Learning GO");

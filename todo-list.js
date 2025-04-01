const tasks = [];

// incrementCounter = (function () {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   };
// })();

const addTask = function (description) {
  if (description === "") {
    console.log("Empty description, please provide it");
    return;
  } else {
    tasks.push({
      id: Date.now(),
      descriptionTask: description,
      completed: false,
    });
  }
};

const removeTask = function (id) {
  const index = tasks.findIndex((task) => task.id === id);
  console.log(index);

  if (index === -1) {
    console.log("The task doesn't exist");
    return;
  }

  tasks.splice(index, 1);
  console.log("Task succesfully removed");
};

const updateTask = function (id, newDescription) {
  const task = tasks.find((task) => task.id === id);

  if (task.id === -1) {
    console.log("The task doesn't exist");
    return;
  }
  task.descriptionTask = newDescription;
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

const filterbyCompletedStatus = function () {
  return tasks.filter((task) => task.completed === true);
};

const sortbyCompletedStatus = function () {
  return tasks.sort((a, b) =>
    a.descriptionTask.localeCompare(b.descriptionTask)
  );
};

addTask("Learning JS");
addTask("Learning C");
addTask("Learning GO");
toggleTaskCompletion(tasks[0].id);
toggleTaskCompletion(tasks[1].id);
updateTask(tasks[1].id, "Learning CSharp (C#)");

console.log(filterbyCompletedStatus());
console.log(sortbyCompletedStatus());

removeTask(tasks[2].id);
listTasks();

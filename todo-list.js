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
    return "Empty description, please provide it";
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

  if (index === -1) {
    return "The task doesn't exist";
  }

  tasks.splice(index, 1);
  return "Task succesfully removed";
};

const updateTask = function (id, newDescription) {
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return "The task doesn't exist";
  }
  task.descriptionTask = newDescription;
  return "Task succesfully updated";
};

const toggleTaskCompletion = function (id) {
  const task = tasks.find((task) => task.id === id);
  if (task) task.completed = !task.completed;
  return task.completed;
};

const listTasks = function () {
  if (tasks.length === 0) {
    return "No tasks available";
  }
  return tasks
    .map(
      (task) =>
        `${task.completed ? "completed" : "Not completed"} | ID: ${task.id} | ${
          task.descriptionTask
        }`
    )
    .join("\n");
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
// toggleTaskCompletion(tasks[0].id);
// toggleTaskCompletion(tasks[1].id);
// updateTask(tasks[1].id, "Learning CSharp (C#)");

// console.log(filterbyCompletedStatus());
// console.log(sortbyCompletedStatus());

// removeTask(tasks[2].id);
console.log(listTasks());

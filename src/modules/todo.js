const tasks = [
  {
    index: 0,
    description: "First Meet the Bos",
    completed: true,
  },
  {
    index: 1,
    description: "Second Reploy Emails",
    completed: true,
  },
  {
    index: 2,
    description: "Third Set an Appoinment with the Presedent",
    completed: true,
  },
];

export const showTasks = () => {
  let result = "";
  tasks.forEach((task) => {
    result += `
        <div class="par">
            <input type="checkbox" class="checkbox" />
            <div class="paragraph">
              <p class="task">${task.description}</p>
              <div class="sign">
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </div>
          <hr />`;
  });
  document.querySelector("#sect__one__cont__item2").innerHTML = result;
};
showTasks();

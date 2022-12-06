import './index.css';
/* ========================================================= */

/* || InnerHtml */
const newSectOne = document.querySelector('#sect__one');
newSectOne.innerHTML = `
<div id="sect__one__cont" class="sect__one__cont">
        <div class="head">
          <h1 id="cont__h1" class="cont__h1">Today's To Do</h1>
          <h3><i class="fa-solid fa-sync"></i></h3>
        </div>
        <hr />
        <div id="sect__one__cont__item1" class="sect__one__cont__item1">
          <input type="text" id="add__task" placeholder="Add a Task..." required />
        </div>
        <hr />
        <div id="sect__one__cont__item2" class="sect__one__cont__item2">
        </div>
      </div>
      <button type="submit" id="del__btn">Clear All completed</button>`;
/* ========================================================= */

/* || Array */
const tasks = [
  {
    index: 0,
    description: 'First Meet the Bos',
    completed: true,
  },
  {
    index: 1,
    description: 'Second Reploy Emails',
    completed: true,
  },
  {
    index: 2,
    description: 'Third Set an Appoinment with the Presedent',
    completed: true,
  },
];
/* ========================================================= */

/* || Function to Show Tasks */
const showTasks = () => {
  let result = '';
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
  document.querySelector('#sect__one__cont__item2').innerHTML = result;
};
showTasks();

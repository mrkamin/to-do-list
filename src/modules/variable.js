export const newSectOne = document.querySelector("#sect__one");
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

import './index.css' 

const toDoList = [
    {
        index: 0,
        description: 'First toDoList',
        completed: true,
    },
    {
        index: 1,
        description: 'Second toDoList',
        completed: true,
    },
    {
        index: 2,
        description: 'Third toDoList',
        completed: true,
    },  
];

const showList = () => {
    let output = '';
    toDoList.forEach((todo) => {
        output += `<li id="sectionone__items__div__two__li" class="sectionone__items__div__two__li">
        <input type="checkbox" id="sectionone__items__div__two__li__input" value=""> ${todo.description}</li> <hr>`;
        
    });
    document.getElementById('sectionone__items__div__two').innerHTML = output;
};
showList();
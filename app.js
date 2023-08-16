
//Light and Dark mode
// const toggleSwitch = document.querySelector('input[type=checkbox]');
// toggleSwitch.addEventListener('change', (e) => {
//     if (e.target.checked) {
//         console.log('checked')
//     } else {
//         console.log('not checked')
//     }
// })


//Select DOM Elements
//Kanban Elements
const columns = document.querySelectorAll('.column');
const draggableLists = document.querySelectorAll('.draggable-list');
const draggableItems = document.querySelectorAll('.draggable-item');
//Add new Items
const addNewBtns = document.querySelectorAll('.add-new');
const newItemForms = document.querySelectorAll('.new-item');
const newItemInput = document.querySelectorAll('.new-item-input')
const newItemSaveBtn = document.querySelectorAll('.save-btn')


//Array of items for local storage
const threeColumnArray = [[], [], []];


//Toggle Add New section
addNewBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        newItemForms[index].classList.toggle('hide');
        newItemInput[index].focus();
    })
})

//Create new items function
function createItem(index) {
    const itemTitle = newItemInput[index].value;
    const draggableItem = document.createElement('li');
    draggableItem.classList.add('draggable-item');
    draggableItem.setAttribute('draggable', true);
    const itemText = document.createElement('span');
    itemText.classList.add('item-text');
    itemText.textContent = newItemInput[index].value;
    draggableItem.appendChild(itemText);
    draggableLists[index].appendChild(draggableItem);
    threeColumnArray[index].push(draggableItem);
    newItemInput[index].value = '';
};

//Add event listeners to add items to DOM
newItemForms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        createItem(index);
    })

});

//Drag and Drop functionality
let currentItem;
let currentItemLocation
draggableLists.forEach((list, index) => {
    list.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('draggable-item')) {
            e.target.style.opacity = '0.4';
            currentItem = e.target;
        }
    })
});

columns.forEach((column) => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
        const AfterEl = dragAfterEl(column, e.clientY);

    })
})
columns.forEach((column) => {
    column.addEventListener('dragenter', () => {
        column.classList.add('hover');
    })
})
columns.forEach((column) => {
    column.addEventListener('dragleave', () => {
        column.classList.remove('hover');
    })
})
columns.forEach((column) => {
    column.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1';
    })
})

function dragdrop(index) {
    draggableLists[index].appendChild(currentItem);
    threeColumnArray[index].push(currentItem);
}
columns.forEach((column, index) => {
    column.addEventListener('drop', () => {
        column.classList.remove('hover');
        dragdrop(index);
    })
})

function dragAfterEl(column, y) {
    const draggableEls = [...column.querySelectorAll('.draggable-items')]
    draggableEls.reduce((closest, child) => {

    },)
}



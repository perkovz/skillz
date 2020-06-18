const search = document.querySelector('.js-search input');
const addForm = document.querySelector('.js-add');
const list = document.querySelector('.js-list');


// create todo template
const createTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fa fa-trash js-delete"></i>
        </li>
    `;

    list.innerHTML += html;
};

// add todo
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length) {
        createTemplate(todo);
        addForm.reset();
    }
});

// delete todo
list.addEventListener('click', e => {
    if(e.target.classList.contains('js-delete')) {
        e.target.parentElement.remove();
    }
});

//filter todos
const filterTodos = term => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};

// search todo
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
    
});
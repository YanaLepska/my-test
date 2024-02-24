import axios from 'axios';

const categoriesList = document.getElementById('categories-list');

export async function getCategories() {
    
    axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/category-list';
    const response = await axios.get('');
    const listOfCategories = response.data;
    const category = listOfCategories.map(item => item.list_name);
    const categoryTemplate = category.map(category =>
        `<li class="category-item">${category}</li>`).toSorted().join('');
    categoriesList.insertAdjacentHTML('beforeend', categoryTemplate);
    
    const categoryItem = document.querySelectorAll('.category-item');
    let previousItem = null;

    categoryItem.forEach(item => {
        
        item.addEventListener('click', (e)=>{
         e.preventDefault();
         item.textContent = item.textContent.toUpperCase();
            if (item.style.color === '#4F2EE8') {
            item.style.color = '#4F2EE8';
                item.style.fontWeight = '700';
                
        } else {
            item.style.color = '#4F2EE8';
            item.style.fontWeight = '700';

            // Перевіряємо, чи існує попередній елемент
            if (previousItem !== null) {
                // Якщо існує, змінюємо його колір на сірий та жирність шрифту на 400
                previousItem.style.color = 'rgba(17, 17, 17, 0.6)';
                previousItem.style.fontWeight = '400';
                previousItem.textContent = previousItem.getAttribute('data-text');
            }
        } previousItem = item;
        });
        item.setAttribute('data-text', item.textContent);
    });
}

function name(params) {
    
}
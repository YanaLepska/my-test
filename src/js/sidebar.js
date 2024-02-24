import axios from 'axios';

const categoriesList = document.getElementById('categories-list');

export async function getCategories() {
    
    axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/category-list';
    const response = await axios.get('');
    const listOfCategories = response.data;
   const category = listOfCategories.map(item => item.list_name);
    const categoryTemplate = category.map(category =>
        `<li class="category-item">${category}</li>`).join('');
    categoriesList.insertAdjacentHTML('beforeend', categoryTemplate);
    
    const categoryItem = document.querySelectorAll('.category-item');
    let previousItem = null;

    categoryItem.forEach(item => {
        
        item.addEventListener('click', ()=>{

            item.textContent = item.textContent.toUpperCase();
            if (previousItem && previousItem !== item) {
      
                previousItem.textContent = previousItem.getAttribute('data-text');
            }
            previousItem = item;
            
        });
        
        item.setAttribute('data-text', item.textContent);
    });
}

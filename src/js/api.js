import axios from 'axios';

export async function GetCat(){
    axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/category-list';
    const response = await axios.get();
    console.log(response.data);
    const listOfCategories = response.data;
    return listOfCategories;
}
  



console.log(GetCat());
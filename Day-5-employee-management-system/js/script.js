let ename = document.getElementById('ename');
let salary = document.getElementById('salary');
let post = document.getElementById('post');
let manager = document.getElementById('manager');
let form = document.getElementById('form');
let empTable = document.querySelector('#empTable tbody')

let employees =  JSON.parse(localStorage.getItem('employees')) || [];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let emp = {
        ename : ename.value,
        salary : salary.value,
        post : post.value,
        manager : manager.value,
    }

    employees.push(emp);
    
    localStorage.setItem('employees',JSON.stringify(employees));
    getData();     
})


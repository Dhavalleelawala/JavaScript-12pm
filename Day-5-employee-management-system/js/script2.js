let empTable = document.querySelector('#empTable tbody')

let employees =  JSON.parse(localStorage.getItem('employees')) || [];
let getData = ()=>{
    
    employees.map((emp,index)=>{
        let {ename,salary,post,manager} = emp;
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${index+1}</td>
            <td>${ename}</td>
            <td>${salary}</td>
            <td>${post}</td>
            <td>${manager}</td>
        `
        empTable.appendChild(row);
    })
};

getData();
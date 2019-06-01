import camelCase from 'camelcase';

const inputForm = document.getElementById('input');
const div = document.getElementById('output');

inputForm.addEventListener('change', (event)=> {
    div.innerHTML=(`${camelCase(inputForm.value)}`);
});
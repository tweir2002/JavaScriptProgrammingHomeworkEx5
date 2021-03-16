let errors = [];
const $ = (selector) =>{
    selector = document.querySelector;
    return selector;
};
const isValidLength = (field, value, length) =>{
    if (value >= length)
    {
        return true;
    }
    else if (value < length)
    {
        errors.push(field + ' minimum length is ' + length + '.');
        return false;
    }
};
const isValidPayRate = (value) =>{
    if (isEmpty(value) = true || isNaN(value) == true)
    {
        errors.push('Payrate is not a valid number.');
        return false;
    }
    else if (isEmpty(value) = false && isNaN(value) == false && value > 0)
    {
        return true;
    }
    else
    {
        errors.push('Payrate cannot be equal to nor less than zero.');
        return false;
    }
};
$.addEventListener('click', submitEmployee);
const submitEmployee
{
    errors.clear();
    $.clear(errorList);
    let isValid = true;
    $.getElementById(firstNameInput);
    $.getElementById(lastNameInput);
    $.getElementById(rateInput);
    if (isValidLength.firstNameInput == false)
    {
        isValid = false;
    }
    if (isValidLength.lastNameInput == false)
    {
        isValid = false;
    }
    if (isValidPayRate.rateInput == false)
    {
        isValid = false;
    }
    if (isValid == true)
    {
        $.getElementById(employeesTable);
        employeesTable.push(table);
        document.createElement(tr);
        document.createElement(td);
        td.appendChild(document.createTextNode(firstName.value));
        tr.appendChild(td);
        td.appendChild(document.createTextNode(lastName.value));
        tr.appendChild(td);
        td.appendChild(document.createTextNode(parseFloat(payRate.value).toFixed(2)));
        tr.appendChild(td);
        table.appendChild(tr);
        firstName.value = '';
        lastName.value = '';
        payRateName.value = '';
    }
    else
    {
        errors.forEach((err) =>{
            errorsList.innerHTML += '<li>${err}</li>';
        })
    }
}
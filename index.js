const display = document.getElementById("display");

function toDisplay(input)
{
    display.value += input;
}

function clearUp()
{
    display.value ='';
}

// For factorials (not for expressions like 4+5!... must be single numbers)
function Factorial()
{
    let facts = display.value;

    if(facts === 0 || facts === 1)
    {
        return 1;
    }
    let res = 1;
    for(let i = 2; i <= facts; i++)
    {
        res *= i;
    }
    display.value = res;
}

function calculate()
{ 
    try
    {
        // so eval can recognize the operator being used
        let expression = display.value
            .replace(/÷/g, '/')
            .replace(/x/g, '*');
  
        display.value = eval(expression);   
    }
    catch (error)
    {
        display.value = "ERROR";    
    }
}

function back()
{
    display.value = display.value.slice(0,-1);
}
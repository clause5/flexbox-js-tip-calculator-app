const form = document.getElementsByTagName('form');
const bill = document.getElementById('bill');
const tip = document.getElementsByClassName('tip');
const custom = document.getElementById('custom');
const people = document.getElementById('num-people');
const tipxPerson = document.getElementById('tip-person');
const totalxPerson = document.getElementById('total-person');
const resetBtn = document.getElementById('reset');
let split = {
    bill : '',
    tip: '',
    people: 0
}
const reset = () =>{
    bill.value= '';
    custom.value='';
    people.value='';
    let tipPerson = 0;
    let totalPerson =0;
    
    tipxPerson.innerHTML = `$${tipPerson.toFixed(2)}`;
    totalxPerson.innerHTML = `$${totalPerson.toFixed(2)}`;

}
reset();
const calculate = (e) => {
    if(split.bill !=="" &&  split.tip !=="" && split.people !== 0){
        tipPerson = split.bill*(split.tip / 100) / split.people;
        totalPerson = tipPerson + split.bill / split.people ;
        console.log('Tip per person:', tipPerson);
        console.log('Total per person:', totalPerson );
        tipxPerson.innerHTML = `$${tipPerson.toFixed(2)}`;
        totalxPerson.innerHTML = `$${totalPerson.toFixed(2)}`;
    }
}

const update = (event) =>{
    if(event.currentTarget.id === 'custom'){
        for(let element of tip){
            console.log(element)
            element.checked = false;
        }
    }else if(event.target.type === 'radio' && custom.value !== ''){
        custom.value=''
    }

        split[event.target.name] = parseInt(event.target.value)
    
        if(event.target.value !== ''){
            event.currentTarget.style.border = 'none';
            calculate(event);
        }else{
            event.currentTarget.style.border = '2px solid crimson';
        }
    
}

resetBtn.addEventListener('click',()=>reset())
bill.addEventListener('keyup', () => update(event))
custom.addEventListener('keyup',  ()=> update(event))
people.addEventListener('keyup', () => update(event))

for(let element of tip){
    element.addEventListener('click', () => update(event));

}


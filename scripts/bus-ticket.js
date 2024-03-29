const allButtons = document.getElementsByClassName('add-button');

let count = 0;

for (const button of allButtons){
    button.addEventListener('click',function(e){
        count = count + 1;

        const seatA1 = (e.target.parentNode.childNodes[1].innerText);
        const seatA2 = (e.target.parentNode.childNodes[3].innerText);
        const seatA3 = (e.target.parentNode.childNodes[5].innerText);
        const seatA4 = (e.target.parentNode.childNodes[7].innerText);

        const selectedContainer = document.getElementById('selected-container');
        const p = document.createElement('p');
        p.innerText = seatA1;

        
        console.log(e.target.parentNode.childNodes);

        setInnerText('seat-count', count);
    })
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

// ------------------Coupon part--------------------------

const couponButton = document.getElementById('coupon-button');

couponButton.addEventListener('click',function(){
    let couponInput = document.getElementById('coupon-input').value.toLowerCase();

    if(couponInput === 'NEW15' && couponInput === 'couple20'){
        document.getElementById('coupon-input').classList.add('hidden');
        couponButton.classList.add('hidden');
    } else{
        alert('Invalid Coupon');
    }
})
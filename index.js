const btn = document.getElementById('add')
const state = document.querySelector('h5');
var count = 0;
btn.addEventListener('click', ()=>{
    if(count == 0){
        state.innerText = "Friend";
        count = 1;
        btn.style.background = 'white'
        btn.style.color = '#0670c7'
        btn.style.border = '1px soild'
        btn.textContent = 'Remove'

    }
    else{
        state.innerText = "Stranger";
        btn.style.background = '#0670c7'
        btn.style.color = '#fff'
        btn.style.border = '1px soild'
        btn.textContent = 'Add Friend'
        count = 0;
    }

})
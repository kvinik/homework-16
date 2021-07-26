var firstNames=['Shalva','Lasha', 'Gela' , 'Mamuka' , 'Nugzari']
var lastNames=['Kheoshvili','Afciauri' , 'Papashvili' , 'Sarashvili' , 'Gorgadze'] 
var subjects=['Subject1','Subject2', 'Subject3' , 'Subject4' , 'Subjec5']

let button = document.querySelector('button')
button.addEventListener('click' , function(){
    document.querySelector('#firstName').value = firstNames[Math.round(Math.random() * 4)];
    document.querySelector('#lastName').value = lastNames [Math.round(Math.random() * 4)];
    document.querySelector('#phoneNumber').value = '+' + Math.round(Math.random() * 1000000000);;
    document.querySelector('#email').value = Math.random().toString(36).substring(1) + '@email.com';
    document.querySelector('#subject').value = subjects[Math.round(Math.random() * 4)];
    document.querySelector('#text').value = Math.random().toString(36).substring(7);

})

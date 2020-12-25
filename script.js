var parent = document.querySelector('.parent-modal')
var button =  document.querySelector('button')
var section= document.querySelector('section')
var X = document.querySelector('.X')


button.addEventListener('click',appear)

function appear(){
    parent.style.display = "block";
    section.style.filter = 'blur(10px)'
}

X.addEventListener('click',disappear)

function disappear(){
    parent.style.display = 'none';
    section.style.filter = 'blur(0px)';
}


parent.addEventListener('click',disappearParent)
    
function disappearParent(e){
    if(e.target.className == 'parent-modal'){
        parent.style.display = "none" ;
        section.style.filter = 'blur(0px)'
    }
}



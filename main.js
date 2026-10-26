'use strict';


let btn = document.getElementById('btn');

let deleteElement = ()=>{
    let answer = confirm('آیا از حذف مطمین هستی؟');
        if(answer){
    const element = document.getElementById('demo');
    element.remove();
}else {
    alert('لغو شد');
}

}


btn.onclick = deleteElement;





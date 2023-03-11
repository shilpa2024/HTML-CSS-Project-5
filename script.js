const ham = document.getElementById('ham');
const after = document.getElementById('after');
let flag = true;
ham.onclick = () => {
    if (flag === true) {
        after.classList.add("after-ham");
        after.classList.remove("list");
        flag=false;
    }
    else{
        after.classList.add("list");
        after.classList.remove("after-ham");
        flag=true;
    }
}
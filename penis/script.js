const small = document.getElementById('buttonSmall');
const big = document.getElementById('buttonBig');
const img = document.getElementById('img');
const text = document.getElementById('text');

let base = 200;

small.onclick = () => {
    base = base - 50;
    img.style.width = `${base}px`;
    text.textContent = "Это хуй - и он СТАЛ МЕНЬШЕ("
    if (base <= 0){
        text.textContent = "Он настолько мал, что его уже не видно(. Увеличь его, пожалуйста"
        base = 0;
    }
    if (base >=500){
        text.textContent = "Куда тебе столько? Уменьши его, пожалуйста"
    }    
    if (base < 500){
        img.style.display = "inline"
    }
}

big.onclick = () => {
    base = base + 50;
    img.style.width = `${base}px`;
    text.textContent = "Это хуй - и он СТАЛ БОЛЬШЕ)"
    if (base <= 0){
        text.textContent = "Он настолько мал, что его уже не видно(. Увеличь его, пожалуйста"
    }
    if (base === 50){
        text.textContent = "Это хуй - и он СНОВА ПОЯВИЛСЯ)"
    }
    if (base >=500){
        text.textContent = "Куда тебе столько? Уменьши его, пожалуйста"
    }
    if (base >=650){
        text.textContent = "Довыебывалась? Начинай теперь с начала, СУКА!"
        base = 200;
        img.style.width = `${base}px`;
    }
    
}

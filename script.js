let progress_bar = document.getElementById('progressbar-inner');
let button = document.getElementById('btn');
let c = 0;

// console.log(progress_bar);
// console.log(button);
// console.log(progress_bar.innerHTML);

let flag = false;

button.addEventListener('click', () => {
    if(flag === false)
    {
        progress_bar.classList.add('anm');
        const changeProgressBar = () => {
            if(c == 99)
            {
                clearInterval(interval);
            }
            c++;
            progress_bar.innerHTML = c + "%";
        }
        const interval= setInterval(changeProgressBar, 100);
        c = 0;
        flag = true;
    }
})

progress_bar.classList.remove('anm');
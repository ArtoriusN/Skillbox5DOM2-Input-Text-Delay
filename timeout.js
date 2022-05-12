document.addEventListener("DOMContentLoaded", function(event) {
    let h2 = document.createElement('h2');
    h2.className = "header";
    document.body.prepend(h2);
    let input = document.createElement('input');
    input.className = "input";
    document.body.prepend(input);
    let h2content = document.querySelector('.header');
    let timerId;

    function changeTagDelay() {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            h2content.textContent = input.value;
        }, 300);
    }
    input.addEventListener('input', changeTagDelay)
});
let i = 0;
const scrollButtons = document.querySelectorAll('.handle');
const cardsWrapper = document.querySelectorAll('.slider');

scrollButtons[1].addEventListener('click', () => {
    i+=1;
    cardsWrapper[0].scrollLeft += 1000;
    toggleScrollButtonsVisibility();
    console.log(i)

});

scrollButtons[0].addEventListener('click', () => {
    i-=1;
    toggleScrollButtonsVisibility();
    cardsWrapper[0].scrollLeft -= 1000;

});

function toggleScrollButtonsVisibility() {
if (i > 0 & i<=1) {
    scrollButtons[0].style.left = ('calc(4.5rem - 41px)');
    scrollButtons[0].style.opacity = ('100%')
    scrollButtons[1].style.right = ('var(--handle-size)');
    scrollButtons[1].style.opacity = ('100%')
} 
else if (i > 1){
    scrollButtons[0].style.left = ('calc(4.5rem - 41px)');
    scrollButtons[0].style.opacity = ('100%')

    scrollButtons[1].style.opacity = ('0')
}
else  {

    scrollButtons[0].style.opacity = ('0')
    scrollButtons[1].style.right = ('var(--handle-size)');
    scrollButtons[1].style.opacity = ('100%')
}

}
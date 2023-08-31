
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
    scrollButtons[0].style.left = ('48px');
    scrollButtons[1].style.right = ('var(--handle-size)');
} 
else if (i > 1){
    scrollButtons[0].style.left = ('48px');
    scrollButtons[1].style.right = ('-300px');
}
else  {
    scrollButtons[0].style.left = ('-300px');
    scrollButtons[1].style.right = ('var(--handle-size)');
}

}

//second
let j = 0;
scrollButtons[3].addEventListener('click', () => {
    j+=1;
    cardsWrapper[1].scrollLeft += 1000;
    toggleScrollButtonsVisibility2();
    console.log(j)

});

scrollButtons[2].addEventListener('click', () => {
    j-=1;
    toggleScrollButtonsVisibility2();
    cardsWrapper[1].scrollLeft -= 1000;
    
});

function toggleScrollButtonsVisibility2() {
if (j > 0 & j<=1) {
    scrollButtons[2].style.left = ('48px');
    scrollButtons[3].style.right = ('var(--handle-size)');
} 
else if (j > 1){
    scrollButtons[2].style.left = ('48px');
    scrollButtons[3].style.right = ('-300px');
}
else  {
    scrollButtons[2].style.left = ('-300px');
    scrollButtons[3].style.right = ('var(--handle-size)');
}

}
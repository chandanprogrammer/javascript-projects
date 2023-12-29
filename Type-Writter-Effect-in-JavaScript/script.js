const title = document.querySelector('.main-header');
const newTitle = "I am Chandan Kumar";
let index = 1;

const updateTitle = () => {
    let new_title = newTitle.slice(0, index);
    title.innerText = new_title;
    index > newTitle.length ? index = 1 : index++;
    // setInterval(updateTitle, 3000);

    setTimeout(() => updateTitle(), 200);
}
updateTitle();
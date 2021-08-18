catForm.addEventListener('submit', addCat);
function addCat(event) {
    event.preventDefault();
    let catName = event.target.kitten.value;
    let newCat = new Cat(catName);
    newCat.render();
    catForm.reset();
    saveToLocalStorage();
}
readFromLocalStorage();
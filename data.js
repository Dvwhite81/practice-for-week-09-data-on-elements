// Your code here
window.addEventListener("DOMContentLoaded", event => {
    addToList();
});

const addToList = () => {
    const addButton = document.getElementById("add");
    const shoppingList = document.getElementById("shopping-list");
    const itemName = document.getElementById("name");
    const itemType = document.getElementById("type");

    addButton.addEventListener("click", event => {
        event.preventDefault();

        const listItem = document.createElement("li");
        listItem.setAttribute("data-type", itemType.value);
        listItem.innerText = itemName.value;

        shoppingList.append(listItem);
    });
}

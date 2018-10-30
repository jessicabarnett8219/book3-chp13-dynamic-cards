/* 
When the user enters in text into the text area and then clicks the create button, use a factory function that creates a new DOM component that has a border, and includes it's own delete button.

Insert that new component into the DOM.

When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

Pro tip: The card's id attribute, and the button's id attribute should share some common value. Then, when the button is clicked, find the corresponding parent DOM component. Remember the split() method on a string? That will be helpful. */

// obtain reference to create button and input
let counter = 0;
const createBtn = document.querySelector("#button--create")
const createInput = document.querySelector("#message--input")

// element maker function
const makeElement = (message) => {
  counter ++;
  let newCard = document.createElement("article");
  newCard.style.border = "solid 1px black";
  newCard.id = `card--${counter.toString()}`
  newCard.textContent = message
  let deleteBtn = createDeleteBtn(counter.toString())
  newCard.appendChild(deleteBtn)
  return newCard
}

// delete button maker function
const createDeleteBtn = (btnId) => {
  let deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete"
  deleteBtn.id = `button--${btnId}`
  return deleteBtn
}

createBtn.addEventListener("click", (event) => {
  let articleContent = createInput.value
  document.body.appendChild(makeElement(articleContent));
})






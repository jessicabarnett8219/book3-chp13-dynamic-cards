const createBtn = document.querySelector("#button--create")
const cardInput = document.querySelector("#message--input")
const output = document.querySelector("#output")

let counter = 0;


const componentFactory = () => {
  return {
    content: cardInput.value,
    id: counter,
    makeCard: function () {
      let newCard = document.createElement("div")
      newCard.classList.add("card")
      newCard.setAttribute("id", `${this.id}`)
      newCard.innerHTML = `<p>${this.content}</p>`
      return newCard
    },
    makeDeleteBtn: function () {
      let deleteBtn = document.createElement("button")
      deleteBtn.classList.add("delete")
      deleteBtn.setAttribute("id", `${this.id}-delete`)
      deleteBtn.innerHTML = `Delete Card`
      return deleteBtn
    }
  }
}

const domInjector = (element1, element2) => {
  let container = document.createElement("div")
  container.classList.add("container")
  container.appendChild(element1)
  container.appendChild(element2)
  output.appendChild(container)
}

createBtn.addEventListener("click", (event) => {
  counter += 1
  let newComponent = componentFactory(event)
  let newCard = newComponent.makeCard()
  let newBtn = newComponent.makeDeleteBtn()
  domInjector(newCard, newBtn)
  cardInput.value = ""
})

output.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    let cardId = event.target.id.split("-")[0]
    let currentCard = document.getElementById(cardId)
    let containerToDelete = currentCard.parentNode
    output.removeChild(containerToDelete)
  }
})






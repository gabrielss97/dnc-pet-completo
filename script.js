const PET_CARD = [
  {
    img: "./assets/item-1.png",
    paragraph: "Ração Tchei para cachorro belga grande porte - 600 g",
    price: "R$ 20,90",
  },
  {
    img: "./assets/item-2.png",
    paragraph: "Ração Tchei para cachorro belga grande porte - 300 g",
    price: "R$ 15,90",
  },
];

let liEls = document.querySelectorAll(".itens-carousel li");
let modalEl = document.querySelector("#modal");
let index = 0;

function show(increase) {
  index = index + increase;
  index = Math.min(Math.max(index, 0), liEls.length - 1);
  liEls[index].scrollIntoView({ behavior: "smooth" });
}

setInterval(() => {
  if (index === liEls.length - 1) {
    show(index - 2);
  } else {
    show(index + 1);
  }
}, 5000);

function showModal(index) {
  modalEl.innerHTML = "";
  modalEl.innerHTML = ` 
  <div class="modal-card">
    <button onclick="closeModal()">
      <img src="./assets/close-btn.png" alt="close-button" />
    </button>
    <img src="${PET_CARD[index].img}" alt="" />
    <p>
    ${PET_CARD[index].paragraph}
    </p>
    <span>${PET_CARD[index].price}</span>
    <button ">Quero Comprar!</button>
  </div>
  `;
  modalEl.style.visibility = "visible";
}

function closeModal() {
  modalEl.style.visibility = "hidden";
}

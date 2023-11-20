precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

function addQuantity() {
  qtySpan = document.querySelector(".cantidad");
  qty = Number(qtySpan.innerHTML);
  newQty = qty + 1;
  qtySpan.innerHTML = newQty;
  spanPrice(newQty);
}

function subQuantity() {
  qtySpan = document.querySelector(".cantidad");
  qty = Number(qtySpan.innerHTML);
  newQty = qty - 1;

  if (newQty < 0) {
    newQty = 0;
  }

  qtySpan.innerHTML = newQty;
  spanPrice(newQty);
}

function spanPrice(qty) {
  basePrice = document.querySelector(".precio-inicial");
  totalPriceSpan = document.querySelector(".valor-total");
  
  totalPrice = Number(basePrice.innerHTML) * qty;

  totalPriceSpan.innerHTML = qty == 0 ? '' : totalPrice;
  totalPriceSpan.style.fontWeight= "bold";
  totalPriceSpan.style.fontSize = "larger"
}

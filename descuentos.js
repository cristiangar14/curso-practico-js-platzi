
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const precio = Number(document.getElementById('inputPrice').value);
  const userCouponValue = document.getElementById('InputDiscount').value;

  const coupons = [
    {
      name: 'cupon1',
      discount: 15,
    },
    {
      name: 'cupon2',
      discount: 20,
    },
    {
      name: 'cupon3',
      discount: 25,
    },
  ]
  
  const isCoupontValueVAlid = function (coupon) {
    return coupon.name === userCouponValue;
  }
  
  const userCoupon = coupons.find(isCoupontValueVAlid);
 
  if (!userCoupon) {
    alert(`El cupon ${userCouponValue} no es valido`);
  }else {
    const descuentoaa = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(precio, descuentoaa)
    const parrafo = document.getElementById('result');
  
    parrafo.innerText = `El precio final es $${precioConDescuento}`;
  }

}



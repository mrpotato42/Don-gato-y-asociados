const { Builder, By, Key, until } = require('selenium-webdriver');

module.exports = async function(driver) {
  // Navega a la página de tu aplicación
  await driver.get('http://localhost:3000');

  // Verifica si el carrito tiene productos
  let cartItems = await driver.findElements(By.css('.cart-container .row.align-items-center'));
  if (cartItems.length > 0) {
    console.log('El carrito tiene productos');
    
    // Imprime los nombres y precios de los productos en el carrito
    for (let item of cartItems) {
      let name = await item.findElement(By.css('.col-lg-3.col-sm-3 h5')).getText();
      let price = await item.findElement(By.css('.col-lg-2.col-sm-2 h5')).getText();
      console.log(`Producto: ${name}, Precio: ${price}`);
    }
    
    // Verifica el precio total
    let totalPrice = await driver.findElement(By.css('.text-center b')).getText();
    console.log(`Precio Total: ${totalPrice}`);
    
    // Vacía el carrito
    await driver.findElement(By.css('.btn.btn-danger.bg-gradient')).click();
  } else {
    console.log('El carrito está vacío');
  }
};

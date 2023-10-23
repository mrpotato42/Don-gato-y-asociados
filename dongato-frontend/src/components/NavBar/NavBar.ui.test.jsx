const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');


module.exports = async function(driver) {
     // Navega a la página de la aplicación
     console.log("Navegando a la página de la aplicación...");
     await driver.get('http://localhost:3000');

     // Verifica que el logo está presente
     console.log("Verificando que el logo está presente...");
     let logo = await driver.findElement(By.css('.d-inline-block.align-top'));
     assert(logo.isDisplayed());

     // Verifica que los enlaces del NavBar funcionan correctamente
     console.log("Verificando que los enlaces del NavBar funcionan correctamente...");
     let homeLink = await driver.findElement(By.linkText('Home'));
     homeLink.click();
     assert(await driver.getCurrentUrl() === 'http://localhost:3000/');

     let videoCardLink = await driver.findElement(By.linkText('Placas de Video'));
     videoCardLink.click();
     assert(await driver.getCurrentUrl() === 'http://localhost:3000/categoria/placas-de-video');

     let processorsLink = await driver.findElement(By.linkText('Procesadores'));
     processorsLink.click();
     assert(await driver.getCurrentUrl() === 'http://localhost:3000/categoria/procesadores');

  };
const { Builder, By, Key, until } = require('selenium-webdriver');
const path = require('path');
const glob = require('glob');

(async function runUITests() {
  // Encuentra todos los archivos .ui.test.jsx en tu proyecto
  const testFiles = glob.sync('**/*.ui.test.jsx');

  for (const file of testFiles) {
    console.log(`Running UI test: ${file}`);

    // Crea una nueva instancia del navegador para cada prueba
    let driver = await new Builder().forBrowser('chrome').build();

    try {
      // Importa el archivo de prueba y ejecútalo con el driver del navegador
      const test = require(path.resolve(file));
      await test(driver);
    } finally {
      await driver.quit();
    }
  }
})();

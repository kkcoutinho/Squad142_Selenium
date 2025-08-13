const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const loginData = require('../fixtures/loginData.json');

describe('squad142_Login Data-Driven', function () {
  this.timeout(60000);
  let driver;

  beforeEach(async function () {
    driver = await new Builder().forBrowser('firefox').build();
  });

  afterEach(async function () {
    await driver.quit();
  });

  loginData.forEach(({ email, senha, nomeEsperado }) => {
    it(`Login com usuário ${email}`, async function () {
      // Se a senha começa com "env:", busca da variável de ambiente
      const senhaFinal = senha.startsWith("env:")
        ? process.env[senha.replace("env:", "")]
        : senha;

      await driver.get("https://iterasys.learnworlds.com/");
      await driver.manage().window().setRect({ width: 1310, height: 703 });

      await driver.findElement(By.css("#menuItem5 > .lw-topbar-option-link-lbl")).click();
      await driver.findElement(By.css(".-email-input")).sendKeys(email);
      await driver.findElement(By.css(".-pass-input")).sendKeys(senhaFinal);
      await driver.findElement(By.css("#submitLogin > .btn-lbl")).click();

      const elementoEsperado = await driver.wait(
        until.elementLocated(By.xpath(`//*[contains(text(),'${nomeEsperado}')]`)),
        10000
      );
      const texto = await elementoEsperado.getText();
      assert.strictEqual(texto, nomeEsperado);
    });
  });
});
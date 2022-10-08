import puppeteer from "puppeteer-core";

const main = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.screenshot({ path: "google.png" });

  await browser.close();
};

main();

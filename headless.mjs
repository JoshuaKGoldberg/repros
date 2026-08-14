import {chromium} from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];

page.on('pageerror', (error) => errors.push(error.stack ?? error.message));

await page.goto(`file://${import.meta.dirname}/repro.html`);

const chart = await page.locator('#chart').boundingBox();

await page.mouse.move(chart.x + chart.width / 2, chart.y + chart.height / 2);
await page.mouse.move(
  chart.x + chart.width / 2 + 5,
  chart.y + chart.height / 2 + 5
);

await page.waitForFunction(() =>
  document.getElementById('chart').textContent.includes('Series 5')
);

console.log('Tooltip is showing all 5 series.');

await page.evaluate(() => window.shrinkToOneSeries());
await page.waitForTimeout(500);

console.log(
  'Tooltip after shrinking to 1 series:',
  JSON.stringify(await page.locator('#chart').textContent())
);
console.log(errors.length ? `\n${errors.join('\n\n')}` : '\nNo errors.');

await browser.close();

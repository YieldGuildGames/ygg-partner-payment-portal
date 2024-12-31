import { shortest } from '@antiwork/shortest';

shortest.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/payment/guild-advancement-program');
});

shortest('Apply a valid discount code: "LAUNCH10" to Discount Code and have the result: "Discount applied!"');
shortest('Verify that the connect button works');

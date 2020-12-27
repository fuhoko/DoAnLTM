const puppeteer = require("puppeteer");
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  let listData = []
  let result = []
  for (let k = 0; k < 65; k++) {
    for (let j = 0; j < 3; j++) {
      const page = await browser.newPage();
      await page.goto(`https://diemthi.vnexpress.net/#area=2&college=${k + 1}&q=score${j + 1}`, {waitUntil: 'domcontentloaded', timeout: 0});
      await page.waitForNavigation(0);
      result = await page.evaluate(async () => {
        let items = document.querySelectorAll('div[class="table-responsive"] > table > tbody > tr > td[class="width_sbd"]');
        let dataJson = []
        for (i = 0; i < 156; i = i + 13)
          dataJson.push({
            sbd: items[i].innerText,
            cum_thi: items[i + 1].innerText,
            toan: items[i + 2].innerText,
            van: items[i + 3].innerText,
            ngoai_ngu: items[i + 4].innerText,
            li: items[i + 5].innerText,
            hoa: items[i + 6].innerText,
            sinh: items[i + 7].innerText,
            KHTN: items[i + 8].innerText,
            su: items[i + 9].innerText,
            dia: items[i + 10].innerText,
            GDCD: items[i + 11].innerText,
            KHXH: items[i + 12].innerText,
          });
        return dataJson;
      });
      await page.close();
      console.log(result)
      listData = listData.concat(result)
    }
  }

  const jsonContent = JSON.stringify(listData)

  fs.writeFile("../dataScore.json", jsonContent, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
  await browser.close();
})();
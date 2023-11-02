// const puppeteer = require("puppeteer"); 

// export async function getProductPrice(url) {
//   try{
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);
//   const data = await page.evaluate(() => {
//     const price = document.querySelector("og:price:amount").innerText;
//     return price;
//   });

//   await browser.close();
//   return data;
//   }
//   catch(error){
//     console.error('Error fetching price:', error);
//   }
// }

// // Usage example
// const productURL = 'https://example.com/product-page';
// getProductPrice(productURL)
//   .then((price) => console.log(`Product price: ${price}`))
//   .catch((error) => console.error(`Error: ${error}`));

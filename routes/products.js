const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
const url = "https://api.mercadolibre.com/sites/MLA/search?q=:iphone#json";

router.get("/", async (req, res) => {
  const fetchResponse = await fetch(url);
  const jsonFetch = await fetchResponse.json();
  let arrayResponse = [];
  for (const key in jsonFetch.results) {
    console.log(jsonFetch.results[key].id);
    const element = {
      id: jsonFetch.results[key].id,
      title: jsonFetch.results[key].title,
      price: {
        currency: jsonFetch.results[key].prices.presentation.display_currency,
        amount: jsonFetch.results[key].price,
        decimals: jsonFetch.results[key].price % 1 != 0 ? (jsonFetch.results[key].price - Math.floor(jsonFetch.results[key].price)).toFixed(2) * 100 : 0,
      },
      picture: 'URL',
      condition: 'used',
      free_shipping: 'free_shipping'
    };
    arrayResponse.push(element);
  }
  res.status(200).json(arrayResponse);
});

router.get("/:id", async (req, res) => {
  console.log("This is the UUID", req.params.id);
  res.status(200).json(`Retrieve the data of a single product ${req.params.id}`);
});

module.exports = router;

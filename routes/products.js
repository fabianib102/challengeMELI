const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=:${req.query.q}#json`;
  const fetchResponse = await fetch(url);
  const jsonFetch = await fetchResponse.json();
  let arrayResponse = [];
  for (const key in jsonFetch.results) {
    const element = {
      id: jsonFetch.results[key].id,
      title: jsonFetch.results[key].title,
      price: {
        currency: jsonFetch.results[key].prices.presentation.display_currency,
        amount: jsonFetch.results[key].price,
        decimals: jsonFetch.results[key].price % 1 != 0 ? (jsonFetch.results[key].price - Math.floor(jsonFetch.results[key].price)).toFixed(2) * 100 : 0,
      },
      place: jsonFetch.results[key].address.state_name,
      picture: jsonFetch.results[key].thumbnail,
      condition: jsonFetch.results[key].condition,
      free_shipping: jsonFetch.results[key].shipping.free_shipping
    };
    arrayResponse.push(element);
  }
  const result = {
    author: {
      name: 'Fabian',
      lastname: 'Ibañez'
    },
    categories: [],
    items: arrayResponse
  };
  res.status(200).json(result);
});

router.get("/:id", async (req, res) => {
  const url = `https://api.mercadolibre.com/items/${req.params.id}`;
  const fetchResponse = await fetch(url);
  const jsonFetch = await fetchResponse.json();

  const descUrl = `https://api.mercadolibre.com/items/${req.params.id}/description`;
  const fetchResponseDesc = await fetch(descUrl);
  const descriptionResult = await fetchResponseDesc.json();

  const result = {
    author: {
      name: 'Fabian',
      lastname: 'Ibañez'
    },
    item: {
      id: req.params.id,
      title: jsonFetch.title,
      price: {
        currency: '$',
        amount: jsonFetch.price,
        decimals: 0
      },
      picture: jsonFetch.pictures[0].url,
      condition: jsonFetch.condition,
      free_shipping: jsonFetch.shipping.free_shipping,
      sold_quantity: jsonFetch.sold_quantity,
      description: descriptionResult.plain_text
    },


  }
  res.status(200).json(result);
});

module.exports = router;

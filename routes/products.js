const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");

router.get("/", async (req, res) => {

  const result = {
    author: {
      name: 'Fabian',
      lastname: 'Ibañez'
    },
    categories: [],
    items: []
  };

  if(req.query.q === ''){
    res.status(200).json(result);
  }

  const url = `https://api.mercadolibre.com/sites/MLA/search?q=:${req.query.q}#json`;
  const fetchResponse = await fetch(url);
  const jsonFetch = await fetchResponse.json();
  let arrayResponse = [];

  for (let index = 0; index < 4; index++) {
    const element = {
      id: jsonFetch.results[index].id,
      title: jsonFetch.results[index].title,
      price: {
        currency: jsonFetch.results[index].prices.presentation.display_currency,
        amount: jsonFetch.results[index].price,
        decimals: jsonFetch.results[index].price % 1 != 0 ? (jsonFetch.results[index].price - Math.floor(jsonFetch.results[index].price)).toFixed(2) * 100 : 0,
      },
      place: jsonFetch.results[index].address.state_name,
      picture: jsonFetch.results[index].thumbnail,
      condition: jsonFetch.results[index].condition,
      free_shipping: jsonFetch.results[index].shipping.free_shipping
    };
    arrayResponse.push(element);
  }

  result.items = arrayResponse;
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

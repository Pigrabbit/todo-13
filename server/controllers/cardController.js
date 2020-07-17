const CardService = require("../services/cardService");
const Card = require("../Domain/Card");
const CardRepository = require("../Repository/CardRepository");
const db = require("../db");

async function getAllCards(req, res, next) {
  try {
    const cardRepositoryInstance = new CardRepository(Card, db);
    const cardServiceInstance = new CardService(cardRepositoryInstance);

    const fetchedCards = await cardServiceInstance.fetchAllCards();

    res.status(200).send(fetchedCards);
  } catch (err) {
    console.log(err);
    res.status(404).end();
  }
}

async function getOneCard(req, res, next) {
  try {
    const cardRepositoryInstance = new CardRepository(Card, db);
    const cardServiceInstance = new CardService(cardRepositoryInstance);

    const fetchedCard = await cardServiceInstance.fetchOneCard(req.params.id);

    res.status(200).send(fetchedCard);
  } catch (err) {
    console.log(err);
    res.status(404).end();
  }
}

async function createCard(req, res, next) {
  try {
    const card = new Card(
      req.body.id,
      req.body.author,
      req.body.last_updated,
      req.body.content,
      req.body.category
    );

    const cardRepositoryInstance = new CardRepository(Card, db);
    const cardServiceInstance = new CardService(cardRepositoryInstance);

    await cardServiceInstance.createCard(card);

    res.status(201).send("succefully created new card");
  } catch (err) {
    console.error(err);
    res.status(404).send("creating card failed");
  }
}

async function deleteOneCard(req, res, next) {
  try {
    const cardRepositoryInstance = new CardRepository(Card, db);
    const cardServiceInstance = new CardService(cardRepositoryInstance);

    await cardServiceInstance.removeCard(req.params.id);

    res.status(201).send("succefully delete card");
  } catch (err) {
    console.error(err);
    res.status(404).end();
  }
}

module.exports = {
  getAllCards,
  createCard,
  getOneCard,
  deleteOneCard,
};

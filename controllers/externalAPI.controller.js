// externalAPI.controller.js
const axios = require('axios');
require('dotenv').config();

exports.getExternalData = async (req, res) => {
  try {
    const response = await axios.get('https://api.balldontlie.io/v1/players', { headers: { Authorization: `${process.env.API_TOKEN}` } });
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error fetching data from external API' });
  }
};

exports.getNBAPlayerInfo = async (req, res) => {
  try {
    const response = await axios.get(`https://api.balldontlie.io/v1/players/${req.params.id}`, { headers: { Authorization: `${process.env.API_TOKEN}` } });
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error fetching data from external API' });
  }
}

exports.getNBANewsInfo = (req, res) => {
  axios.get(`https://api.balldontlie.io/v1/players/${req.params.id}`, { headers: { Authorization: `${process.env.API_TOKEN}` } })
    .then(response => {
      const playerName = response.data.data.first_name + ' ' + response.data.data.last_name;
      return axios.get(`https://newsapi.org/v2/everything?q="${playerName}"`, { headers: { Authorization: `${process.env.API_TOKEN_NEWS}` } });
    })
    .then(playerNameResponse => {
      res.send(playerNameResponse.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send({ message: 'Error fetching data from external API' });
    });
}
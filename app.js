const express = require('express');
const app = express();
const cal = require('./calculator');
const CodeBreaker = require('./codebreaker');
const cb = new CodeBreaker('0123');

app.get('/calculator/add', async (req, res) => {
  try {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);

    const sub = await cal.add(value1, value2);
    res.status(200).json({
      result: sub,
    });
  } catch (error) {
    next(error);
  }
});
app.get('/calculator/sub', async (req, res) => {
  try {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);

    const sub = await cal.substract(value1, value2);
    res.status(200).json({
      result: sub,
    });
  } catch (error) {
    next(error);
  }
});

app.get('/codebreaker/isPositioned', async (req, res) => {
  try {
    const value = parseInt(req.query.value);
    const position = parseInt(req.query.position);

    const isPositioned = await cb.isPositioned(value, position);
    res.status(200).json({
      result: isPositioned,
    });
  } catch (error) {
    next(error);
  }
});

app.get('/codebreaker/itExist', async (req, res) => {
  try {
    const value = parseInt(req.query.value);

    const itExist = await cb.itExist(value);
    res.status(200).json({
      result: itExist,
    });
  } catch (error) {
    next(error);
  }
});

app.get('/codebreaker/guest', async (req, res) => {
  try {
    const value = req.query.value;

    const guest = await cb.guest(value);
    res.status(200).json({
      result: guest,
    });
  } catch (error) {
    next(error);
  }
});
app.get('/codebreaker/setsecret', async (req, res) => {
  try {
    const value = req.query.value;

    await cb.setSecret(value);
    res.status(200).json();
  } catch (error) {
    next(error);
  }
});

module.exports = app;

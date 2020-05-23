const app = require('./app');

const server = app.listen(3000, () => {
  console.log(`Onfire in http://localhost:${server.address().port}`);
});

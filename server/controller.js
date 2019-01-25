module.exports = {
  getInventory: (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance
      .get_inventory()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({
          errorMessage: 'some shit broke...'
        });
        console.log(err);
      });
  },
  addProduct: (req, res) => {
    const dbInstance = req.app.get('db');
    const { imgurl, name, price } = req.body;

    dbInstance
      .create_product([imgurl, name, price])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: 'shit broke' });
        console.log(err);
      });
  }
};

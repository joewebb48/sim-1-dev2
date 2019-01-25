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
  },
  deleteProduct: (req, res) => {
    const dbInstance = req.app.get('db');
    console.log('delete:?');
    const { params } = req;
    console.log('params:', params);
    // // or req or req.body?
    // console.log('id:', id);
    //
    dbInstance
      .delete_product([params.id])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.state(500).send({ errorMessage: 'broken delete stuff' });
        console.log(err);
      });
  }
};

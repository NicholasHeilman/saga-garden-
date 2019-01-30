const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Return all plants joined with boxes
router.get('/', (req, res) => {
  // TODO: JOIN goes here
  res.sendStatus(200);
});

router.get('/boxes', (req, res) => {
  const queryText = 'SELECT * FROM box';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT box query', err);
      res.sendStatus(500);
    });
});

router.get('/details/:id', (req, res) => {
  const queryText = 'SELECT * FROM plant WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const newPlant = req.body;
  const queryText = `INSERT INTO plant ("name", "quantity", "box_id")
                    VALUES ($1, $2, $3)`;
  const queryValues = [
    newPlant.name,
    newPlant.quantity,
    newPlant.box_id
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

router.delete('/', (req, res) => {
  const queryText = 'DELETE FROM plant WHERE id=$1';
  pool.query(queryText, [req.query.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

module.exports = router;

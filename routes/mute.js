const express = require('express');
const router = express.Router();
const loudness = require('loudness')

router.get('/', async (req, res) => {
  let mute = await loudness.getMuted();
  res.send({ muted: mute });
})

router.post('/', (req, res, next) => {
  let mute;
  if (req.body.mute === 'true') {
    mute = true;
  } else {
    mute = false;
  }
  loudness.setMuted(mute).then(() => console.log('OK'));
  res.end();
})

module.exports = router;
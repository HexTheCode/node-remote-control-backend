const express = require('express');
const router = express.Router();
const loudness = require('loudness')



async function getVolume() {
  return await loudness.getVolume();
}


router.use('/', (req, res, next) => {
  if (req.method == 'POST') {
    post(req, res, next);
  } else {
    get(req, res);
  }
})

async function get(req, res){
  let volume = await getVolume();
  res.send({ volume: volume });
}

async function post(req, res, next) {

  let volume = await getVolume();

  if (req.body.p == 1) {
    loudness.setVolume(volume + 1).then(() => console.log('OK')).catch(()=>console.log('error'));
  } else if (req.body.p == -1){
    loudness.setVolume(volume - 1).then(() => console.log('OK')).catch(()=>console.log('error'));
  } else {
    console.log(req.body.p);
  }
  
  res.end();
}

module.exports = router;
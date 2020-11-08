const { audio, display } = require('system-control')

async function getVolume() {
  return await audio.volume();
}

async function getMute() {
  return await audio.mute();
}

async function getBrightness() {
  return await display.brightness();
}

function setVolume(volume) {
  try {
    audio.volume(volume);
  } catch (error) {
    console.error(error);
  }
  
}

async function setMute(mute) {
  await audio.mute(mute);
}

async function setBrightness(bright) {
  await display.brightness(bright);
}

module.exports = { getVolume, getMute, getBrightness, setVolume, setMute, setBrightness };


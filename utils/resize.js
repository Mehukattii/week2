'use strict'

const sharp = require('sharp');

const makeTumbnail = async (file, thumbname) => {
    await sharp(file).resize(160,160).png().toFile(thumbname);
};

module.exports = {
    makeTumbnail,
};
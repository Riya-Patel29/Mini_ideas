import process from './process.js';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const sharp = require('sharp');

const button=document.querySelector("#imageupload");
const submit=document.querySelector("#submit-button");


mongoose.connect('mongodb://localhost:27017/image-dataset', { useNewUrlParser: true, useUnifiedTopology: true });
const url="kaggle kernels pull keerthana1711/starter-new-plant-diseases-dataset-0d355400-2";
const imageSchema = new mongoose.Schema({
  image: Buffer,
  label: String,
});

const Image = mongoose.model('Image', imageSchema);

const upload = multer({ dest: './uploads/' });

app.post('/compareImage', upload.single('imageData'), (req, res) => {
  const imageData = url.file.buffer;
  sharp(imageData)
    .resize(256, 256)
    .toBuffer()
    .then(buffer => {
      // Compare the uploaded image with the dataset
      Image.find().then(images => {
        const matches = [];
        images.forEach(image => {
          const similarity = compareImages(buffer, image.image);
          if (similarity > 0.5) {
            matches.push({ label: image.label, similarity });
          }
        });
        res.json({ match: matches });
      });
    });
});

function compareImages(image1, image2) {
  // Implement your image comparison algorithm here
  // For example, you can use the Mean Squared Error (MSE) between the two images
  const mse = calculateMSE(image1, image2);
  return 1 - mse;
}

function calculateMSE(image1, image2) {
  // Implement your MSE calculation algorithm here
  // For example, you can use the following formula:
  // MSE = (1 / (width * height)) * sum((image1 - image2) ^ 2)
  const width = 256;
  const height = 256;
  let sum = 0;
  for (let i = 0; i < width * height; i++) {
    sum += Math.pow(image1[i] - image2[i], 2);
  }
  return sum / (width * height);
}
 export default Backend;
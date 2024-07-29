// const imageInput = document.getElementById('image-input');
// const submitButton = document.getElementById('submit-button');

// submitButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const imageFile = imageInput.files[0];
//     // You can add your logic here to handle the image file
//     console.log(imageFile);
// });

import "./Backend.cjs";

submitButton.addEventListener('click', (e) => {
e.preventDefault();
const imageFile = imageInput.files[0];
const reader = new FileReader();
reader.onload = () => {
const imageData = reader.result;
// Send the image data to the backend for comparison
fetch('/compareImage', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ imageData }),
})
.then(response => response.json())
.then(data => console.log(data.match));
};
reader.readAsDataURL(imageFile);
});
// To Fetch In Front end

const categories = [
  {
    "id": 1,
    "name": "Electronics",
    "images": [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg"
    ]
  },
  {
    "id": 2,
    "name": "Books",
    "images": [
      "book1.jpg",
      "book2.jpg",
      "book3.jpg"
    ]
  },
  {
    "id": 3,
    "name": "Clothing",
    "images": [
      "clothing1.jpg",
      "clothing2.jpg",
      "clothing3.jpg"
    ]
  },
  {
    "id": 4,
    "name": "Home & Kitchen",
    "images": [
      "home1.jpg",
      "home2.jpg",
      "home3.jpg"
    ]
  },
  {
    "id": 5,
    "name": "Toys",
    "images": [
      "toy1.jpg",
      "toy2.jpg",
      "toy3.jpg"
    ]
  },
  {
    "id": 6,
    "name": "Sports",
    "images": [
      "sport1.jpg",
      "sport2.jpg",
      "sport3.jpg"
    ]
  },
  {
    "id": 7,
    "name": "Beauty",
    "images": [
      "beauty1.jpg",
      "beauty2.jpg",
      "beauty3.jpg"
    ]
  },
  {
    "id": 8,
    "name": "Automotive",
    "images": [
      "auto1.jpg",
      "auto2.jpg",
      "auto3.jpg"
    ]
  },
  {
    "id": 9,
    "name": "Garden",
    "images": [
      "garden1.jpg",
      "garden2.jpg",
      "garden3.jpg"
    ]
  },
  {
    "id": 10,
    "name": "Health",
    "images": [
      "health1.jpg",
      "health2.jpg",
      "health3.jpg"
    ]
  }
];

const container = document.createElement('div');

categories.forEach(category => {
  const categoryDiv = document.createElement('div');
  categoryDiv.innerHTML = `<h2>${category.name}</h2>`;
  
  category.images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    categoryDiv.appendChild(img);
  });
  
  container.appendChild(categoryDiv);
});

document.body.appendChild(container);






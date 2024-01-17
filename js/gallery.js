const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// Get the gallery container
const galleryContainer = document.querySelector('.gallery');

// Iterate over each object in the array and create markup
images.forEach(image => {
  // Create a new li element with the class gallery-item
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery-item');

  // Create a link with the class gallery-link and set the href attribute
  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery-link');
  galleryLink.href = image.original;

  // Prevent automatic image loading on click
  galleryLink.addEventListener('click', function(event) {
    event.preventDefault();
  });

  // Create an image with the class gallery-image and set src, alt, and data-source attributes
  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery-image');
  galleryImage.src = image.preview;
  galleryImage.alt = image.description;
  galleryImage.setAttribute('data-source', image.original);

  // Append the image inside the link
  galleryLink.appendChild(galleryImage);

  // Append the link inside the li element
  galleryItem.appendChild(galleryLink);

  // Append the li element inside the ul.gallery
  galleryContainer.appendChild(galleryItem);
});

// Add event listener for clicks on gallery items
galleryContainer.addEventListener('click', function(event) {
  // Check if the clicked element has the class gallery-image
  if (event.target.classList.contains('gallery-image')) {
    // Get the source of the clicked image
      const largeImageSrc = event.target.dataset.source;

    // Open a basicLightbox modal with the large image
      const modal = basicLightbox.create(`<img src="${largeImageSrc}" alt="Large Image">`);

    // Show the modal
    modal.show();

    // Log the source to the console (you can replace this with your desired functionality)
    console.log('Large Image Source:', largeImageSrc);
  }
});


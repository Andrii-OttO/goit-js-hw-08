const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
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

const imageList = document.querySelector(".js-gallery");
const imageBox = document.querySelector(".lightbox");
const imageBoxContent = document.querySelector(".lightbox__content");
const lightImage = document.querySelector(".lightbox__image");
const btn = document.querySelector(".lightbox__button");
const overlay = document.querySelector(".lightbox__overlay");

galleryItems.forEach((image) => {
  imageList.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${image.original}">
        <img class="gallery__image" 
        src="${image.preview}" 
        data-source="${image.original}" 
        alt="${image.description}"
        />
      </a>
    </li>`,
  );
});

imageList.addEventListener("click", onClick);
imageList.addEventListener("keydown", changeImg);
function onClick(e) {
  e.preventDefault();
  if (e.target.nodeName === "IMG") {
    return (
      (lightImage.src = e.target.dataset.source),
      imageBox.classList.add("is-open")
    );
  }
}

btn.addEventListener("click", outOfPicture);

// console.log(lightImage);
function outOfPicture() {
  imageBox.classList.remove("is-open");
  lightImage.src = "";
}

overlay.addEventListener("click", overlayClick);
function overlayClick() {
  imageBox.classList.remove("is-open");
  lightImage.src = "";
}

function changeImg() {
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      outOfPicture();
    }
    const lightBoxImage = document.querySelector(".lightbox__image");
    let currentIndex = 0;
    galleryItems.forEach((img) => {
      if (img.original === lightBoxImage.src) {
        currentIndex = galleryItems.indexOf(img);
      }
    });

    let nextIndex = currentIndex + 1;
    let previousIndex = currentIndex - 1;
    if (event.code === "ArrowRight") {
      if (nextIndex >= galleryItems.length) {
        nextIndex = 0;
      }
      lightBoxImage.src = galleryItems[nextIndex].original;
    }
    if (event.code === "ArrowLeft") {
      if (previousIndex < 0) {
        previousIndex = galleryItems.length - 1;
      }
      lightBoxImage.src = galleryItems[previousIndex].original;
    }
  });
}

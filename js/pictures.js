const pictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createPicture = (picture) => {
  const pictureElement = picturesTemplate.cloneNode(true);

  const image = pictureElement.querySelector('.picture__img');
  const comments = pictureElement.querySelector('.picture__comments');
  const likes = pictureElement.querySelector('.picture__likes');

  image.src = picture.url;
  image.alt = picture.description;
  likes.textContent = picture.likes;
  comments.textContent = picture.comments.length;

  return pictureElement;
};

const renderPictures = (objects)=>{
  const fragment = document.createDocumentFragment();
  for (let i = 0; i<objects.length; i++){
    fragment.appendChild(createPicture(objects[i]));
  }
  pictures.appendChild(fragment);
};

export {renderPictures};

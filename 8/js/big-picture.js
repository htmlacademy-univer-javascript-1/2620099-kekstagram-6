const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const commentCountElement = bigPicture.querySelector('.social__comment-count');

const commentsLoader = bigPicture.querySelector('.comments-loader');

const cancelButton = bigPicture.querySelector('.big-picture__cancel');


const createComment = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  img.width = 35;
  img.height = 35;

  const text = document.createElement('p');
  text.classList.add('social__text');
  text.textContent = comment.message;

  commentElement.appendChild(img);
  commentElement.appendChild(text);

  return commentElement;
};

const renderComments = (comments) => {
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    fragment.appendChild(createComment(comment));
  });

  socialComments.appendChild(fragment);
};

const openBigPicture = (pictureData) => {
  const { url, likes, description, comments } = pictureData;

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;

  commentCountElement.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  renderComments(pictureData.comments);

  return bigPicture;
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};


cancelButton.addEventListener('click', () => {
  closeBigPicture();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
    evt.preventDefault();
    closeBigPicture();
  }
});

export { openBigPicture, closeBigPicture };

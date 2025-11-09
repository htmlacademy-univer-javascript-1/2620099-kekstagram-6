import { postsCount, MESSAGES, NAMES, DESCRIPTIONS } from './data.js';
import { getRandomInteger, createRandomIdFromRangeGenerator } from './util.js';

const createPhoto = (photoId) => {
  const likesCount = getRandomInteger(15, 200);
  const commentsCount = getRandomInteger(0, 30);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);

  const commentIdGenerator = createRandomIdFromRangeGenerator(1, 900);
  const commentsArray = [];

  for (let i = 0; i < commentsCount; i++) {
    const randomAvatar = getRandomInteger(1, 6);
    const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
    const randomMessageIndex = getRandomInteger(0, MESSAGES.length - 1);
    commentsArray.push({
      id: commentIdGenerator(),
      avatar: `img/avatar-${randomAvatar}.svg`,
      message: MESSAGES[randomMessageIndex],
      name: NAMES[randomNameIndex]
    });
  }

  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: DESCRIPTIONS[randomDescriptionIndex],
    likes: likesCount,
    comments: commentsArray
  };
};

const photosArray = [];
const photoIdGenerator = createRandomIdFromRangeGenerator(1, 25);

for (let photoIndex = 0; photoIndex < postsCount; photoIndex++) {
  const photoId = photoIdGenerator();
  const photo = createPhoto(photoId);
  photosArray.push(photo);
}

export { photosArray };

const postsCount = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCRIPTIONS = [
  'Прекрасный закат на море',
  'Моя пушистая кошка',
  'Горный поход выходного дня',
  'Кофе в уютном кафе',
  'Прогулка по осеннему парку',
  'Архитектура старого города',
  'Мой завтрак',
  'Вечерний город',
  'Природа в её лучшем проявлении',
  'Момент с друзьями'
];

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}


function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}


const createUserPosts = (postId) =>{
  const likesCount = getRandomInteger(15,200);
  const commentsCount = getRandomInteger(0,30);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);

  const commentIdGenerator = createRandomIdFromRangeGenerator(1,900);
  const commentsArray = [];

  for (let i = 0; i < commentsCount; i++){
    const randomAvatar = getRandomInteger(1,6);
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
    id: postId,
    url: `photos/${postId}.jpg`,
    description: DESCRIPTIONS[randomDescriptionIndex],
    likes: likesCount,
    comments: commentsArray
  };

};

const postIdGenerator = createRandomIdFromRangeGenerator(1,25);
const postsArray = [];

for (let postIndex = 0; postIndex < postsCount; postIndex++){
  const postId = postIdGenerator();
  const post = createUserPosts(postId);
  postsArray.push(post);
}

import { openForm } from './form-validation.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileInput = document.querySelector('#upload-file');
const previewImage = document.querySelector('.img-upload__preview img');
const effectsPreviews = document.querySelectorAll('.effects__preview');


const loadImage = () => {
  const file = fileInput.files[0];
  if (!file) {
    return;
  }

  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));
  if (!matches) {
    // Можно добавить уведомление о неподдерживаемом формате
    return;
  }

  const imageUrl = URL.createObjectURL(file);

  previewImage.src = imageUrl;
  effectsPreviews.forEach((preview) => {
    preview.style.backgroundImage = `url('${imageUrl}')`;
  });

  openForm();
};

// НОВАЯ функция для инициализации
const initImageUpload = () => {
  fileInput.addEventListener('change', loadImage);
};

export { initImageUpload };

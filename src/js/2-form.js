const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// Відновлення збережених даних при завантаженні
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      formData = { ...formData, ...parsedData };

      if (parsedData.email) {
        form.elements.email.value = parsedData.email;
      }
      if (parsedData.message) {
        form.elements.message.value = parsedData.message;
      }
    } catch (e) {
      console.error('Error parsing saved data:', e);
    }
  }
});

// Обробка введення в форму
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробка сабміту форми
form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // Очистити
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
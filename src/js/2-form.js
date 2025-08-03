const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};


document.addEventListener('DOMContentLoaded', () => {
  if (!form) return;

  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      formData = { ...formData, ...parsedData };

      for (const [key, value] of Object.entries(parsedData)) {
        if (form.elements[key]) {
          form.elements[key].value = value;
        }
      }
    } catch (e) {
      console.error('Error parsing saved data:', e);
    }
  }
});

let saveTimeout;
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();

  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 300); 
});


form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
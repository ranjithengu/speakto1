// main.js
import { auth, db } from './firebase.js';

function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert('Signed Up Successfully');
    })
    .catch(error => alert(error.message));
}

function signIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert('Signed In Successfully');
    })
    .catch(error => alert(error.message));
}

function logout() {
  auth.signOut().then(() => alert('Logged Out'));
}

auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('chat-container').style.display = 'block';
  } else {
    document.getElementById('auth-container').style.display = 'block';
    document.getElementById('chat-container').style.display = 'none';
  }
});

async function sendMessage() {
  const message = document.getElementById('user-input').value;
  const model = document.getElementById('modelDropdown').value;
  const apiEndpoint = model === 'gpt-3' ? 'https://api.openai.com/v1/completions' : 'https://api-inference.huggingface.co/models/your-huggingface-model';

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer YOUR_API_KEY`, // Replace with respective API keys
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: model,
      prompt: message,
      max_tokens: 150
    })
  });

  const data = await response.json();
  document.getElementById('chat-window').innerHTML += `<p>Bot: ${data.choices[0].text}</p>`;
  document.getElementById('user-input').value = '';
}


// messages.js

const messages = [
    "Take a deep breath — you're doing better than you think.",
    "Patience is strength, not the absence of action.",
    "Even the smallest step forward takes courage.",
    "You are surrounded by love, seen and unseen.",
    "Healing takes time — be gentle with yourself.",
    "Every challenge you’ve faced has made you stronger.",
    "You are not alone — support is always within reach.",
    "Kindness toward yourself is a form of bravery.",
    "Keep going — your light is growing brighter every day.",
    "You are enough, just as you are."
  ];
  
  let index = 0;
  const messageBox = document.createElement('div');
  messageBox.className = 'message-box';
  document.body.appendChild(messageBox);
  
  function showNextMessage() {
    messageBox.classList.remove('fade-in');
    messageBox.classList.add('fade-out');
  
    setTimeout(() => {
      messageBox.textContent = messages[index];
      messageBox.classList.remove('fade-out');
      messageBox.classList.add('fade-in');
  
      index = (index + 1) % messages.length;
    }, 1000);
  }
  
  window.onload = () => {
    messageBox.textContent = messages[0];
    messageBox.classList.add('fade-in');
    index = 1;
    setInterval(showNextMessage, 5000);
  };
  
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const todayIndex = new Date().getDay();
const list = document.getElementById('daysList');

// Load notes from localStorage
const savedNotes = JSON.parse(localStorage.getItem('weekNotes')) || {};

days.forEach((day, index) => {
  const li = document.createElement('li');
  li.classList.add('day-item');
  if (index === todayIndex) li.classList.add('today');

  const title = document.createElement('h3');
  title.textContent = day;

  const textarea = document.createElement('textarea');
  textarea.rows = 3;
  textarea.placeholder = 'Write your note here...';
  textarea.value = savedNotes[day] || '';

  const button = document.createElement('button');
  button.textContent = 'Save Note';
  button.onclick = () => {
    savedNotes[day] = textarea.value;
    localStorage.setItem('weekNotes', JSON.stringify(savedNotes));
    alert('Note saved!');
  };

  const noteDiv = document.createElement('div');
  noteDiv.className = 'note';
  noteDiv.appendChild(textarea);
  noteDiv.appendChild(button);

  li.appendChild(title);
  li.appendChild(noteDiv);
  list.appendChild(li);
});

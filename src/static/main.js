```javascript
// ...existing code...

function renderActivityCard(activity) {
  // ...existing code...
  const participantsHtml = `
    <div class="participants-section">
      <h5>Participants</h5>
      <ul class="participants-list">
        ${activity.participants.map(email => `<li>${email}</li>`).join('')}
      </ul>
    </div>
  `;
  // ...existing code...
  card.innerHTML = `
    <h4>${activity.name}</h4>
    <p>${activity.description}</p>
    <p><strong>Schedule:</strong> ${activity.schedule}</p>
    <p><strong>Max participants:</strong> ${activity.max_participants}</p>
    ${participantsHtml}
    <!-- ...existing code for signup form, etc... -->
  `;
  // ...existing code...
}

// ...existing code...
```
// This puts the modal into the page
document.body.insertAdjacentHTML('beforeend', `
    <div id="modalOverlay" class="modal-overlay hidden">
      <div class="modal">
        <button class="modal-close" id="closeModal" aria-label="Close">&times;</button>
        <h2>Get in Touch</h2>
        <form id="contactForm">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>

          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>

          <label for="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  `);
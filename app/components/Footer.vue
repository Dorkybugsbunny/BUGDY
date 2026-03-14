<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Left Section -->
      <div class="footer-left">
        <div class="footer-logo">
          <h3>Logo or something</h3>
          <p>Descriptive line about what your company does.</p>
        </div>
        <div class="footer-social">
          <a href="#" class="social-icon">
            <ion-icon class="icon-lg" name="logo-instagram"></ion-icon>
          </a>
          <a href="#" class="social-icon">
            <ion-icon class="icon-lg" name="logo-linkedin"></ion-icon>
          </a>
          <a href="#" class="social-icon">
            <ion-icon class="icon-lg" name="logo-twitter"></ion-icon>
          </a>
        </div>
      </div>

      <!-- Right Section - Columns -->
      <div class="footer-right">
        <!-- Features Column -->
        <div class="footer-column">
          <h4>Features</h4>
          <ul>
            <li><a href="#">Core features</a></li>
            <li><a href="#">Pro Experience</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>

        <!-- Learn More Column -->
        <div class="footer-column">
          <h4>Learn More</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Customer Stories</a></li>
          </ul>
        </div>

        <!-- Support Column -->
        <div class="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Legal</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright -->
    <div class="footer-bottom">
      <p>© 2026 Your Company Name. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background-color: var(--color-secondary);
  color: var(--text-on-dark);
  padding: 60px 20px 30px;
}

.footer-content {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-left {
  flex: 1;
  max-width: 400px;
}

.footer-logo h3 {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: var(--text-on-dark);
  font-family: 'Barlow', sans-serif;
}

.footer-logo p {
  font-size: 14px;
  margin: 0 0 20px 0;
  color: #B8C5D1;
  line-height: 1.5;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-on-dark);
  font-size: 20px;
  transition: color 0.2s;
}

.social-icon:hover {
  color: var(--color-primary);
}

.footer-right {
  display: flex;
  gap: 80px;
  flex: 2;
  justify-content: flex-end;
}

.footer-column h4 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: var(--text-on-dark);
  font-family: 'Outfit', sans-serif;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 12px;
}

.footer-column a {
  color: #B8C5D1;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.footer-column a:hover {
  color: var(--text-on-dark);
}

.footer-bottom {
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 30px;
  border-top: 1px solid rgba(177, 192, 205, 0.3);
  text-align: center;
}

.footer-bottom p {
  font-size: 12px;
  color: #B8C5D1;
  margin: 0;
}
</style>
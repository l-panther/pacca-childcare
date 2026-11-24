<script setup>
import { company } from '@/data/company'
import logo from '~/assets/images/logo/logo-toolbar.png'

const displayTelephone = company.telephone.replace(
  /(\d{4})(\d{3})(\d{4})/,
  '$1 $2 $3'
)

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container">

      <div class="row footer-row">

        <!-- Company -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="footer-logo">
            <span class="logo-mark">
              <img :src="logo" :alt="company.name">
            </span>
          </div>

          <p class="footer-description">
            Safe, fun and affordable Breakfast, After School
            and Holiday Clubs for children across the UK,
            trusted by parents and schools alike.
          </p>

          <div class="social">
            <a href="#" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>

            <a href="#" aria-label="X">
              <i class="bi bi-twitter-x"></i>
            </a>

            <a href="#" aria-label="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-6 col-md-3 col-lg-2">
          <h4>Quick Links</h4>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <!-- Clubs -->
        <div class="col-6 col-md-3 col-lg-2">
          <h4>Our Clubs</h4>

          <ul>
            <li><a href="#clubs">Breakfast Club</a></li>
            <li><a href="#clubs">After School Club</a></li>
            <li><a href="#clubs">Holiday Club</a></li>
          </ul>
        </div>

        <!-- Newsletter & Contact -->
        <div class="col-12 col-md-6 col-lg-4">
          <h4>Stay Updated</h4>

          <p class="newsletter-description">
            Sign up for term-time and holiday club
            news and offers.
          </p>

          <div class="subscribe-row">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
            >

            <button type="button">
              Subscribe
            </button>
          </div>

          <div class="footer-contact">
            <a :href="`tel:${company.telephone}`">
              <i class="bi bi-telephone"></i>
              <span>{{ displayTelephone }}</span>
            </a>

            <a
              v-if="company.email"
              :href="`mailto:${company.email}`"
            >
              <i class="bi bi-envelope"></i>
              <span>{{ company.email }}</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">

        <span class="copyright">
          &copy; {{ currentYear }} {{ company.name }}.
          All rights reserved.
        </span>

        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Safeguarding</a>
        </div>

      </div>

    </div>
  </footer>
</template>

<style scoped>
/* ---------- footer ---------- */

.site-footer {
  background: var(--navy-dark);
  color: #c9d5e4;
  padding: 70px 0 24px;
  font-size: .9rem;
}

.footer-row {
  row-gap: 36px;
}

/* ---------- logo ---------- */

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}

.logo-mark img {
  display: block;
  width: 120px;
  height: auto;
}

.footer-description {
  max-width: 340px;
}

/* ---------- typography ---------- */

.site-footer p {
  color: #c9d5e4;
  font-size: .9rem;
  line-height: 1.7;
  margin-bottom: 14px;
}

.site-footer h4 {
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: .95rem;
  font-weight: 700;
  margin: 0 0 20px;
}

/* ---------- links ---------- */

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.site-footer li {
  margin-bottom: 12px;
}

.site-footer a {
  color: #c9d5e4;
  text-decoration: none;
  transition: color .25s ease;
}

.site-footer a:hover {
  color: var(--orange);
}

/* ---------- social ---------- */

.social {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
}

.social a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,.08);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: .85rem;

  transition:
    background .25s ease,
    transform .25s ease;
}

.social a:hover {
  background: var(--orange);
  color: #fff;
  transform: translateY(-3px);
}

/* ---------- newsletter ---------- */

.newsletter-description {
  margin-bottom: 16px !important;
}

.subscribe-row {
  display: flex;
  width: 100%;
  margin-bottom: 22px;
}

.subscribe-row input {
  flex: 1;
  min-width: 0;
  width: 100%;

  padding: 12px 14px;
  border: none;
  border-radius: 6px 0 0 6px;

  background: #fff;
  color: var(--navy);
  font-size: .85rem;
  outline: none;
}

.subscribe-row input:focus {
  box-shadow: inset 0 0 0 2px var(--orange);
}

.subscribe-row button {
  flex-shrink: 0;

  background: var(--orange);
  color: #fff;

  border: none;
  padding: 12px 16px;
  border-radius: 0 6px 6px 0;

  font-size: .85rem;
  font-weight: 600;
  cursor: pointer;

  transition:
    background .25s ease,
    filter .25s ease;
}

.subscribe-row button:hover {
  filter: brightness(.9);
}

/* ---------- contact ---------- */

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-contact a {
  display: flex;
  align-items: center;
  gap: 12px;
  overflow-wrap: anywhere;
}

.footer-contact i {
  color: #76d0ff;
  font-size: 1rem;
  flex-shrink: 0;
}

/* ---------- footer bottom ---------- */

.footer-bottom {
  margin-top: 55px;
  padding-top: 24px;

  border-top: 1px solid rgba(255,255,255,.12);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  font-size: .78rem;
  color: #8fa0b8;
}

.footer-legal {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.footer-legal a {
  color: #aebed0;
}

.footer-legal a:hover {
  color: var(--orange);
}

/* ---------- tablet ---------- */

@media (max-width: 991px) {

  .site-footer {
    padding: 60px 0 24px;
  }

  .footer-row {
    row-gap: 40px;
  }

  .footer-bottom {
    margin-top: 45px;
  }
}

/* ---------- mobile ---------- */

@media (max-width: 600px) {

  .site-footer {
    padding: 55px 0 25px;
  }

  .footer-row {
    row-gap: 38px;
  }

  /* Logo */

  .footer-logo {
    margin-bottom: 16px;
  }

  .logo-mark img {
    width: 115px;
  }

  .footer-description {
    max-width: 100%;
  }

  /* Text */

  .site-footer h4 {
    font-size: .95rem;
    margin-bottom: 16px;
  }

  .site-footer p {
    font-size: .88rem;
    line-height: 1.7;
  }

  .site-footer li {
    margin-bottom: 12px;
    font-size: .88rem;
  }

  /* Social */

  .social {
    margin-top: 20px;
  }

  .social a {
    width: 38px;
    height: 38px;
  }

  /* Newsletter */

  .subscribe-row input {
    font-size: .82rem;
    padding: 12px;
  }

  .subscribe-row button {
    font-size: .82rem;
    padding: 12px 14px;
  }

  /* Contact */

  .footer-contact {
    gap: 14px;
  }

  .footer-contact a {
    font-size: .88rem;
  }

  /* Bottom */

  .footer-bottom {
    margin-top: 40px;
    padding-top: 22px;

    flex-direction: column;
    align-items: flex-start;
    gap: 18px;

    font-size: .75rem;
    line-height: 1.6;
  }

  .footer-legal {
    gap: 12px 18px;
  }
}

/* ---------- small phones ---------- */

@media (max-width: 360px) {

  .subscribe-row {
    flex-direction: column;
    gap: 10px;
  }

  .subscribe-row input,
  .subscribe-row button {
    width: 100%;
    border-radius: 6px;
  }

  .footer-legal {
    gap: 10px 14px;
  }
}
</style>
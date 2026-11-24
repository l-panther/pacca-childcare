<template>
  <section class="hero">
    <div class="hero-inner">

      <span class="badge reveal">
        <span class="badge-dot"></span>
        Ofsted Registered Childcare
      </span>

      <h1 class="reveal">
        Breakfast, After School
        <span class="hero-highlight">
          &amp; Holiday Clubs
        </span>
      </h1>

      <p class="reveal">
        Safe, exciting and affordable childcare that gives
        parents peace of mind and children unforgettable
        adventures — before school, after school and
        during the holidays.
      </p>

      <div class="btn-row reveal">
        <a href="#contact" class="btn btn-orange">
          Book Now
        </a>

        <a href="#clubs" class="btn btn-outline">
          Discover Our Clubs
        </a>
      </div>

    </div>
  </section>
</template>


<style scoped>
/* ---------- hero ---------- */

.hero {
  position: relative;

  background:
    linear-gradient(
      100deg,
      rgba(19, 43, 69, .92) 10%,
      rgba(19, 43, 69, .55) 55%,
      rgba(19, 43, 69, .15) 100%
    ),
    url('/assets/images/index/hero.jpg') no-repeat;

  background-size: cover;
  background-position: center;

  color: #fff;
  min-height: 60vh;
  padding: 100px 0 70px;
  overflow: hidden;
}

/* Subtle colour overlay */

.hero::after {
  content: "";
  position: absolute;
  inset: 0;

  background:
    radial-gradient(
      circle at 78% 30%,
      rgba(245, 135, 31, .14),
      transparent 45%
    );

  pointer-events: none;
}

/* ---------- content ---------- */

.hero-inner {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;

  position: relative;
  z-index: 1;
}

/* ---------- badge ---------- */

.badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.3);

  padding: 7px 16px;
  border-radius: 30px;

  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;

  margin-bottom: 22px;

  backdrop-filter: blur(6px);
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ffae42;
  flex-shrink: 0;
}

/* ---------- heading ---------- */

.hero h1 {
  font-size: 3rem;
  line-height: 1.1;
  max-width: 640px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 800;
}

.hero-highlight {
  color: #ffb347;
}

/* ---------- description ---------- */

.hero p {
  max-width: 560px;
  font-size: 1.05rem;
  line-height: 1.75;
  color: #e1e8f0;
  margin-bottom: 32px;
}

/* ---------- responsive ---------- */

@media (max-width: 900px) {
  .hero h1 {
    font-size: 2.2rem;
  }
}

@media (max-width: 600px) {
  .hero {
    min-height: 520px;
    padding: 85px 0 65px;

    display: flex;
    align-items: center;

    background:
      linear-gradient(
        90deg,
        rgba(19, 43, 69, .94) 0%,
        rgba(19, 43, 69, .78) 48%,
        rgba(19, 43, 69, .4) 100%
      ),
      url('/assets/images/index/hero.jpg') no-repeat;

    background-size: cover;
    background-position: 58% center;
  }

  .hero-inner {
    padding: 0 22px;
  }

  .hero h1 {
    font-size: clamp(2rem, 8vw, 2.6rem);
    line-height: 1.15;
    max-width: 360px;
    margin-bottom: 18px;
  }

  .hero p {
    font-size: .95rem;
    line-height: 1.7;
    max-width: 340px;
    margin-bottom: 26px;
  }

  .badge {
    font-size: .65rem;
    padding: 7px 12px;
    margin-bottom: 20px;
  }

  .btn-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .btn-row .btn {
    font-size: .85rem;
    padding: 12px 18px;
  }
}
 </style>
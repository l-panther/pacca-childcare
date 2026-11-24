<script setup>
import { company } from '@/data/company'

import image from '~/assets/images/index/about.jpg'
</script>

<template>
<section class="about" id="about">
  <div class="container about-grid">
    <div class="about-img reveal-scale">
      <img :src="image" alt="Child and parent holding hands">
    </div>
    <div class="about-content">
      <span class="eyebrow teal reveal">About Us</span>
      <h2 class="reveal">Welcome to {{ company.name }}</h2>
      <p class="reveal">
        For over 15 years, {{ company.name }} has been supporting schools, children and families with high-quality Breakfast, After School and Holiday Clubs.
      </p>
      <p class="reveal">
        We create safe, welcoming spaces where children can play, learn, explore and build friendships, all while being supported by a caring and experienced team.</p>
        <p class="reveal">
        Our goal is simple: to give every child a positive experience they look forward to, while giving parents the flexibility, confidence and reassurance they need around the school day and during the holidays.
      </p>
      <ul class="checklist reveal">
        <li><span class="check">✓</span> Qualified, DBS-checked play workers</li>
        <li><span class="check">✓</span> Nutritious meals and snacks included</li>
        <li><span class="check">✓</span> Flexible online booking and cancellations</li>
      </ul>
      <a href="#clubs" class="btn btn-orange reveal" style="margin-top:8px;">Discover Our Clubs</a>
      <div class="stats reveal">
        <div><div class="stat-num">15+</div><div class="stat-label">Years of Experience</div></div>
        <div><div class="stat-num">30,000+</div><div class="stat-label">Happy Children</div></div>
        <div><div class="stat-num">98%</div><div class="stat-label">Parent Satisfaction</div></div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
/* ---------- about ---------- */
.about{padding:100px 0;}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
.about-img{position:relative;}
.about-img img{
  border-radius:20px;width:100%;height:420px;object-fit:cover;
  box-shadow:0 30px 60px -20px rgba(27,58,92,.35);
}
.about h2{font-size:1.8rem;margin-bottom:18px;line-height:1.2;}
.about p{color:var(--ink-light);margin-bottom:20px;}
.checklist li{
  display:flex;align-items:center;gap:10px;margin-bottom:12px;font-weight:500;color:var(--navy);
}
.check{
  width:20px;height:20px;border-radius:50%;background:#e6f7ec;color:var(--green);
  display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;
}
.stats{display:flex;gap:44px;margin-top:36px;flex-wrap:wrap;}
.stat-num{font-size:2rem;font-weight:800;color:var(--orange);font-family:'Poppins',sans-serif;}
.stat-label{font-size:.85rem;color:var(--ink-light);}

@media(max-width:900px){
  .about-grid {grid-template-columns:1fr;}
}

/* ---------- about mobile ---------- */

@media (max-width: 600px) {

  .about {
    padding: 65px 0;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    align-items: start;
  }

  /* Image */

  .about-img img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 12px;

    box-shadow:
      0 15px 35px -15px rgba(27,58,92,.25);
  }

  /* Heading */

  .about h2 {
    font-size: 1.75rem;
    line-height: 1.25;
    margin-bottom: 18px;
  }

  /* Paragraphs */

  .about p {
    font-size: .95rem;
    line-height: 1.75;
    margin-bottom: 16px;
  }

  /* Checklist */

  .checklist {
    margin-top: 22px;
  }

  .checklist li {
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 14px;
    font-size: .9rem;
    line-height: 1.5;
  }

  .check {
    margin-top: 2px;
  }

  /* Statistics */

  .stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 16px;
    margin-top: 36px;
  }

  .stat-num {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  .stat-label {
    font-size: .8rem;
    line-height: 1.5;
    margin-top: 5px;
  }
}
</style>
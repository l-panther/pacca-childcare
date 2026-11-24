<script setup>
import { ref } from 'vue'

import breakfastImage from '~/assets/images/index/breakfast-club.jpg'
import afterSchoolImage from '~/assets/images/index/after-school-club.jpg'
import holidayImage from '~/assets/images/index/holiday-club.jpg'

const clubs = [
  {
    title: 'Breakfast Club',
    time: '7:30am – 9:00am',
    age: 'Ages 4–11',
    days: 'Monday – Friday',
    color: 'teal',
    image: breakfastImage,
    summary:
      'A calm, friendly start to the day with breakfast, games and time to settle before school.',
    intro:
      'Our Breakfast Club gives children a relaxed and positive start to the school day. Children can eat, socialise, play and prepare for the day in a safe and welcoming environment.',
    activities: [
      'Healthy breakfast',
      'Board games and puzzles',
      'Drawing and crafts',
      'Quiet reading',
      'Free play'
    ],
    includes: [
      'Breakfast and drinks',
      'Supervised activities',
      'Safe handover to school staff'
    ]
  },

  {
    title: 'After School Club',
    time: '3:00pm – 6:00pm',
    age: 'Ages 4–11',
    days: 'Monday – Friday',
    color: 'blue',
    image: afterSchoolImage,
    summary:
      'A fun and supportive space after school with creative activities, games and nutritious snacks.',
    intro:
      'Our After School Club is designed to help children relax after the school day while still giving them plenty of opportunities to be active, creative and social.',
    activities: [
      'Arts and crafts',
      'Sports and active games',
      'Construction and imaginative play',
      'Reading and quiet activities',
      'Group games and challenges'
    ],
    includes: [
      'Healthy snack and drinks',
      'Supervised play',
      'Indoor and outdoor activities',
      'Homework or quiet-time support'
    ]
  },

  {
    title: 'Holiday Club',
    time: '8:00am – 6:00pm',
    age: 'Ages 4–12',
    days: 'Selected school holidays',
    color: 'purple',
    image: holidayImage,
    summary:
      'Full days of activities, creativity, play and new experiences during the school holidays.',
    intro:
      'Holiday Club gives children exciting, varied days during the school holidays, with a mixture of structured activities, free play and special themed sessions.',
    activities: [
      'Sports and outdoor play',
      'Arts and crafts',
      'Games and competitions',
      'Themed activity days',
      'Trips and special events'
    ],
    includes: [
      'Full-day childcare',
      'Snacks and refreshments',
      'Supervised activities',
      'Indoor and outdoor play'
    ]
  }
]

const selectedClub = ref(clubs[0])

const openClub = (club) => {
  selectedClub.value = club
}
</script>

<template>
  <section
    id="clubs"
    class="clubs"
  >
    <div class="container">
      <div class="section-head">
        <span class="eyebrow blue reveal">
          Our Clubs
        </span>

        <h2 class="reveal">
          Activities for Every Part of the Day
        </h2>

        <p class="reveal">
          Whichever club your child joins, they'll enjoy a warm welcome,
          exciting activities and a team who genuinely cares about their
          wellbeing.
        </p>
      </div>

      <div class="club-grid">
        <div
          v-for="club in clubs"
          :key="club.title"
          class="club-card reveal"
          :class="`club-${club.color}`"
        >
          <div class="image-container">
            <img
              :src="club.image"
              :alt="club.title"
            >
          </div>

          <div class="club-card-text">
            <h3>{{ club.title }}</h3>

            <span class="time-tag">
              {{ club.time }}
            </span>

            <p>
              {{ club.summary }}
            </p>

            <button
              type="button"
              class="btn btn-navy"
              data-bs-toggle="modal"
              data-bs-target="#clubModal"
              @click="openClub(club)"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Club Modal -->
<div
  id="clubModal"
  class="modal fade"
  tabindex="-1"
  aria-labelledby="clubModalTitle"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content club-modal"
    :class="`club-${selectedClub.color}`">

      <button
  type="button"
  class="modal-close"
  data-bs-dismiss="modal"
  aria-label="Close"
>
  <i class="bi bi-x-lg" aria-hidden="true"></i>
</button>

      <div class="row g-0">

        <!-- Image -->
        <div class="col-12 col-xl-5">
          <div class="club-modal-image">
            <img
              :src="selectedClub.image"
              :alt="selectedClub.title"
            >
          </div>
        </div>

        <!-- Content -->
        <div class="col-12 col-xl-7">
          <div class="club-modal-content">

            <span class="eyebrow">
              Our Clubs
            </span>

            <h2 id="clubModalTitle">
              {{ selectedClub.title }}
            </h2>

            <p class="club-modal-intro">
              {{ selectedClub.intro }}
            </p>

            <!-- Quick Details -->
            <div class="club-meta">
              <div class="club-meta-item">
                <i class="bi bi-clock"></i>

                <div>
                  <span>Hours</span>
                  <strong>{{ selectedClub.time }}</strong>
                </div>
              </div>

              <div class="club-meta-item">
                <i class="bi bi-people"></i>

                <div>
                  <span>Age Range</span>
                  <strong>{{ selectedClub.age }}</strong>
                </div>
              </div>

              <div class="club-meta-item">
                <i class="bi bi-calendar-week"></i>

                <div>
                  <span>Days</span>
                  <strong>{{ selectedClub.days }}</strong>
                </div>
              </div>
            </div>

            <div class="row mt-4 g-4">

              <div class="col-12 col-lg-6">
                <h3>Activities</h3>

                <ul class="club-list">
                  <li
                    v-for="activity in selectedClub.activities"
                    :key="activity"
                  >
                    <i class="bi bi-check-circle-fill"></i>
                    {{ activity }}
                  </li>
                </ul>
              </div>

              <div class="col-12 col-lg-6">
                <h3>What's Included</h3>

                <ul class="club-list">
                  <li
                    v-for="item in selectedClub.includes"
                    :key="item"
                  >
                    <i class="bi bi-check-circle-fill"></i>
                    {{ item }}
                  </li>
                </ul>
              </div>

            </div>

            <div class="club-modal-footer">
              <div>
                <strong>Interested in this club?</strong>

                <p class="mb-0">
                  Get in touch to check availability or ask any questions.
                </p>
              </div>

              <NuxtLink
                to="#contact"
                class="btn btn-navy"
                data-bs-dismiss="modal"
              >
                Enquire Now
              </NuxtLink>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

/* ---------- club colour themes ---------- */

.club-teal {
  --club-color: #168b83;
  --club-light: #e4f5f0;
}

.club-blue {
  --club-color: #287ac2;
  --club-light: #e5f0fc;
}

.club-purple {
  --club-color: #8754b5;
  --club-light: #f0e9fa;
}

/* ---------- card accents ---------- */

.club-card {
  position: relative;
  overflow: hidden;
  border-top: 4px solid var(--club-color);
}

.club-card h3 {
  color: var(--club-color);
}

.club-card .time-tag {
  background: var(--club-light);
  color: var(--club-color);
}

/* ---------- buttons ---------- */

.club-card .btn {
  background: var(--club-color);
  border-color: var(--club-color);
  color: #fff;
  transition:
    transform .25s ease,
    filter .25s ease;
}

.club-card .btn:hover {
  transform: translateY(-2px);
  filter: brightness(.9);
}
/* ---------- clubs ---------- */
.clubs{background:var(--cream);padding:100px 0;text-align:center;}
.club-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;text-align:left;}
.club-card{
  background:#fff;border-radius:var(--radius);
  box-shadow:0 10px 30px -18px rgba(27,58,92,.2);
  transition:transform .35s ease, box-shadow .35s ease;
}
.club-card:hover{transform:translateY(-8px);box-shadow:0 24px 40px -20px rgba(27,58,92,.28);}
.club-card-text{padding:34px 30px;}
.club-icon{
  width:52px;height:52px;border-radius:14px;background:#fdece0;
  display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin-bottom:20px;
}
.club-card h3{font-size:1.25rem;margin-bottom:10px;}
.time-tag{
  display:inline-block;background:#fdece0;color:var(--orange-dark);
  font-size:.75rem;font-weight:700;padding:4px 12px;border-radius:20px;margin-bottom:14px;
}
.club-card p{color:var(--ink-light);font-size:.92rem;margin-bottom:22px;}

.club-modal {
  border: 0;
  border-radius: 24px;
  overflow: hidden;
}

.club-modal-image {
  height: 100%;
  min-height: 100%;
  max-height: none;
}

.club-modal-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.club-modal-content {
  position: relative;
  padding: 3rem;
    font-size: .9rem;
}

/* ---------- modal colours ---------- */

.club-modal-content h2 {
  color: var(--club-color);
}

.club-meta-item {
  background: var(--club-light);
}

.club-meta-item i,
.club-list i {
  color: var(--club-color);
}

.club-modal-footer .btn {
  background: var(--club-color);
  border-color: var(--club-color);
  color: #fff;
}

.modal-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 10;

  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: 2px solid #132b45;
  border-radius: 50%;

  color: #132b45 !important;
  background: #fff;
}

.modal-close i { font-weight: bold;}

.club-modal-content h2 {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.club-modal-content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.club-modal-intro {
  line-height: 1.7;
}

.club-meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.club-meta-item {
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: 1rem;
  border-radius: 14px;
  background: #f5f6f8;
}

.club-meta-item i {
  font-size: 1.4rem;
}

.club-meta-item span,
.club-meta-item strong {
  display: block;
}

.club-meta-item span {
  font-size: .8rem;
  opacity: .7;
}

.club-list {
  padding: 0;
  margin: 1rem 0 0;
  list-style: none;
}

.club-list li {
  display: flex;
  gap: .6rem;
  margin-bottom: .75rem;
}

.club-list i {
  flex-shrink: 0;
}

.club-modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #ddd;
}

/* ---------- responsive modal ---------- */

.club-modal {
  max-height: calc(100dvh - 32px);
  overflow-y: auto;
}

@media (max-width: 991px) {
  .club-modal-image {
    height: 260px;
    min-height: 0;
    max-height: none;
  }

  .club-modal-content {
    padding: 2rem;
  }

  .club-meta {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* ---------- mobile fullscreen modal ---------- */

@media (max-width: 575px) {

  :deep(#clubModal) {
    padding: 0 !important;
  }

  :deep(#clubModal .modal-dialog) {
    width: calc(100% - 20px);
    max-width: none;
    height: calc(100dvh - 20px);
    min-height: 0;
    margin: 10px auto;
    display: flex;
    align-items: stretch;
  }

  .club-modal {
    width: 100%;
    height: 100%;
    max-height: none;
    overflow-y: auto;
    overscroll-behavior: contain;
    border-radius: 14px;
  }

  /* Image */

  .club-modal-image {
    height: 190px;
    min-height: 0;
    max-height: none;
  }

  .club-modal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Content */

  .club-modal-content {
    padding: 24px 20px;
  }

  .club-modal-content h2 {
    font-size: 1.6rem;
  }

  .club-modal-intro {
    font-size: .9rem;
    line-height: 1.65;
  }

  /* Club details */

  .club-meta {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 24px;
  }

  .club-meta-item {
    padding: 12px 14px;
    border-radius: 10px;
  }

  /* Activities */

  .club-list li {
    font-size: .88rem;
    line-height: 1.5;
  }

  /* Footer */

  .club-modal-footer {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    margin-top: 24px;
    padding-top: 20px;
  }

  .club-modal-footer .btn {
    display: block;
    width: 100%;
    text-align: center;
  }

  /* Close button */

  .modal-close {
    position: sticky;
    top: 12px;
    float: right;
    margin: 12px 12px -52px 0;
    width: 38px;
    height: 38px;
    z-index: 10;
    background: #fff;
    box-shadow: 0 2px 12px rgba(0, 0, 0, .12);
  }
}

@media (max-width: 600px) {
  .clubs {
    padding: 65px 0;
  }

  .section-head {
    margin-bottom: 35px;
  }

  .section-head h2 {
    font-size: 1.75rem;
    line-height: 1.25;
  }

  .section-head p {
    font-size: .95rem;
    line-height: 1.65;
  }

  .club-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .club-card {
    width: 100%;
    min-width: 0;
  }

  .image-container {
    height: 210px;
    overflow: hidden;
  }

  .image-container img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .club-card-text {
    padding: 24px;
  }

  .club-card h3 {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }

  .club-card p {
    font-size: .95rem;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .time-tag {
    font-size: .75rem;
  }

  .club-card .btn {
    padding: 11px 20px;
  }
}
</style>
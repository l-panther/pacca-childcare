<template>
  <section class="reviews" id="reviews">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow yellow reveal">Parent Reviews</span>
        <h2 class="reveal">What Parents Are Saying</h2>
      </div>
      <div class="review-grid">
        <div class="review-card reveal">
          <div class="stars">★★★★★</div>
          <p>"My daughter looks forward to Breakfast Club every single morning. The staff are warm, organised and clearly love what they do."</p>
          <div class="reviewer"><div class="avatar">SM</div><div><div class="reviewer-name">Sarah M.</div><div class="reviewer-role">Parent</div></div></div>
        </div>
        <div class="review-card reveal">
          <div class="stars">★★★★★</div>
          <p>"Holiday Club has been a lifesaver for our family. Brilliant activities and I always know my son is safe and having fun."</p>
          <div class="reviewer"><div class="avatar">JT</div><div><div class="reviewer-name">James T.</div><div class="reviewer-role">Parent</div></div></div>
        </div>
        <div class="review-card reveal">
          <div class="stars">★★★★★</div>
          <p>"The booking system is so easy and the After School team genuinely knows every child by name. Highly recommend."</p>
          <div class="reviewer"><div class="avatar">RK</div><div><div class="reviewer-name">Ruth K.</div><div class="reviewer-role">Parent</div></div></div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
/* ---------- reviews ---------- */
.reviews{background:var(--cream);padding:100px 0;text-align:center;}
.review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;text-align:left;margin-top:10px;}
.review-card{
  background:#fff;border-radius:var(--radius);padding:30px;
  box-shadow:0 10px 30px -18px rgba(27,58,92,.18);
}
.stars{color:var(--orange);letter-spacing:2px;margin-bottom:14px;font-size:.95rem;}
.review-card p{color:var(--ink-light);font-size:.92rem;margin-bottom:20px;}
.reviewer{display:flex;align-items:center;gap:12px;}
.avatar{
  width:40px;height:40px;border-radius:50%;background:var(--navy);color:#fff;
  display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem;flex-shrink:0;
}
.reviewer-name{font-weight:600;color:var(--navy);font-size:.9rem;}
.reviewer-role{font-size:.78rem;color:var(--ink-light);}

@media(max-width:900px){
  .review-grid{grid-template-columns:1fr;}
}</style>

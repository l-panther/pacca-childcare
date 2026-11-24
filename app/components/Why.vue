<template>

<section class="why">
  <div class="container why-grid">
    <div>
      <span class="eyebrow purple reveal">Why Choose Us</span>
      <h2 class="reveal">Families Trust Us With What Matters Most</h2>
      <p class="reveal">Every club is designed around safety, fun and development — so you can go about your day knowing your child is happy, safe and having a great time.</p>
    </div class="why-content">
    <div class="why-features">
      <div class="why-feature reveal">
        <div class="why-icon">🛡</div>
        <div><h4>Safe &amp; Secure</h4><p>Fully vetted, DBS-checked staff and safeguarding-first environments.</p></div>
      </div>
      <div class="why-feature reveal">
        <div class="why-icon">👥</div>
        <div><h4>Qualified Team</h4><p>Experienced play workers dedicated to every child's development.</p></div>
      </div>
      <div class="why-feature reveal">
        <div class="why-icon">😊</div>
        <div><h4>Fun Activities</h4><p>A varied programme of sports, arts, cooking and outdoor play.</p></div>
      </div>
      <div class="why-feature reveal">
        <div class="why-icon">💷</div>
        <div><h4>Great Value</h4><p>Affordable childcare with flexible booking to suit your family.</p></div>
      </div>
    </div>
  </div>
</section>
</template>


<style scoped>
/* ---------- why choose us ---------- */
.why{padding:100px 0;}
.why-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:60px;align-items:start;}
.why h2{font-size:2.1rem;margin:14px 0 16px;line-height:1.2;}
.why-content p {
  color: var(--ink-light);
  line-height: 1.7;
}
.why-features{display:grid;grid-template-columns:1fr 1fr;gap:32px 40px;}
.why-feature{display:flex;gap:16px;}
.why-icon{
  width:44px;height:44px;border-radius:12px;background:var(--blue-chip);
  display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;color:var(--navy);
}
.why-feature h4{font-size:1.02rem;margin-bottom:6px;color:var(--navy);}
.why-feature p{font-size:.88rem;color:var(--ink-light);}

/* ---------- feature colours ---------- */

.why-feature:nth-child(1) .why-icon {
  background: #e5f0fc;
  color: #287ac2;
}

.why-feature:nth-child(2) .why-icon {
  background: #e4f5f0;
  color: #168b83;
}

.why-feature:nth-child(3) .why-icon {
  background: #fff2dc;
  color: #c17a00;
}

.why-feature:nth-child(4) .why-icon {
  background: #f0e9fa;
  color: #8754b5;
}

/* ---------- tablet ---------- */

@media (max-width: 900px) {

  .why {
    padding: 80px 0;
  }

  .why-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .why-content {
    max-width: 650px;
  }

  .why-features {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }
}

/* ---------- mobile ---------- */

@media (max-width: 600px) {

  .why {
    padding: 65px 0;
  }

  .why-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  /* Introduction */

  .why-content h2 {
    font-size: 1.75rem;
    line-height: 1.25;
    margin: 14px 0 18px;
  }

  .why-content p {
    font-size: .95rem;
    line-height: 1.7;
  }

  /* Features */

  .why-features {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .why-feature {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }

  /* Icons */

  .why-icon {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    font-size: 1.25rem;
    flex-shrink: 0;
  }

  /* Text */

  .why-feature h4 {
    font-size: 1rem;
    margin-bottom: 6px;
  }

  .why-feature p {
    font-size: .9rem;
    line-height: 1.6;
  }
}
</style>
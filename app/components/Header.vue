
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import logo from '~/assets/images/logo/logo-toolbar.png'

const activeSection = ref('home')

const sections = [
  'home',
  'about',
  'clubs',
  'reviews',
  'contact'
]

let navToggle
let siteNav
let navOverlay

function openNav() {
  siteNav?.classList.add('open')
  navToggle?.classList.add('open')
  navOverlay?.classList.add('open')

  navToggle?.setAttribute('aria-expanded', 'true')
  document.body.style.overflow = 'hidden'
}

function closeNav() {
  siteNav?.classList.remove('open')
  navToggle?.classList.remove('open')
  navOverlay?.classList.remove('open')

  navToggle?.setAttribute('aria-expanded', 'false')
  document.body.style.overflow = ''
}

function toggleNav() {
  siteNav?.classList.contains('open')
    ? closeNav()
    : openNav()
}

function handleScroll() {
  const headerHeight = document.querySelector('header')?.offsetHeight || 80
  const position = window.scrollY + headerHeight + 100

  // Keep Home active at the top
  if (window.scrollY < 50) {
    activeSection.value = 'home'
    return
  }

  // Ensure Contact becomes active at the bottom
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 10
  ) {
    activeSection.value = 'contact'
    return
  }

  let current = 'home'

  sections.forEach(id => {
    const section = document.getElementById(id)

    if (section && section.offsetTop <= position) {
      current = id
    }
  })

  activeSection.value = current
}

onMounted(() => {
  navToggle = document.getElementById('navToggle')
  siteNav = document.getElementById('siteNav')
  navOverlay = document.getElementById('navOverlay')

  navToggle?.addEventListener('click', toggleNav)
  navOverlay?.addEventListener('click', closeNav)

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)

  handleScroll()
})

onBeforeUnmount(() => {
  navToggle?.removeEventListener('click', toggleNav)
  navOverlay?.removeEventListener('click', closeNav)

  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)

  document.body.style.overflow = ''
})
</script>


<template>
<header>
  <div class="header-inner">
    <div class="logo">
      <span class="logo-mark">
        <img :src="logo" alt="">
      </span>
    </div>
   
    <nav id="siteNav">
      <ul>
        <li :class="{ active: activeSection === 'home' }">
          <a href="#home" @click="closeNav">Home</a>
        </li>

        <li :class="{ active: activeSection === 'about' }">
          <a href="#about" @click="closeNav">About Us</a>
        </li>

        <li :class="{ active: activeSection === 'clubs' }">
          <a href="#clubs" @click="closeNav">Our Clubs</a>
        </li>

        <li :class="{ active: activeSection === 'reviews' }">
          <a href="#reviews" @click="closeNav">Reviews</a>
        </li>

        <li :class="{ active: activeSection === 'contact' }">
          <a href="#contact" @click="closeNav">Contact</a>
        </li>
      </ul>
    </nav>

    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="siteNav">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-overlay" id="navOverlay"></div>
</header>
</template>


<style scoped>
/* ---------- header ---------- */
header{
  display:flex;align-items:center;justify-content:space-between;
  padding:18px 0;
  border-bottom:1px solid #eef0f3;
  position:sticky;top:0;background:#fff;z-index:100;
}
.header-inner{max-width:1180px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;width:100%;}
.logo{display:flex;align-items:center;gap:10px;font-weight:700;font-size:1.15rem;color:var(--navy);font-family:'Poppins',sans-serif;}
.logo-mark{
  width:120px;height:40px;
  display:flex;align-items:center;justify-content:center;color:#fff;font-size:1rem;flex-shrink:0;
}
/* ---------- colourful navigation ---------- */

nav ul {
  display: flex;
  gap: 32px;
  list-style: none;
  font-size: .95rem;
  font-weight: 600;
}

nav li:nth-child(1) { --link-color: #173454; }
nav li:nth-child(2) { --link-color: #168b83; }
nav li:nth-child(3) { --link-color: #287ac2; }
nav li:nth-child(4) { --link-color: #8754b5; }
nav li:nth-child(5) { --link-color: #f58220; }

nav a {
  position: relative;
  display: inline-block;
  color: var(--link-color);
  text-decoration: none;
  transition: opacity .25s ease;
}

nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 100%;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .3s ease;
}

nav a:hover::after,
nav .active a::after {
  transform: scaleX(1);
}

nav a:hover {
  opacity: .75;
}

nav .active a {
  font-weight: 700;
}
/* ---------- mobile nav toggle ---------- */
.nav-toggle{
  display:none;
  flex-direction:column;
  justify-content:center;
  gap:5px;
  width:38px;height:38px;
  border:none;background:none;cursor:pointer;
  padding:0;
}
.nav-toggle span{
  display:block;width:24px;height:2px;background:var(--navy);
  border-radius:2px;transition:transform .3s ease, opacity .3s ease;
}
.nav-toggle.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.nav-toggle.open span:nth-child(2){opacity:0;}
.nav-toggle.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

.nav-overlay{
  display:none;
  position:fixed;inset:0;
  background:rgba(19,43,69,.45);
  z-index:150;
  opacity:0;
  transition:opacity .3s ease;
}
.nav-overlay.open{display:block;opacity:1;}

@media(max-width:900px){
  .nav-toggle{display:flex;}

  nav{
    position:fixed;
    top:0;right:0;
    height:100vh;
    width:min(78vw, 320px);
    background:#fff;
    z-index:200;
    display:block;
    transform:translateX(100%);
    transition:transform .35s cubic-bezier(.21,.6,.35,1);
    box-shadow:-10px 0 30px rgba(19,43,69,.15);
    padding:90px 32px 32px;
  }
  nav.open{transform:translateX(0);}
  nav ul {
    flex-direction: column;
    gap: 22px;
    font-size: 1.05rem;
  }

  nav a::after {
    bottom: -5px;
  }
}
</style>

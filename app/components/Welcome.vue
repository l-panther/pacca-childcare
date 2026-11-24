<script setup>
</script>

<template>
  <AppSection id="welcome"
    aria="welcome-title">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <h2 id="welcome-title">
            Welcome to <span>the adventure</span>
          </h2>

          <p class="mb-3">
            Our Adventure Playground offers over an acre of safe,
            staffed space where children &amp; young people can come
            to play, build confidence, make new friends, develop
            skills &amp; try new things.
          </p>

          <p>
            We are open to children and young people of every
            background between the ages of 0–21.
          </p>

          <p>
            Accompanied children under 5 have Stay and Play activities
            in their own building with a mud kitchen, sand pit, and
            enclosed open space.
          </p>

          <p>
            We also offer event hire of the facilities, especially
            on Sundays.
          </p>

          <p>
            We are a registered charity and rely 100% on volunteers
            and donations to stay open.
          </p>

          <NuxtLink
            class="btn"
            to="/about-us"
          >
            About us
          </NuxtLink>
        </div>

        <div
          class="col-12 col-md-6 d-none d-md-flex justify-content-center align-items-center text-center"
        >
          <aside>
            <img
              src=""
              alt="Children playing in the Adventure Playground"
              class="img-fluid"
            >
          </aside>
        </div>
      </div>
  </AppSection>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  reason: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  reason: '',
  message: '',
})

const touched = reactive({
  name: false,
  email: false,
  phone: false,
  reason: false,
  message: false,
})

const isSubmitting = ref(false)
const successMessage = ref(false)
const errorMessage = ref(false)

const validators = {
  name(value) {
    if (!value.trim()) return 'Please enter your name.'
    if (value.trim().length < 2) return 'Name looks too short.'
    return ''
  },

  email(value) {
    if (!value.trim()) return 'Please enter your email address.'

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(value.trim())) {
      return 'Please enter a valid email address.'
    }

    return ''
  },

  phone(value) {
    if (!value.trim()) return ''

    const phonePattern = /^[\d\s+()-]{7,}$/

    if (!phonePattern.test(value.trim())) {
      return 'Please enter a valid phone number.'
    }

    return ''
  },

  reason(value) {
    if (!value) return 'Please select a reason for contact.'
    return ''
  },

  message(value) {
    if (!value.trim()) return 'Please enter a message.'

    if (value.trim().length < 10) {
      return 'Please provide a little more detail (at least 10 characters).'
    }

    if (value.trim().length > 2000) {
      return 'Message is too long (max 2000 characters).'
    }

    return ''
  },
}

function validateField(name) {
  errors[name] = validators[name](form[name])
  return !errors[name]
}

function handleBlur(name) {
  touched[name] = true
  validateField(name)
}

function handleInput(name) {
  if (touched[name]) {
    validateField(name)
  }
}

function validateAll() {
  let isValid = true

  Object.keys(form).forEach((name) => {
    touched[name] = true

    if (!validateField(name)) {
      isValid = false
    }
  })

  return isValid
}

function resetForm() {
  Object.keys(form).forEach((name) => {
    form[name] = ''
    errors[name] = ''
    touched[name] = false
  })
}

async function handleSubmit() {
  successMessage.value = false
  errorMessage.value = false

  if (!validateAll()) return

  isSubmitting.value = true

  try {
    // Temporary fake submission.
    // Replace this later with $fetch('/api/contact', ...)
    await new Promise((resolve) => setTimeout(resolve, 800))

    successMessage.value = true
    resetForm()
  } catch (error) {
    errorMessage.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow orange">Contact Us</span>
        <h2>Get In Touch</h2>

        <p>
          Questions about a club, booking, or anything else — send us a
          message and we'll get back to you.
        </p>
      </div>

      <div class="contact-card">

        <!-- Success -->
        <div
          v-if="successMessage"
          class="form-alert form-alert-success show"
          role="status"
        >
          <span aria-hidden="true">✓</span>
          <span>
            Thanks — your message has been sent. We'll be in touch soon.
          </span>
        </div>

        <!-- Error -->
        <div
          v-if="errorMessage"
          class="form-alert form-alert-error show"
          role="alert"
        >
          <span aria-hidden="true">⚠</span>
          <span>
            Something went wrong sending your message. Please try again.
          </span>
        </div>

        <form
          id="contactForm"
          novalidate
          @submit.prevent="handleSubmit"
        >

          <!-- Name / Email -->
          <div class="form-row">

            <div
              class="form-field"
              :class="{
                'has-error': errors.name,
                'is-valid': touched.name && !errors.name
              }"
            >
              <label for="cf-name">
                Full name
              </label>

              <input
                id="cf-name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                :aria-invalid="!!errors.name"
                :aria-describedby="errors.name ? 'err-name' : undefined"
                @blur="handleBlur('name')"
                @input="handleInput('name')"
              >

              <div
                id="err-name"
                class="field-error"
              >
                {{ errors.name }}
              </div>
            </div>


            <div
              class="form-field"
              :class="{
                'has-error': errors.email,
                'is-valid': touched.email && !errors.email
              }"
            >
              <label for="cf-email">
                Email address
              </label>

              <input
                id="cf-email"
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                :aria-invalid="!!errors.email"
                :aria-describedby="errors.email ? 'err-email' : undefined"
                @blur="handleBlur('email')"
                @input="handleInput('email')"
              >

              <div
                id="err-email"
                class="field-error"
              >
                {{ errors.email }}
              </div>
            </div>

          </div>


          <!-- Phone / Reason -->
          <div class="form-row">

            <div
              class="form-field"
              :class="{
                'has-error': errors.phone,
                'is-valid': touched.phone && !errors.phone
              }"
            >
              <label for="cf-phone">
                Phone
                <span
                  style="font-weight:400; color:var(--ink-light);"
                >
                  (optional)
                </span>
              </label>

              <input
                id="cf-phone"
                v-model="form.phone"
                type="tel"
                name="phone"
                autocomplete="tel"
                :aria-invalid="!!errors.phone"
                :aria-describedby="errors.phone ? 'err-phone' : undefined"
                @blur="handleBlur('phone')"
                @input="handleInput('phone')"
              >

              <div
                id="err-phone"
                class="field-error"
              >
                {{ errors.phone }}
              </div>
            </div>


            <div
              class="form-field"
              :class="{
                'has-error': errors.reason,
                'is-valid': touched.reason && !errors.reason
              }"
            >
              <label for="cf-reason">
                Reason for contact
              </label>

              <select
                id="cf-reason"
                v-model="form.reason"
                name="reason"
                :aria-invalid="!!errors.reason"
                :aria-describedby="errors.reason ? 'err-reason' : undefined"
                @blur="handleBlur('reason')"
                @change="handleBlur('reason')"
              >
                <option value="">
                  Select an option…
                </option>

                <option value="breakfast">
                  Breakfast Club
                </option>

                <option value="afterschool">
                  After School Club
                </option>

                <option value="holiday">
                  Holiday Club
                </option>

                <option value="booking">
                  Booking question
                </option>

                <option value="general">
                  General enquiry
                </option>

                <option value="other">
                  Other
                </option>
              </select>

              <div
                id="err-reason"
                class="field-error"
              >
                {{ errors.reason }}
              </div>
            </div>

          </div>


          <!-- Message -->
          <div
            class="form-field"
            :class="{
              'has-error': errors.message,
              'is-valid': touched.message && !errors.message
            }"
          >
            <label for="cf-message">
              Message
            </label>

            <textarea
              id="cf-message"
              v-model="form.message"
              name="message"
              placeholder="How can we help?"
              :aria-invalid="!!errors.message"
              :aria-describedby="errors.message ? 'err-message' : undefined"
              @blur="handleBlur('message')"
              @input="handleInput('message')"
            />

            <div
              id="err-message"
              class="field-error"
            >
              {{ errors.message }}
            </div>
          </div>


          <!-- Submit -->
          <button
            id="contactSubmitBtn"
            type="submit"
            class="btn btn-orange"
            :disabled="isSubmitting"
          >
            <span
              v-if="isSubmitting"
              class="btn-spinner"
              aria-hidden="true"
            />

            {{ isSubmitting ? 'Sending…' : 'Send message' }}
          </button>

        </form>
      </div>
    </div>
  </section>
</template>


<style scoped>
/**/

  .contact-section{ padding:100px 0; background:#fff; }

  .contact-card{
    background:#fff;
    border-radius:var(--radius);
    box-shadow:0 10px 30px -18px rgba(27,58,92,.2);
    padding:44px;
    max-width:700px;
    margin:0 auto;
  }

  .form-row{ display:grid; grid-template-columns:1fr 1fr; gap:20px; }

  .form-field{ display:flex; flex-direction:column; gap:6px; margin-bottom:20px; }
  .form-field label{ font-size:.85rem; font-weight:600; color:var(--navy); }
  .form-field input,
  .form-field select,
  .form-field textarea{
    font-family:'Inter',sans-serif;
    font-size:.92rem;
    color:var(--ink);
    padding:12px 14px;
    border-radius:10px;
    border:1.5px solid #e3e7ee;
    background:#fff;
    transition:border-color .15s ease, box-shadow .15s ease;
  }
  .form-field input:focus,
  .form-field select:focus,
  .form-field textarea:focus{
    outline:none;
    border-color:var(--orange);
    box-shadow:0 0 0 3px rgba(245,135,31,.15);
  }
  .form-field textarea{ resize:vertical; min-height:130px; }

  .form-field.has-error input,
  .form-field.has-error select,
  .form-field.has-error textarea{
    border-color:#d64545;
  }
  .form-field.has-error input:focus,
  .form-field.has-error select:focus,
  .form-field.has-error textarea:focus{
    box-shadow:0 0 0 3px rgba(214,69,69,.15);
  }
  .form-field.is-valid input,
  .form-field.is-valid select,
  .form-field.is-valid textarea{
    border-color:var(--green);
  }
  .field-error{
    font-size:.78rem;
    color:#d64545;
    font-weight:500;
    min-height:1.1em;
  }

  .form-alert{
    display:none;
    align-items:center;
    gap:10px;
    padding:14px 18px;
    border-radius:10px;
    font-size:.88rem;
    font-weight:500;
    margin-bottom:24px;
  }
  .form-alert.show{ display:flex; }
  .form-alert-success{ background:#e6f7ec; color:#1c7a42; }
  .form-alert-error{ background:#fdeceb; color:#a53434; }

  #contactSubmitBtn{ display:inline-flex; align-items:center; gap:8px; width:100%; justify-content:center; }
  #contactSubmitBtn:disabled{ opacity:.6; cursor:not-allowed; }
  .btn-spinner{
    width:14px; height:14px; border:2px solid rgba(255,255,255,.4); border-top-color:#fff;
    border-radius:50%; display:inline-block; animation:contact-spin .7s linear infinite;
  }
  @keyframes contact-spin{ to{ transform:rotate(360deg); } }

  @media (max-width:600px){
    .form-row{ grid-template-columns:1fr; gap:0; }
    .contact-card{ padding:28px 22px; }
  }
</style>
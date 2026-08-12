<template>
  <section class="section" id="contact">
    <div class="container">
      <div style="text-align: center; max-width: 560px; margin: 0 auto;">
        <div class="section-label">Get In Touch</div>
        <h2 class="section-title">Let's Work Together</h2>
        <p style="color: var(--clr-ink-muted); margin-top: 12px;">
          Have a project in mind? I'd love to hear about it.
          Let's create something amazing together.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Contact Info -->
        <div class="contact-info">
          <p>
            I'm currently open to new opportunities — whether it's a full-time role,
            a freelance project, or just a conversation about building something great.
          </p>

          <div class="contact-links">
            <a
              v-for="link in contactLinks"
              :key="link.label"
              :href="link.href"
              class="contact-link"
              target="_blank"
            >
              <div class="icon">{{ link.icon }}</div>
              <div>
                <div style="font-size: 12px; color: var(--clr-ink-muted); margin-bottom: 1px;">{{ link.type }}</div>
                {{ link.label }}
              </div>
              <q-icon name="mdi-arrow-right" style="margin-left: auto; opacity: 0.4;" />
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 24px;">Send a Message</h3>

          <q-form @submit="onSubmit" class="q-gutter-y-sm">
            <div class="form-row">
              <q-input
                v-model="form.name"
                label="Full Name"
                outlined
                dense
                lazy-rules
                :rules="[val => !!val || 'Name is required']"
                style="font-family: var(--font-body);"
              />
              <q-input
                v-model="form.email"
                label="Email Address"
                type="email"
                outlined
                lazy-rules
                dense
                :rules="[val => !!val || 'Email is required', val => /.+@.+\..+/.test(val) || 'Enter a valid email']"
              />
            </div>

            <q-input
              v-model="form.subject"
              label="Subject"
              outlined
              lazy-rules
              dense
            />

            <q-input
              v-model="form.message"
              label="Your Message"
              type="textarea"
              lazy-rules
              outlined
              rows="5"
              :rules="[val => !!val || 'Message is required']"
            />

            <q-btn
              type="submit"
              class="btn-primary"
              label="Send Message"
              no-caps
              icon="mdi-send"
              style="width: 100%; margin-top: 8px;"
              :loading="sending"
            />
          </q-form>
        </div>
      </div>
    </div>

    <!-- Success Snackbar -->
    <q-dialog v-model="showSuccess">
      <q-card style="border-radius: 16px; padding: 32px; max-width: 380px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 16px;">🎉</div>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Message Sent!</h3>
        <p style="color: var(--clr-ink-muted); margin-bottom: 24px;">
          Thanks for reaching out! I'll get back to you within 24 hours.
        </p>
        <q-btn class="btn-primary" label="Awesome!" no-caps @click="showSuccess = false" />
      </q-card>
    </q-dialog>
  </section>
</template>

<script setup>
import { Notify } from 'quasar'
const sending = ref(false)
const showSuccess = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const contactLinks = [
  { type: 'Email', label: 'soklenebaig@gmail.com', href: 'mailto:soklenebaig@gmail.com', icon: '📧' },
  { type: 'LinkedIn', label: 'linkedin.com/in/soklene-baig', href: 'https://www.linkedin.com/in/soklene-baig', icon: '💼' },
  { type: 'GitHub', label: 'github.com/Saklain95', href: 'https://github.com/Saklain95', icon: '🐙' },
  // { type: 'Twitter / X', label: '@alexmorgan_dev', href: 'https://twitter.com', icon: '🐦' },
]

async function onSubmit() {
  sending.value = true

  try {
    const res = await fetch(
      'https://saklain-portfolio-backend.onrender.com/api/contact/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      }
    )

    console.log("res---", res);

    const text = await res.text()

    console.log('RAW RESPONSE:', text)

    let data = {}

    try {
      data = JSON.parse(text)
    } catch (e) {
      throw new Error('Backend returned HTML instead of JSON')
    }

    if (!res.ok) {
      throw new Error(JSON.stringify(data))
    }

    Notify.create({
      type: 'positive',
      message: 'Message sent successfully!',
      position: 'top',
      timeout: 2500,
    })

  } catch (err) {
    console.error(err)

    Notify.create({
      type: 'negative',
      message: err.message || 'Failed to send message!',
      position: 'top',
      timeout: 4000,
    })

  } finally {
    sending.value = false
  }
}
</script>

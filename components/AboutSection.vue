<template>
  <section class="section" id="about">
    <div class="container">
      <div class="about-grid">
        <!-- Image Side -->
        <div class="about-image-side">
          <div class="about-img-placeholder">
            <!-- 🧑‍💻 -->
            <!-- Replace with:  -->
            <img :src="profile" alt="About Saqlain" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-lg);">
          </div>
          <div class="about-exp-badge">
            <div class="big">1+</div>
            <div class="small">Years of<br>Experience</div>
          </div>
        </div>

        <!-- Text Side -->
        <div class="about-text">
          <div class="section-label">About Me</div>
          <h2 class="section-title">Passionate about building great software</h2>

          <div style="margin-top: 24px;">
            <p>
              Hi! I'm Saqlain Ahamed Baig, a full-stack developer and UI/UX designer with over 1+ years of experience
              crafting digital products that blend beauty with functionality.
            </p>
            <p>
              I specialize in building modern web applications using Vue.js, Nuxt.js, React.js, Django, Springboot
              with a strong focus on performance, accessibility, and clean code architecture.
            </p>
            <p>
              When I'm not coding, you'll find me exploring design trends, contributing to open-source
              projects, or hiking somewhere with terrible WiFi.
            </p>
          </div>

          <div class="about-highlights">
            <div
              class="highlight-item"
              v-for="item in highlights"
              :key="item.text"
            >
              <div class="highlight-icon">
                <q-icon :name="item.icon" size="18px" />
              </div>
              {{ item.text }}
            </div>
          </div>

          <div style="margin-top: 32px;">
            <q-btn
              class="btn-primary"
              label="Download Resume"
              no-caps
              :href="resume"
              target="_blank"
              icon="mdi-download"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profile from '~/assets/data/profile-photo.jpg';
import resume from '~/assets/data/resume.pdf';
const highlights = [
  { icon: 'mdi-map-marker', text: 'Based in Bengaluru, India' },
  { icon: 'mdi-briefcase', text: 'Open to full-time & freelance work' },
  { icon: 'school', text: 'B.E in Computer Science, Shravanabelagola' },
  { icon: 'mdi-translate', text: 'Fluent in English, Hindi, Kannada' },
]
</script>

<template>
  <section class="hero" id="home">
    <div class="hero-bg-shape"></div>
    <div class="container">
      <div class="hero-inner">
        <!-- Text Side -->
        <div class="hero-text">
          <div class="hero-badge fade-up delay-1">
            <span class="dot"></span>
            Available for work
          </div>

          <h1 class="hero-title fade-up delay-2">
            Crafting Digital<br>
            <em class="accent">Experiences</em><br>
            That Matter
          </h1>

          <p class="hero-sub fade-up delay-3">
            Full Stack Developer &amp; UI/UX Designer based in Bengaluru.
            I build pixel-perfect, performant web applications that users love.
          </p>

          <div class="hero-btns fade-up delay-4">
            <q-btn
              class="btn-primary"
              label="View My Work"
              no-caps
              @click="scrollTo('#projects')"
            />
            <q-btn
              class="btn-outline"
              label="Download CV"
              no-caps
              icon="mdi-download"
            />
          </div>

          <div class="hero-stats fade-up delay-5">
            <div class="stat-item" v-for="stat in stats" :key="stat.label">
              <div class="num">{{ stat.num }}</div>
              <div class="label">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Image Side -->
        <div class="hero-image-wrap fade-up delay-3">
          <div class="hero-avatar">
            🧑‍💻
            <!-- Replace with: -->
             <!-- <img :src="profile" alt="Alex Morgan" style="width:100%;height:100%;object-fit:cover;"> -->
          </div>

          <!-- Floating Card 1 -->
          <div class="hero-floating-card card-1">
            <div class="fc-icon" style="background: #e8f5e9;">🚀</div>
            <div>
              <div style="font-size: 13px; font-weight: 700;">10+ Projects</div>
              <div style="font-size: 11px; color: var(--clr-ink-muted); font-weight: 400;">Successfully Shipped</div>
            </div>
          </div>

          <!-- Floating Card 2 -->
          <div class="hero-floating-card card-2">
            <div class="fc-icon" style="background: #fff0f3;">⭐</div>
            <div>
              <div style="font-size: 13px; font-weight: 700;">100% Satisfaction</div>
              <div style="font-size: 11px; color: var(--clr-ink-muted); font-weight: 400;">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="scroll-dot"></div>
    </div>
  </section>
</template>

<script setup>
import profile from '~/assets/data/profile-photo.jpg';
const stats = [
  { num: '1+', label: 'Years Experience' },
  { num: '10+', label: 'Projects Done' },
  { num: '10+', label: 'Happy Clients' },
]

function scrollTo(hash) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.scroll-indicator {
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.scroll-dot {
  width: 6px;
  height: 6px;
  background: var(--clr-ink-muted);
  border-radius: 50%;
  animation: bounce 1.6s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); opacity: 0.4; }
  50% { transform: translateY(8px); opacity: 1; }
}

@media (max-width: 768px) {
  .scroll-indicator { display: none; }
}
</style>

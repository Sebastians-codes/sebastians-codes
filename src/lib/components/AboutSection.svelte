<script lang="ts">
  import type { AboutContent } from '$lib/types';

  const {
    about,
    sectionId = 'about',
  } = $props<{ about: AboutContent; sectionId?: string }>();
</script>

<section aria-labelledby="about-heading" id={sectionId}>
  <span class="section-marker" aria-hidden="true"></span>
  <div class="glass-panel">
    <header>
      <h3 id="about-heading">{about.heading}</h3>
    </header>
    <div class="copy">
      {#each about.paragraphs as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    display: grid;
    gap: 1.5rem;
    scroll-margin-top: 4.5rem;
  }

  .section-marker {
    position: absolute;
    top: -1.5rem;
    left: 0;
    width: 60px;
    height: 1px;
    background: var(--section-marker);
  }

  .glass-panel {
    display: grid;
    gap: 1.5rem;
  }

  header {
    position: relative;
    z-index: 1;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  .copy {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 1rem;
    color: var(--text-soft);
    max-width: 48rem;
  }
</style>

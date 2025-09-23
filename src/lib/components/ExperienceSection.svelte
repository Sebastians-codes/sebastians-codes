<script lang="ts">
  import type { ExperienceContent } from '$lib/types';

  const {
    experience,
    sectionId = 'experience',
  } = $props<{ experience: ExperienceContent; sectionId?: string }>();
</script>

<section aria-labelledby="experience-heading" id={sectionId}>
  <span class="section-marker" aria-hidden="true"></span>
  <header>
    <h3 id="experience-heading">{experience.heading}</h3>
  </header>

  <div class="timeline">
    {#each experience.entries as entry}
      <article class="item">
        <header class="heading">
          <div class="role">
            <h4>{entry.role}</h4>
            <span>{entry.company}</span>
          </div>
          <span class="period">{entry.period}</span>
        </header>
        <p>{entry.summary}</p>
      </article>
    {/each}
  </div>
</section>

<style>
  section {
    position: relative;
    display: grid;
    gap: 1.75rem;
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

  h3 {
    margin: 0;
    font-size: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  header {
    margin-bottom: 1.5rem;
  }

  .timeline {
    display: grid;
    gap: 1.5rem;
  }

  .item {
    position: relative;
    padding: 1.95rem 2.15rem;
    border-radius: 24px;
    background:
      var(--glass-bg),
      var(--glass-tint);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
    overflow: hidden;
  }

  .item::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--glass-highlight);
    opacity: 0;
    transition: opacity 220ms ease;
    pointer-events: none;
  }

  .item::after {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    border: 1px solid var(--glass-outline);
    pointer-events: none;
  }

  .item:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: var(--glass-shadow-strong);
    border-color: var(--glass-border-strong);
  }

  .item:hover::before {
    opacity: 1;
  }

  .heading {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 0.85rem;
  }

  .role {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  h4 {
    margin: 0;
    color: var(--text-primary);
  }

  .role span {
    font-size: 0.95rem;
    color: var(--text-muted);
  }

  .period {
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  p {
    margin: 0;
    color: var(--text-soft);
  }
</style>

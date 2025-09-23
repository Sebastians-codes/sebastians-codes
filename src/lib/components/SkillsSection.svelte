<script lang="ts">
  import type { SkillsContent } from '$lib/types';

  const {
    skills,
    sectionId = 'skills',
  } = $props<{ skills: SkillsContent; sectionId?: string }>();
</script>

<section aria-labelledby="skills-heading" id={sectionId}>
  <span class="section-marker" aria-hidden="true"></span>
  <header>
    <h3 id="skills-heading">{skills.heading}</h3>
  </header>

  <div class="grid">
    {#each skills.categories as category}
      <article class="card">
        <h4>{category.title}</h4>
        <ul>
          {#each category.items as item}
            <li>{item}</li>
          {/each}
        </ul>
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

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.75rem;
  }

  .card {
    position: relative;
    border-radius: 26px;
    padding: 2rem;
    background:
      var(--glass-bg),
      var(--glass-tint);
    box-shadow: var(--glass-shadow);
    border: 1px solid var(--glass-border);
    transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--glass-highlight);
    opacity: 0;
    transition: opacity 220ms ease;
    pointer-events: none;
  }

  .card::after {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    border: 1px solid var(--glass-outline);
    pointer-events: none;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: var(--glass-shadow-strong);
    border-color: var(--glass-border-strong);
  }

  .card:hover::before {
    opacity: 1;
  }

  h4 {
    margin: 0 0 1rem;
    font-size: 1.1rem;
    color: var(--text-primary);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.5rem;
    color: var(--text-soft);
  }
</style>

<script lang="ts">
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import type { ProjectItem } from '$lib/types';

  const {
    project,
    onBack,
    theme,
    onToggle,
  } = $props<{
    project: ProjectItem;
    onBack: () => void;
    theme: 'light' | 'dark';
    onToggle: () => void;
  }>();
</script>

<section class="detail" aria-labelledby="project-title">
  <div class="detail-chrome">
    <button type="button" class="back" onclick={onBack}>
      <span aria-hidden="true">←</span>
      <span>Back</span>
    </button>
    <ThemeToggle theme={theme} toggle={onToggle} variant="hero" />
  </div>

  <div class="glass-panel core">
    <header class="summary">
      <div>
        <h1 id="project-title">{project.title}</h1>
        <p class="lead">{project.longDescription ?? project.description}</p>
      </div>
      {#if project.tags?.length}
        <ul class="tags">
          {#each project.tags as tag}
            <li>{tag}</li>
          {/each}
        </ul>
      {/if}
    </header>

    {#if project.highlights?.length}
      <section class="highlights" aria-label="Highlights">
        <h2>Highlights</h2>
        <ul>
          {#each project.highlights as highlight}
            <li>{highlight}</li>
          {/each}
        </ul>
      </section>
    {/if}

    <footer class="meta">
      {#if project.stack?.length}
        <div class="stack">
          <h3>Stack</h3>
          <ul>
            {#each project.stack as tech}
              <li>{tech}</li>
            {/each}
          </ul>
        </div>
      {/if}

      {#if project.links?.length}
        <div class="links">
          {#each project.links as link}
            <a href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
          {/each}
        </div>
      {/if}
    </footer>
  </div>
</section>

<style>
  .detail {
    position: relative;
    display: grid;
    gap: 1.5rem;
    padding: 4.5rem 1.75rem 5rem;
    max-width: 960px;
    margin: 0 auto;
  }

  .detail-chrome {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .back {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    border: 1px solid rgba(255, 255, 255, 0.24);
    background: linear-gradient(140deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0.1));
    color: var(--text-primary);
    padding: 0.45rem 0.95rem;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    transition: border-color 160ms ease, background 160ms ease;
    backdrop-filter: blur(14px);
  }

  :global(:root[data-theme='dark']) .back {
    background: linear-gradient(150deg, rgba(32, 12, 20, 0.82), rgba(16, 6, 12, 0.92));
    border-color: rgba(255, 255, 255, 0.16);
    color: rgba(255, 248, 249, 0.9);
  }

  .back:focus-visible {
    outline: none;
    border-color: rgba(255, 255, 255, 0.36);
  }

  .core {
    display: grid;
    gap: 2.2rem;
  }

  .summary {
    display: grid;
    gap: 1.6rem;
    align-items: flex-start;
  }

  .summary h1 {
    margin: 0;
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    letter-spacing: -0.01em;
  }

  .lead {
    margin: 0.6rem 0 0;
    font-size: 1.05rem;
    color: var(--text-tertiary);
    max-width: 58ch;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .tags li {
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    background: var(--tag-bg);
    color: var(--tag-color);
    backdrop-filter: blur(6px);
  }

  .highlights h2 {
    margin: 0 0 0.75rem;
    font-size: 0.95rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  .highlights ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.75rem;
    color: var(--text-soft);
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
  }

  .stack h3 {
    margin: 0 0 0.5rem;
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  .stack ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    color: var(--text-soft);
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.25rem;
    align-items: center;
  }

  .links a {
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-primary);
    position: relative;
    padding-bottom: 0.25rem;
  }

  .links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: var(--link-underline);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 160ms ease;
  }

  .links a:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 720px) {
    .detail {
      padding: 3.5rem 1.2rem 4rem;
    }

    .meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }

    .detail-chrome {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
  }
</style>

<script lang="ts">
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import type { HeroContent } from '$lib/types';

  const {
    hero,
    sectionId = 'top',
    theme,
    onToggle,
  } = $props<{
    hero: HeroContent;
    sectionId?: string;
    theme?: 'light' | 'dark';
    onToggle?: () => void;
  }>();
</script>

<section class="hero" id={sectionId}>
  <div class="hero-top">
    <p class="eyebrow">{hero.greeting}</p>
    {#if theme && onToggle}
      <div class="hero-controls">
        <ThemeToggle theme={theme} toggle={onToggle} variant="hero" />
      </div>
    {/if}
  </div>

  <h1>{hero.name}</h1>
  <h2>{hero.title}</h2>
  <p class="tagline">{hero.tagline}</p>

  <div class="actions">
    {#each hero.actions as action}
      <a
        class:primary={action.variant !== 'ghost'}
        class:ghost={action.variant === 'ghost'}
        href={action.href}
      >
        {action.label}
      </a>
    {/each}
  </div>
</section>

<style>
  section.hero {
    display: grid;
    gap: 1rem;
    position: relative;
    padding: 2.4rem;
    border-radius: 32px;
    background:
      var(--glass-bg),
      var(--glass-tint);
    box-shadow: var(--glass-shadow-strong);
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
    overflow: hidden;
    backdrop-filter: blur(26px) saturate(1.25);
    -webkit-backdrop-filter: blur(26px) saturate(1.25);
  }

  section.hero::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    border: 1px solid var(--glass-outline);
    pointer-events: none;
  }

  section.hero::after {
    content: '';
    position: absolute;
    inset: -30% 20% 20% -30%;
    background: var(--hero-overlay);
    opacity: 0.65;
    transform: rotate(6deg);
    pointer-events: none;
  }

  .hero-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .hero-controls {
    margin-left: auto;
    display: inline-flex;
  }

  .eyebrow {
    letter-spacing: 0.25em;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-muted);
  }

  h1 {
    margin: 0;
    font-size: clamp(2.7rem, 5vw + 1rem, 4.75rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    text-shadow: var(--hero-text-shadow);
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-secondary);
  }

  .tagline {
    margin: 0;
    color: var(--text-tertiary);
    max-width: 40rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  .actions a {
    position: relative;
    border-radius: 999px;
    padding: 0.75rem 1.8rem;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
    border: 1px solid transparent;
    isolation: isolate;
  }

  .actions a::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: rgba(255, 255, 255, 0.09);
    opacity: 0;
    transition: opacity 180ms ease;
    z-index: -1;
  }

  .actions a.primary {
    background: var(--accent);
    color: var(--accent-contrast);
    box-shadow: var(--btn-primary-shadow);
  }

  .actions a.primary:hover {
    transform: translateY(-3px);
    box-shadow: var(--btn-primary-shadow-hover);
    background: var(--accent-hover);
    color: var(--accent-contrast);
  }

  .actions a.ghost {
    background: var(--btn-ghost-bg);
    border-color: var(--btn-ghost-border);
    color: var(--text-primary);
    box-shadow: var(--btn-ghost-shadow);
  }

  .actions a.ghost:hover {
    border-color: var(--btn-ghost-border-hover);
    transform: translateY(-2px);
  }

  .actions a:hover::after {
    opacity: 1;
  }

  @media (max-width: 600px) {
    section.hero {
      padding: 1.75rem;
    }

    .hero-top {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .actions {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>

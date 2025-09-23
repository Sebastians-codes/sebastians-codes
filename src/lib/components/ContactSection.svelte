<script lang="ts">
  import type { ContactContent } from '$lib/types';

  const {
    contact,
    sectionId = 'contact',
  } = $props<{ contact: ContactContent; sectionId?: string }>();
</script>

<section aria-labelledby="contact-heading" id={sectionId}>
  <span class="section-marker" aria-hidden="true"></span>
  <header>
    <h3 id="contact-heading">{contact.heading}</h3>
  </header>

  <div class="glass-panel">
    <p>{contact.note}</p>
    <a class="email" href={`mailto:${contact.email}`}>{contact.email}</a>

    <div class="socials">
      {#each contact.socials as social}
        <a href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
      {/each}
    </div>
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

  .glass-panel {
    display: grid;
    gap: 1.35rem;
  }

  p {
    margin: 0;
    color: var(--text-soft);
  }

  .email {
    font-weight: 600;
    text-decoration: none;
    color: var(--text-primary);
    display: inline-block;
  }

  .socials {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.25rem;
  }

  .socials a {
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    color: var(--text-primary);
    position: relative;
    padding-bottom: 0.3rem;
  }

  .socials a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: var(--link-underline);
    transition: transform 180ms ease;
    transform-origin: left;
    transform: scaleX(0);
  }

  .socials a:hover::after {
    transform: scaleX(1);
  }
</style>

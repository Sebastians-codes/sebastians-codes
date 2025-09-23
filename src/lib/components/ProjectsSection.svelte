<script lang="ts">
  import type { ProjectsContent } from '$lib/types';

  const {
    projects,
    sectionId = 'projects',
    onOpen,
  } = $props<{
    projects: ProjectsContent;
    sectionId?: string;
    onOpen?: (slug: string) => void;
  }>();

  const handleOpen = (event: MouseEvent, slug: string | undefined) => {
    if (!slug) return;
    if (onOpen) {
      event.preventDefault();
      onOpen(slug);
    }
  };
</script>

<section aria-labelledby="projects-heading" id={sectionId}>
  <span class="section-marker" aria-hidden="true"></span>
  <header>
    <h3 id="projects-heading">{projects.heading}</h3>
  </header>

  <div class="list">
    {#each projects.items as project}
      <article class="project">
          <div class="heading">
            <h4>{project.title}</h4>
            <a
              href={`#/projects/${project.slug ?? ''}`}
              onclick={(event) => handleOpen(event as MouseEvent, project.slug)}
            >
              View
            </a>
          </div>
        <p>{project.description}</p>
        <ul class="tags">
          {#each project.tags as tag}
            <li>{tag}</li>
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
    gap: 2rem;
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

  .list {
    display: grid;
    gap: 2rem;
  }

  .project {
    position: relative;
    background:
      var(--glass-bg),
      var(--glass-tint);
    border-radius: 28px;
    padding: 2.4rem;
    box-shadow: var(--glass-shadow);
    border: 1px solid var(--glass-border);
    overflow: hidden;
    transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
  }

  .project::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--glass-highlight);
    opacity: 0;
    transition: opacity 220ms ease;
    pointer-events: none;
  }

  .project::after {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    border: 1px solid var(--glass-outline);
    pointer-events: none;
  }

  .project:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: var(--glass-shadow-strong);
    border-color: var(--glass-border-strong);
  }

  .project:hover::before {
    opacity: 0.45;
  }

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  h4 {
    margin: 0;
    font-size: 1.25rem;
    color: var(--text-primary);
  }

  a {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 600;
    position: relative;
    padding-right: 1.4rem;
  }

  a::after {
    content: '↗';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-55%);
    font-size: 0.95rem;
  }

  p {
    margin: 0 0 1rem;
    color: var(--text-soft);
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
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    background: var(--tag-bg);
    color: var(--tag-color);
    backdrop-filter: blur(6px);
  }

  @media (max-width: 600px) {
    .heading {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>

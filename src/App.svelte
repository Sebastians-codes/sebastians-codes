<script lang="ts">
  import { onMount } from 'svelte';
  import dataRaw from '$lib/data/portfolio.json';
  import type { PortfolioData } from '$lib/types';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import SkillsSection from '$lib/components/SkillsSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
  import ExperienceSection from '$lib/components/ExperienceSection.svelte';
  import ContactSection from '$lib/components/ContactSection.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import ProjectDetail from '$lib/components/ProjectDetail.svelte';
  import BackgroundGlow from '$lib/components/BackgroundGlow.svelte';

  const data = $state(dataRaw as PortfolioData);
  let theme = $state<'light' | 'dark'>(data.preferences?.defaultTheme ?? 'light');
  let activeProjectSlug = $state<string | null>(null);

  const parseHash = () => {
    if (typeof window === 'undefined') return;
    const match = window.location.hash.match(/^#\/?projects\/([\w-]+)/i);
    activeProjectSlug = match ? match[1] : null;
  };

  const toggleTheme = () => {
    theme = theme === 'dark' ? 'light' : 'dark';
  };

  onMount(() => {
    if (typeof window === 'undefined') return;

    const stored = window.localStorage.getItem('sebastians-theme');
    if (stored === 'light' || stored === 'dark') {
      theme = stored;
    } else if (!data.preferences?.defaultTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }

    const handleHashChange = () => parseHash();
    parseHash();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  });

  const openProject = (slug: string) => {
    activeProjectSlug = slug;
    if (typeof window !== 'undefined') {
      window.location.hash = `/projects/${slug}`;
    }
  };

  const closeProject = () => {
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    activeProjectSlug = null;
  };

  const activeProject = $derived(
    data.projects.items.find((project) => project.slug === activeProjectSlug) ?? null,
  );

  const pageTitle = $derived(
    activeProject ? `${activeProject.title} · ${data.meta.title}` : data.meta.title,
  );

  const pageDescription = $derived(
    activeProject
      ? activeProject.longDescription ?? activeProject.description
      : data.meta.description,
  );

  $effect(() => {
    if (typeof window !== 'undefined') {
      const targetHash = activeProjectSlug ? `#/projects/${activeProjectSlug}` : '';
      const currentHash = window.location.hash;

      if (activeProjectSlug) {
        if (currentHash !== targetHash) {
          window.location.hash = targetHash;
        }
      } else if (currentHash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }

      window.localStorage.setItem('sebastians-theme', theme);
    }
  });

  $effect(() => {
    if (typeof document === 'undefined') return;

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
  });
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <link
    rel="icon"
    type="image/png"
    href="/20250923_1656_SC Logo_remix_01k5vh5yhzfj18frkkq6x7pjrp.png"
  />
</svelte:head>

<BackgroundGlow intensity={0.75} />

{#if activeProject}
  <ProjectDetail
    project={activeProject}
    theme={theme}
    onToggle={toggleTheme}
    onBack={closeProject}
  />
{:else}
  <main class="page">
    <HeroSection hero={data.hero} sectionId="top" theme={theme} onToggle={toggleTheme} />
    <AboutSection about={data.about} sectionId="about" />
    <SkillsSection skills={data.skills} sectionId="skills" />
    <ProjectsSection
      projects={data.projects}
      sectionId="projects"
      onOpen={openProject}
    />
    <ExperienceSection experience={data.experience} sectionId="experience" />
    <ContactSection contact={data.contact} sectionId="contact" />
    <SiteFooter />
  </main>
{/if}

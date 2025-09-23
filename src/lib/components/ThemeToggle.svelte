<script lang="ts">
  const {
    theme,
    toggle,
    variant = 'default',
  } = $props<{
    theme: 'light' | 'dark';
    toggle: () => void;
    variant?: 'default' | 'hero';
  }>();

  const label = $derived(theme === 'dark' ? 'Night' : 'Day');
  const ariaLabel = $derived(`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
</script>

<button
  type="button"
  class:dark={theme === 'dark'}
  class:hero={variant === 'hero'}
  onclick={toggle}
  aria-pressed={theme === 'dark'}
  aria-label={ariaLabel}
>
  <span class="icon" aria-hidden="true">
    {#if theme === 'dark'}
      <svg viewBox="0 0 24 24" role="presentation" focusable="false">
        <path
          d="M21 12.79A9 9 0 0 1 11.21 3c0-.26 0-.52.02-.77A9 9 0 1 0 21 12.79Z"
        />
      </svg>
    {:else}
      <svg viewBox="0 0 24 24" role="presentation" focusable="false">
        <path
          d="M12 4.5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1Zm6.36 2.14a1 1 0 0 1-.71-.29l-1.06-1.06a1 1 0 0 1 1.42-1.42l1.06 1.06a1 1 0 0 1-.71 1.71ZM20 13h-1.5a1 1 0 1 1 0-2H20a1 1 0 1 1 0 2Zm-2.35 7.5a1 1 0 0 1-.71-1.71l1.06-1.06a1 1 0 1 1 1.42 1.42l-1.06 1.06a1 1 0 0 1-.71.29ZM12 22a1 1 0 0 1-1-1v-1.5a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1ZM5.65 20.5a1 1 0 0 1-.71-.29l-1.06-1.06a1 1 0 1 1 1.42-1.42l1.06 1.06a1 1 0 0 1-.71 1.71ZM5.5 13H4a1 1 0 1 1 0-2h1.5a1 1 0 0 1 0 2Zm.15-7.64a1 1 0 0 1-.71-1.71l1.06-1.06a1 1 0 1 1 1.42 1.42L6.36 3.93a1 1 0 0 1-.71.29ZM12 18.5a6.5 6.5 0 1 1 6.5-6.5A6.51 6.51 0 0 1 12 18.5Z"
        />
      </svg>
    {/if}
  </span>

  <span class="track" aria-hidden="true">
    <span class="thumb"></span>
  </span>

  <span class="label">{label}</span>
</button>

<style>
  button {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    padding: 0.55rem 1rem 0.55rem 0.7rem;
    border-radius: 999px;
    border: 1px solid var(--chrome-border);
    background: var(--chrome-bg);
    color: var(--text-primary);
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;
    box-shadow: var(--chrome-shadow);
    backdrop-filter: blur(12px);
  }

  button:focus-visible {
    outline: none;
    border-color: var(--chrome-border-hover);
    box-shadow: var(--chrome-shadow-hover);
  }

  button.hero {
    padding: 0.45rem 0.85rem 0.45rem 0.6rem;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    background:
      linear-gradient(140deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.12));
    border-color: rgba(255, 255, 255, 0.32);
    box-shadow: none;
    backdrop-filter: blur(18px) saturate(1.2);
  }

  button.hero.dark {
    background:
      linear-gradient(145deg, rgba(36, 12, 18, 0.78), rgba(15, 5, 10, 0.92));
    border-color: rgba(255, 255, 255, 0.18);
  }

  button.hero:focus-visible {
    border-color: rgba(255, 255, 255, 0.42);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.12);
  }

  .icon {
    width: 1.1rem;
    height: 1.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--toggle-icon-color);
  }

  button.dark .icon {
    color: var(--toggle-icon-active-color);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  .track {
    position: relative;
    width: 42px;
    height: 22px;
    border-radius: 999px;
    background: var(--toggle-track-bg);
    transition: background 200ms ease;
    display: inline-flex;
    align-items: center;
    padding: 0 3px;
  }

  button.dark .track {
    background: var(--toggle-track-active);
  }

  .thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--toggle-thumb-bg);
    box-shadow: var(--toggle-thumb-shadow);
    transition: transform 220ms ease, box-shadow 220ms ease;
    transform: translateX(0);
  }

  button.dark .thumb {
    transform: translateX(18px);
    box-shadow: var(--toggle-thumb-shadow-active);
  }

  .label {
    display: inline-block;
    min-width: 3ch;
    text-align: right;
  }

  @media (max-width: 600px) {
    button {
      font-size: 0.78rem;
      gap: 0.5rem;
      padding: 0.5rem 0.85rem 0.5rem 0.65rem;
    }

    .track {
      width: 38px;
      height: 20px;
    }

    button.dark .thumb {
      transform: translateX(16px);
    }
  }
</style>

<footer class="footer">
  <a href="#top">Back to top</a>
</footer>

<style>
  .footer {
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
  }

  a {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    text-decoration: none;
    color: var(--footer-text);
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  a::after {
    content: '⤴';
    font-size: 0.85rem;
    transform: translateY(-1px);
  }
</style>

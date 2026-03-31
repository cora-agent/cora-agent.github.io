const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const copyButton = document.querySelector("#copy-citation");
const bibtexBlock = document.querySelector("#bibtex-block");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

if (copyButton && bibtexBlock) {
  copyButton.addEventListener("click", async () => {
    const originalText = copyButton.textContent;

    try {
      await navigator.clipboard.writeText(bibtexBlock.textContent.trim());
      copyButton.textContent = "Copied";
    } catch (error) {
      copyButton.textContent = "Copy failed";
    }

    window.setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1800);
  });
}

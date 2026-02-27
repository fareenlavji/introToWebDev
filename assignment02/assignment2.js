document.addEventListener("DOMContentLoaded", async function () {
   const url = "https://www.randyconnolly.com/funwebdev/3rd/api/colors/sample-colors.php";

   const article = document.querySelector(".scheme-group");
   const aside = document.querySelector("aside");
   const asideHeading = aside.querySelector("h2");
   const asideFieldset = aside.querySelector("fieldset");
   const loader = document.getElementById("loader");

   let schemes = [];

   // Modern fetch with AbortController & timeout (industry standard & error handling)
   async function fetchSchemes() {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      try {
         const resp = await fetch(url, { signal: controller.signal });
         if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
         const data = await resp.json();
         return data ?? [];
      } catch (err) {
         if (err.name !== 'AbortError') {
            console.error("Fetch error:", err);
         }
         return [];
      } finally {
         clearTimeout(timeoutId);
      }
   }

   function showLoader() {
      loader.style.display = "inline-block";
   }

   function hideLoader() {
      loader.style.display = "none";
   }

   // Create a single scheme (exact CSS classes)
   function createSchemeElement(scheme) {
      const h3 = document.createElement("h3");
      h3.textContent = scheme.title;

      const section = document.createElement("section");
      section.classList.add("scheme");

      const preview = document.createElement("div");
      preview.classList.add("preview");

      scheme.scheme.forEach((item) => {
         const colorBox = document.createElement("div");
         colorBox.classList.add("color-box");
         colorBox.style.backgroundColor = item.web;
         colorBox.setAttribute("role", "img");
         colorBox.setAttribute("aria-label", item.name);
         preview.appendChild(colorBox);
      });

      const actions = document.createElement("div");
      actions.classList.add("actions");

      const button = document.createElement("button");
      button.textContent = "View";
      button.dataset.id = scheme.id;
      button.setAttribute("aria-label", `View scheme ${scheme.title}`);

      actions.appendChild(button);

      section.appendChild(preview);
      section.appendChild(actions);

      const frag = document.createDocumentFragment();
      frag.appendChild(h3);
      frag.appendChild(section);
      return frag;
   }

   // Render with DocumentFragment + empty state
   function renderSchemes(data) {
      article.innerHTML = "";

      // persist error to user
      if (!data || data.length === 0) {
         article.innerHTML = '<p>No colour schemes are available. Please check your connection.</p>';
         return;
      }

      const frag = document.createDocumentFragment();
      data.forEach((scheme) => frag.appendChild(createSchemeElement(scheme)));
      article.appendChild(frag);
   }

   // Visual + ARIA active state management
   function updateActiveState(id) {
      const allSections = article.querySelectorAll(".scheme");
      allSections.forEach((section) => {
         section.classList.remove("is-active");
         const btn = section.querySelector("button");
         if (btn) btn.setAttribute("aria-current", "false");
      });

      const activeSection = article.querySelector(`button[data-id="${id}"]`)?.closest(".scheme");
      if (activeSection) {
         activeSection.classList.add("is-active");
         activeSection.querySelector("button").setAttribute("aria-current", "true");
      }
   }

   function renderSchemeDetails(scheme) {
      asideHeading.textContent = scheme.title;
      asideFieldset.innerHTML = "";

      scheme.scheme.forEach((item) => {
         const colorRow = document.createElement("div");
         colorRow.classList.add("colorRow");

         const detailBox = document.createElement("div");
         detailBox.classList.add("detailBox");
         detailBox.style.backgroundColor = item.web;

         const hexSpan = document.createElement("span");
         hexSpan.textContent = item.web;

         const rgbSpan = document.createElement("span");
         const { red, green, blue } = item.color;
         rgbSpan.textContent = `rgb(${red},${green},${blue})`;

         const label = document.createElement("label");
         label.textContent = item.name;

         colorRow.appendChild(detailBox);
         colorRow.appendChild(hexSpan);
         colorRow.appendChild(rgbSpan);
         colorRow.appendChild(label);
         asideFieldset.appendChild(colorRow);
      });
   }

   // Event delegation (keyboard + mouse)
   article.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (!button) return;

      const id = parseInt(button.dataset.id, 10);
      const scheme = schemes.find((s) => s.id === id);
      if (!scheme) return;

      renderSchemeDetails(scheme);
      updateActiveState(id);
   }, { passive: true }); // performance

   // Init with async/await
   async function init() {
      showLoader();
      const data = await fetchSchemes();

      if (data.length === 0) {
         article.innerHTML = '<p>Could not load colour schemes. Please refresh the page.</p>';
      } else {
         schemes = data;
         renderSchemes(schemes);
      }

      hideLoader();
   }

   init().catch(console.error); // top-level error handling
});
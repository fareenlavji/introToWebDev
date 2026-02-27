# ASSIGNMENT REQUIREMENTS
## 1. Functional Requirements
- [ ] Fetch color‑scheme data from the external API provided in `assignment2.js`.
- [ ] Examine provided HTML and remove the sample/commented‑out color‑scheme markup once dynamic generation is implemented.
- [ ] Programmatically generate all required DOM elements in the `<article>`:
    - [ ] `<h3>` for scheme names
    - [ ] `<section>` wrappers
    - [ ] `<div>` elements representing colors
    - [ ] `<button>` elements with “View” labels and `data-id` attributes
- [ ] Show the loading animation **before** the fetch begins.
- [ ] Hide the loading animation **after** data is retrieved and rendered.
- [ ] Use **event delegation** to handle all “View” button clicks from a single event listener.
- [ ] Use `.find()` to retrieve the correct scheme data using the clicked button’s `data-id`.
- [ ] Update the `<aside>` with the selected scheme details:
    - [ ] Change `<h2>` to display the scheme name
    - [ ] Clear previous `<fieldset>` content using `innerHTML = ""`
    - [ ] Insert new dynamically generated `<div>` elements for color details
## 2. Implementation Guidance (Process Requirements)
- [ ] Test the API fetch with simple logging before building UI.
- [ ] Use a function to generate markup for a single scheme in the `<article>`.
- [ ] Use `forEach()` for iteration rather than `for` loops.
- [ ] Add event delegation early and verify click detection with logging.
- [ ] Create a function to generate the scheme details in the `<aside>`.

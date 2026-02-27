# ASSIGNMENT REQUIREMENTS
## 1. Functional Requirements
- [x] Fetch color‑scheme data from the external API provided in `assignment2.js`.
- [x] Examine provided HTML and remove the sample/commented‑out color‑scheme markup once dynamic generation is implemented.
- [x] Programmatically generate all required DOM elements in the `<article>`:
    - [x] `<h3>` for scheme names
    - [x] `<section>` wrappers
    - [x] `<div>` elements representing colors
    - [x] `<button>` elements with “View” labels and `data-id` attributes
- [x] Show the loading animation **before** the fetch begins.
- [x] Hide the loading animation **after** data is retrieved and rendered.
- [x] Use **event delegation** to handle all “View” button clicks from a single event listener.
- [x] Use `.find()` to retrieve the correct scheme data using the clicked button’s `data-id`.
- [x] Update the `<aside>` with the selected scheme details:
    - [x] Change `<h2>` to display the scheme name
    - [x] Clear previous `<fieldset>` content using `innerHTML = ""`
    - [x] Insert new dynamically generated `<div>` elements for color details
## 2. Implementation Guidance (Process Requirements)
- [x] Test the API fetch with simple logging before building UI.
- [x] Use a function to generate markup for a single scheme in the `<article>`.
- [x] Use `forEach()` for iteration rather than `for` loops.
- [x] Add event delegation early and verify click detection with logging.
- [x] Create a function to generate the scheme details in the `<aside>`.

# INTRODUCTION TO JAVASCRIPT
_SYSC4504A • Laboratory 03 • Dr. Kuntz, Thomas_

## Outline
This lab works with JavaScript objects to populate a web page programmatically, rather than hard-coding that information with HTML markup.
### Starter files (as ZIP archive)
- `ArtStore.html`: HTML document marking up an artstore webpage
- 3 subdirectories: images, css (for common styling), and js (for javascript code to be written)
### Lab Tasks
The task will be to replace the markup for the three images with a JavaScript loop: 
1. Examine the data file `data.js`. It contains four arrays to programmatically generate the data rows (and replace the hard-coded markup in the supplied HTML file). 
2. In the file `functions.js` create a function called `calculateTotal()` that is passed a quantity and price and returns their product (i.e., _calculateTotal(quantity, price) = quantity * price_). 
3. Within `functions.js`, create a function called `outputCartRow()` that has the following signature:

       function outputCartRow(file, title, quantity, price, total)

   Implement the body of that function. It should use `document.write()` calls to display a row of the table using the passed data. Use the `toFixed()` method of the number variables to display two decimal places. 
5. Replace the three cart rows in the original markup with a JavaScript loop that repeatedly calls this `outputCartRow()` function. Put this loop in a file called `ArtStore.js` in the js subdirectory. Include the appropriate `<script>` tag to reference this `ArtStore.js` within the `<tbody>` element. 
6. Calculate the subtotal, tax, shipping, and grand total using JavaScript. Replace the hard-coded values in the markup with the JavaScript calculations.
    1. `TAX_AMOUNT = 10%`
    2. `if SUBTOTAL <= $1000.00 → SHIPPING_FEE = $40.00`
    3. `if SUBTOTAL > 1000.00 → SHIPPING = $0`

Test the page in the browser. Verify that the calculations work appropriately by changing the values in the `data.js` file.

## Deliverables
ZIP file containing:
- [ ] `ArtStore.html`
- [ ] `images` and `css` subdirectories
- [ ] `js` subdirectories with altered files:
    - [ ] `functions.js`
    - [ ] `ArtStore.js`
    - [ ] all other files originally included but were left unaltered

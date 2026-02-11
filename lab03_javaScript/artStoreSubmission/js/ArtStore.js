/**
 * Generates and outputs metadata for art store's shopping cart based on "data.js" arrays.
 * Parses each array to identify requested units of inventory items in the art store.
 *
 * @version February 11, 2026
 * @author Lavji, Fareen_XXXXXX543
 */
// Replaces output markup of ArtStore.html

/**
 * Renders the art store's cart based on data arrays of requested inventory item units.
 * Calculates subtotals, taxes, shipping surcharges, and grand total to render at the bottom of the cart.
 *
 * The associated columns for each line-of-sale row of the cart table are:
 *     | Image | Title | Quantity | Price | Total |
 */
function renderCart() {
    // parse "filenames" array for requested stock items
    for (let i = 0; i < filenames.length; i++) {

        // output the calculated total as line-of-sale row into the cart's table body
        outputCartRow(
            filenames[i],
            titles[i],
            quantities[i],
            prices[i],
            calculateTotal(quantities[i], prices[i]),
        );
    }
    calculateSummarizedCharges();
    outputSummarizedCharges();
}

// call to render cart calculations
renderCart();

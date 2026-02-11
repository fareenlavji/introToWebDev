/**
 * Point-of-sale (POS) functions used by the Art Store website to calculate subtotals/ totals.
 *
 * @version February 11, 2026
 * @author Lavji, Fareen_XXXXXX543
 */

// CONSTANTS
const TAX_RATE = 0.10; // percentage rate of tax surcharge
const STANDARD_SHIPPING = 40.00; // shipping rate for orders <= $1000.00

// CART'S STATE VARIABLES
let subTotal = 0.0;
let tax = 0.0;
let shippingFee = 0.0;
let grandTotal = 0.0;

/**
 * Calculates total amount for the requested quantity of a specific art piece.
 *
 * @param quantity The requested units of an item in inventory.
 * @param price The set price of the distinct item.
 *
 * @returns {number} The total amount to pay for the requested quantity of the art piece.
 */
function calculateTotal(quantity, price) {
    let total = quantity * price;
    subTotal += total;
    return total;
}

/**
 * Parses and outputs the lines-of-sale for a user's cart in the online art store.
 * The cart is a table of outputs with columns defined as:
 *      | Image | Title | Quantity | Price | Total |
 *      and each row represents a requested item from art store inventory.
 *
 * @param file Path to image file of the requested item.
 * @param title Title of the requested item.
 * @param quantity The requested units of the desired item.
 * @param price The price per unit of the requested item.
 * @param total The subtotal of the desired item per units requested.
 */
function outputCartRow(file, title, quantity, price, total) {
    document.write('<tr>');
    document.write(`<td><img src="images/${file}" alt="${title}"></td>`)
    document.write(`<td>${title}</td>`);
    document.write(`<td>${quantity}</td>`);
    document.write(`<td>$${price.toFixed(2)}</td>`);
    document.write(`<td>$${total.toFixed(2)}</td>`);
    document.write('</tr>');
}

/**
 * Uses cart's subtotal to calculate:
 *      1. Tax surcharge
 *      2. Shipping fees
 *      3. Grand Total which is the sum of taxes and shipping fees.
 */
function calculateSummarizedCharges() {
    tax = subTotal * TAX_RATE;  // 10% tax
    shippingFee = (subTotal > 1000) ? 0 : STANDARD_SHIPPING;  // free shipping if subtotal > 1000
    grandTotal = subTotal + tax + shippingFee;
}

/**
 * Appends itemized summary row to cart's table depicting subtotal, taxes, shipping, and grand total.
 */
function outputSummarizedCharges() {
    // SUBTOTAL
    document.write('<tr class="totals">');
    document.write('<td colspan="4">Subtotal</td>');
    document.write(`<td>$${subTotal.toFixed(2)}</td>`);
    document.write('</tr>');

    // TAX SURCHARGE
    document.write('<tr class="totals">');
    document.write('<td colspan="4">Tax</td>');
    document.write(`<td>$${tax.toFixed(2)}</td>`);
    document.write('</tr>');

    // SHIPPING FEES
    document.write('<tr class="totals">');
    document.write('<td colspan="4">Shipping</td>');
    document.write(`<td>$${shippingFee.toFixed(2)}</td>`);
    document.write('</tr>');


    // GRAND TOTAL
    document.write('<tr class="totals focus">');
    document.write('<td colspan="4">Grand Total</td>');
    document.write(`<td>$${grandTotal.toFixed(2)}</td>`);
    document.write('</tr>');
}
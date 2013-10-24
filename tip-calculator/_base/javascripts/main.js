
$(document).ready(function () {

    // Gets the value of an input
    // @param sel: input selector
    // @return float
    get_value = function (sel) {
        value = $(sel).val();
        return parseFloat(value);
    };

    // Gets the value of an input
    // @param sel: input selector for the result
    // @param fill: value of the result
    // @return float
    cashify = function (sel, fill) {
        return $(sel).val(fill.toFixed(2));
    };

    $("#calculate-button").click(function () {

        // ADD CODE HERE

    });

});
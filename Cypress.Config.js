const { defineconfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on,config) {
            //implemnet code listners here
        },
    },
    viewportheight: 550,
    viewportwidth: 660
});
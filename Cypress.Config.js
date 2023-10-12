const { defineconfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on,config) {
            //implemnet code listners here
        },
    },
    baseUrl: 'http://localhost:3000',
    viewportheight: 550,
    viewportwidth: 660
});
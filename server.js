const fs = require("fs");
const jsreport = require('jsreport')();
const htmlTemplate = require("./template");
const data = require("./data");

if (process.env.JSREPORT_CLI) {
  // export jsreport instance to make it possible to use jsreport-cli
  module.exports = jsreport
} else {
  jsreport.init().then(() => {
    // running
    jsreport.render({
      template: {
        content: htmlTemplate,
        engine: 'handlebars',
        recipe: 'html-to-xlsx'
      },
      data
    }).then((resp) => {
      // write report buffer to a file
      fs.writeFileSync('report.xlsx', resp.content)
    });
  }).catch((e) => {
    // error during startup
    console.error(e.stack)
    process.exit(1)
  })
}

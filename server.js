const fs = require("fs");
// const jsreport = require('jsreport')();

const jsreport = require('jsreport-core')({
  templatingEngines: { strategy: 'in-process' }
})

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
        recipe: 'html-to-xlsx',
        helpers: {
          foo: () => { return "WORLD!!!" },
          getRowspanForCosts: (costs) => {
            console.log("getRowspanForCosts() -> costs : ", costs);
            return costs.length;
          }
        },
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

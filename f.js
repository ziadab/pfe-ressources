var fs = require("fs"),
  xml2js = require("xml2js")

var parser = new xml2js.Parser()
fs.readFile(__dirname + "/exportXML.xml", function (err, data) {
  parser.parseString(data, function (err, result) {
    const f = JSON.stringify(result)
    fs.writeFileSync("thla.json", f)
    console.log(result)
    console.log("Done")
  })
})

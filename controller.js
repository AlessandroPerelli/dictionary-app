const request = require('request')

request("https://api.dictionaryapi.dev/api/v2/entries/en/hello", {json : true}, (err, res, body) => {
    if (err) {return console.log(err)}
    console.log(body)
})

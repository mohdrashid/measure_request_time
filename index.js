var rp = require('request-promise');
const URL = 'http://ptsv2.com/t/mtt2z-1522146315/post';
const BODY = {
    name:'Testing'
};
const NUMBER_OF_REQUEST = 100;

var options = {
    method: 'POST',
    uri: URL,
    body: BODY,
    json: true // Automatically stringifies the body to JSON
};

for (var i = 0; i < NUMBER_OF_REQUEST; i++) {
    const before = Date.now();
    rp(options)
        .then(function (parsedBody) {
            const after = Date.now();
            const difference = after - before;
            console.log("Execution Time",difference/1000,"s")
            console.log(parsedBody)
        })
        .catch(function (err) {
            console.log(err)
        });
}

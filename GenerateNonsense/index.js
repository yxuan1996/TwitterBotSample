//Default template
/* module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200,  Defaults to 200 
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
}; */

//We change the function so that it always returns the nonsense word "Bibble wibble wobble"
/* module.exports = async function (context, req) {
    //This line logs a message internally in azure
    context.log('Generating Nonsense...');
    context.res = {
        body: "Bibble wibble wobble"
    };
}; */

//Because Twitter does not allow us to post the exact same tweet repeatedly, we modify the function to post current time
module.exports = async function (context, req) {
    context.log('Generating Current Time...');
    let now = new Date();
    context.res = {
        body: "The date & time now is: " + now.toISOString() + "T" + now.toTimeString()
    };
};
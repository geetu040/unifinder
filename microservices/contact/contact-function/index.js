module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const email = req.query.email
    const message = req.query.message

    if (!email | !message) {
        responseMessage = "Function is Ready";
    } else {
        context.bindings.outputDocument = JSON.stringify({
            id: new Date().toISOString() + Math.random().toString().substring(2, 10),
            email: email,
            message: message
        });
        responseMessage = "Successfully Added";
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
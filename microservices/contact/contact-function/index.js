module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const email = req.body.email;
    const message = req.body.message;

    if (!email || !message) {
        context.res = {
            status: 400,
            body: "Bad Request: Email and message are required."
        };
    } else {
        context.bindings.outputDocument = JSON.stringify({
            id: new Date().toISOString() + Math.random().toString().substring(2, 10),
            email: email,
            message: message
        });

        context.res = {
            status: 201, // 201 Created status for successful creation
            body: "Successfully Added"
        };
    }
};

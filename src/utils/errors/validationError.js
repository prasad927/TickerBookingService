const {StatusCodes} = require("http-status-code");

class ValidationError extends Error {
    constructor(error){
        super();
        let explanation = [];
        error.erroros.forEach(err => {
            explanation.push(err.message);
        });

        this.name = "ValidationError";
        this.message = "Not able to validate the data sent in the request";
        this.explanation = explanation;
        this.StatusCodes = StatusCodes.BAD_REQUEST;
    }
}

module.exports = ValidationError;
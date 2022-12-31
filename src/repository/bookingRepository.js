const ValidationError = require("../utils/errors/validationError");
const AppError = require("../utils/errors/appError");
const {Booking} = require("../models/index");
const {StatusCode} = require("http-status-code");

class BookingRepository {

    constructor(){

    }

    async create(data){
        try{
            const booking = await Booking.create(data);
            return booking;
        }catch(error){
            if(error.name=="SequelizeValidationError"){
                throw new ValidationError(error)
            }
            throw new AppError("RepositoryError",
                                "Cannot create Booking",
                                "There is some error while creating booking,Please try again.",
                                StatusCode.INTERNAL_SERVER_ERROR);
        }
    }

    async update(data){
        // try{
            
        // }catch(error){
        //     if(error.name=="SequelizeValidationError"){
        //         throw new ValidationError(error)
        //     }
        //     throw new AppError("RepositoryError",
        //                         "Cannot create Booking",
        //                         "There is some error while creating booking,Please try again.",
        //                         StatusCode.INTERNAL_SERVER_ERROR);
        // }
    }
}


module.exports = BookingRepository;
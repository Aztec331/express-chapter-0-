const validateExpense = (req,res,next) =>{

    //extract fields from request body
    const { title,amount } = req.body;

    //check if required fields are missing
    if(!title || !amount){

        return res.status(400).json( {
            message:"Title and amount both required"
        } );
    }

    //next means validation passed go to controller
    next(); //go to controller

}


module.exports = validateExpense

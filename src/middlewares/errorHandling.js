const errorHandler = (err,req,res,next) =>{
    console.log(err);
    res.status(res.send({
        succes:'false',
        status: err.status,
        message: err.message ,
        stack:"dev",

    })) = 
    res.send(objet)
    next();
}
module.exports = errorHandler;
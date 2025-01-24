const pool = require('../config/dbPool'); // Import the pool

function dbMiddleware(req, res, next) {
    try{
        pool.getConnection((err, connection) => {
            if (err) {
                return res.status(500).json({
                    "error": `Database connection error: ${err.message}`
                });
            }
    
            console.log('Database connection successful');
            req.db = connection;  // Attach the connection to req
            res.on('finish', () => {
                req.db.release();  // Ensure connection is released after the request
                console.log('Connection released back to the pool');
            });
    
            next();
        });
    }catch(e){
        res.status(500).json({
            "error": `Database Error: ${e.message}`
        });
    }
    
}

module.exports = dbMiddleware;

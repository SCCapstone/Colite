// SQL Database information
module.exports = {
    HOST: "proof-of-concept-2.cg5oknnxxjpg.us-east-1.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "ColiteTech!",
    DB: "rc1",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
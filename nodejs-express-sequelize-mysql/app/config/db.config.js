module.exports = {
    HOST: "proof-of-concept-2.cg5oknnxxjpg.us-east-1.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "admin123",
    DB: "poc_md",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
const db = require("../models");
const Pole = db.poles;
const Op = db.Sequelize.Op;

// Create and Save a new Pole
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Pole
    const pole = {
        id_number: req.body.id_number,
        column_1: req.body.colum_1,
        rpm: req.body.rpm,
        wind_v: req.body.wind_v,
        wind_a: req.body.wind_a,
        wind_a2: req.body.wind_a2,
        wind_a3: req.body.wind_a3,
        wind_w: req.body.wind_w,
        pv_v: req.body.pv_v,
        pv_a: req.body.pv_a,
        untitled: req.body.untitled,
        bat_v: req.body.bat_v,
        bat_a: req.body.bat_a,
        bat_w: req.body.bat_w,
        led_1v: req.body.led_1v,
        led_1a: req.body.led_1a,
        led_1w: req.body.led_1w,
        led_2v: req.body.led_2v,
        led_2a: req.body.led_2a,
        led_2w: req.body.led_2w,
        temp_c: req.body.temp_c,
        ex_in_v: req.body.ex_in_v,
        date_mdy: req.body.date_mdy,
        time_hms: req.body.time_hms
    };

    // Save Pole in the database
    Pole.create(pole)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Pole."
            });
        });
};

// Retrieve all poles from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {
        title: {
            [Op.like]: `%${title}%`
        }
    } : null;

    Pole.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving poles."
            });
        });
};

// Find a single Pole with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Pole.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Pole with id=" + id
            });
        });
};

// Update a Pole by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Pole.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pole was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Pole with id=${id}. Maybe Pole was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pole with id=" + id
            });
        });
};

// Delete a Pole with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Pole.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pole was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Pole with id=${id}. Maybe Pole was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Pole with id=" + id
            });
        });
};

// Delete all poles from the database.
exports.deleteAll = (req, res) => {
    Pole.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} poles were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all poles."
            });
        });
};

// Find all published poles
exports.findAllPublished = (req, res) => {
    Pole.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving poles."
            });
        });
};
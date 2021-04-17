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
        pole_id: req.body.pole_id,
        load1_time1_set: req.body.load1_time1_set,
        load1_time2_set: req.body.load1_time2_set,
        load1_outmode: req.body.load1_outmode,
        load2_time1_set: req.body.load2_time1_set,
        load2_time2_set: req.body.load2_time2_set,
        load2_outmode: req.body.load2_outmode,
        scale_mode: req.body.scale_mode,
        param_setup_voltage: req.body.param_setup_voltage,
        work_v_setup: req.body.work_v_setup,
        menu_password_1: req.body.menu_password_1,
        menu_password_2: req.body.menu_password_2,
        menu_password_3: req.body.menu_password_3,
        max_bat_limit: req.body.max_bat_limit,
        over_v_comeback: req.body.over_v_comeback,
        low_v_comeback: req.body.low_v_comeback,
        low_v_limit: req.body.low_v_limit,
        mppt_close_v: req.body.mppt_close_v,
        mppt_start_v: req.body.mppt_start_v,
        longitude: req.body.longitude,
        latitude: req.body.latitude
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
    const id = req.params.pole_id;

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
    const id = req.params.pole_id;

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
    const id = req.params.pole_id;

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
// This is the structure of the pole we are accessing
module.exports = (sequelize, Sequelize) => {
    const Pole = sequelize.define("poles", {
        pole_id: {
            type: Sequelize.STRING
        },
        load1_time1_set: {
            type: Sequelize.STRING
        },
        load1_time2_set: {
            type: Sequelize.STRING
        },
        load1_outmode: {
            type: Sequelize.STRING
        },
        load2_time1_set: {
            type: Sequelize.STRING
        },
        load2_time2_set: {
            type: Sequelize.STRING
        },
        load2_outmode: {
            type: Sequelize.STRING
        },
        scale_mode: {
            type: Sequelize.STRING
        },
        param_setup_volta: {
            type: Sequelize.STRING
        },
        work_v_setup: {
            type: Sequelize.STRING
        },
        menu_password_1: {
            type: Sequelize.STRING
        },
        menu_password_2: {
            type: Sequelize.STRING
        },
        menu_password_3: {
            type: Sequelize.STRING
        },
        max_bat_limit: {
            type: Sequelize.STRING
        },
        over_v_comeback: {
            type: Sequelize.STRING
        },
        low_v_comeback: {
            type: Sequelize.STRING
        },
        low_v_limit: {
            type: Sequelize.STRING
        },
        mppt_close_v: {
            type: Sequelize.STRING
        },
        mppt_start_v: {
            type: Sequelize.STRING
        },
        longitude: {
            type: Sequelize.DECIMAL(10, 7)
        },
        latitude: {
            type: Sequelize.DECIMAL(10, 7)
        },
    });

    return Pole;
};
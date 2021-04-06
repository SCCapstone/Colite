module.exports = (sequelize, Sequelize) => {
	const Pole = sequelize.define("poles", {
		id_number: {
			type: Sequelize.STRING
		},
		column_1: {
			type: Sequelize.STRING
		},
		rpm: {
			type: Sequelize.STRING
		},
		wind_v: {
			type: Sequelize.STRING
		},
		wind_a: {
			type: Sequelize.STRING
		},
		wind_a2: {
			type: Sequelize.STRING
		},
		wind_a3: {
			type: Sequelize.STRING
		},
		wind_w: {
			type: Sequelize.STRING
		},
		pv_v: {
			type: Sequelize.STRING
		},
		pv_a: {
			type: Sequelize.STRING
		},
		untitled: {
			type: Sequelize.STRING
		},
		bat_v: {
			type: Sequelize.STRING
		},
		bat_a: {
			type: Sequelize.STRING
		},
		bat_w: {
			type: Sequelize.STRING
		},
		led_1v: {
			type: Sequelize.STRING
		},
		led_1a: {
			type: Sequelize.STRING
		},
		led_1w: {
			type: Sequelize.STRING
		},
		led_2v: {
			type: Sequelize.STRING
		},
		led_2a: {
			type: Sequelize.STRING
		},
		led_2w: {
			type: Sequelize.STRING
		},
		temp_c: {
			type: Sequelize.STRING
		},
		ex_in_v: {
			type: Sequelize.STRING
		},
		date_mdy: {
			type: Sequelize.STRING
		},
		time_hms: {
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

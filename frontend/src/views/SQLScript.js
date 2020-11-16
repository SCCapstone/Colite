    var app = new Vue({
        el: '#myapp',
        data: {
            id_number: "",
            column_1: "",
            rpm: "",
            wind_v: "",
            wind_a: "",
            wind_a2: "",
            wind_a3: "",
            wind_w: "",
            pv_v: "",
            pv_a: "",
            untitled: "",
            bat_v: "",
            bat_a: "",
            bat_w: "",
            led_1v: "",
            led_1a: "",
            led_1w: "",
            led_2v: "",
            led_2a: "",
            led_2w: "",
            temp_c: "",
            ex_in_v: "",
            date_mdy: "",
            time_hms: ""
        },
        methods: {
            allRecords: function() {
                axios.post('ajaxfile.php', {
                        request: 1
                    })
                    .then(function(response) {
                        app.users = response.data;
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            addRecord: function() {
                axios.post('ajaxfile.php', {
                        request: 2,
                        id_number: this.id_number,
                        column_1: this.column_1,
                        rpm: this.rpm,
                        wind_v: this.wind_v,
                        wind_a: this.wind_a,
                        wind_a2: this.wind_a2,
                        wind_a3: this.wind_a3,
                        wind_w: this.wind_w,
                        pv_v: this.pv_v,
                        pv_a: this.pv_a,
                        untitled: this.untitled,
                        bat_v: this.bat_v,
                        bat_a: this.bat_a,
                        bat_w: this.bat_w,
                        led_1v: this.led_1v,
                        led_1a: this.led_1a,
                        led_1w: this.led_1w,
                        led_2v: this.led_2v,
                        led_2a: this.led_2a,
                        led_2w: this.led_2w,
                        temp_c: this.temp_c,
                        ex_in_v: this.ex_in_v,
                        date_mdy: this.data_mdy,
                        time_hms: this.time_hms
                    })
                    .then(function(response) {
                        app.allRecords();

                        app.id_number = "";
                        app.column_1 = "";
                        app.rpm = "";
                        app.wind_v = "";
                        app.wind_a = "";
                        app.wind_a2 = "";
                        app.wind_a3 = "";
                        app.wind_w = "";
                        app.pv_v = "";
                        app.pv_a = "";
                        app.untitled = "";
                        app.bat_v = "";
                        app.bat_a = "";
                        app.bat_w = "";
                        app.led_1v = "";
                        app.led_1a = "";
                        app.led_1w = "";
                        app.led_2v = "";
                        app.led_2a = "";
                        app.led_2w = "";
                        app.temp_c = "";
                        app.ex_in_v = "";
                        app.date_mdy = "";
                        app.time_hms = "";

                        alert(response.data);
                    })
                    .catch(function(error) {
                        cosole.log(error);
                    })
            }
        },
        updateRecord: function(index, id) {
            var id_number = this.users[index].id_number;

            axios.post('ajaxfile.php', {
                    request: 3,
                    id_number: id_number
                })
                .then(function(response) {
                    alert(response.data);
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        deleteRecord: function(index, id_number) {
            axios.post('ajaxfile.php', {
                    request: 4,
                    id_number: id_number
                })
                .then(function(response) {
                    app.users.splice(index, 1);
                    alert(response.data);
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        created: function() {
            this.allRecords();
        }
    });
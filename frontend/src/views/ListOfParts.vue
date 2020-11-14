<script src="vue.js"></script>

<template>
  <div class="listOfParts">
    <h1>This is the parts list page</h1>
    <body>
    <div id='myapp'>
    <table border='1' width='100%' style='border-collapse: collapse;'>
      <tr>
        <th>ID Number</th>
        <th>Column_1</th>
        <th>RPMs</th>
        <th>Wind Velocity</th>
        <th>Wind Acceleration</th>
        <th>Wind Acceleration 2</th>
        <th>Wind Acceleration 3</th>
        <th>Wind Watts</th>
        <th>PV Velocity</th>
        <th>PV Acceleration</th>
        <th>Untitled</th>
        <th>Battery Voltage</th>
        <th>Battery Amps</th>
        <th>Battery Watts</th>
        <th>LED 1 Voltage</th>
        <th>LED 1 Amps</th>
        <th>LED 1 Watts</th>
        <th>LED 2 Voltage</th>
        <th>LED 2 Amps</th>
        <th>LED 2 Watts</th>
        <th>Temperature (Celsius)</th>
        <th>EX in Voltage</th>
        <th>Date (M/D/Y)</th>
        <th>Time (H:M:S)</th>
      </tr>
      <!-- Add -->
      <tr>
        <td>
          <input type="text" v-model='id_number'>
        </td>
        <td>
          <input type="text" v-model='column_1'>
        </td>
        <td>
          <input type="text" v-model='rpm'>
        </td>
        <td>
          <input type="text" v-model='wind_v'>
        </td>
        <td>
          <input type="text" v-model='wind_a'>
        </td>
        <td>
          <input type="text" v-model='wind_a2'>
        </td>
        <td>
          <input type="text" v-model='wind_a3'>
        </td>
        <td>
          <input type="text" v-model='wind_w'>
        </td>
        <td>
          <input type="text" v-model='pv_v'>
        </td>
        <td>
          <input type="text" v-model='pv_a'>
        </td>
        <td>
          <input type="text" v-model='untitled'>
        </td>
        <td>
          <input type="text" v-model='at_v'>
        </td>
        <td>
          <input type="text" v-model='bat_a'>
        </td>
        <td>
          <input type="text" v-model='bat_w'>
        </td>
        <td>
          <input type="text" v-model='led_1v'>
        </td>
        <td>
          <input type="text" v-model='led_1a'>
        </td>
        <td>
          <input type="text" v-model='led_1w'>
        </td>
        <td>
          <input type="text" v-model='led_2v'>
        </td>
        <td>
          <input type="text" v-model='led_2a'>
        </td>
        <td>
          <input type="text" v-model='led_2w'>
        </td>
        <td>
          <input type="text" v-model='temp_c'>
        </td>
        <td>
          <input type="text" v-model='ex_in_v'>
        </td>
        <td>
          <input type="text" v-model='date_mdy'>
        </td>
        <td>
          <input type="text" v-model='time_hms'>
        </td>
        <td>
        <input type="button" value='Add' @click='addRecord()'>
        </td>
    </tr>
     <!-- update/delete -->
     <tr v-for='(user,index) in users' v-bind:key="user">
      <td>
        <input type="text" v-model='user.id_number'>
      </td>
      <td>
        <input type="text" v-model='user.column_1'>
      </td>
      <td>
        <input type="text" v-model='user.rpm'>
      </td>
      <td>
        <input type="text" v-model='user.wind_v'>
      </td>
      <td>
        <input type="text" v-model='user.wind_a'>
      </td>
      <td>
        <input type="text" v-model='user.wind_a2'>
      </td>
      <td>
        <input type="text" v-model='user.wind_a3'>
      </td>
      <td>
        <input type="text" v-model='user.wind_w'>
      </td>
      <td>
        <input type="text" v-model='user.pv_v'>
      </td>
      <td>
        <input type="text" v-model='user.pv_a'>
      </td>
      <td>
        <input type="text" v-model='user.untitled'>
      </td>
      <td>
        <input type="text" v-model='user.at_v'>
      </td>
      <td>
        <input type="text" v-model='user.bat_a'>
      </td>
      <td>
        <input type="text" v-model='user.bat_w'>
      </td>
      <td>
        <input type="text" v-model='user.led_1v'>
      </td>
      <td>
        <input type="text" v-model='user.led_1a'>
      </td>
      <td>
        <input type="text" v-model='user.led_1w'>
      </td>
      <td>
        <input type="text" v-model='user.led_2v'>
      </td>
      <td>
        <input type="text" v-model='user.led_2a'>
      </td>
      <td>
        <input type="text" v-model='user.led_2w'>
      </td>
      <td>
        <input type="text" v-model='user.temp_c'>
      </td>
      <td>
        <input type="text" v-model='user.ex_in_v'>
      </td>
      <td>
        <input type="text" v-model='user.date_mdy'>
      </td>
      <td>
        <input type="text" v-model='user.time_hms'>
      </td>
      <td>
      <input type="button" value='Update' @click='updateRecord(index,user.id_number)'>
      <input type="button" value='Delete' @click='deleteRecord(index,user.id_number)'>
      </td>
    </tr>
    </table>
    </div>
    </body>
  </div>
</template>

<!-- Script -->>
<script type="text/javascript"> 
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
          allRecords: function(){
            axios.post('ajaxfile.php',{
              request: 1
            })
            .then(function(response){
            app.users = response.data;
            })
            .catch(function(error){
              console.log(error);
            });
          },
          addRecord: function(){
            axios.post('ajaxfile.php',{
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
            .then(function(response){
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
            .catch(function(error){
              cosole.log(error);
            })
          }
        },
        updateRecord: function(index,id){
          var id_number = this.users[index].id_number;

          axios.post('ajaxfile.php',{
            request: 3,
            id_number: id_number
          })
          .then(function(response){
            alert(response.data);
          })
          .catch(function(error){
            console.log(error);
          })
        },
        deleteRecord: function(index,id_number){
          axios.post('ajax.php',{
            request: 4,
            id_number: id_number
          })
          .then(function(response){
            app.users.splice(index,1);
            alert(response.data);
          })
          .catch(function(error){
            console.log(error);
          })
        }
      });
</script>


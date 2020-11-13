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
     <!-- update -->
     <tr v-for='(user) in users' v-bind:key="user">
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
      <input type="button" value='allRecords' @click='allRecords()'>
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
          }
        }
      });
</script>


<!--<script src="vue.js"></script>-->
<!--<script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->

<template>
  <div id="listOfParts" class="listOfParts">
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
    <div id="gist"></div>
    </body>
  </div>
</template>

<script>
    import postscribe from 'postscribe'
    export default {  
      name: 'Script',
      mounted: function () {
        postscribe('#gist', `<script src="SQLscript.js"><\/script>`)
      }
    }
</script>
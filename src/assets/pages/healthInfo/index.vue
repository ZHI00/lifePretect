<template>
    <div class="healthinfo_container">
      
      
      <div class="datapicker_container">
        <mu-date-picker 
        color="#44c660"
        @change="change"
        :should-disable-date="allowedDates"></mu-date-picker>
      </div>
    </div>
</template>

<script>
import { DatePicker } from 'muse-ui/lib/Picker'
export default {

    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
      allowedDates(date){
        console.log(date)
        return date.getDate() % 2 === 0
      },
      change(data){
        console.log(data)
      }
    },
    components: {
      'mu-date-picker':DatePicker,
    },
};
</script>

<style lang="scss">
.datapicker_container{
  width: 600px;
  
}

</style>
<style>
.mu-day-button-bg{
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
  margin:auto;
}
.mu-datepicker{
  width: 100%;
}
</style>


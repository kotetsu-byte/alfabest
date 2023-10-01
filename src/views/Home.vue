<template>
    <div id="container">
        
    </div>
</template>

<script>
import API from '../api';

export default {
    name: 'Home',
    components: {},
    data() {
        return {
            text: ''
        }
    },
    methods: {
        setData() {
            var config = {
                headers: {'Accept-Language': 'ru'}
            }
            API.get('/api/about_company', config)
                .then(data => {
                    console.log(data.data);
                    document.getElementById("container").innerHTML =  data.data.datas[0].text_ru;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mounted() {
        this.setData();
    }
}
</script>

<style scoped>

</style>
var app = new Vue({
    el: '#root',
    data: {
        message: ' ',
        email_array: [],
    },
    methods: {
        generaMail() {

            for ( i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => {
                        
                        this.email_array.push(response.data.response)
                       
                    })
            }

            console.log(this.email_array)

        }
    },

})

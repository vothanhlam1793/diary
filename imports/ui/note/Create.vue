<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Ghi chú mới" v-model="newInp">
                <div class="input-group-append">
                    <button class="btn btn-success" type="submit">Tạo</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newInp: ""
        }
    },
    methods: {
        handleSubmit(event) {
            Meteor.call('notes.insert', {
                note: this.newInp,
                createdAt: new Date()
            })    
            this.newInp = "";
        }
    },

}
</script>
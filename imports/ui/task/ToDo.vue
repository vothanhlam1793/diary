<template>
    <div>
        <hr>
        <div class="clearfix mt-1">
            <span class="float-left">
                {{job.content}}
            </span>
            <span class="float-right"><button class="btn btn-danger" v-on:click="deleteJob()">x</button></span>
        </div>
    </div>
</template>
<script>
export default {
    props: ["job", "jobs", "index"],
    data(){
        return {

        }
    },
    methods: {
        deleteJob(){
            this.jobs.splice(this.index, 1);
        }
    }
}
</script>
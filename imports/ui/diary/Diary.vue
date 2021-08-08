<template>
    <div class="p-2 border m-3 rounded">
        <div class="border border-success rounded pl-2 pt-3">
            <p>{{diary.title}}</p>
        </div>
        <div class="p-2">
            <div v-html="diary.content">

            </div>
        </div>
        <div>
            <router-link class="btn btn-warning" :to="'/editDiary/' + diary._id">Edit</router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ['diary'],
    data(){
        return {

        }
    }
}
</script>
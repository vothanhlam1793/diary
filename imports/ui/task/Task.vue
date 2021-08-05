<template>
    <div class="alert alert-secondary">
        <p>{{task.content}}</p>
        <p>I: {{task.important}} - U: {{task.urgent}}</p>
        <p>Est: {{task.estimate}}</p>
    </div>
</template>
<script>
export default {
    props: ['task'],
    data(){
        return {

        }
    }
}
</script>
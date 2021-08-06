<template>
    <div>
        <hr>
        <div class="m-2">
            <div class="clearfix">
                <span class="float-left">
                    {{note.note}}
                </span>
                <span class="float-right"><button class="btn btn-danger" v-on:click="deleteNote(note._id)">x</button></span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['note'],
    data(){
        return {

        }
    },
    methods: {
        deleteNote(nodeId) {
            Meteor.call('notes.delete', nodeId);
        },
        toggleChecked(){
            Meteor.call('notes.setIsChecked', this.note._id, !this.note.isChecked);
        }
    }
}
</script>
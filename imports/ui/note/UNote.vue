<template>
    <div class="m-2">
        <div class="clearfix">
            <span class="float-left">
                <input
                    type="checkbox"
                    readOnly
                    v-bind:checked="!!this.note.isChecked"
                    @click="toggleChecked"
                /> 
                {{note.note}}
            </span>
            <span class="float-right"><button class="btn btn-success" v-on:click="unDeleteNote(note._id)">v</button></span>
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
        unDeleteNote(nodeId) {
            Meteor.call('notes.undelete', nodeId);
        },
        toggleChecked(){
            Meteor.call('notes.setIsChecked', this.note._id, !this.note.isChecked);
        }
    }
}
</script>
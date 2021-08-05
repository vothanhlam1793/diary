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
            <span class="float-right"><button class="btn btn-danger" v-on:click="remove(note._id)">x</button></span>
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
        remove(nodeId) {
            Meteor.call('notes.remove', nodeId);
        },
        toggleChecked(){
            Meteor.call('notes.setIsChecked', this.note._id, !this.note.isChecked);
        }
    }
}
</script>
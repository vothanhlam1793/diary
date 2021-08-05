<template>
    <div>
        <div class="clearfix alert alert-danger">
            <span class="float-left">
                <h3>DELETE NOTE</h3>
            </span>
            <span class="float-right">
                <router-link class="btn btn-warning" to="/">Note</router-link>
            </span>
        </div>
        <div>
            <Note 
                v-for="note in notes"
                v-bind:note="note"
            />
        </div>
    </div>
</template>
<script>
import CreateNote from "./Create.vue"
import Note from "./UNote.vue"
import {NotesCollection} from "../../api/collections/Notes"
export default {
    components: {
        CreateNote,
        Note
    },
    data(){
        return {

        }
    },
    meteor: {
        $subscribe: {
            'notes': []
        },
        notes(){
            return NotesCollection.find({ delete: { $eq: true }}).fetch();
        }
    }
}
</script>
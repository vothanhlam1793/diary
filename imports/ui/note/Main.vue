<template>
    <div>
        <div class="clearfix alert alert-success">
            <span class="float-left">
                <h3 >NOTE</h3>
            </span>
            <span class="float-right">
                <router-link class="btn btn-warning" to="/undeletenote">Note đã xóa</router-link>
            </span>
        </div>
        <div>
            <Note 
                v-for="note in notes"
                v-bind:note="note"
            />
            <hr>
        </div>
        <div>
            <CreateNote/>
        </div>
    </div>
</template>
<script>
import CreateNote from "./Create.vue"
import Note from "./Note.vue"
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
            return NotesCollection.find({ delete: { $ne: true }}).fetch();
        }
    }
}
</script>
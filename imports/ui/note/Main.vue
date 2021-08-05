<template>
    <div>
        <div class="alert alert-success">
            <h3>NOTE</h3>
        </div>
        <div>
            <Note 
                v-for="note in notes"
                v-bind:note="note"
            />
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
            return NotesCollection.find({}).fetch();
        }
    }
}
</script>
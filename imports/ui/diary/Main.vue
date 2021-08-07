<template>
    <div>
        <div class="clearfix alert alert-warning">
            <span class="float-left">
                <h3 >DIARY</h3>
            </span>
            <span class="float-right">
                <router-link class="btn btn-success" to="/creatediary">Tạo</router-link>
            </span>
        </div>
        <Diary
            v-for="diary in diarys"
            v-bind:diary="diary"
        />
    </div>
</template>

<script>
import {DiaryCollection} from '../../api/collections/Diary'
// import CreateDiary from "./Create"
import Diary from "./Diary"
export default {
    components: {
        // CreateDiary,
        Diary
    },
    data(){    
        return {

        }
    },
    mounted(){
        console.log(this.diarys);
    },
    meteor: {
        $subscribe: {
            'diarys': []
        },
        diarys(){
            return DiaryCollection.find({}).fetch();
        }
    }
}
</script>
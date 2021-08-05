<template>
    <div>
        <div class="clearfix alert alert-primary">
            <span class="float-left">
                <h3 >TASK</h3>
            </span>
            <span class="float-right">
                <router-link class="btn btn-success" to="/createtask">Tạo</router-link>
            </span>
        </div>
        <div>
            <Task
                v-for="task in tasks"
                v-bind:task="task"
            />
        </div>
    </div>
</template>
<script>
import Task from './Task.vue'
import {TasksCollection} from "../../api/collections/Tasks"
export default {
    components: {
        Task
    },
    data(){
        return {

        }
    },
    meteor: {
        $subscribe: {
            'tasks': []
        },
        tasks(){
            return TasksCollection.find({}).fetch();
        }
    }
}
</script>
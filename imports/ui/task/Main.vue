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
            <h2>Hôm nay</h2>
            <Task
                v-for="task in tasks"
                v-bind:task="task"
            />
        </div>
        <div>
            <h2>Ngày mai</h2>
            <Task
                v-for="task in tomorrow"
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
            today: [],
            tomorrow: [],
            next: []
        }
    },
    created() {
        console.log(this.tasks)
        d = new Date();
        d1 = d.toISOString().split("T")[0];
        d2 = (new Date(d.getTime() + 86400*1000)).toISOString().split("T")[0]
        this.today = this.tasks.filter(function(e){
            return e.deadline == d1;
        })
        this.tomorrow = this.tasks.filter(function(e){
            return e.deadline == d2;
        })
        this.next = this.tasks.filter(function(e){
            return (e.deadline != d1)&&(e.deadline != d2);
        })
        console.log(this.tasks);
    },
    meteor: {
        $subscribe: {
            'tasks': []
        },
        tasks(){
            return TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch();
        }
    }
}
</script>
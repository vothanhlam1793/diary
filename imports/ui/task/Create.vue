<template>
    <div>
        <div class="alert alert-success">
            <h4>Tạo công việc</h4>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="content">Nội dung:</label>
                <input type="text" class="form-control" placeholder="Mình muốn làm" id="content" v-model="content">
            </div>
            <div class="form-group">
                <label for="deadline">Deadline:</label>
                <input type="date" v-model="deadline" id="deadline" class="form-control">
            </div>
            <div class="form-group">
                <label for="estimate">Dự kiến:</label>
                <select class="form-control" v-model="estimate">
                    <option value="15">15 phút</option>
                    <option value="30" selected>30 phút</option>
                    <option value="60">60 phút</option>
                    <option value="120">120 phút</option>
                </select>
            </div>
            <div class="form-group">
                <table class="table ">
                    <tr>
                        <td>
                            <div>
                                <input type="checkbox" id="importantCheck" name="important"
                                    v-model="important"
                                    true-value="true"
                                    false-value="false"
                                >
                                <label for="importantCheck">Quan trọng</label>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="checkbox" id="urgentCheck" name="urgent"
                                    v-model="urgent"
                                    true-value="true"
                                    false-value="false"                                
                                >
                                <label for="urgentCheck">Khẩn cấp</label>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="form-group text-center">
                <button class="btn btn-success">Tạo</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            content: "",
            estimate: 30,
            important: "false",
            urgent: "false",
            deadline: (new Date((new Date()).getTime() + 86400*1000)).toISOString().split("T")[0]
        }
    },
    methods: {
        handleSubmit(event){
            console.log("Create Task")
            if(this.content == ""){
                alert("Nhập nội dung công việc nhé!");
                return;
            }
            var obj = {
                content: this.content,
                important: this.important,
                urgent: this.urgent,
                deadline: this.deadline,
                estimate: this.estimate
            }
            console.log(obj);
            Meteor.call("tasks.insert", obj, function(e,s){
                location.href = "/#/task"
            });

        }
    }
}
</script>
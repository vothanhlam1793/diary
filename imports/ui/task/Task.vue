<template>
    <div :class="getColor()">
        <table class="">
            <tr>
                <td>Gợi ý: {{getRequest()}}</td>    
            </tr>
            <tr>
                <td>
                    <p>{{task.content}}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>Dự kiến: {{task.estimate}}</p>
                </td>
                <td>
                    <p>Ngày cuối: {{task.deadline}}</p>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props: ['task'],
    data(){
        return {
            point: 0
        }
    },
    created(){
            if((this.task.important == "true") && (this.task.urgent == "true")) {
                this.point = 3;
            } else if((this.task.important == "true") && (this.task.urgent == "false")) {
                this.point = 2;
            } else if((this.task.important == false) && (this.task.urgent == true)) {
                this.point = 1;
            } else {
                this.point = 0;
            }
    },
    methods: {
        getRequest(){
            switch(this.point){
                case 3: {
                    return "Làm ngay"
                } break;
                case 2: {
                    return "Lên lịch"
                } break;
                case 1: {
                    return "Xử lý - Ủy quyền"
                } break;
                case 0: {
                    return "Loại nó đi"
                } break;
                default: {
                    return "Không biết"
                }break;
            }
        },
        getColor(){
            switch(this.point){
                case 3: {
                    return "alert alert-danger"
                } break;
                case 2: {
                    return "alert alert-warning"
                } break;
                case 1: {
                    return "alert alert-primary"
                } break;
                case 0: {
                    return "alert alert-success"
                } break;
                default: {

                }break;
            }
        }
    }
}

// switch(this.point){
//                 case 3: {

//                 } break;
//                 case 2: {

//                 } break;
//                 case 1: {

//                 } break;
//                 case 0: {

//                 } break;
//                 default: {

//                 }break;
//             }
</script>


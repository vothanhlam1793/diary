<template>
    <div>
        <div class="form-group">
            <label for="title">Tiêu đề</label>
            <input class="form-control" id="title" v-model="title">
        </div>
        <form name="compForm" method="post" action="sample.php" onsubmit="if(validateMode()){this.myDoc.value=oDoc.innerHTML;return true;}return false;">
            <input type="hidden" name="myDoc" />
            <div id="toolBar2">
                <img class="intLink" title="Bold" onclick="formatDoc('bold');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAInhI+pa+H9mJy0LhdgtrxzDG5WGFVk6aXqyk6Y9kXvKKNuLbb6zgMFADs=" />
                <img class="intLink" title="Italic" onclick="formatDoc('italic');" src="data:image/gif;base64,R0lGODlhFgAWAKEDAAAAAF9vj5WIbf///yH5BAEAAAMALAAAAAAWABYAAAIjnI+py+0Po5x0gXvruEKHrF2BB1YiCWgbMFIYpsbyTNd2UwAAOw==" />
                <img class="intLink" title="Underline" onclick="formatDoc('underline');" src="data:image/gif;base64,R0lGODlhFgAWAKECAAAAAF9vj////////yH5BAEAAAIALAAAAAAWABYAAAIrlI+py+0Po5zUgAsEzvEeL4Ea15EiJJ5PSqJmuwKBEKgxVuXWtun+DwxCCgA7" />
                <img class="intLink" title="Left align" onclick="formatDoc('justifyleft');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JMGELkGYxo+qzl4nKyXAAAOw==" />
                <img class="intLink" title="Center align" onclick="formatDoc('justifycenter');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIfhI+py+0Po5y02ouz3jL4D4JOGI7kaZ5Bqn4sycVbAQA7" />
                <img class="intLink" title="Right align" onclick="formatDoc('justifyright');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JQGDLkGYxouqzl43JyVgAAOw==" />
                <img
                    class="intLink"
                    title="Numbered list"
                    onclick="formatDoc('insertorderedlist');"
                    src="data:image/gif;base64,R0lGODlhFgAWAMIGAAAAADljwliE35GjuaezxtHa7P///////yH5BAEAAAcALAAAAAAWABYAAAM2eLrc/jDKSespwjoRFvggCBUBoTFBeq6QIAysQnRHaEOzyaZ07Lu9lUBnC0UGQU1K52s6n5oEADs="
                />
                <img
                    class="intLink"
                    title="Dotted list"
                    onclick="formatDoc('insertunorderedlist');"
                    src="data:image/gif;base64,R0lGODlhFgAWAMIGAAAAAB1ChF9vj1iE33mOrqezxv///////yH5BAEAAAcALAAAAAAWABYAAAMyeLrc/jDKSesppNhGRlBAKIZRERBbqm6YtnbfMY7lud64UwiuKnigGQliQuWOyKQykgAAOw=="
                />
                <img
                    class="intLink"
                    title="Quote"
                    onclick="formatDoc('formatblock','blockquote');"
                    src="data:image/gif;base64,R0lGODlhFgAWAIQXAC1NqjFRjkBgmT9nqUJnsk9xrFJ7u2R9qmKBt1iGzHmOrm6Sz4OXw3Odz4Cl2ZSnw6KxyqO306K63bG70bTB0rDI3bvI4P///////////////////////////////////yH5BAEKAB8ALAAAAAAWABYAAAVP4CeOZGmeaKqubEs2CekkErvEI1zZuOgYFlakECEZFi0GgTGKEBATFmJAVXweVOoKEQgABB9IQDCmrLpjETrQQlhHjINrTq/b7/i8fp8PAQA7"
                />
                <img
                    class="intLink"
                    title="Delete indentation"
                    onclick="formatDoc('outdent');"
                    src="data:image/gif;base64,R0lGODlhFgAWAMIHAAAAADljwliE35GjuaezxtDV3NHa7P///yH5BAEAAAcALAAAAAAWABYAAAM2eLrc/jDKCQG9F2i7u8agQgyK1z2EIBil+TWqEMxhMczsYVJ3e4ahk+sFnAgtxSQDqWw6n5cEADs="
                />
                <img
                    class="intLink"
                    title="Add indentation"
                    onclick="formatDoc('indent');"
                    src="data:image/gif;base64,R0lGODlhFgAWAOMIAAAAADljwl9vj1iE35GjuaezxtDV3NHa7P///////////////////////////////yH5BAEAAAgALAAAAAAWABYAAAQ7EMlJq704650B/x8gemMpgugwHJNZXodKsO5oqUOgo5KhBwWESyMQsCRDHu9VOyk5TM9zSpFSr9gsJwIAOw=="
                />
                <img
                    class="intLink"
                    title="Hyperlink"
                    onclick="var sLnk=prompt('Write the URL here','http:\/\/');if(sLnk&&sLnk!=''&&sLnk!='http://'){formatDoc('createlink',sLnk)}"
                    src="data:image/gif;base64,R0lGODlhFgAWAOMKAB1ChDRLY19vj3mOrpGjuaezxrCztb/I19Ha7Pv8/f///////////////////////yH5BAEKAA8ALAAAAAAWABYAAARY8MlJq7046827/2BYIQVhHg9pEgVGIklyDEUBy/RlE4FQF4dCj2AQXAiJQDCWQCAEBwIioEMQBgSAFhDAGghGi9XgHAhMNoSZgJkJei33UESv2+/4vD4TAQA7"
                />
            </div>
            <div id="textBox" contenteditable="true" class="form-control" ></div>
            <div v-show="false">
                <p id="editMode"><input type="checkbox" name="switchMode" id="switchBox" onchange="setDocMode(this.checked);" /> <label for="switchBox">Show HTML</label></p>
            </div>
        </form>
        <div class="form-group text-center mt-2">
            <button class="btn btn-primary" @click="saveContent()">Lưu lại</button>
        </div>
    </div>
</template>
<script>
import {DiaryCollection} from '../../api/collections/Diary'
export default {
    components: {

    },
    data(){
        return {
            title: "",
            content: ""
        }
    },
    methods: {
        saveContent(){
            var obj = {
                title: this.title,
                content: jQuery('#textBox').html(),
                // createdAt: new Date(),
                editedAt: new Date(),
            }
            Meteor.call("diary.update", this.diarys[0]._id, obj, function(e,s){
                location.href = "/#/diary"
            });
        }
    },
    mounted(){
        this.title = this.diarys[0].title;
        jQuery('#textBox').html(this.diarys[0].content);
    },
    meteor: {
        $subscribe: {
            'diarys': []
        },
        diarys(){
            return DiaryCollection.find({_id: this.$route.params.id}).fetch();
        }
    }
}
</script>
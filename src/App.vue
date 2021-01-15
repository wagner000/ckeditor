<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <ckeditor  @ready="onReady" :editor="editor" v-model="editorData" 
        :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from 'ckeditor5-build-decoupled-document-base64-imageresize'
export default {
  name: 'App',
  data() {
    return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    
                }
            };
  },
  methods: {
          onReady( editor )  {
                // Insert the toolbar before the editable area.
                editor.ui.getEditableElement().parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                );
            }
        },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

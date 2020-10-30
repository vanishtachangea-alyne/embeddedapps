import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    addTodoToList() {
      vueApp.todos.push({ text: this.get("newText") });
      this.set("newText", "");
    },
  },
});

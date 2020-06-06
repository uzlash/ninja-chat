<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <div class="field">
        <label for="new-message">New Message (press enter to add): </label>
        <input type="text" name="new-message" v-model="newMessage" />
        <i class="material-icons teal-text send" @click="addMessage">send</i>
      </div>

      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection("messages")
          .add({
            name: this.name,
            content: this.newMessage,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "Please input a message";
      }
    }
  }
};
</script>

<style>
.field {
  position: relative;
}
.field i {
  position: absolute;
  right: 0;
  bottom: 16px;
  font-size: 2em;
  cursor: pointer;
}
</style>

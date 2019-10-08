<template>
  <div class="contact-form">
    <div class="container">
      <h3>Enjoy Sex Again!</h3>
      <h4>Contact Us Today! What Are You Waiting For?</h4>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              type="text"
              class="material-icons"
              clearable
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              label="Phone"
              type="tel"
              v-mask="'(###)-###-####'"
              masked="false"
              clearable
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              type="text"
              clearable
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-menu v-model="datePicker" :close-on-content-click="false">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="dateFormatted"
                  :rules="dateRules"
                  label="Preferred Date"
                  v-on="on"
                  clearable
                  outlined
                  required
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" @change="datePicker = false"></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>

        <v-row justify="end">
          <v-btn class="mr-3" dark>Submit</v-btn>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import moment from "moment";

export default {
  name: "global-contact",
  directives: { mask },
  data() {
    return {
      valid: true,

      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 100) || "Name must be less than 100 characters"
      ],
      phone: "",
      phoneRules: [
        v => !!v || "Phone number is required",
        v => (v && v.length == 14) || "Phone number must be valid"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      date: "",
      datePicker: false,
      dateRules: [
        v => (v && v.length >= 15) || "Please select date from calendar"
      ]
    };
  },
  methods: {},
  computed: {
    dateFormatted() {
      return this.date ? moment(this.date).format("dddd, MMMM Do") : "";
    }
  }
};
</script>

<style lang="scss">
.contact-form {
}
</style>
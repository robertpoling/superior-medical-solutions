<template>
  <div class="contact-form">
    <div class="container">
      <div class="contact-form--title">
        <h3>Enjoy Sex Again!</h3>
        <h4>Contact Us Today! What Are You Waiting For?</h4>
      </div>
      <v-form ref="form" v-model="valid">
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              type="text"
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
                  v-model="dateDisplayed"
                  :rules="dateRules"
                  label="Preferred Date"
                  v-on="on"
                  clearable
                  outlined
                  required
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" class="blue darken-4" @change="datePicker = false"></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>

        <v-row justify="end">
          <v-col v-if="success" class="green darken-2 white--text">
            <p class="pa-3 ma-0 text-center">Thank you. Your information has been submitted</p>
          </v-col>

          <v-btn dark :disabled="!valid" class="mr-4" @click="submitForm">Submit</v-btn>

          <v-snackbar v-model="snackbar">
            Thank you. Your information has been submitted
            <v-btn class="green darken-2 white--text" @click="snackbar = false">Close</v-btn>
          </v-snackbar>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import moment from "moment";
import axios from "axios";

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
        v => (v && v.length >= 10) || "Please select date from calendar"
      ],
      snackbar: false,
      success: false
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    submitForm() {
      return axios({
        method: "post",
        url: "https://api.airtable.com/v0/" + process.env.GRIDSOME_AT_BASE,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.GRIDSOME_AT_KEY
        },
        data: {
          fields: {
            Name: this.name,
            Phone: this.phone,
            Email: this.email,
            "Preferred Date": this.dateSubmitted
          }
        }
      })
        .then(response => {
          console.log(response);
          if (this.$refs.form.validate()) {
            this.snackbar = true;
            this.success = true;
            this.$refs.form.reset();
          }
        })
        .catch(error => {
          console.log("SUBMIT ERROR: " + error);
        });
    }
  },
  computed: {
    dateDisplayed: {
      get: function() {
        return this.date ? moment(this.date).format("dddd, MMMM Do") : "";
      },
      set: function() {
        return "";
      }
    },
    dateSubmitted() {
      return moment(this.date)
        .format("MMMM D, YYYY")
        .toString();
    }
  },
  mounted() {
    console.log("LOOK!: " + this.dateDisplayed);
  }
};
</script>

<style lang="scss">
.contact-form {
  .container {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    background: white;
    padding: 2rem 2rem;
  }
  &--title {
    text-align: center;
    h3 {
      font-size: 2rem;
      text-transform: uppercase;
    }
    h4 {
      padding-bottom: 1rem;
    }
  }
  .v-messages__message {
    font-weight: bold;
    color: #d32f2f;
  }
}
</style>
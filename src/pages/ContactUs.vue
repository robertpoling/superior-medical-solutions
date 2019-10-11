<template>
  <Layout>
    <Parallax pText="Contact Us">
      <g-image id="contact" src="../assets/images/contact-us/man-fishing.jpg" />
    </Parallax>

    <v-row>
      <v-col cols="12" md="3">
        <p>
          <span class="bold">Superior Medical Solutions</span>
          <br />5730 Ward Road Suite #201
          Arvada, CO 80002
        </p>

        <p class="bold">Please contact us with any questions or concerns.</p>
        <p class="bold">
          You can reach us at:
          <br />
          <a href="tel:303-424-8988">(303) 424-8988</a>
          <br />
          <a href="mailto:admin@smscolorado.com">admin@smscolorado.com</a>
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <v-responsive :aspect-ratio="16/9" class="contact--map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.292110343533!2d-105.13962668455147!3d39.800438979441545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8f578bf68377%3A0x9a49a8ebcb72df62!2sSuperior%20Medical%20Solutions!5e0!3m2!1sen!2sus!4v1570750128062!5m2!1sen!2sus"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
        </v-responsive>
      </v-col>

      <v-col cols="12" md="3">
        <p>
          <span class="bold">Office Hours:</span>
          <br />9:00am - 5:00pm
          <br />
          <br />*Weekdays, Saturday, and evening hours are available by special appointment.
        </p>

        <p
          class="bold red--text text--darken-2"
        >Mention you found us on the web and receive 10% off your initial office visit!</p>
      </v-col>
    </v-row>
  </Layout>
</template>

<script>
import Parallax from "../components/Parallax";

export default {
  name: "contact-us",
  metaInfo: {
    title: "Contact Us"
  },
  components: {
    Parallax
  }
};
</script>

<style lang="scss">
.v-responsive.contact--map {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  iframe {
    width: 100%;
  }
}
</style>

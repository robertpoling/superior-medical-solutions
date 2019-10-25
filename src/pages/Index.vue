<template>
  <Layout>
    <div class="home--intro">
      <p class="text-center">
        Superior Medical Solutions improves your sexual health. At Superior Medical Solutions, a trusted local business, we offer our patients a personalized treatment plan, confidentiality, and a
        <span
          class="uppercase red--text text--darken-2"
        >100% iron-clad guarantee!</span>
      </p>
      <p class="uppercase text-center py-4">Success on your first visit or it is free!</p>
    </div>
    <img src="@/assets/images/home/wife-hugging-husband.jpg" />
    <v-row class="home--cta-buttons">
      <v-col cols="12" md="6" sm="12" v-for="item in ctaButtons" :key="item.text">
        <a :href="item.route" @click="$vuetify.goTo(item.route)">
          <h2 class="bg-blue text-center pa-5">{{ item.text }}</h2>
        </a>
      </v-col>
    </v-row>

    <v-row class="home--cta-blocks pt-10">
      <v-col cols="12" lg="3" v-for="item in ctaBlocks" :key="item.text">
        <v-card>
          <v-icon>{{ item.icon }}</v-icon>
          <p>{{ item.title }}</p>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <Parallax pText="Specializing in Erectile Treatments">
      <g-image id="about-us" src="@/assets/images/home/golfer-hitting-golf.jpg" />
    </Parallax>
    <v-row>
      <v-col>
        <p>Superior Medical Solutions specializes in non-surgical treatments for erectile dysfunction. Getting an erection, keeping an erection, and premature ejaculation are some of the most common issues we see in our office. We use a variety of FDA approved medications tailored to suit your individual needs.</p>
        <p>We have a reputation for successfully treating those who have had no success with other methods. Our treatments are able to help those with medical conditions such as heart disease, diabetes, high blood pressure, prostate cancer, and many others.</p>
        <p>Choosing a healthcare provider is one of the most important decisions you can make. You want someone who is caring, informed, and accessible. Someone willing to take the time to go over all of your options and treat you as a person, not just a patient.</p>
      </v-col>
    </v-row>
  </Layout>
</template>

<script>
import Parallax from "@/components/Parallax";
export default {
  name: "home",
  metaInfo: {
    title: "Superior Medical Solutions"
  },
  components: {
    Parallax
  },
  data() {
    return {
      ctaButtons: [
        { text: "About Us", route: "#about-us" },
        { text: "Understand", route: "/what-we-treat/#understanding" },
        { text: "FAQs", route: "/we-can-help/#faqs" },
        { text: "Contact", route: "/contact-us/#contact" }
      ],
      ctaBlocks: [
        {
          icon: "local_cafe",
          title: "Relaxed Environment",
          text:
            "We make a casual atmosphere a priority. We know that this can be an uncomfortable topic for many to pursue, we're here to help you relax!"
        },
        {
          icon: "lock",
          title: "Privacy Protection",
          text:
            "We pride ourselves on our patient service. From our individual waiting rooms to our Colorado licensed physicians, you will be treated privately and professionally."
        },
        {
          icon: "done_outline",
          title: "Effective Treatments",
          text:
            "We offer a 100% guarantee to our patients. We promise success on your first visit or it's FREE! We believe in our treatments, and you should too!"
        },
        {
          icon: "person",
          title: "Dedicated to YOU",
          text:
            "Our doctors work with you to determine which treatment or combination of treatments will work best for you. All of our treatments are personalized to you!"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.home {
  &--intro {
    font-size: 1.396rem;
    font-weight: bold;
  }
  &--cta-buttons {
    div {
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.5;
      }
      a {
        text-decoration: none;
      }
      h2 {
        cursor: pointer;
      }
    }
  }
  &--cta-blocks {
    text-align: center;
    p {
      padding-top: 1rem;
      font-weight: bold;
    }
    i {
      color: white !important;
      background: var(--blue);
      padding: 10px;
      border-radius: 100%;
    }
  }
}
</style>

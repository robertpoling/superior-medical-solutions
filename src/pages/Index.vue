<template>
  <Layout>
    <div class="home--intro">
      <p>
        Superior Medical Solutions improves your sexual health. At Superior Medical Solutions, a trusted local business, we offer our patients a personalized treatment plan, confidentiality, and a
        <span
          class="uppercase red--text text--lighten-1"
        >100% iron-clad guarantee!</span>
      </p>
      <p class="uppercase text-center py-4">Success on your first visit or it is free!</p>
    </div>
    <g-image src="@/assets/images/home/wife-hugging-husband.jpg" />
    <v-row class="home--cta-buttons">
      <v-col v-for="item in ctaButtons" :key="item.text">
        <a :href="item.route">
          <h2 class="bg-blue text-center">{{ item.text }}</h2>
        </a>
      </v-col>
    </v-row>

    <v-row class="home--cta-blocks">
      <v-col v-for="item in ctaBlocks" :key="item.text">
        <v-card>
          <v-icon>{{ item.icon }}</v-icon>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <hr />
    <h1>Specializing in Erectile Treatments</h1>
    <g-image src="@/assets/images/home/golfer-hitting-golf.jpg" />

    <p>Superior Medical Solutions specializes in non-surgical treatments for erectile dysfunction. Getting an erection, keeping an erection, and premature ejaculation are some of the most common issues we see in our office. We use a variety of FDA approved medications tailored to suit your individual needs.</p>

    <p>We have a reputation for successfully treating those who have had no success with other methods. Our treatments are able to help those with medical conditions such as heart disease, diabetes, high blood pressure, prostate cancer, and many others.</p>

    <p>Choosing a healthcare provider is one of the most important decisions you can make. You want someone who is caring, informed, and accessible. Someone willing to take the time to go over all of your options and treat you as a person, not just a patient.</p>
  </Layout>
</template>

<script>
export default {
  name: "home",
  metaInfo: {
    title: "home"
  },
  data() {
    return {
      ctaButtons: [
        { text: "About Us", route: "/" },
        { text: "Understand", route: "/" },
        { text: "FAQs", route: "/" },
        { text: "Specials", route: "/" }
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
    button {
      background: blue;
    }
  }
}
</style>

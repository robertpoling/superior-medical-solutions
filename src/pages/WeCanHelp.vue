<template>
  <Layout>
    <Parallax pText="Romance & Intimacy">
      <g-image src="@/assets/images/we-can-help/womens-underwear-on-bed.jpg" />
    </Parallax>

    <h2>Reclaim Your Sexual Health and Strengthen Your Relationship</h2>

    <p>Erectile Dysfunction (ED) is a man's condition, but a couple's concern. ED can be a pretty heavy topic. At times one that can be embarrassing to discuss with your partner. Some men that we treat choose to keep the treatment private and never share any of the information. There is nothing wrong with this approach, and we will work diligently to ensure your privacy is honored.</p>

    <p>Talking about ED with your partner is very important. In fact, your partner may be waiting for you to bring up the subject. As with any part of a relationship, communication is key.</p>

    <p>"Women internalize things -- they tend to blame themselves first, thinking it's because they have done something wrong, or that they are no longer attractive to their partner. In fact, the first thing a woman thinks when a man can't get an erection is that it's her fault, and nothing could be further from the truth," says Andrew McCullough, MD, director of sexual health and male infertility at NYU Medical Center in New York City.</p>

    <p>Your partner will most likely be more supportive than you ever thought. The common goal is that you both want a happy and healthy relationship and intimacy is a key part of that. Create a strategy together. Some couples even join their men for the appointment at Superior Medical Solutions.</p>

    <p>
      <span class="bold">ED is not a condition you have to live with!</span> It is usually fully treatable. Let Superior Medical Solutions help you improve your sex life and create happy healthy harmony within your relationship.
    </p>

    <p>With your partner's support, you can realize that sexual intimacy is an important part of your life together, and see your erectile dysfunction and/or premature ejaculation as a physical problem, not a sexual or masculine shortcoming. This will make it easier for you to do something about it - together. And that's definitely something worth talking about.</p>

    <p>If you do not have a partner, you may choose to have your problem treated before it progresses any further. Also, knowing that you have solved your problem will often give you the confidence to find a partner.</p>

    <Parallax pText="Frequently Asked Questions">
      <g-image id="faqs" src="@/assets/images/we-can-help/lovers-kiss.jpg" />
    </Parallax>

    <v-expansion-panels accodion>
      <v-expansion-panel v-for="faq in faqs" :key="faq.title">
        <v-expansion-panel-header class="bold">{{faq.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>{{ faq.text}}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <Parallax pText="Notes From Actual SMS Customers">
      <g-image src="@/assets/images/we-can-help/holding-hands.jpg" />
    </Parallax>

    <v-row>
      <v-col cols="12">
        <p>Thanks to all the folks at Superior Medical who have finally provided a wonderful treatment for my premature ejaculation problems. Since coming to your clinic, my whole life has changed for the better!</p>
        <p>For the past 20 years, I have always had problems with premature ejaculation. Not only was this a frustrating situation in itself, but it also affected all aspects of my life. It hurt my self-confidence and living with this situation was a daily embarrassment. Each time I became intimate with a new partner, I had to relive the same embarrassing situation. How would I break the news? How would she react when she knew I wouldn’t be able to satisfy her? Why me? A million worries were always on my mind and moving toward an intimate relationship was an extremely stressful situation.</p>
        <p>All told, this condition destroyed five serious relationships. I was depressed and at the point of giving up on female relationships forever. Finding a cure became the main focus of my life.</p>
        <p>I saw four different doctors and psychologists and received various prescriptions ranging from Viagra to anti-depressants. Over the years, I’ve spent hundreds of dollars trying a myriad of lotions, creams, and all sorts of natural and herbal remedies. If it was advertised in a magazine, I tried it. Nothing worked!</p>
        <p>I am so thankful I saw your ad and finally found a clinic that specializes in erectile dysfunction. Had I known that my other doctors were clueless about the true causes of ED and premature ejaculation, I would have saved a huge amount of time and money. I am still amazed that within an hour the doctor was able to diagnose and prescribe the correct medication to fix my problem.</p>
        <p>I am now in a wonderfully romantic relationship. Our intimate sessions go well over an hour and I am confident that I am pleasing my partner. This change has lifted an enormous weight off my shoulders. I am so glad I found your specialists who knew how to treat my problem.</p>
        <p>
          Thanks again,
          <br />Chris
        </p>
        <hr />
      </v-col>
      <v-col cols="12">
        <p>I’m sending you this short note to let you know how happy I am with the results of my ED medication.</p>
        <p>Having diabetes, I was no longer able to achieve a firm enough erection for any length of time to satisfy me or my wife. Since coming to Superior Medical Solutions, I am now able to achieve a firm erection for up to an hour and a half. I feel like a kid again, and my wife could not be happier! I have regained my confidence and our sex life is tremendous. I am very satisfied with the medicine that was prescribed and am impressed by your professional and confidential service.</p>
        <p>
          Thank you,
          <br />Michael
        </p>
        <hr />
      </v-col>
      <v-col cols="12">
        <p>I’ve been using the prescription medication for over a year now, and I just wanted to let you know what a difference this has made in my life. For the past eight years, I had been suffering from ED. My relationship with my wife was on rocky grounds, and I was a bit depressed over my inability to sustain an erection. Since I began using this medicine, my relationship with my wife changed almost overnight. We now have an active love life (about 5 times a week) and I no longer have to worry about whether or not I am pleasing my wife. I never realized that failing to treat ED could cause so many problems in my life.</p>
        <p>
          Sincerely,
          <br />Lee
        </p>
      </v-col>
    </v-row>
  </Layout>
</template>

<script>
import Parallax from "../components/Parallax";

export default {
  name: "we-can-help",
  metaInfo: {
    title: "We Can Help"
  },
  components: {
    Parallax
  },
  data() {
    return {
      faqs: [
        {
          title: "What Is Erectile Dysfunction?",
          text:
            "Erectile dysfunction, commonly referred to as ED, is the inability to achieve and sustain an erection suitable for sexual intercourse."
        },
        {
          title: "Is Erectile Dysfunction a Normal Part of Aging?",
          text:
            "No. ED doesn't have to be a part of getting older. While it is true that older men may need more stimulation (such as stroking and touching) to achieve an erection, they should still be able to get an erection and enjoy sex."
        },
        {
          title: "Can Erectile Dysfunction Be Prevented?",
          text:
            "By reducing your risk factors for heart disease, such as getting to or maintaining a desirable weight, eating a healthy diet, quitting smoking, drinking less or no alcohol, keeping your cholesterol and blood pressure in check, and getting more physical activity, you will also be reducing your risk factors for ED."
        },
        {
          title: "How Is Erectile Dysfunction Treated?",
          text:
            "There are many different ways ED can be treated. At Superior Medical Solutions we use penile injections."
        },
        {
          title: "What Should I Expect During My Appointment?",
          text: "Enter your answer here"
        },
        {
          title: "How Effective Is This Treatment?",
          text: "Enter your answer here"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
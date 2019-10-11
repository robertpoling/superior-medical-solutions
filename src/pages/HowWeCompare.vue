<template>
  <Layout>
    <Parallax pText="How Do We Compare?">
      <g-image src="@/assets/images/how-we-compare/healthy-couple.jpg" />
    </Parallax>

    <p
      class="bold pb-5"
    >We know that you have other options than Superior Medical Solutions, which is why we strive to gain your trust and business by setting ourselves apart from other popular rocky mountain options. See how we compare and work to exceed your expectations.</p>

    <v-simple-table>
      <thead>
        <tr>
          <th class="title"></th>
          <th class="text-center superior">
            <g-image src="../assets/images/how-we-compare/superior.png" />
          </th>
          <th></th>
          <th class="text-center other">Other Rocky Mountain Providers</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="compare in compared" :key="compare.title">
          <td class="bold text-blue">{{ compare.title }}</td>
          <td>{{ compare.superior }}</td>
          <td class="yes">
            <v-icon class="green--text">check_circle</v-icon>
          </td>
          <td>{{ compare.other }}</td>
          <td class="no">
            <v-icon class="red--text">cancel</v-icon>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </Layout>
</template>

<script>
import Parallax from "../components/Parallax";

export default {
  name: "how-we-compare",
  metaInfo: {
    title: "How We Compare"
  },
  components: {
    Parallax
  },
  data() {
    return {
      compared: [
        {
          title: "Prices",
          superior:
            "At Superior Medical Solutions, we always offer you our best prices. We provide an affordable option for you.",
          other:
            "Our competitors charge way more by fluffing their base pricing to make more of a commission."
        },
        {
          title: "Contracts",
          superior:
            "We will NEVER make you sign a contract for our services. At Superior Medical Solutions, you are not bound to anything ever.",
          other:
            "Other Rocky Mountain providers will trap you in a contract. A typical contract is up to 2 years of commitment."
        },
        {
          title: "Procedures",
          superior:
            "All of our procedures are FDA approved and our success rate is over 95%.",
          other:
            "Our opponents charge for procedures that are UNAPPROVED by the FDA. They also use wave therapy that is neither proven or effective for most men."
        },
        {
          title: "Supervision",
          superior:
            "All of our procedures are overseen by Board Certified Colorado Doctors and highly trained professionals.",
          other:
            "Many of our competitors DO NOT have doctors employed to perform or recommend your individual procedure."
        },
        {
          title: "Office Environment",
          superior:
            "We do not over fluff our environment or amenities as to not raise the price for you. Our office is clean and private for your comfort.",
          other:
            "When you walk into our competitors offices you might find cramped waiting rooms with overstimulating TVs playing multiple sports programs and burnt store brand coffee. If this is something that interests you, expect the price tag that comes along with it."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.v-data-table {
  th {
    font-size: 1.25rem;
    color: var(--blue) !important;
    img {
      padding: 1rem;
      box-shadow: none;
    }
  }
  td {
    vertical-align: top;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1rem;
    &.yes,
    &.no {
      border: none !important;
      transform: scale(1.5) translate(-15px, 16px);
    }
    &.yes {
    }
  }
}
</style>
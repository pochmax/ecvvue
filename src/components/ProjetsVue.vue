<template>
  <div class="projets">
    <div class="projet" v-for="index in projetList" v-bind:key="index">
      <img :src="'ressources/' + index.photo" alt="Image libre de droit" />
      <h2>{{ index.titre }}</h2>
      <p>{{ index.description }}</p>
    </div>
  </div>
</template>

<script>
// import firebase from "firebase/compat/app";
// import { collection, getDocs } from "firebase/firestore";
// const db = "";
// const querySnapshot = await getDocs(collection(db, "projets"));

import { getProjets } from "../main.js";
// from '../main.js' import getProjets;

export default {
  data() {
    return {
      // projetList: [{ titre: null }, { description: null }],
      projetList: Array,
    };
  },

  // data() {

  //   return Promise.resolve(
  //     getProjets().then((res) => {
  //       projetList: res.data;
  //     })
  //   );
  // },
  methods: {
    async getValue() {
      this.projetList = await getProjets();
      // console.table(this.projetList);
    },
  },

  created() {
    this.getValue();
  },
};
</script>

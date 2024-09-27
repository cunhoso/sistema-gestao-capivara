<template>
  <div v-if="capivara" class="container mt-5">
    <h1>Detalhes da Capivara</h1>
    <p><strong>Nome:</strong> {{ capivara.nome }}</p>
    <p><strong>Idade:</strong> {{ capivara.idade }} anos</p>
    <p><strong>Peso:</strong> {{ capivara.peso }} kg</p>
    <p><strong>Status de Saúde:</strong> {{ capivara.status_saude }}</p>
    <p><strong>Habitat:</strong> {{ capivara.habitat }}</p>
    <p><strong>Comportamento:</strong> {{ capivara.comportamento }}</p>
    <p><strong>Dieta:</strong> {{ capivara.dieta }}</p>
    <p><strong>Observações:</strong> {{ capivara.observacoes }}</p>
    
    <router-link class="btn btn-warning" :to="{ name: 'CapivaraForm', params: { id: capivara.id } }">Editar Capivara</router-link>
    
    <router-link to="/capivaras" class="btn btn-secondary mt-3">Voltar para Lista</router-link>
  </div>
  <div v-else class="container mt-5">
    <p>Carregando...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      capivara: null
    };
  },
  created() {
    this.fetchCapivara();
  },
  methods: {
    fetchCapivara() {
      const id = this.$route.params.id;
      axios.get(`http://localhost:3000/capivaras/${id}`)
        .then(response => {
          this.capivara = response.data;
        })
        .catch(error => {
          console.error("Houve um erro ao buscar a capivara: ", error);
        });
    }
  }
};
</script>

<style scoped>
/* Utilizando bootstrap */
</style>

<template>
  <div class="container mt-5">
    <h1 class="text-center">{{ isEditMode ? 'Editar Capivara' : 'Adicionar Capivara' }}</h1>
    <form @submit.prevent="salvarCapivara">
      <div class="mb-3">
        <label class="form-label">Nome:</label>
        <input class="form-control" v-model="capivara.nome" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Idade:</label>
        <input type="number" class="form-control" v-model="capivara.idade" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Peso:</label>
        <input type="number" step="0.1" class="form-control" v-model="capivara.peso" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Status de Saúde:</label>
        <input class="form-control" v-model="capivara.status_saude" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Habitat:</label>
        <input class="form-control" v-model="capivara.habitat" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Comportamento:</label>
        <textarea class="form-control" v-model="capivara.comportamento"></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">Dieta:</label>
        <textarea class="form-control" v-model="capivara.dieta"></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">Observações:</label>
        <textarea class="form-control" v-model="capivara.observacoes"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditMode ? 'Salvar Alterações' : 'Adicionar' }}</button>
      <router-link to="/capivaras" class="btn btn-secondary ms-2">Cancelar</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      capivara: {
        nome: '',
        idade: '',
        peso: '',
        status_saude: '',
        habitat: '',
        comportamento: '',
        dieta: '',
        observacoes: ''
      },
      isEditMode: false
    };
  },
  created() {
    if (this.$route.params.id) {
      this.isEditMode = true;
      this.carregarCapivara(this.$route.params.id);
    }
  },
  methods: {
    carregarCapivara(id) {
      axios.get(`http://localhost:3000/capivaras/${id}`)
        .then(response => {
          this.capivara = response.data;
        });
    },
    salvarCapivara() {
      if (this.isEditMode) {
        axios.put(`http://localhost:3000/capivaras/${this.$route.params.id}`, this.capivara)
          .then(() => {
            this.$router.push('/');
          });
      } else {
        axios.post('http://localhost:3000/capivaras', this.capivara)
          .then(() => {
            this.$router.push('/');
          });
      }
    }
  }
};
</script>

<style scoped>
/* Utilizando bootstrap */
</style>
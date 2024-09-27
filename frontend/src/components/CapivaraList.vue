<template>
  <div class="container mt-5">
    <h1 class="text-center">Gerenciamento de Capivaras</h1>
    <button class="btn btn-primary mb-3" @click="novaCapivara">Adicionar Capivara</button>
    <router-link to="/" class="btn btn-secondary mb-3">Voltar para Home</router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Peso (kg)</th>
          <th>Status de Saúde</th>
          <th>Habitat</th>
          <th>Comportamento</th>
          <th>Dieta</th>
          <th>Observações</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="capivara in capivaras" :key="capivara.id">
          <td>{{ capivara.nome }}</td>
          <td>{{ capivara.idade }}</td>
          <td>{{ capivara.peso }}</td>
          <td>{{ capivara.status_saude }}</td>
          <td>{{ capivara.habitat }}</td>
          <td>{{ capivara.comportamento }}</td>
          <td>{{ capivara.dieta }}</td>
          <td>{{ capivara.observacoes }}</td>
          <td>
            <button class="btn btn-secondary" @click="editarCapivara(capivara.id)">Editar</button>
            <button class="btn btn-outline-danger" @click="deletarCapivara(capivara.id)">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      capivaras: []
    };
  },
  created() {
    this.carregarCapivaras();
  },
  methods: {
    carregarCapivaras() {
      axios.get('http://localhost:3000/capivaras')
        .then(response => {
          this.capivaras = response.data;
        })
        .catch(error => {
          console.error('Erro ao carregar capivaras:', error);
        });
    },
    novaCapivara() {
      this.$router.push('/capivaras/new');
    },
    editarCapivara(id) {
      console.log('Editando capivara com ID:', id);
      this.$router.push(`/capivaras/${id}/edit`);
    },
    deletarCapivara(id) {
      axios.delete(`http://localhost:3000/capivaras/${id}`)
        .then(() => {
          this.carregarCapivaras();
        })
        .catch(error => {
          console.error('Erro ao deletar capivara:', error);
        });
    }
  }
};
</script>

<style scoped>
/* Utilizando bootstrap */
</style>

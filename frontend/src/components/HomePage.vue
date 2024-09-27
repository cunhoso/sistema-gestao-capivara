<template>
  <div class="home container mt-5">
    <h1 class="text-center">Bem-Vindo ao Habitat das Capivaras</h1>
    
    <nav>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Página Inicial</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/capivaras">Lista das Capivaras</router-link>
        </li>
      </ul>
    </nav>
    
    <img src="../assets/capivara2.jpg" alt="Capivara" class="img-fluid mb-4 capivara-image" />

    <h2 class="mt-5">Sobre as Capivaras</h2>
    <p>
      As capivaras (Hydrochoerus hydrochaeris) são os maiores roedores do mundo. 
      Elas são conhecidas por seu comportamento social e costumam viver em grupos. 
      Geralmente, são encontradas em regiões de água doce, como rios e lagoas, onde passam grande parte do tempo.
    </p>
    <p>
      No que diz respeito à alimentação, as capivaras são herbívoras e se alimentam principalmente de gramíneas, 
      folhas, frutas e cascas de árvores. Elas têm uma dieta variada e preferem vegetação fresca e suculenta.
    </p>
    <p>
      As capivaras são nativas da América do Sul, com presença em países como Brasil, Argentina, 
      Colômbia e Venezuela. Elas habitam regiões de savana, pântano e florestas ribeirinhas. 
      Embora sejam encontradas em diversas regiões do Brasil, especialmente em áreas próximas a corpos d'água.
    </p>

    <img src="../assets/capivara.jpg" alt="Capivara" class="img-fluid mb-4 capivara-image" />

    <h2 class="mt-5">Capivaras em Destaque</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Peso (kg)</th>
          <th>Status de Saúde</th>
          <th>Habitat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="capivara in capivaras" :key="capivara.id">
          <td>{{ capivara.nome }}</td>
          <td>{{ capivara.idade }}</td>
          <td>{{ capivara.peso }}</td>
          <td>{{ capivara.status_saude }}</td>
          <td>{{ capivara.habitat }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      capivaras: []
    };
  },
  created() {
    this.fetchCapivaras();
  },
  methods: {
    fetchCapivaras() {
      axios.get('http://localhost:3000/capivaras')
        .then(response => {
          this.capivaras = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar capivaras:', error);
        });
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  background-color: #d9f0d7;
  padding: 20px;
  border-radius: 10px;
  color: #065309;
}
.nav ul {
  list-style-type: none;
  padding: 0;
}
.nav ul li {
  display: inline;
  margin: 0 10px;
}
.nav ul li a {
  text-decoration: none;
  color: #00b806;
  font-weight: bold;
}
.nav ul li a:hover {
  text-decoration: underline;
}
.img-fluid {
  max-width: 50%;
  height: auto;
}
.capivara-image {
  border-radius: 10px;
  margin-bottom: 15px;
}
.table {
  background-color: #fff;
  border-radius: 10px;
}
.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f8f9fa;
}
</style>
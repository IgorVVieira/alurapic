<template>
  <div>
    <h1 class="text-center">{{ title }}</h1>
    <input
      type="search"
      name=""
      id=""
      class="filter"
      v-model="filter"
      placeholder="Filtre pelo título..."
    />
    <ul class="photo-list" v-if="filteredPhotos.lenght">
      <li class="photo-item" v-for="foto of filteredPhotos" :key="foto._id">
        <PanelImage :foto="foto" @removePhoto="removePhoto" />
      </li>
    </ul>
    <div class="no-photos" v-else>
      <h2>Nenhuma foto a ser exibida!</h2>
    </div>
  </div>
</template>

<script>
import PanelImage from "../shared/PanelImage/PanelImage.vue";

export default {
  name: "HomeComponent",
  data() {
    return {
      title: "Alurapic",
      fotos: [],
      filter: null,
    };
  },
  async mounted() {
    await this.getPhotos();
  },
  components: {
    PanelImage,
  },
  methods: {
    async getPhotos() {
      try {
        const response = await this.axios.get("v1/fotos");
        this.fotos = response.data;
      } catch (error) {
        alert("Ocorreu um erro ao carregar as imagens!");
        console.log(error);
      }
    },
    removePhoto(photo) {
      const index = this.fotos.indexOf(photo);
      this.fotos.splice(index, 1);
    },
  },
  computed: {
    filteredPhotos() {
      if (!this.filter) return this.fotos;
      const exp = new RegExp(this.filter.trim(), "i");
      return this.fotos.filter((foto) => {
        return exp.test(foto.titulo);
      });
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.photo-list {
  list-style: none;
}

.photo-list .photo-item {
  display: inline-block;
}

.filter {
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 8px;
}

.no-photos {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
} 
.no-photos h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 15%;
}
</style>

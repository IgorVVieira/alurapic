<template>
  <div>
    <h1 class="centered">Cadastro</h1>
    <h2 class="centered">{{ foto.titulo }}</h2>
    <form @submit.prevent="submit">
      <div class="form-control">
        <label for="titulo">TÍTULO</label>
        <input
          id="titulo"
          class="form-input"
          v-model.lazy="foto.titulo"
          autocomplete="off"
          required
        />
      </div>

      <div class="form-control">
        <label for="url">URL</label>
        <input
          id="url"
          v-model.lazy="foto.url"
          autocomplete="off"
          required
          class="form-input"
        />
        <image-responsive
          v-show="foto.url"
          :url="foto.url"
          :title="foto.title"
        />
      </div>

      <div class="form-control">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea
          id="descricao"
          v-model="foto.descricao"
          autocomplete="off"
          required
        ></textarea>
      </div>

      <div class="centered">
        <Button text="ALTERAR" v-if="id" type="submit" />
        <Button text="GRAVAR" v-else type="submit" />
        <router-link :to="{ name: 'Home' }">
          <Button text="VOLTAR" type="button" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImageResponsive from "../shared/ImageResponsive/ImageResponsive.vue";
import Button from "../shared/Button/ButtonComponent.vue";
import Photo from "../../domain/Photo";

export default {
  components: {
    "image-responsive": ImageResponsive,
    Button,
  },
  data() {
    return {
      foto: new Photo(),
      id: this.$route.params.id,
    };
  },
  mounted() {
    if (this.id) {
      this.getPhoto();
    }
  },
  methods: {
    async submit() {
      if (this.foto._id) {
        await this.update();
      } else {
        await this.store();
      }
    },
    async store() {
      try {
        delete this.foto._id;
        await this.axios.post("v1/fotos", this.foto);
        alert("Foto cadastrada com sucesso!");
      } catch (error) {
        alert("Ocorreu um erro ao cadastrar a imagem!");
        console.log(error);
      }
    },
    async update() {
      try {
        await this.axios.put(`v1/fotos/${this.foto._id}`, this.foto);
        this.$router.push("/");
        alert("Foto atualizada com sucesso!");
      } catch (error) {
        alert("Ocorreu um erro ao atualizar a imagem!");
        console.log(error);
      }
    },
    async getPhoto() {
      try {
        const response = await this.axios.get(`v1/fotos/${this.id}`);
        this.foto = response.data;
      } catch (error) {
        alert("Ocorreu um erro ao buscar a imagem!");
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.centered {
  text-align: center;
}
.form-control {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.form-control label {
  display: block;
  font-weight: bold;
}

.form-control label + input,
.form-control textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.form-control .form-input {
  height: 25px;
  border-radius: 8px;
}

#descricao {
  min-height: 100px;
}

.form-control img {
  display: flex;
  margin: 0 auto;
  margin-top: 1%;
  width: 50%;
  height: 50%;
}

.centered {
  text-align: center;
}
</style>
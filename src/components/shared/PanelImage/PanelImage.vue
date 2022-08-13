<template>
  <div class="panel">
    <h2 class="panel-title" @dblclick="toggleShow">{{ foto.titulo }}</h2>
    <transition name="panel-fade">
      <div class="panel-content" v-show="show">
        <image-responsive
          v-transform:scale.animate="1.2"
          :url="foto.url"
          :title="foto.titulo"
        />
        <router-link :to="{ name: 'Editar', params: { id: foto._id } }">
          <Button
            text="Alterar"
            typeStyle="default"
            type="button"
          />
        </router-link>
        <Button
          :confirm="true"
          text="Remover"
          typeStyle="danger"
          @activeButton="deleteImage"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import ImageResponsive from "../ImageResponsive/ImageResponsive.vue";
import Button from "../Button/ButtonComponent.vue";

export default {
  name: "PanelImage",
  props: {
    foto: Object,
  },
  components: {
    "image-responsive": ImageResponsive,
    Button,
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    async deleteImage() {
      try {
        await this.axios.delete(`/v1/fotos/${this.foto._id}`);
        this.$emit("removePhoto", this.foto);
        this.show = false;
        alert(`Imagem ${this.foto.titulo} removida com sucesso!`);
      } catch (error) {
        alert("Ocorreu um erro ao deletar a imagem!");
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
* {
  box-shadow: 5px 5px 5px black;
}

.panel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.panel .panel-title {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
  cursor: pointer;
}

.panel-fade-enter,
.panel-fade-leave-active {
  opacity: 0;
}

.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: opacity 0.5s;
}

.panel-content {
  overflow: hidden;
}
</style>
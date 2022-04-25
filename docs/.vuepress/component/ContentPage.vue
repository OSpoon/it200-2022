<template>
  <div class="layout-page" :id="uid">
    <template v-for="link in superlink" :key="link.uuid">
      <div class="itemBox">
        <img class="logo" :src="link.icon" />
        <div class="itemBoxRight">
          <a :href="link.href" target="_blank" rel="noopener noreferrer"
            ><strong>{{ link.title }}</strong></a
          >
          <span class="describe">
            {{ link.description }}
          </span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    uid: {
      type: String,
      default: '',
    },
    superlink: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
.layout-page {
  display: flex;
  flex-wrap: wrap;
}
.logo {
  width: 40px;
  height: 40px;
  margin-top: 4px;
}
.describe {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #555;
  font-size: 12px;
}
.itemBox {
  width: 210px;
  min-width: 150px;
  height: 65px;
  margin: 10px;
  padding: 10px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 #ccc;
}
.itemBoxRight {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>

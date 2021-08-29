<template>
  <div class="rightcolumn">
    <div class="articleContainer">
      <div class="imgContainer">
        <img
          :src="contentList[contentIndex].contentImgUrl"
          :alt="contentList[contentIndex].title"
        />
      </div>
      <div class="articleContext">
        <span class="title">{{ contentList[contentIndex].title }}</span>
        <span class="date">{{ contentList[contentIndex].date }}</span> |
        <span class="category">{{ contentList[contentIndex].category }}</span>
        <p v-html="contentList[contentIndex].content"></p>
      </div>
      <div class="link-container">
        <router-link to="/home" class="back">返回</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import jsonData from "../../public/data.json";
let contentList = jsonData.articles;
export default {
  name: "rightside-bar",
  data() {
    return {
      contentList: [],
      contentIndex: "",
    };
  },
  created() {
    this.contentList = contentList;
    this.contentIndex = this.$route.query.id - 1;
  },
};
</script>
<style lang="css">
.rightcolumn {
  display: block;
  float: left;
  position: relative;
  height: auto;
  width: 660px;
  margin-left: 30px;
  border-radius: 10px;
}
.articleContainer {
  border-radius: 10px;
  border: 1px solid #e2e2e2;
}
.imgContainer img {
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
}

.articleContext {
  padding: 20px;
}

.title {
  display: block;
  font-size: 20px;
  color: #333333;
  padding: 10px 0px;
}
.category,
.date {
  font-size: 14px;
  color: #aaaaaa;
}
.category::after {
  content: "";
  display: block;
  margin-top: 10px;
  height: 1px;
  width: 120px;
  background-color: #c7c7c7;
}

.articleContext p {
  padding: 20px 0px;
  color: #333333;
}
.link-container {
  text-align: center;
}
.back {
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  width: auto;
  margin: 10px auto;
  padding: 10px 20px;
  border: 1px solid #c7c7c7;
  border-radius: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #333333;
  text-decoration: none;
}

.back:hover {
  background-color: #333;
  color: #c7c7c7;
}
</style>
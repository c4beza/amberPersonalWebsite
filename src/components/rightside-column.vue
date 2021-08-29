<template>
  <div class="rightcolumn">
    <div class="skillbox content-container">
      <span class="title">技能属性</span>
      <div class="skillbar" v-for="skill in skillList" :key="skill.name">
        <div :class="skill.style" :style="{ width: '' + skill.percent + '' }">
          <span>{{ skill.name }}</span>
        </div>
        <div class="skill-bar-percent">{{ skill.percent }}</div>
      </div>
    </div>

    <div
      v-for="item in contentList"
      :key="item.id"
      class="context content-container"
    >
      <router-link :to="{ path: '/article', query: { id: item.id } }">
        <div class="img-container">
          <img :src="item.thumbnailUrl" :alt="item.title" class="contentImg" />
        </div>
        <div class="right-content">
          <span class="title">{{ item.title }}</span
          ><br />
          <span>{{ item.date }}</span> |
          <span>{{ item.category }}</span>
          <span v-html="item.content"></span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import jsonData from "../../public/data.json";
let contentList = jsonData.articles;
let skillList = jsonData.skills;
export default {
  name: "rightsidecolumn",
  data() {
    return {
      skillList: [],
      contentList: [],
    };
  },
  created: function () {
    this.contentList = contentList;
    this.skillList = skillList;
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
.content-container {
  display: block;
  height: auto;
  width: auto;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #e2e2e2;
  border-radius: 20px;
}

.context.content-container:hover {
  border: 1px solid #333;
  cursor: pointer;
  transition: all 0.5s;
}
/* 清除浮动 */
.content-container:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.img-container {
  float: left;
  position: relative;
  display: block;
  height: 160px;
  width: 160px;
  border-radius: 15px;
  overflow: hidden;
}

.contentImg {
  height: 160px;
  width: 160px;
}

.contentImg:hover {
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.5s;
}

/* 右边内容框 */
.right-content {
  float: left;
  width: 440px;
  height: auto;
  margin-left: 10px;
  font-size: 14px;
  color: #aaaaaa;
}

.title {
  display: block;
  font-size: 20px;
  color: #333333;
}
.right-content span {
  display: inline-block;
  margin-bottom: 10px;
}
.right-content span:last-child {
  color: #aaaaaa;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 20px;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 弹性伸缩盒子模型显示 */
  display: -webkit-box;
  /* 限制在一个块元素显示的文本的行数 */
  -webkit-line-clamp: 4;
  /* 设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-box-orient: vertical;
}

.right-content .title,
.right-content span:last-child:hover {
  color: #333;
  cursor: pointer;
  transition: all 0.5s;
}

/* 技能栏设置 */
.skillbar {
  position: relative;
  display: block;
  max-width: 360px;
  margin: 15px 10px;
  background: #eee;
  height: 30px;
  border-radius: 35px;
  -moz-border-radius: 35px;
  -webkit-border-radius: 35px;
  -webkit-transition: 0.4s linear;
  -moz-transition: 0.4s linear;
  -o-transition: 0.4s linear;
  transition: 0.4s linear;
  -webkit-transition-property: width, background-color;
  -moz-transition-property: width, background-color;
  -o-transition-property: width, background-color;
  transition-property: width, background-color;
}

.skillbar .skillbar-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  font-size: 0.9rem;
  color: #ffffff;
  border-radius: 35px;
  -webkit-border-radius: 35px;
  -moz-border-radius: 35px;
}

.skillbar .skillbar-title span {
  display: block;
  background: rgba(0, 0, 0, 0.15);
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
  border-radius: 35px;
  -webkit-border-radius: 35px;
  -moz-border-radius: 35px;
}

.skillbar .skill-bar-percent {
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  color: rgba(0, 0, 0, 0.5);
}
/* 技能栏几种style */
.style1 {
  background: linear-gradient(to right, #2196f3 0%, #0d2436 100%);
}
.style2 {
  background: linear-gradient(to right, #1e8b2d 0%, #6d0f23 100%);
}
.style3 {
  background: linear-gradient(to right, #295172 0%, #69580d 100%);
}
.style4 {
  background: linear-gradient(to right, #090e11 0%, #fefeff 100%);
}
</style>

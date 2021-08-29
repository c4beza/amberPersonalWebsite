<template>
  <header id="top">
    <nav class="page-width">
      <span class="logo" @click="href('#top')"
        ><a href="javascript:;">Amber's Personal Website</a></span
      >
      <ul>
        <li class="nav-home nav-btn active">
          <router-link to="/home">Home</router-link>
        </li>
        <!-- <li class="nav-works nav-btn"><a href="#works">About</a></li> -->
        <!-- <li class="fade nav-btn"><a href="#top">Contact</a></li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navi-bar",
  data() {
    return {
      envId: "",
      callFunctionResult: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    async callFunction() {
      try {
        const res = await this.$cloudbase.callFunction({
          name: "vue-echo",
          data: {
            foo: "bar",
          },
        });
        this.callFunctionResult = res;
      } catch (e) {
        console.error(e);
        this.callFunctionResult = e.message;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 3px 3px #e2e2e2;
  z-index: 999;
}

.logo {
  float: left;
  width: 175px;
  height: 70px;
  background-image: url(../assets/logo.png);
  background-size: cover;
}

.logo a {
  display: none;
}
nav ul {
  display: block;
  float: right;
  width: auto;
  height: 80px;
}
/* 清除浮动 */
nav :after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
ul li {
  display: inline-block;
}
.nav-btn a {
  display: inline-block;
  height: 40px;
  width: auto;
  margin: 20px 30px;
  text-decoration: none;
  line-height: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #b2aaaa;
}

.nav-btn.active a,
.nav-btn a:hover {
  color: #333333;
  transition: all 0.5s;
}
</style>

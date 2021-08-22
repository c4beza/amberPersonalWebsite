<template>
  <div id="app">
    <navibar />
    <div class="content-area">
      <div class="page-width">
        <leftsidebar class="leftbar" />
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
        <!-- <articleComp class="rightcolumn" /> -->
        <!-- <rightsidecolumn class="rightcolumn" /> -->
        <div style="clear: both"></div>
      </div>
      <bottom />
    </div>
  </div>
</template>

<script>
import navibar from "./components/navigation-bar.vue";
import leftsidebar from "./components/leftside-bar.vue";
import bottom from "./components/bottom.vue";

// import rightsidecolumn from "./components/rightside-column.vue";

export default {
  name: "App",
  data: function () {
    return {
      sectionBgdImg: "",
    };
  },
  components: {
    navibar,
    leftsidebar,
    bottom,
    // rightsidecolumn,
    // articleComp,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.page-width {
  width: 1000px;
  margin: 0 auto;
}

.content-area {
  position: relative;
  top: 150px;
  height: auto;
}

.leftbar {
  display: block;
  float: left;
  position: relative;
  height: 480px;
  width: 200px;
  padding: 35px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
}

.rightcolumn {
  display: block;
  float: left;
  position: relative;
  height: auto;
  width: 660px;
  margin-left: 30px;
  border-radius: 10px;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate(0, 200px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease-in-out;
}
</style>

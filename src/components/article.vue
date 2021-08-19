<template>
  <div class="rightcolumn">
    <div class="articleContainer">
      <div class="imgContainer">
        <img
          :src="contentList[contentIndex].imgUrl"
          :alt="contentList[contentIndex].title"
        />
      </div>
      <div class="articleContext">
        <span class="title">{{ contentList[contentIndex].title }}</span>
        <span class="date">{{ contentList[contentIndex].date }}</span
        >|
        <span class="category">{{ contentList[contentIndex].category }}</span>
        <p>{{ contentList[contentIndex].content }}</p>
      </div>
      <div class="link-container">
        <router-link to="/home" class="back">返回</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rightside-bar",
  data() {
    return {
      contentList: [
        {
          id: 1,
          imgUrl: require("../assets/home-bg.jpg"),
          title: "科学上网",
          date: "April 21, 2021",
          category: "TECO",
          content:
            "vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。",
        },
        {
          id: 1,
          imgUrl: require("../assets/home-bg.jpg"),
          title: "科学上网",
          date: "April 21, 2021",
          category: "TECO",
          content:
            "vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。",
        },
        {
          id: 1,
          imgUrl: require("../assets/home-bg.jpg"),
          title: "科学上网",
          date: "April 21, 2021",
          category: "TECO",
          content:
            "vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。",
        },
        {
          id: 1,
          imgUrl: require("../assets/home-bg.jpg"),
          title: "科学上网",
          date: "April 21, 2021",
          category: "TECO",
          content:
            "vpn一般指虚拟专用网络。虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN可通过服务器、硬件、软件等多种方式实现。",
        },
      ],
      contentIndex: "",
    };
  },
  created() {
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
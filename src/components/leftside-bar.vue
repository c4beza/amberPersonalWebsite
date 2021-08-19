<template>
  <div class="leftbar">
    <div class="profile">
      <div class="avatar"></div>
      <p>{{ introduction }}</p>
    </div>
    <div class="motto">
      <p>{{ motto1 }}</p>
      <p>{{ motto2 }}</p>
    </div>
    <div class="contact-container">
      <ul class="contact">
        <li>
          <span class="icon icon-weixin"
            ><span>{{ contact.wechat }}</span></span
          >
        </li>
        <li>
          <span class="icon icon-phone"
            ><span>{{ contact.phone }}</span></span
          >
        </li>
        <li>
          <span class="icon icon-mail4"
            ><span>{{ contact.email }}</span></span
          >
        </li>
        <li>
          <span class="icon icon-location"
            ><span>{{ contact.location }}</span></span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "leftside-bar",
  data() {
    return {
      msg: "helloworld",
      introduction: "我是魏佳琦，很高兴遇见您",
      motto1: "一个脑洞很大的未来产品经理，懂一点代码是为了更好做产品。",
      motto2: "砍我可以，砍需求不行",
      contact: {
        wechat: "weijiaqi7211",
        phone: "17645056170",
        email: "weijiaqi1328@163.com",
        location: "上海",
      },
    };
  },
  methods: {
    // show() {
    //   alert("这是我的猫猫");
    // },
  },
};
</script>
<style lang="css" scoped>
@import "../style/iconfont.css";

.avatar {
  height: 150px;
  width: 150px;
  margin: 0px auto;
  border-radius: 100px;
  background-image: url(../assets/avatar.png);
  background-size: cover;
}

.profile p {
  margin: 20px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #333333;
}

.motto p {
  margin: 16px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #aaaaaa;
}
.motto::after,
.profile::after {
  content: "";
  display: block;
  height: 1px;
  width: 120px;
  background-color: #c7c7c7;
}

.contact {
  padding: 10px 0px;
}

.contact li {
  padding-bottom: 10px;
  height: 25px;
  color: #aaaaaa;
  font-size: 16px;
  line-height: 25px;
}
.icon span {
  display: inline-block;
  padding-left: 10px;
}
</style>
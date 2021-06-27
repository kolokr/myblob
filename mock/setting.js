import Mock from "mockjs";
import weixinQrCode from "@/assets/wechat_qrcode.jpeg";

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://img2.baidu.com/it/u=3458857562,1269086464&fm=26&fmt=auto&gp=0.jpg",
    siteTitle: "垚式探索",
    github: "https://github.com/kolokr",
    qq: "532d920765",
    qqQrCode: weixinQrCode,
    weixin: "hukeyaobest",
    weixinQrCode,
    mail: "kolokr@163.com",
    icp: "辽ICP备2020013711号-1",
    githubName: "kolokr",
    // favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});

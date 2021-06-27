import Mock from "mockjs";
import jianli from "@/assets/jianli.png";
Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: {
    jianli,
  },
});

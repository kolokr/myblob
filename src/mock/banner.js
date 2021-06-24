import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.a0bi.com%2Fupload%2Fttq%2F20150727%2F1437980262395.jpg&refer=http%3A%2F%2Fimg2.a0bi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627024441&t=ea8a0c0312182014e45d5fce14c10be8",
      bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.a0bi.com%2Fupload%2Fttq%2F20150727%2F1437980262395.jpg&refer=http%3A%2F%2Fimg2.a0bi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627024441&t=ea8a0c0312182014e45d5fce14c10be8",
      title: "夏洛克",
      description: "头脑是我的一切，身体只是一个附件。",
    },
    {
      id: "2",
      midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg4.cache.netease.com%2Fphoto%2F0003%2F2010-01-28%2F5U420I6H0BOd0003.jpg&refer=http%3A%2F%2Fimg4.cache.netease.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627024491&t=305dbb0aec0f2e055941ea3478e2ab67",
      bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg4.cache.netease.com%2Fphoto%2F0003%2F2010-01-28%2F5U420I6H0BOd0003.jpg&refer=http%3A%2F%2Fimg4.cache.netease.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627024491&t=305dbb0aec0f2e055941ea3478e2ab67",
      title: "夏洛克",
      description: "世上的事都是前人做过的，没什么新鲜的。",
    },
    {
      id: "3",
      midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fpview%2Fevent_poster%2Fraw%2Fpublic%2F5c82355af2f4b0b.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627024579&t=942c2c5a9a1d2d24cba24f343734cec2",
      bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fpview%2Fevent_poster%2Fraw%2Fpublic%2F5c82355af2f4b0b.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627024579&t=942c2c5a9a1d2d24cba24f343734cec2",
      title: "夏洛克",
      description: "人类是渺小的，工作才是一切。",
    },
  ],
});

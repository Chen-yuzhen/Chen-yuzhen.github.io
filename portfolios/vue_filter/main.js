let data = {
  menu: [
    { type: "主廚的話", title: "餐點簡介與相關說明", link: "連結" },
    {
      type: "餐具擺盤",
      title: "萬用白瓷餐具組",
      link: "連結",
    },
    {
      type: "開胃餐點",
      title: "摩洛哥風味燉雞配北非小米",
      link: "連結",
    },
    { type: "開胃餐點", title: "烤培根馬鈴薯佐酪梨醬", link: "連結" },
    { type: "開胃餐點", title: "蟹肉香檳凍佐法式甜椒醬", link: "連結" },
    { type: "開胃餐點", title: "牛油煎帶子伴藜麥薯蓉", link: "連結" },
    { type: "開胃餐點", title: "蒔蘿鮭魚酸豆佐酪梨醬", link: "連結" },
    { type: "開胃餐點", title: "阿普利安嫩煎蘑菇及菠菜", link: "連結" },
    {
      type: "風味沙拉",
      title: "松子甜菜根溫沙拉",
      link: "連結",
    },
    { type: "風味沙拉", title: "義式油醋鮭魚沙拉", link: "連結" },
    { type: "風味沙拉", title: "法式杏鮑菇沙拉", link: "連結" },
    {
      type: "總匯拼盤",
      title: "家鄉風味佐手作總匯拼盤 #1",
      link: "連結",
    },
    {
      type: "總匯拼盤",
      title: "家鄉風味佐手作總匯拼盤 #2",
      link: "連結",
    },
    {
      type: "用餐插曲",
      title: "怎麼沒有魯肉飯!? 其他菜色瀏覽",
      link: "連結",
    },
    {
      type: "餐具擺盤",
      title: "特製雕花大理石紋餐具",
      link: "連結",
    },
    { type: "主廚推薦", title: "特調濃香醬蘸皇家白玉冰珂", link: "連結" },
    { type: "主廚推薦", title: "清燉嫩煮百頁豆腐", link: "連結" },
    { type: "主廚推薦", title: "西班牙熱辣風情茴香桂皮油灼魚排", link: "連結" },
    { type: "主廚推薦", title: "泰式翡翠精燜水晶飯", link: "連結" },
    {
      type: "主廚推薦",
      title: "特濃肉孜醬青蔥拌意面",
      link: "連結",
    },
    {
      type: "主廚推薦",
      title: "義大利秘制風味水煮五花肉爆鮮青椒",
      link: "連結",
    },
    {
      type: "用餐插曲",
      title: "我吃不下了!! 食用順序的選擇",
      link: "連結",
    },
    {
      type: "總匯拼盤",
      title: "復古總匯燴特色菜餚 #1",
      link: "連結",
    },
    {
      type: "總匯拼盤",
      title: "復古總匯燴特色菜餚 #2",
      link: "連結",
    },
    {
      type: "總匯拼盤",
      title: "西式風味總匯拼盤",
      link: "連結",
    },
    {
      type: "總匯拼盤",
      title: "英式伯爵總匯拼盤",
      link: "連結",
    },
    {
      type: "總匯拼盤",
      title: "中式復古總匯拼盤",
      link: "連結",
    },
    {
      type: "精選甜點",
      title: "聖米歇爾蘋果塔",
      link: "連結",
    },
    {
      type: "精選甜點",
      title: "島嶼百香",
      link: "連結",
    },
    { type: "主廚的話", title: "餐後心得與其他資訊", link: "連結" },
  ],
  input: {
    type: null,
    title: null,
  },
};

let vm = new Vue({
  el: "#app",
  data: data,
  computed: {
    typeList() {
      let obj = {
        sort: [],
        map: {},
      };
      this.menu.forEach((item, index) => {
        let { type, title, link } = item;
        //如果這個類型還沒塞過，初始化
        if (!obj.map[type]) {
          obj.sort.push(type);
          obj.map[type] = {
            sort: [],
            map: {},
          };
        }

        //塞資料
        obj.map[type].sort.push(title);
        obj.map[type].map[title] = { index, link };
      });
      return obj;
    },
    titleList() {
      this.input.title = null;
      if (this.input.type) {
        return this.typeList.map[this.input.type];
      } else {
        return [];
      }
    },
    content() {
      if (this.input.title) {
        return this.titleList.map[this.input.title];
      } else {
        return null;
      }
    },
  },
});

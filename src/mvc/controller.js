const Map = require("../modules/api.yandex.map");
export default class {
  constructor() {
    this.myApiMap = new Map();

    this.init();
  }

  async init() {
    this.yandexApi = await this.myApiMap.initMap({
      center: [59.945, 30.264],
      zoom: 15,
      controls: ["zoomControl", "fullscreenControl"]
    });
    this.yandexApi.events.add("click", async e => {
      this.position = await this.myApiMap.getMapPosition(e);
      console.log(this.position);
    });
  }
}

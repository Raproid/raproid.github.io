"use strict";

var app = new Vue({
  el: "#app",
  data: {
    lang: {
      ru: "null",
      en: "asasas"
    },
    curLang: "en"
  },
  created: function created() {
    this.getEn();
    this.getRu();
  },
  methods: {
    getEn: function getEn() {
      var _this = this;

      axios.get("i18n/locale_en.json").then(function (response) {
        _this.lang.en = response.data;
      });
    },
    getRu: function getRu() {
      var _this2 = this;

      axios.get("i18n/locale_ru.json").then(function (response) {
        _this2.lang.ru = response.data;
      });
    },
    changeLang: function changeLang(lang) {
      this.curLang = lang;
    }
  }
});
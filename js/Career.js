'use strict';

var app = new Vue({
  el: '#app',
  data: {
    lang: {
      ru: null,
      en: null
    },
    curLang: 'en',
    menuIsShown: false,
    teamFormIsShown: false,
    jobs: [1, 0, 0]
  },
  created: function created() {
    this.getEn();
    this.getRu();
  },
  methods: {
    openJob: function openJob(index) {
      this.jobs = [0, 0, 0];
      this.jobs[index] = 1;
    },
    toggleMenu: function toggleMenu() {
      this.menuIsShown = !this.menuIsShown;
    },
    toggleTeamForm: function toggleTeamForm() {
      var _this = this;

      this.teamFormIsShown = !this.teamFormIsShown;
      setTimeout(function () {
        if (_this.teamFormIsShown) window.scrollTo(0, 1000000);
      }, 100);
    },
    getEn: function getEn() {
      var _this2 = this;

      axios.get('i18n/locale_en.json').then(function (response) {
        _this2.lang.en = response.data;
      });
    },
    getRu: function getRu() {
      var _this3 = this;

      axios.get('i18n/locale_ru.json').then(function (response) {
        _this3.lang.ru = response.data;
      });
    },
    changeLang: function changeLang(lang) {
      this.curLang = lang;
    }
  }
});
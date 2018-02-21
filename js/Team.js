'use strict';

var app = new Vue({
  el: '#app',
  data: {
    lang: {
      ru: 'null',
      en: 'asasas'
    },
    showedPersons: {},
    curLang: 'en',
    menuIsShown: false,
    teamFormIsShown: false
  },
  created: function created() {
    this.getEn();
    this.getRu();
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.menuIsShown = !this.menuIsShown;
    },
    toggleTeamForm: function toggleTeamForm() {
      this.teamFormIsShown = !this.teamFormIsShown;
    },
    getEn: function getEn() {
      var _this = this;

      axios.get('i18n/locale_en.json').then(function (response) {
        _this.lang.en = response.data;
      });
    },
    getRu: function getRu() {
      var _this2 = this;

      axios.get('i18n/locale_ru.json').then(function (response) {
        _this2.lang.ru = response.data;
      });
    },
    changeLang: function changeLang(lang) {
      this.curLang = lang;
    },
    showPerson: function showPerson(numberOfPerson) {
      this.showedPersons[numberOfPerson] = !this.showedPersons[numberOfPerson];
      console.log(this.showedPersons[numberOfPerson]);
    }
  }
});

Vue.directive('toggler', {
  // Когда привязанный элемент вставлен в DOM...
  inserted: function inserted(el) {
    var textBlock = jQuery('.founder-item_contacts__description_text:first', el);
    var togglerLink = jQuery('.founder-item_contacts__description_link', el);
    var arrowLink = jQuery('.link-arrow:first', el);
    var showedElement = false;
    togglerLink.click(function () {
      console.log('asasa');
      showedElement = !showedElement;
      if (showedElement) {
        textBlock.show();
        arrowLink.removeClass('icon-keyboard_arrow_down');
        arrowLink.addClass('icon-keyboard_arrow_up');
      } else {
        textBlock.hide();
        arrowLink.addClass('icon-keyboard_arrow_down');
        arrowLink.removeClass('icon-keyboard_arrow_up');
      }
    });
  }
});
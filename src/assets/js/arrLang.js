// langue translate===============================

$(function(){
   let arrLang = {
      'en': {
         'home'         : 'Home',
         'services'     : 'Services',
         'website'      : 'Create WebSite',
         'marketing'    : 'Internet Marketing',
         'promotion'    : 'Video promotion',
         'aboutme'      : 'About ME',
         'myportfolio'  : 'My Portfolio',
         'opennav'      : 'open nav',
         'profile'      : 'Profile',
         'search'       : 'Search for Site',
         'name'         : 'Kolesnik Vitaliy',
         'prof'         : 'Junior Frontend Developer',
         'hi'           : 'Hi! My name is Vitaliy and I am open to new opportunities.I want to find an interesting projects. I have been working with Front End for a year now, constantly improving my skills gained at Infopulse University. It feels like I am ready for new challenges.I have experience working as part of a team and individually.I like to spend my free time on fishing, I am interested in active types of recreation.I will be glad to new cooperation!',
         'logout'       : 'Log Out',
         'projects'     :  'My Projects',
         'hire'         :  'Hire me',
         // 'prof'    :  'Junior Frontend Developer',
      },
      'ua':{
         'home'         : 'Дім',
         'services'     : 'Сервіс',
         'website'      : 'Створення Сайту',
         'marketing'    : 'Інтернет Маркетинг',
         'promotion'    : 'Відео Просування',
         'aboutme'      : 'Про Мене',
         'myportfolio'  : 'Моє Портфоліо',
         'opennav'      : 'Відкрити меню',
         'profile'      : 'Профіль',
         'search'       : 'Пошук по сайту',
         'name'         : 'Колесник Віталій',
         'prof'         : 'Junior Frontend Developer',
         'hi'           : 'Привіт! Мене звати Віталій.Я хочу знайти цікаві проекти. Фронтендом я вже займаюсь майже півтора року,навчання почалося з закінченням курсів в компанії Infopulse University. Далі я практикував самостійно, сворюючи власні проєкти.Маю досвід співпраці в команді, але з іншого напрямку.Свій вільний час присвячую активному відпочінку, це може бути рибалка чи заняття  спортом. Також полюбляю чітати художню літературу.',
         'logout'       : 'Вихід',
         'projects'     : 'Мої Проекти',
         'hire'         : 'Найняти мене',
         // 'prof'    :  'Junior Frontend Developer',
      }
}
   $(function(){
      $('.translate').click(function(){
         let lang = $(this).attr('id');
         $('.lang').each(function(index, nav){
            $(this).text(arrLang[lang][$(this).attr('key')]);
         });
      });
   });
});


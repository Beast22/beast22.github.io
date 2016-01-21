$(function() {

var profile = $('#profile').html();

var data = {
	name: "Петухов Евгений Анатольевич",
	photo: "img/photo.jpg",
	who: "Человек русский из маргиналов",
	hobby: "Интересы:",
	hobby_list: ["Дизайн",
				"Журналистика",
				"Смотреть на огонь",
				"Сайтостроение"],
	tel: "Мой контактный телефон:",
	number: "+7(906)699-17-13",
	vk_account: "Мой аккаунт вконтакте:",
	vk_address: "https://vk.com/zmeelow",
	vk_url: "vk.com",
	quot_title: "Любимая цитата:",
	quot: '"Вопреки"'
}

   var content = tmpl(profile,data);

   $('body').append(content);

});
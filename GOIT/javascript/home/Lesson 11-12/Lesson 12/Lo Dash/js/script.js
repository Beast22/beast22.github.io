(function() {

	document.addEventListener('DOMContentLoaded', profile);

	function profile(){

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

		var tmpl = _.template(document.getElementById('profile').innerHTML);
		var to_insert = document.getElementById('to_insert'); // Find a place outside <script type="text/html" id="profile">
		to_insert.innerHTML = tmpl(data);

	}
})();
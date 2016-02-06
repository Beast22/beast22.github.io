$(function(){

	var $response = function(elem) {
		$('.results_field').html("");
		var keyUrl = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=";
		var results_field = encodeURIComponent($('.for_search').val());
		if (results_field) {
			keyUrl +=results_field+"&rsz=8&start="+elem*8+"&callback=AddedCallback&context=?";
			$.getJSON(keyUrl, {
				format : "jsonp"
			},
				function (data) {
					if (data.results.length) {
						$.each(data.results, function(i, val){

							var ul = document.createElement("ul");
							var li = document.createElement("li");
							var title = document.createElement("h3");
							var link = document.createElement("a");
							var textItem = document.createElement("div");
							var textUrl = document.createElement("cite");
							var textContent = document.createElement("p");

							
							ul.className = "response_list";
							li.className = "response_list__unit";
							title.className = "response_list__unit__name";
							link.className = "response_list__unit__link";
							textItem.className = "response_list__unit__text";
							textUrl.className = "response_list__unit__text__url";
							textContent.className = "response_list__unit__content";
							
							$(link).attr('href',val.url);
							$(link).html(val.titleNoFormatting);
							$(textUrl).html(val.url);
							$(textContent).html(val.content);

							
							textItem.appendChild(textUrl);
							textItem.appendChild(textContent);
							title.appendChild(link);
							li.appendChild(title);
							li.appendChild(textItem);
							ul.appendChild(li);
							$('.results_field').append(ul);  
							
						}); 

					} else {
							var oops = document.createElement("p");
							oops.className = "no_doc";
							oops.innerHTML = "Такого документа в выдаче нет";
							$('.results_field').append(oops);
					}
				});
			
		}
	}

	$('.to_find').click(function(e) {
			e.preventDefault();
			$response(0);
	});
});
function AddedCallback(func, data){
	window[func](data);
}

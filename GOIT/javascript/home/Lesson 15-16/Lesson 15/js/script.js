$(function(){
 
 	var $response = function(elem){
 		$('.results_field').html("");
 		var results_field = encodeURIComponent($('.for_search').val());
 		var keyUrl = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=";
 		if(results_field) {
 			keyUrl += results_field+"&rsz=8&start="+elem*8+"&callback=AddedCallback&context=?";
 			var pages;
 			$.getJSON(keyUrl, {
 				format: "jsonp"
 			})
 			
 			.done(function(data){
 				// if(data.results.length){
 					// pages = data.cursor.pages.length;
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

		 				ul.appendChild(li);
		 				ul.appendChild(title);
		 				ul.appendChild(textItem);
		 				title.appendChild(link);
		 				textItem.appendChild(textUrl);
		 				textItem.appendChild(textContent);
		 				$('.results_field').append(ul); 

		 			});
		 			// var pagination = document.createElement("ol");
		 			// for (var i=1; i<=pages; i++){
		 			// 	var page = document.createElement("li");
		 			// 	var pageLink = document.createElement("a");

		 			// 	page.appendChild(pageLink);
		 			// 	pagination.appendChild(page);

		 			// 	if(i === (elem+1)){
		 			// 		pageLink.className = "active_page";
		 			// 	}

		 			// }

		 		// } else{
		 		// 	var oops = document.createElement("p");
		 		// 	oops.innerHTML = "Таких запросов в выдаче нет";
		 		// 	oops.className = "response-error";
		 		// 	$('.results_field').append(oops); 
		 			

		 		// }
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


	function searchBook() {

		if(event.keyCode == 13) {
			$.ajax({
				url : "http://localhost:7070/book/bookList",
				type : "GET",
				dataType : "jsonp",
				jsonp : "callback",
				data : {
					keyword : $("#keyword").val()
				},
				success : function(result) {
					$("tbody").empty();

					for(var i=0; i<result.length; i++) {
						var tr = $("<tr></tr>").attr("data-isbn",result[i].isbn);
						var img = $("<img />").attr("src",result[i].img);
						var imgtd = $("<td></td>").append(img);
						var titlespan = $("<span></span>").text(result[i].title);
						var titletd = $("<td></td>").append(titlespan);
						var authortd = $("<td></td>").text(result[i].author);
						var pricetd = $("<td></td>").text(result[i].price);

						tr.append(imgtd);
						tr.append(titletd);
						tr.append(authortd);
						tr.append(pricetd);

						$("tbody").append(tr);
					}
				},
				error : function() {
					alert("서버연결에 문제가 있습니다.");
				}
			});
		}
	}




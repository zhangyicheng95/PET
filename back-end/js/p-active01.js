var $playListPanel = (function() {
  function show(config) {
    $(app.config.panelContainer).html(''
	    +'<div class="mbx">活动管理>活动列表</div>'
    	+'<input type="button" value="添加" id="addBtn"/>');
    $(app.config.panelContainer).append(''
    	+'<table id="table">'
    	+'<tr></tr>'
    	+'</table>');
    var ThArr = ['编号','活动类型','限定人数','已报名人数','备注','操作'];
    for(var i=0;i<ThArr.length;i++){
    	$('#table tr').append(''
    	+'<th>'+ThArr[i]+'</th>')
    }
    app.playlist.forEach(function(m){
    	$('#table').append(''
    	+'<tr>'
    	+'<td>'+m.id+'</td>'
    	+'<td>'+m.class+'</td>'
    	+'<td>'+m.Totalnum+'</td>'
    	+'<td>'+m.peoplenum+'</td>'
    	+'<td>'+m.text+'</td>'
    	+'<td>'
	  		+'<button>更新</button>'
	  		+'<button>删除</button>'
	  		+'</td>'
	  		+'</tr>');
	  });
	  $('#addBtn').click(function(){
			$('#table').append(''
	  		+'<tr>'
	  		+'<td><input type="text" /></td>'
	  		+'<td><input type="text" /></td>'
	  		+'<td><input type="text" /></td>'
	  		+'<td><input type="text" /></td>'
	  		+'<td><input type="text" /></td>'
	  		+'<td>'
	  		+'<button>更新</button>'
	  		+'<button>删除</button>'
	  		+'</td>'
	  		+'</tr>');
	  		var arr=[];
	  		$('#table').on('blur','input',function(){
	  			arr.push($(this).val())
	  		});
	  		$('#table').on('click','button:first-child',function(){
	  			//创建http服务
					var xhr = new XMLHttpRequest();
					xhr.onreadystatechange = function () {
						//console.log(xhr.readyState,xhr.status);
					    if (xhr.readyState == 4) {
					        //表示服务器的相应代码是200；正确返回了数据
					        if(xhr.status == 200){
					        	
					        }
					    }
					};
					xhr.open("post","http://127.0.0.1:8079?id="+arr[0]+'&class='+arr[1]+'&Totalnum='+arr[2]+'&peoplenum='+arr[3]+'&text='+arr[4]+'&panel='+localStorage.getItem('panel'),true);//使用POST方法
	        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//POST需增加
	        xhr.send();
	  		})
		});
	  
	  $('#table').on('click','button:last-child',function(){
	  	$(this).parents('tr').remove();
				var id = $(this).parents('tr').find("td")[0].innerText;
				console.log(id)
				//创建http服务
				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function () {
	//			    console.log(xhr.readyState,xhr.status);
				    if (xhr.readyState == 4) {
				        //表示服务器的相应代码是200；正确返回了数据
				        if(xhr.status == 200){
				        	
				        }
				    }
				};
				xhr.open("get","http://127.0.0.1:8081?"+localStorage.getItem("panel")+"-"+"id="+id,true);//使用POST方法
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//POST需增加
        xhr.send();
	  });
  }
  return {show: show};
})();
$(function() {

$("#usersid").blur(
		function() {
			$("#usersid_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#usersid").after("<span id='usersid_msg' style='color: red'>供应商不能为空</span>");
			}
	});

$("#goodsid").blur(
		function() {
			$("#goodsid_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#goodsid").after("<span id='goodsid_msg' style='color: red'>产品不能为空</span>");
			}
	});

$("#contents").blur(
		function() {
			$("#contents_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#contents").after("<span id='contents_msg' style='color: red'>内容不能为空</span>");
			}
	});







$('#sub').click(function(){
var usersid = $("#usersid").val();
var goodsid = $("#goodsid").val();
var contents = $("#contents").val();
$("#usersid_msg").empty();
$("#goodsid_msg").empty();
$("#contents_msg").empty();
if (usersid == "" || usersid == null) {
	$("#usersid").after("<span id='usersid_msg' style='color: red'>供应商不能为空</span>");
	return false;
}
if (goodsid == "" || goodsid == null) {
	$("#goodsid").after("<span id='goodsid_msg' style='color: red'>产品不能为空</span>");
	return false;
}
if (contents == "" || contents == null) {
	$("#contents").after("<span id='contents_msg' style='color: red'>内容不能为空</span>");
	return false;
}
});
$('#res').click(function() {
$("#usersid_msg").empty();
$("#goodsid_msg").empty();
$("#contents_msg").empty();
});

});

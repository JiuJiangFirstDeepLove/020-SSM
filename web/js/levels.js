$(function() {

$("#levelsname").blur(
		function() {
			$("#levelsname_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#levelsname").after("<span id='levelsname_msg' style='color: red'>等级名称不能为空</span>");
			}
	});

$("#memo").blur(
		function() {
			$("#memo_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#memo").after("<span id='memo_msg' style='color: red'>备注不能为空</span>");
			}
	});







$('#sub').click(function(){
var levelsname = $("#levelsname").val();
var memo = $("#memo").val();
$("#levelsname_msg").empty();
$("#memo_msg").empty();
if (levelsname == "" || levelsname == null) {
	$("#levelsname").after("<span id='levelsname_msg' style='color: red'>等级名称不能为空</span>");
	return false;
}
if (memo == "" || memo == null) {
	$("#memo").after("<span id='memo_msg' style='color: red'>备注不能为空</span>");
	return false;
}
});
$('#res').click(function() {
$("#levelsname_msg").empty();
$("#memo_msg").empty();
});

});

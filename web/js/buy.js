$(function() {

$("#bno").blur(
		function() {
			$("#bno_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#bno").after("<span id='bno_msg' style='color: red'>采购单号不能为空</span>");
			}
	});

$("#price").blur(
		function() {
			$("#price_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#price").after("<span id='price_msg' style='color: red'>采购单价不能为空</span>");
			}
	});

$("#num").blur(
		function() {
			$("#num_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#num").after("<span id='num_msg' style='color: red'>采购数量不能为空</span>");
			}
	});







$('#sub').click(function(){
var bno = $("#bno").val();
var price = $("#price").val();
var num = $("#num").val();
$("#bno_msg").empty();
$("#price_msg").empty();
$("#num_msg").empty();
if (bno == "" || bno == null) {
	$("#bno").after("<span id='bno_msg' style='color: red'>采购单号不能为空</span>");
	return false;
}
if (price == "" || price == null) {
	$("#price").after("<span id='price_msg' style='color: red'>采购单价不能为空</span>");
	return false;
}
if (num == "" || num == null) {
	$("#num").after("<span id='num_msg' style='color: red'>采购数量不能为空</span>");
	return false;
}
});
$('#res').click(function() {
$("#bno_msg").empty();
$("#price_msg").empty();
$("#num_msg").empty();
});

});

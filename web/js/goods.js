$(function() {

$("#goodsname").blur(
		function() {
			$("#goodsname_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#goodsname").after("<span id='goodsname_msg' style='color: red'>产品名称不能为空</span>");
			}
	});

$("#image").blur(
		function() {
			$("#image_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#image").after("<span id='image_msg' style='color: red'>产品图片不能为空</span>");
			}
	});

$("#cateid").blur(
		function() {
			$("#cateid_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#cateid").after("<span id='cateid_msg' style='color: red'>产品类别不能为空</span>");
			}
	});

$("#guige").blur(
		function() {
			$("#guige_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#guige").after("<span id='guige_msg' style='color: red'>产品规格不能为空</span>");
			}
	});

$("#price").blur(
		function() {
			$("#price_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#price").after("<span id='price_msg' style='color: red'>价格不能为空</span>");
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
var goodsname = $("#goodsname").val();
var image = $("#image").val();
var cateid = $("#cateid").val();
var guige = $("#guige").val();
var price = $("#price").val();
var memo = $("#memo").val();
$("#goodsname_msg").empty();
$("#image_msg").empty();
$("#cateid_msg").empty();
$("#guige_msg").empty();
$("#price_msg").empty();
$("#memo_msg").empty();
if (goodsname == "" || goodsname == null) {
	$("#goodsname").after("<span id='goodsname_msg' style='color: red'>产品名称不能为空</span>");
	return false;
}
if (image == "" || image == null) {
	$("#image").after("<span id='image_msg' style='color: red'>产品图片不能为空</span>");
	return false;
}
if (cateid == "" || cateid == null) {
	$("#cateid").after("<span id='cateid_msg' style='color: red'>产品类别不能为空</span>");
	return false;
}
if (guige == "" || guige == null) {
	$("#guige").after("<span id='guige_msg' style='color: red'>产品规格不能为空</span>");
	return false;
}
if (price == "" || price == null) {
	$("#price").after("<span id='price_msg' style='color: red'>价格不能为空</span>");
	return false;
}
if (memo == "" || memo == null) {
	$("#memo").after("<span id='memo_msg' style='color: red'>备注不能为空</span>");
	return false;
}
});
$('#res').click(function() {
$("#goodsname_msg").empty();
$("#image_msg").empty();
$("#cateid_msg").empty();
$("#guige_msg").empty();
$("#price_msg").empty();
$("#memo_msg").empty();
});

});

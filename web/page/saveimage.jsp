<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html>
<head>
<base href="<%=basePath%>" />
<meta charset="UTF-8">
<title></title>
<script type="text/javascript" src="layui/layui.js"></script>
<script type="text/javascript" src="layui/controller.js"></script>
<script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
<link rel="stylesheet" href="layui/css/layui.css" media="all" />
<script type="text/javascript">
	function selok() {
		opener.document.getElementById("image").value = myform.p.value;
		window.close();
	}
</script>
</head>
<body class="childrenBody">
	<form class="layui-form" style="width: 80%;"
		action="upload/image.action" name="myform" method="post"
		enctype="multipart/form-data">
		<div class="layui-form-item">
			<label class="layui-form-label">图片</label>
			<div class="layui-input-block">
				<input type="file" name="image" class="layui-input" id="image" />
			</div>
		</div>
		<c:if test="${imageFileName ne null }">
			<div class="layui-form-item">
				<div class="layui-input-block">
					<label class="layui-form-label">${imageFileName } </label> <input
						type="hidden" name="p" value="upfiles/${imageFileName }" id="p">
					<button type="button" class="layui-btn" onclick="selok();">确定</button>
				</div>
			</div>
		</c:if>
		<c:if test="${imageFileName eq null }">
			<div class="layui-form-item">
				<div class="layui-input-block">
					<button type="submit" class="layui-btn" id="sub">上传图片</button>
				</div>
			</div>
		</c:if>
	</form>
</body>
</html>
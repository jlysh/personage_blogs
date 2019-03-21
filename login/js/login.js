$(function () {
    H_login = {};
    H_login.openLogin = function(){
        $('.login-header a').click(function(){
            $('.js_login').show();
            $('.login-bg').show();
        });
    };
    H_login.closeLogin = function(){
        $('.close-login').click(function(){
            $('.js_login').hide();
            $('.login-bg').hide();
        });
    };
    H_login.loginForm = function () {
        $("#login-sub").on('click', function () {
            //alert("OK");
            var username = $("#logusername");
            var usernameValue = $("#logusername").val();
            var password = $("#logpassword");
            var passwordValue = $("#logpassword").val();
            if(usernameValue == ""){
                alert("用户名不能为空");
                username.focus();
                return false;
            }else if(usernameValue.length > 15){
                alert("用户名长度不能大于15字符");
                username.focus();
                return false;
            }else if(passwordValue == ""){
                alert("密码不能为空");
                password.focus();
                return false;
            }else if(passwordValue.length < 6 || passwordValue.length > 30){
                alert("密码长度不能小于6或大于30位字符");
                password.focus();
                return false;
            }else{
                alert("登录成功");
                setTimeout(function(){
                    $('.js_login').hide();
                    $('.login-bg').hide();
                    $('.list-input').val('');
                },100);
            }
        });

        $("#Reg-sub").on('click', function () {
            var usernameValue = $("#username").val();
            var passwordValue = $("#password").val();
            var realNameValue = $("#realName").val();
            var telephoneValue = $("#telephone").val();
            var emailValue = $("#email").val();

            alert(usernameValue + passwordValue + realNameValue + telephoneValue + emailValue);
        });
    };
    H_login.run = function () {
        this.closeLogin();
        this.openLogin();
        this.loginForm();
    };
    H_login.run();
});
function switchTag(tag, content, k, n, stylea, styleb) {
    for (i = 1; i <= n; i++) {
        if (i == k) {
            document.getElementById(tag + i).className = stylea;
            document.getElementById(content + i).className = "showbox"

        } else {
            document.getElementById(tag + i).className = styleb;
            document.getElementById(content + i).className = "hidden"
        }
    }
};
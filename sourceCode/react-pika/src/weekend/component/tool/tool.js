export default (param = {}, pandName) => {
    console.log(param)
    // const { userName, passWord, email, passWordEnd ,vcode,checkBox,errcount} = param;
    const { phone, password, tpcode, yzcode, szpassword } = param;
    console.log(pandName)
    switch (pandName) {
        case 'dl': // 登录的时候
            if (phone === '' || phone.length < 11) {
                return {
                    status: false,
                    msg: '您的手机号不能为空,长度不小于11位'
                }
            }
            // 密码
            if (password === '' || password.length < 6 && password.length > 16) {
                return {
                    status: false,
                    msg: '您的密码不能为空,长度应在6-16位'
                }
            }
        // 



    }
    switch (pandName) {
        case 'zc': 
        // 手机号
        if (phone === '' || phone.length < 11) {
            return {
                status: false,
                msg: '您的手机号不能为空,长度不小于11位'
            }
        }
        // 图片验证码
            if (tpcode === '' || tpcode !== '12345') {
                return {
                    status: false,
                    msg: '图片验证码不正确且不能为空'
                }
            }
            if (yzcode === '' || yzcode.length < 6) {
                return {
                    status: false,
                    msg: '短信验证码不能为空,长度不小于6位'
                }
            }
            if (szpassword === '' || szpassword.length < 6 && szpassword.length > 16) {
                return {
                    status: false,
                    msg: '您的密码不能为空,长度6-16位'
                }
            }

    }
    return {
        status: true,
        msg: `恭喜,${pandName === 'login' ? '登录' : '注册'}成功!`
    }
}
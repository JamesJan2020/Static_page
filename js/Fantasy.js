



//打開member視窗
function showBox() {
    document.getElementById('mbid').style.display = "block";
}


//打開login視窗
function showLgbox() {
    document.getElementById('sup').style.display = 'block'
    document.getElementById('mbid').style.display = 'none'
}



// x 符號或 cancel 可關閉 ALL視窗
function closeBox() {
    document.getElementById('mbid').style.display = 'none'
    document.getElementById('sup').style.display = 'none'
    document.getElementById('fgpsw').style.display = 'none'
}


//打開忘記密碼視窗
function showpswBox() {
    document.getElementById('fgpsw').style.display = 'block'
    document.getElementById('mbid').style.display = 'none'
}

var signList = ["signupbox1", "signupbox2", "signupbox3"]
//輸入完註冊資料後按sign up跳出
function showMsg() {
    for (i = 0; i < signList.length; i++) {
        var cc = document.getElementById(signList[i]).value
        console.log(cc)
    }
    var flag
    if (cc != '') {
        var flag = confirm("資料確定是否正確 ⋋( ◕ ∧ ◕ )⋌");

    }
    if (flag == true) {
        alert('恭喜註冊成功 ໒( ͡ᵔ ▾ ͡ᵔ )७')
    }

}

function send(evt) {
    var evt = document.getElementById("emailbox").value
    console.log(evt)
    if (evt != '') {
        console.log(evt)
        alert('已將密碼送至信箱 ୧༼◕ ᴥ ◕༽୨')
    }
   

}


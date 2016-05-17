if(typeof WISA=="undefined"||!WISA){var WISA={};}WISA.namespace=function(){var A=arguments,E=null,C,B,D;for(C=0;C<A.length;C=C+1){D=A[C].split(".");E=WISA;for(B=(D[0]=="WISA")?1:0;B<D.length;B=B+1){E[D[B]]=E[D[B]]||{};E=E[D[B]];}}return E;};
WISA.namespace("util");

var disBg='#DBDBDB';

var NUM = "0123456789";
var DNUM = NUM+".";
var SALPHA = "abcdefghijklmnopqrstuvwxyz";
var ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+SALPHA;
var EMAIL = "!#$%&*+-./=?@^_`{|}"+NUM+ALPHA;
var PASSWORD = "!@.#,$%^*&_-"+ALPHA+NUM;

var oldNum=new Array();
oldNum['qna']='';
oldNum['rev']='';

var isCRM;
function CheckType(s,spc) {
    var i;
    for(i=0;i<s.length;i++) {
        if (spc.indexOf(s.substring(i, i+1)) < 0) {
            return false;
        }
    }
    return true;
}

function CheckSpaceAll(str){
    var index;
    var len;

    while(true){
        index=str.value.indexOf(" ");
        if(index==-1) break;
        len=str.value.length;
        str.value=str.value.substring(0,index) + str.value.substring((index+1), len);
    }

    return str.value;
}

function CheckSpace(str){
    var len;

    while(true){
        if (str.value.charAt(0) != " ") break;
        len=str.value.length;
        str.value=str.value.substring(1,len);
    }

    while(true){
        len=str.value.length;
        if (str.value.charAt(len-1) != " ") break;
        str.value=str.value.substring(0,len-1);
    }

return str.value;
}

// 글자수 체크하여 다음 From으로 이동
function nextTab(obj,nxt,len){
    if (obj.value.length>=len) nxt.focus();
}

function goNext(obj,len,fn){
    if (obj.value.length>=len) {
        document.getElementById(fn).focus();
    }
}

// Cookie Setting
function setConfig(name,value){
    setCookie( name, value, 365 );
    alert('설정이 저장되었습니다');
}

function setCookie( name, value, expiredays ){
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function getCookie( name ){
    var nameOfCookie = name + "=";
    var x = 0;
    while ( x <= document.cookie.length ) {
        var y = (x+nameOfCookie.length);
        if ( document.cookie.substring( x, y ) == nameOfCookie ) {
        if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
            endOfCookie = document.cookie.length;
            return unescape( document.cookie.substring( y, endOfCookie ) );
        }
        x = document.cookie.indexOf( " ", x ) + 1;
        if ( x == 0 )
            break;
    }
    return "";
}

function layTgl(obj) {
    if(!obj) return;
    if (obj.style.display=='none') obj.style.display = 'block';
    else obj.style.display = 'none';
}

function layerTgl(obj) {
    if(!obj) return;

    if( $("#"+obj).css("display") == "none" ){
        $("#"+obj).show();
    }
    else{
        $("#"+obj).hide();
    }
}

function layTgl2(obj_name) {
    obj=document.getElementById(obj_name);
    layTgl(obj);
}

function textDisable(o,d){
    if(!o) return; // fix
    if(d){
        o.style.backgroundColor='#EFEFEF';
        o.disabled=true;
    }else{
        o.style.backgroundColor='';
        o.disabled=false;
    }
}

function checkBlank(o,m){
    if (typeof o=='undefined'){
        return true;
    }

    if (!o.value){
        alert(m+' 입력하세요');
        o.focus();
        return false;
    }
    return true;
}

function checkSel(o,m){
    if(o.value ==''){
        alert(m+' 선택하세요');
        o.focus();
        return false;
    }
    return true;
}

function checkCB(obj,msg){
    icbk=0;
    if(obj) {
        if(obj.length){
            for (dh=0;dh<obj.length;dh++){
                if (obj[dh].checked==true){
                    icbk++;
                    break;
                }
            }
        }else if(obj.checked==true){
            icbk++;
        }
    }
    if(icbk<1){
        alert(msg+' 선택하세요');
        return false;
    }
    return true;
}

function checkAll(obj,ck){
    if(obj) {
        if(obj.length){
            for (i=0;i<obj.length;i++){
                obj[i].checked=ck;
            }
        }else{
            obj.checked=ck;
        }
    }
}

function checkOne(obj,i,ck){
    if(obj) {
        if(obj.length){
            obj[i].checked=ck;
        }else{
            obj.checked=ck;
        }
    }
}

//=== 숫자 0으로 자리수 만들기
function addzero(n) {
    return n < 10 ? "0" + n : n;
}


function addZeros(value, len) {
    value = "" + value;

    if (value.length < len) {
        for (var i=0; i<(len-value.length); i++)
            value = "0" + value;
    }

    return value;
};

function checkNum(o, m, d) {
    if(!CheckType(o.value, NUM)){
        alert(m+' 숫자만 입력하셔야 합니다');
        if(!d)	d = '';
        o.value=d;
        o.focus();
        return false;
    }
    return true;
}

function wisaOpen(url,name,scroll,w,h){
    if (!scroll) scroll='no';
    if (!w) w='100';
    if (!h) h='100';
    if (isCRM) crmFrm.location.href = url;
    else window.open(url,name,'top=10,left=10,height='+h+',width='+w+',status=yes,resizable=yes,scrollbars='+scroll+',toolbar=no,menubar=no');
}


function selfResize(){
    self.resizeTo(document.body.scrollWidth , document.body.scrollHeight);
}

function selfResize2(a,b){
    if (!a) a=0;
    if (!b) b=0;
    self.resizeTo(document.body.scrollWidth+b , document.body.scrollHeight+a);
}

function Resize(w,h){
    if(!w) w = parseInt(document.body.scrollWidth);
    if(!h) h = parseInt(document.body.scrollHeight);
    var maxThisX = screen.width - 36;
    var maxThisY = screen.height - 150;
    var marginY = 0;

    // 브라우저별 높이 조절. (표준 창 하에서 조절해 주십시오.)
    if (navigator.userAgent.indexOf("MSIE 6") > 0) marginY = 45;        // IE 6.x
    else if(navigator.userAgent.indexOf("MSIE") > 0) marginY = 75;		// IE 7.x
    else if(navigator.userAgent.indexOf("Firefox") > 0) marginY = 50;   // FF
    else if(navigator.userAgent.indexOf("Opera") > 0) marginY = 30;     // Opera
    else if(navigator.userAgent.indexOf("Netscape") > 0) marginY = -2;  // Netscape
    else if(navigator.userAgent.indexOf("Chrome") > 0) marginY = 70;	// Chrome

    if(w > maxThisX){
        w = maxThisX;
    }
    if(h > maxThisY - marginY){
        w += 19;
        h = maxThisY - marginY;
    }
    window.resizeTo(w+24, h+marginY);

    // 센터 정렬
    var windowX = (screen.width - (w + 10))/2;
    var windowY = (screen.height - (h + marginY))/2 - 20;
    window.moveTo(windowX,windowY);
}

function zipSearch(form_nm,zip_nm,addr1_nm,addr2_nm,adm){
    srurl=root_url+'/zipcode/zipsearch.frm.php?form_nm='+form_nm+'&zip_nm='+zip_nm+'&addr1_nm='+addr1_nm+'&addr2_nm='+addr2_nm;
    window.open(srurl,'_blank', ('scrollbars=yes,resizable=no,width=374, height=170'));
}

function CheckMail(email){
    aindex=email.indexOf("@");
    //dotindex=email.indexOf(".");

    //if (aindex==-1 || dotindex==-1 || aindex >= (dotindex-1)) return false;
    if (aindex==-1) return false;
    return true;
}

function isEmpty(data){
    for(ii=0; ii<data.length; ii++){
        if(data.substring(ii, ii+1) != " ") return false;
    }
    return true;
}

function checkPhone(o,m){
    var r=9;
    var regs = [/^[0]\d{1,3}$/, /^\d{3,4}$/, /^\d{4}$/];

    for( var i=0; i<3 ;i++ ){
        if( isEmpty(o[i].value) || (o[i].value).match(regs[i]) == null ) {
            r=i;
            break;
        }
    }
    return r;
}

function chgEmail(txt,sel,current){
    if(typeof sel=='undefined'){
        return;
    }
    if(current){
        for(i=0;i<sel.length;i++){
            if(sel[i].value==current){
                sel.selectedIndex=i;
                break;
            }
        }

        if(sel.selectedIndex==0) sel.selectedIndex=sel.length-1;
    }else{
        txt.value=sel.value;
    }

    if(sel.selectedIndex>0){
        txt.readOnly=true;
        txt.style.backgroundColor=disBg;
    }else{
        txt.readOnly=false;
        txt.style.backgroundColor='';
    }
}

function zipInput(o){
    if(o.value=='한글 입력 상태'){
        o.value='';
    }
}

var openssl_bak = "";
function checkLoginFrm(f){
    if (!checkBlank(f.member_id, "아이디를")) {
        return false;
    }

    if (f.member_type && !checkCB(f.member_type, "개인/기업회원을")) {
        return false;
    }

    if (!checkBlank(f.pwd,"비밀번호를")) {
        return false;
    }

    return true;
}

function checkGuestOrderFrm(f){
    if(!checkBlank(f.ono,"주문번호를")) return false;
    if(!checkBlank(f.phone,"전화번호를")) return false;

    /*
    if (f.setOpenSSL) { // 전역변수 setOpenSSL 은 common.js 에 선언되어있습니다
        if (!openssl_bak) openssl_bak = f.action;
        f.action = (f.setOpenSSL.checked == true) ? ssl_url : openssl_bak;
    }
    */
    f.target = "_self";

    if ($(f).find("input[name=setOpenSSL]").size() > 0)
    {
        if ($(f).find("input[name=setOpenSSL]").prop("checked") == false)
        {
            ssl_tunnel_use = false;
            f.action = "/mypage/order_detail.php";
        }
    }

    //ssl tunnel 사용
    if( ssl_tunnel_use === true ){
        if( typeof f.include_file == "undefined" ){
            makeElements(f, "hidden", "include_file", f.action);
        }
        f.action = ssl_tunnel_url;
        f.target = "_self";
        $.ajax({
            url: "/api/sslcontrolapi.php?route_path_type=exe",
            type: "post",
            data: "",
            dataType: "html",
            async  : false
        }).done(function(obj) {

        }).fail(function() {

        });
    }


}

function memberOnly(u,c,t){
    if(mlv==10){
        if(c==1 && !confirm('\n 로그인이 필요한 서비스입니다          \n\n 로그인하시겠습니까? \n')){
            if(t==1) return false;
            else return;
            u='';
        }
        u=root_url+'/member/login.php?rURL='+escape(u);
    }
    if(u && t!=3){
        location.href=u;
    }else if(t==1 || t==3){
        return true;
    }
}

function checkSearchFrm(f){
    if(!checkBlank(f.search_str,"검색어를")) return false;
}

function layTglList(old,lay_name,lay_no){
    if(oldNum[old]!=lay_no){
        if(oldNum[old]){
            if(document.getElementById(lay_name+oldNum[old])) document.getElementById(lay_name+oldNum[old]).style.display="none";
        }
        if(document.getElementById(lay_name+lay_no)) document.getElementById(lay_name+lay_no).style.display="block";
        oldNum[old]=lay_no;
    }else{
        if(document.getElementById(lay_name+lay_no)) document.getElementById(lay_name+lay_no).style.display="none";
        oldNum[old]="";
    }
}

function setComma(str,xx){
    var retValue = "";
    if(str && !CheckType(str, NUM+'-,') && !xx) {
        alert('숫자만 입력하셔야 합니다 - '+str);
        return 0;
    }
    var num = String(str).replace(/,/g,'');
    return num.replace(/(\d)(?=(?:\d{3})+(?!\d))/g,'$1,');
}

function removeComma(str)
{
    if(str!=""){
        str=str.replace(/,/g, "");
        str=str.replace(/\./g, "");
        str=eval(str);
    }
    return str
}

function kcpCardReceipt(tno){
    url='http://admin.kcp.co.kr/Modules/Sale/Card/ADSA_CARD_BILL_Receipt.jsp?c_trade_no='+tno
    window.open(url,name,'top=10,left=10,height=700,width=440,status=no,scrollbars=yes,toolbar=no,menubar=no');
}

function kcpBankReceipt(tno){
    url = 'https://admin.kcp.co.kr/Modules/Bill/ADSA_ACNT_N_Receipt.jsp?a_trade_no='+tno;
    window.open(url,name,'top=10,left=10,height=700,width=440,status=no,scrollbars=yes,toolbar=no,menubar=no');
}

function inicisCardReceipt(tid) {	// 이니시스 영수증 출력
    var receiptUrl = "https://iniweb.inicis.com/DefaultWebApp/mall/cr/cm/mCmReceipt_head.jsp?noTid=" + tid + "&noMethod=1";
    window.open(receiptUrl,"receipt","width=430,height=700");
}

function closePopup(popup){
    setCookie(popup,'Y',1);
    window.close();
}

function closePopup2(popup,n){
    setCookie(popup,'Y',1);
    layTgl2('wm_popup_'+n);
}

function closePopup7(popup,n){
    setCookie(popup,'Y',7);
    layTgl2('wm_popup_'+n);
}

function closePopup3(url){
    if(url){
        parent.document.location.href=url;
    }
    window.close();
}

function newEMAILpwd(){
    url=root_url+'/member/find_step1.php?first=1';
    location.href = url;
    //window.open(url,name,'top=10,left=10,height=200,width=450,status=no,scrollbars=no,toolbar=no,menubar=no');
}

function click_prd_scroll(t){
    if(click_prd.length<1){
        return;
    }
    if(t=="+"){
        tmp=click_prd_finish+1;
        if(tmp>click_prd.length){
            alert('최근 본 상품의 마지막 상품입니다');
            return;
        }
        click_prd_start++;
        click_prd_finish++;
    }else{
        tmp=click_prd_finish-1;
        //if (tmp<0)
        if (tmp==click_prd_limit){
            alert('최근 본 상품의 첫번째 상품입니다');
            return;
        }
        click_prd_start--;
        click_prd_finish--;
    }

    for(i=click_prd_start;i<click_prd_finish;i++){
        tmp=i-click_prd_start;
        document.getElementById('click_prd_title'+tmp).innerHTML=click_prd[i];
    }
}

function viewMember2(n,id){
    if(id==undefined) id='';
    nurl=root_url+'/manage/crm/index.frm.php?q=m'+n;
    window.open(nurl,'view_member','top=10,left=10,width=950,status=no,toolbars=no,scrollbars=yes');
}

function flashMovie(fid,src,wid,hei,fvs,wmd) {
  this.fPrint = '';
  this.Id = document.getElementById(fid);
  this.Src = src;
  this.Width = wid;
  this.Height = hei;
  this.FlashVars = (fvs != undefined)? fvs :'';
  this.Wmod = (wmd != undefined)? wmd :'';
  if(isObject(Id)) {

    fPrint = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="'+Width+'" height="'+Height+'" id="wisa_'+fid+'">';
    fPrint += '<param name="movie" value="'+Src+'">';
    fPrint += '<param name="allowScriptAccess" value="always" />';
    fPrint += '<param name="allowFullScreen" value="false" />';
    fPrint += '<param name="quality" value="high">';
    fPrint += (FlashVars != null) ? '<param name="FlashVars" value="'+FlashVars+'">' : '';
    fPrint += (Wmod != null) ? '<param name="wmode" value="'+Wmod+'">' : '';
    fPrint += '<embed';
    fPrint += ' src="'+Src+'"';
    fPrint += (FlashVars != null) ? ' FlashVars="'+FlashVars+'"' : '';
    fPrint += (Wmod != null) ? ' wmode="'+Wmod+'"' : '';
    fPrint += ' quality="high"';
    fPrint += ' allowScriptAccess="always"';
    fPrint += ' allowFullScreen="false"';
    fPrint += ' pluginspage="http://www.macromedia.com/go/getflashplayer"';
    fPrint += ' type="application/x-shockwave-flash" ';
    fPrint += ' width="'+Width+'"';
    fPrint += ' height="'+Height+'"';
    fPrint += '></embed>';
    fPrint += '</object>';
    Id.innerHTML = fPrint;
  }
}

function isObject(a) {
    return (a && typeof a == 'object');
}

function flashMovie2(fid,src,wid,hei,fvs,wmd) {
  this.fPrint = '';
  this.Id = document.getElementById(fid);
  this.Src = src;
  this.Width = wid;
  this.Height = hei;
  this.FlashVars = (fvs != undefined)? fvs :'';
  this.Wmod = (wmd != undefined)? wmd :'';
  if(isObject(Id)) {
    fPrint = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"';
    fPrint += ' width="'+Width+'"';
    fPrint += ' height="'+Height+'">';
    fPrint += '<param name="movie" value="'+Src+'">';
    fPrint += '<param name="quality" value="high">';
    fPrint += (FlashVars != null) ? '<param name="FlashVars" value="'+FlashVars+'">' : '';
    fPrint += (Wmod != null) ? '<param name="wmode" value="'+Wmod+'">' : '';
    fPrint += '<embed';
    fPrint += fPrint + ' src="'+Src+'"';
    fPrint += (FlashVars != null) ? ' FlashVars="'+FlashVars+'"' : '';
    fPrint += (Wmod != null) ? ' wmode="'+Wmod+'"' : '';
    fPrint += ' quality="high"';
    fPrint += ' pluginspage="http://www.macromedia.com/go/getflashplayer"';
    fPrint += ' type="application/x-shockwave-flash"';
    fPrint += ' width="'+Width+'"';
    fPrint += ' height="'+Height+'"';
    fPrint += '></embed>';
    fPrint += '</object>';
    Id.innerHTML = fPrint;
  }
}

function viewWMMsg(n) {
    if (n) url=root_url+'/mypage/msg_view.php?no='+n;
    else url=root_url+'/mypage/msg_list.php?mode=1';
    wisaOpen(url,'wmMgsWin');
}

function sendMsg(n){
    if (mlv==10){
        alert('로그인하십시오');
        return;
    }
    nurl=root_url+'/mypage/msg_send.php?mode=1&mno='+n;
    window.open(nurl,'sendMSGW',"top=10, left=10, width=450, height=100, status=no, toolbars=no, scrollbars=yes, resizable=yes");
}

function trim(str){
    str = str.replace(/^\s*/,'').replace(/\s*$/, '');
    return str;
}

function qmc_check(o){
    if(o.checked==true){
        r='Y';
    }
    else r='N';

    setCookie('quick_menu_move_check',r,365);
}

function seImgSize(o,width){
    if(o.width>width){
        o.style.width=width+'px';
    }
}
function AdminMailSend(url,w,h){ // 2006-12-10 : 관리자에게메일 - Han
    if(!w) w=500; if(!h) h=500;
    Op=window.open(url, "AdminM", "width="+w+", height="+h+", status=no, scrollbars=yes");
    Op.focus();
}

function adminMSck(f){
    if(!checkBlank(f.from_name,"이름을")) return false;
    if(!checkBlank(f.from_email,"이메일을")) return false;
    if(!checkBlank(f.sub,"제목을")) return false;
    if(!checkBlank(f.content,"내용을")) return false;
}

function getHttpRequest(URL,method) { // Ajax 사용함수

    nochache = new Date();

    if( URL.indexOf("?") < 0) URL += "?";

    //URL = URL+"&ncache="+nochache; 익스 11에서 세션 종료되어서 주석 처리함
    if( method == null ) method = "GET";

    var xmlhttp = null;
    if(window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else 	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.open(method, URL, false);

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState==4 && xmlhttp.status == 200 && xmlhttp.statusText=='OK'){
            responseText = xmlhttp.responseText;
        }
    }
    xmlhttp.send('');

    return responseText = xmlhttp.responseText;
}

function createBackDiv(target, bgC){
    w=830;
    h=500;
    bw=target.document.body.clientWidth;
    bh=target.document.body.scrollHeight;
    bh2=target.document.body.clientHeight;
    posX=(bw-w)/2;
    posY=(bh-h)/2;

    if(!target.document.getElementById('dmMainBgDiv')){
        obj=target.document.createElement('div');
        with(obj.style){
            position='absolute';
            left=0;
            top=0;
            width='100%';
            height=(bh < bh2) ? bh2 : bh;
            backgroundColor='#000000';
            filter='Alpha(Opacity=50)';
            opacity='0.5';
            zIndex='50';
        }
        obj.id='dmMainBgDiv';
        target.document.body.appendChild(obj);
        obj.innerHTML='<iframe src="about:blank" style="width:100%; height:100%; filter=\'Alpha(Opacity=0);\'"></iframe>';

        obj=target.document.createElement('div');
        with(obj.style){
            position='absolute';
            left=posX;
            top=10;
            width=w;
            height=bh2-20;
            if(bgC) backgroundColor=bgC;
            zIndex='100';
        }
        obj.id='dmMainDiv';
        target.document.body.appendChild(obj);
    }
}

function finishedHosting(url, type){
    createBackDiv(this, '');
    bh=document.body.clientHeight;
    posY=(bh-417)/2;
    div=document.getElementById('dmMainDiv');
    if(type == 1){ // 사용자
        content='<img src="'+url+'/_manage/image/service/hosting_end2.gif" width="550" height="417">';
    }else{
        content='<img src="'+url+'/_manage/image/service/hosting_end1.gif" width="550" height="417" usemap="#goExtend">\n';
        content+='<map name="goExtend"><area shape="rect" href="./?body=service@service_main&stype=1" coords="212,180,339,220"></map>';
    }
    div.innerHTML='<div id="finishHDiv" align="center" style="padding-top:'+posY+'px;">'+content+'</div>';
}

function wclose() {
    if(parent.isCRM){
        var frm = parent.document.getElementById("crmFrm");
        frmHeight = frm.offsetHeight;
        if (frm) frm.style.height = 0;

        parent.Resize(parent.document.body.scrollWidth, parent.document.body.scrollHeight);
        parent.document.getElementById("crmDiv").style.overflow = "hidden";
    }else{
        window.close();
    }
}

// 2012-05-24 네이버마일리지안내 cham
function divNvInfoClick() {
    var pop = window.open("http://static.mileage.naver.net/static/20120112/ext/intro.html","mileageIntroPopup", "width=404, height=320, status=no, resizable=no");
    pop.focus();
}

// 2012-06-20 네이버마일리지적립/사용팝업 cham
function naverMilageAccumPopup(url, api_id) {
    var f=document.ordFrm;
    var maxUseAmount=parseInt(f.totalPayAmount.value) + parseInt(f.totalUseAmount.value); // 실결제금액 + 네이버마일리지 + 캐시
    var reqTxId=f.reqTxId.value;

    if(inflowParam != false) var Ncisy=Base64.decode(getCookie('NA_MI'));
    else Ncisy='';

    var pop = window.open(url+"&Ncisy="+Ncisy+"&maxUseAmount="+maxUseAmount+"&reqTxId="+reqTxId, "milagePopup"+api_id, "width=496, height=434, status=no, resiable=no");
    pop.focus();
}

//=== iFrame의 Height를 자동 조절 : openlife : 2012.05.24
reSize=function(obj){

    try{
        if(obj.src != 'about:blank'){
            var objBody=obj.contentWindow.document.body;
            var ifrmHeight=(objBody.scrollHeight)?objBody.offsetHeight:100;
            obj.style.height=ifrmHeight+'px';

        }
    } catch(e) { }
    ckTime=function(){
        reSize(obj);
    };
    setTimeout(ckTime,3000);
};

/**************************************************************************************
Subject : WISA.util.ttManager
Writer : Tony Lee (openlife)
Date : 2012.05.16
Comment : Layer Tool Tip when mouseover
#Constructor
    var tm = new WISA.util.ttManager ( 'tooltip') ;
    tm.setEvtHandler ( 'tArea', 'tAttr' ) ;
#Requirement
    jquery-1.10.2.js
**************************************************************************************/
WISA.util.ttManager = function ( pTtID ){
    if ( pTtID ){this.init( pTtID);}
};
// member variables.
WISA.util.ttManager.prototype =
{
    sAttrName:null,
    oToolTip:null,
    offW : null,
    offH : null,
    sOldTT:null,
    oTarget:null,
    nXY:null,
    nAddX:5,
    nAddY:15,

    // mouse move event callback func.
    ttMv: function(e)
    {
        var param = e.data;
        var THIS = param.THIS ;
        THIS.sAttrName = param.attrName ;
        THIS.oTarget = THIS.getTarget(e,this) ;
        //THIS.oTarget = jQuery(this);

        // get user define attribute value.
        var ttText = THIS.oTarget.getAttribute(THIS.sAttrName) ;

        // hide tooptip.
        if ( !ttText )
        {
            jQuery(THIS.oToolTip).css('left','-2000px') ;
        }
        // get tooltip's region what user define attribute is exist.
        else
        {
            THIS.nXY = [e.pageX,e.pageY];
            // set text width
            if(param.size)
            {
                jQuery(THIS.oToolTip).css('width', param.size+'px' ) ;
            }
            else
            {
                if ( ttText.length >= 40 )
                {jQuery(THIS.oToolTip).css( 'width', '200px' ) ;}
                else
                {jQuery(THIS.oToolTip).css( 'width', 'auto' ) ;}
            }

            //=== 중복 Dom 구조에서 잘못된 text 방지 : 이미 들어간 text는 다시 넣지 않는다.
            if ( THIS.sOldTT != ttText )
            {
                THIS.oToolTip.innerHTML =  ttText;
                THIS.offW = THIS.oToolTip.offsetWidth;
                THIS.offH = THIS.oToolTip.offsetHeight;
                THIS.sOldTT = ttText ;
            }
            THIS.setPos() ;
        }
    },
    // check window's edge position.
    setPos: function()
    {
        var nScrWidth = jQuery(window).width() - 5 ;
        var nScrHeight = jQuery(window).height() - 5 ;
        if(document.body.scrollWidth-nScrWidth > 0) {
            var aScrX = document.body.scrollWidth-nScrWidth;
        }else{
            var aScrX = 0;
        }

        if(document.body.scrollHeight-nScrHeight > 0) {
            var aScrY = document.body.scrollHeight-nScrHeight;
        }else{
            var aScrY = 0;
        }


        var aScrollXY = [aScrY,aScrX];

        if(this.nXY[0] + this.offW + this.nAddX > nScrWidth + aScrollXY[1] )
        {
            this.nXY[0] = (nScrWidth + aScrollXY[1]) - this.offW- this.nAddX ;
        }

        if( this.nXY[1] + this.offH + this.nAddY > nScrHeight + aScrollXY[0] )
        {
            this.nXY[1] = this.oTarget.offsetTop - this.offH - this.nAddY ;
        }

        jQuery(this.oToolTip).css('left',parseInt(this.nXY[0]+this.nAddX)).css('top',parseInt(this.nXY[1]+this.nAddY));
    },
    // get event's target.
    getTarget: function(ev,root)
    {
        var t = ev.target || ev.srcElement;

        // save origin node.
        this.oOriginNode = t ;

        return this.resolveAttrNode(t,root) ;
    },
    // get attribute contains target recursive func. if arrived root node return origin node.
    resolveAttrNode: function(node, root)
    {
        if ( node.getAttribute( this.sAttrName ) )
        {
            return node;
        }
        // check current node id.
        else if ( node == root || node.nodeName.toUpperCase() == 'BODY')
        {
            return this.oOriginNode ;
        }
        else
        {
            return this.resolveAttrNode ( node.parentNode, root ) ;
        }

    },
    // set tooltip's distance from cursor.
    setTTDistance : function ( pX, pY )
    {
        this.nAddX = pX ;
        this.nAddY = pY ;
    },
    // event attach func.
    setEvtHandler : function ( psID, psAttr, pnSize )
    {
        var param = {
            THIS : this,
            attrName : psAttr,
            size : pnSize
        };
        var ckObj = document.getElementById(psID);
        if(!ckObj)
        {
            return;
        }

        jQuery('#'+psID).bind('mouseover',param,this.ttMv) ;
    },
    // initialize.
    init: function( tID )
    {
       this.oToolTip = document.getElementById(tID) ;

        if ( ! this.oToolTip )
        {
            return;
        }
    }
};

// slideEffect creater.
WISA.util.slideEffect = function ( poConfig )
{
    if ( poConfig )	{	this.init( poConfig ) ;	}
};

// slideEffect Member Method.
WISA.util.slideEffect.prototype =
{
    bShowFlag:false,
    oContents: null,
    oCover : null,
    oOldCover : null,
    oTarget: null,
    oOldTarget : null,
    oContentsRegion : null,

    showAni:function( poNode )
    {
        this.bShowFlag = true;
        var oAttr = this.setAttr( this.oContents.offsetWidth, this.oContents.offsetHeight ) ;
        this.anim( poNode, oAttr ) ;
    },

    hideAni:function( poNode )
    {
        this.bShowFlag = false;
        var oAttr ;
        switch ( this.oCfg.sDirection )
        {
            case 'horizonal' :
                oAttr = this.setAttr( 0, poNode.offsetHeight ) ;
            break;

            case 'vertical' :
                oAttr = this.setAttr( poNode.offsetWidth, 0 ) ;
            break;

            case 'diagonal' :
                oAttr = this.setAttr( 0, 0 ) ;
            break;
        }
        this.anim( poNode, oAttr ) ;
    },

    toggleAni : function ( psAttrVal )
    {
        if ( this.getElement() )
        {
            this.showAni ( this.oCover ) ;
            this.chgTabStyle ( this.oTarget, true ) ;

            if ( this.oOldCover && this.oOldCover != this.oCover )
            {
                this.hideAni( this.oOldCover ) ;
                this.chgTabStyle ( this.oOldTarget, false ) ;
            }

            // save last element.
            this.oOldTarget = this.oTarget ;
            this.oOldCover = this.oCover ;
        }
        else
        {
            this.hideAni ( this.oCover ) ;
            this.chgTabStyle ( this.oTarget, false ) ;
        }
    },

    // set animation attribute.
    setAttr:function( w, h )
    {
        var oAttr =
        {
              width: { to: w },
              height: { to : h }
        };

        return oAttr ;
    },

    chgTabStyle : function ( poNode, pbIsShow )
    {
        if ( pbIsShow )
        {
            this.controlClass ( poNode, this.oCfg.sOffClass, this.oCfg.sOnClass ) ;
        }
        else
        {
            this.controlClass ( poNode, this.oCfg.sOnClass, this.oCfg.sOffClass ) ;
        }
    },

    controlClass : function ( poNode, psRmClass, psAddClass )
    {
        if ( psRmClass.length )
        {
            jQuery(poNode).removeClass(psRmClass);
        }
        jQuery(poNode).addClass(psAddClass);
    },

    anim:function( poNode, poAttr )
    {
          jQuery(poNode).animate({
                width: poAttr['width']['to'],
                height: poAttr['height']['to']
              },
              this.oCfg.sAniSpeed,this.oCfg.sAniType);
    },

    toggleEvtAction:function (e)
    {
        if ( slideEffectObj.setElement(e) )
        {
            slideEffectObj.toggleAni () ;
        }
    },

    setElement:function ( e )
    {
        this.oTarget = e.target ;
        this.sAttrVal = this.oTarget.getAttribute ( this.oCfg.sAttrName ) ;
        if ( this.sAttrVal )
        {
            var aAttr = this.sAttrVal.split('|') ;
            if ( aAttr instanceof Array )
            {
                this.oCover = document.getElementById ( aAttr[0] ) ;
                this.oContents = document.getElementById ( aAttr[1] ) ;

                if ( this.oCover && this.oContents )
                {
                    return true ;
                }
            }
        }
        else
        {
            return false;
        }
    },

    getElement:function ()
    {
        switch ( this.oCfg.sDirection )
        {
            case 'vertical' :
                jQuery(this.oCover).attr('width', this.oContents.offsetWidth + 'px');
                return this.oCover.offsetHeight ? false : true ;
            break;

            case 'horizonal' :
                jQuery(this.oCover).attr('height', this.oContents.offsetHeight + 'px');
                return this.oCover.offsetWidth ? false : true ;
            break;

            case 'diagonal' :
                return (this.oCover.offsetWidth && this.oCover.offsetHeight ) ? false : true ;
            break;
        }
    },

    chkClose:function ( e )
    {
        jQuery(slideEffectObj.oCover).mouseleave(function(){
            slideEffectObj.hideAni ( slideEffectObj.oOldCover ) ;
            slideEffectObj.chgTabStyle ( slideEffectObj.oOldTarget, false ) ;
         });
    },

    setEvtHandler:function( sEvtID, sEvtType )
    {

        jQuery('#'+sEvtID).bind(sEvtType,this.toggleEvtAction);
        if(sEvtType == 'click')
        {
            jQuery(document).bind(sEvtType,this.chkClose);
        }
        else if(sEvtType == 'mouseover')
        {
            jQuery(document).bind(sEvtType,this.chkClose);
        }
    },

    init:function( poConfig )
    {
        this.oCfg = poConfig ;
    }

};

/////////////////////////////////////////////////////////////////////////////////////
// * Auto Type Completion 1.0.0
// *
// * Created on 2007. 04. 02
// * Author: Hyungsang Lee (openlife@wisa.co.kr)
////////////////////////////////////////////////////////////////////////////////////

WISA.util.autoComp = function(poConfig){ this.init(poConfig); };

WISA.util.autoComp.prototype =
{
    vars         : null,
    nAtcStep	 : 0,
    oYksrchInput : null,
    oYksrchForm  : null,
    oAtcIframe   : null,
    oDivATC      : null,

    atcEventListner : function(e)
    {
        var THIS = e.data;
        if (THIS.nAtcStep != 2)
        {
            if (jQuery(THIS.oDivATC).css('display') == 'none')
            {
                //YAHOO.util.Dom.setStyle(THIS.oDivATC,'display', 'block');
            }
            THIS.atcLoad();
        }
    },

    atcClickEventListner : function (e)
    {
        var THIS = e.data;
        if (THIS.nAtcStep == 2)
        {
            if(THIS.oAtcIframe.contentWindow.ykAutoComp_s == 'undefined')
            {
                if (jQuery(THIS.oDivATC).css('display') == 'none')
                {
                    THIS.oAtcIframe.contentWindow.ykAutoComp_s.start_key_monitor();
                }
                else
                {
                    jQuery(THIS.oDivATC).css('display', 'none');
                    e.cancelBubble = true;
                }
            }
        }
        else
        {
            THIS.atcLoad();
        }
    },

    atcLoad : function ()
    {
        if (this.nAtcStep == 0)
        {
            this.nAtcStep = 1;
            this.oAtcIframe.src = this.vars.iframeSrc;

        }
    },

    chkClose : function (e)
    {
        var THIS = e.data;

        if(jQuery(THIS.oDivATC).css('display') != 'none')
        {
            THIS.oAtcIframe.contentWindow.ykAutoComp_s.atcClose();
        }
    },

    init : function(poConfig)
    {
        this.vars = poConfig ;
        this.oYksrchHandler = this.vars.srchHandler; //=== search result handler - 2013.05.16 added by kurokisi
        this.oYksrchInput = document.getElementById(this.vars.srchInput); //=== search word
        this.oYksrchForm = document.getElementById(this.vars.srchForm); //=== search Form
        this.oAtcIframe = document.getElementById(this.vars.iframeId); //== iframe id for result page
        this.oDivATC = document.getElementById(this.vars.viewLayer);  //=== autocomplete layer

        jQuery(this.oYksrchInput).bind('keyup',this,this.atcEventListner);
        jQuery(this.oYksrchInput).bind('click',this,this.atcClickEventListner);

        // for Check Close Region.
        jQuery(document.body).bind('click',this,this.chkClose) ;
    }
};

//=== 상품별 분석(Product Analisys)
WISA.util.prdStatus = function ()
{
    this.init();
};

WISA.util.prdStatus.prototype = 
{	
    moFlag : 0,
    aHash : [],
    oData : [],
    sDate : 0,
    eDate : 0,
    clr1  : getCookie('clr1'),
    clr2  : getCookie('clr2'),
    clr3  : getCookie('clr3'),

    init : function()
    {
        this.getDomTree();
    },

    getDomTree : function() {
        var aTag = $('.prd_img a');
        var aTagLen = aTag.length;
        var pHash, pLink, obj, i, j, tag, btn;

        if(aTagLen>0) {
            for(i=0;i<aTagLen;i++) {
                obj = aTag[i];
                //=== Exception for Commerce Link
                try{
                    pLink = $(obj).attr('href');
                    if(pLink!=null)
                    {
                        pHash = pLink.replace("/shop/detail.php?hash=","").substring(0,5);

                        if(pHash!='')
                        {
                            this.aHash[i] = pHash;
                            tag = "<div id='pa_"+i+"' style='position:absolute;background:#D4F4FA;top:0;left:0;border:1px solid gray;width:80px;height:60px;text-align:left;padding:4px;'>준비중...</div>";
                            $(aTag[i]).parent().css('position','relative').append(tag);
                        }
                    }
                }catch(e) {}
            }

            this.getListData();

            btn = "<div id='prdCtrlPannel' style='position:fixed;right:10px;top:10px;width:40px;padding:5px;border:1px solid #bbb;border-radius:10px;color:#717171;background:#f9f8f8;text-align:center;z-index:9999;line-height:30px;'><a href='###' onClick=\"prdStatus.setCtrl('open');\">설정</a></div>";
            $(document.body).append(btn);
        }
    },

    getListData : function() {
        var pVal = this.aHash;
        this.sDate = getCookie('sDate');
        this.eDate = getCookie('eDate');
        var THIS = this;
        $.post('/include/ajaxPrdAnalisys.exe.php',{
                "aHash":pVal,
                "sDate":this.sDate,
                "eDate":this.eDate
            },function(oJson){
                THIS.setViewData(oJson);
            },'json');
    },

    setViewData : function(nData) {

        var aHashLen = this.aHash.length;

        for(i=0;i<aHashLen;i++) {
            if(this.moFlag == 0) {
                this.setViewTag(i,nData);
            }else{
                if(parseInt(nData[i].hit) > parseInt(this.oData[i].hit)) {
                    this.setViewTag(i,nData);
                }
            }

            if(this.clr1 !='' && this.clr1 <= nData[i].ratio){
                $('#pa_'+i).css('background','#FFD8D8');
            }

            if(this.clr2 !='' && this.clr2 <= nData[i].ratio){
                $('#pa_'+i).css('background','#CEFBC9');
            }

            if(this.clr3 !='' && this.clr3 <= nData[i].ratio){
                $('#pa_'+i).css('background','#FFD9FA');
            }
        }

        this.oData = nData;
        this.moFlag = 1;
        var THIS = this ;

        sPrdMonitor = function()
        {
            THIS.getListData();
        };
        setTimeout (sPrdMonitor, "3000");

    },

    setViewTag : function (i, nData) {
        tag = "<ul style='letter-spacing:normal;'><li>Hit : "+nData[i].hit+"</li><li>Order : "+nData[i].order+"</li><li>Rate : "+nData[i].ratio+"%</li><li>Price : "+nData[i].price+"</li></ul>";
        $('#pa_'+i).html(tag).fadeOut('slow').fadeIn('slow');
    },

    setEvtHandler : function ( sDate, eDate )
    {
        this.sDate = sDate.replace(/-/gi,'');
        this.eDate = eDate.replace(/-/gi,'');

        setCookie( 'sDate', this.sDate, 365 );
        setCookie( 'eDate', this.eDate, 365 );
    },

    setCtrl : function (cdtn)
    {
        if(cdtn == 'open') {
            var ctrlTag = "<form name='setPrdStatus' style='padding:10px;'><table cellspacing='0' cellpadding='0' class='table table-horizon' style='width:100%;'>";
                ctrlTag +=	"<tr>";
                ctrlTag +=   "<th scope='row' style='padding:7px 5px 7px 0;'>기간설정 : </th>";
                ctrlTag +=   "<td>";
                ctrlTag +=   "<div class='btn-group' style='text-align:left;width:100%;'>";
                ctrlTag +=   "<button type='button' style='border:1px solid #ddd; background:#fff;' onClick=\"setSearchDate(this, '0 day', '#start_date', '#finish_date')\" >오늘</button>";
                ctrlTag +=   "<button type='button' style='margin:0 2px; border:1px solid #ddd; background:#fff;' onClick=\"setSearchDate(this, '-7 day', '#start_date', '#finish_date')\" >1주일</button>";
                ctrlTag +=   "<button type='button' style='border:1px solid #ddd; background:#fff;' onClick=\"setSearchDate(this, '-15 day', '#start_date', '#finish_date')\" >15일</button>";
                ctrlTag +=   "<button type='button' style='margin:0 2px; border:1px solid #ddd; background:#fff;' onClick=\"setSearchDate(this, '-1 month', '#start_date', '#finish_date')\" >1개월</button>";
                ctrlTag +=   "<button type='button' style='border:1px solid #ddd; background:#fff;' onClick=\"setSearchDate(this, '-3 month', '#start_date', '#finish_date')\" >3개월</button>";
                //ctrlTag +=   "<button type='button' class='btn' onClick=\"setSearchDate(this, '-6 month', '#start_date', '#finish_date')\" >6개월</button>";
                ctrlTag +=   "<button type='button' style='margin:0 2px; border:1px solid #ddd; background:#fff;' onClick=\"setSearchDate(this, '', '#start_date', '#finish_date')\" >전체</button>";


                ctrlTag +=   "<span style='display:none;'><input type='checkbox' id='all_date' name='all_date' value='Y'  onClick='searchDate(this.form)' /> 전체 기간</span>";
                ctrlTag +=   "<input type='text' id='start_date' name='start_date' value='"+this.sDate.substr(0,4)+"-"+this.sDate.substr(4,2)+"-"+this.sDate.substr(6,2)+"' class='input'  style='cursor:pointer;width:80px;' /> ~ <input type='text' id='finish_date' name='finish_date' value='"+this.eDate.substr(0,4)+"-"+this.eDate.substr(4,2)+"-"+this.eDate.substr(6,2)+"' class='input' style='cursor:pointer;width:80px;' />";
                ctrlTag +=   "</div>";
                ctrlTag +=   "</td>";
                ctrlTag +=   "</tr>";
                ctrlTag +=   "<tr>";
                ctrlTag +=   "<th scope='row' style='padding:7px 5px 7px 0;'>색상지정 : </th>";
                ctrlTag +=   "<td style='text-align:left;'>";
                ctrlTag +=   "빨강 : <input type='text' name='clr1' id='clr1' value='"+getCookie('clr1')+"' style='width:20px; border:1px solid #ddd;'>%, ";
                ctrlTag +=   "노랑 : <input type='text' name='clr2' id='clr2' value='"+getCookie('clr2')+"' style='width:20px; border:1px solid #ddd;'>%, ";
                ctrlTag +=   "파랑 : <input type='text' name='clr3' id='clr3' value='"+getCookie('clr3')+"' style='width:20px; border:1px solid #ddd;'>% ";
                ctrlTag +=   "<td>";
                ctrlTag +=   "</tr>";
                ctrlTag +=   "<tr>";
                ctrlTag +=   "<td colspan='2' style='padding-top:10px;'><button type='button' onClick=\"prdStatus.setCtrl();\" style='width:100%; padding:5px; border:1px solid #aaa;border-radius:2px;background:#fff;'>설정하기</button></td>";
                ctrlTag +=   "</tr>";
                ctrlTag +=   "</table></form>";

            $('#prdCtrlPannel').css('width','590px').html(ctrlTag);

            $("#start_date").datepicker({
                dateFormat:"yy-mm-dd"
            });

            $("#finish_date").datepicker({
                dateFormat:"yy-mm-dd"
            });
        }else{
            this.setEvtHandler($("#start_date").val(), $("#finish_date").val());

            this.clr1 = $("#clr1").val();
            this.clr2 = $("#clr2").val();
            this.clr3 = $("#clr3").val();

            setCookie( 'clr1', this.clr1, 365 );
            setCookie( 'clr2', this.clr2, 365 );
            setCookie( 'clr3', this.clr3, 365 );
            this.moFlag = 0;

            $('#prdCtrlPannel').css('width','40px').html("<a href='###' onClick=\"prdStatus.setCtrl('open');\">설정</a>");
        }
    }
};


// multiUpload creater.
// 멀티업로드 초기화
WISA.util.multiUpload = function ( selectBox )
{
    if ( selectBox ) {this.init( selectBox ) ;	}
};

// 멀티업로드 클래스
WISA.util.multiUpload.prototype = 
{	
    formStr : "",
    selectBox : "",
    hiddenIframe : "",
    addButton: "",
    delButton: "",
    filesUploadForm: "",
    filesUploadFiles: "",
    EditerfilesUploadForm: "",
    EditerfilesUploadFiles: "",
    EditerTextArea: "",
    pageActionIng: "",

    // 초기화
    init : function(name)
    {
        var multipleThis;

        multipleThis = this;
        multipleThis.hiddenIframe					= $(document).find("iframe[name^='hidden']").eq(0); //아이프레임 히든값
        multipleThis.selectBox							= $(document).find("select[name='"+name+"']");  // 파일첨부 셀렉트박스
        multipleThis.filesUploadForm				= $(document).find("form[name='filesUpload_" + name  + "']");   // 첨부 파일업로드
        multipleThis.EditerTextArea				= multipleThis.selectBox.parents("form").find("textarea[name='" + multipleThis.selectBox.attr("contentFlag") + "']"); // 에디터
        multipleThis.EditerfilesUploadForm	= $(document).find("form[name='uploadTmpFrm_" + multipleThis.EditerTextArea.attr("id")  + "']"); // 에디터 파일업로드
        multipleThis.pageActionIng				= $(document).find("body").find("#uploadLoading"); //처리중..

        // 파일 첨부업로드
        if (multipleThis.filesUploadForm.size()==0)
        {
            multipleThis.formStr			= "";
            multipleThis.formStr			= multipleThis.formStr + "<form name=\"filesUpload_" + name  + "\" enctype=\"multipart/form-data\" method=\"post\" action=\"/uploader/upload.multiple.exe.php\" target=\"" + this.hiddenIframe.attr("name") + "\"   >";
            multipleThis.formStr			= multipleThis.formStr + "<input type=\"file\" name=\"files[]\" value=\"\" multiple style=\"visibility:hidden; position:absolute; bottom:0; height:1px; width: 1px;\" >";
            multipleThis.formStr			= multipleThis.formStr + "<input type=\"hidden\" name=\"files_gr\" value=\"\">";
            multipleThis.formStr			= multipleThis.formStr + "<input type=\"hidden\" name=\"files_id\" value=\"\">";
            multipleThis.formStr			= multipleThis.formStr + "<input type=\"hidden\" name=\"updir\" value=\"\">";
            multipleThis.formStr			= multipleThis.formStr + "<input type=\"hidden\" name=\"ftype\" value=\"\">";
            multipleThis.formStr			= multipleThis.formStr + "<input type=\"hidden\" name=\"delfile\" value=\"\">";
            multipleThis.formStr			= multipleThis.formStr + "<input type=\"hidden\" name=\"seleclistname\" value=\"\">";
            multipleThis.formStr			= multipleThis.formStr + "<div id=\"filesUploadPreview\"  style=\"cursor:pointer;\"></div>";
            $(document).find("body").append(multipleThis.formStr);
            multipleThis.filesUploadForm	= $(document).find("form[name='filesUpload_" + name  + "']");
        }

        // 에디터 이미지 첨부..
        if (multipleThis.EditerTextArea.size()>0)
        {
            if (multipleThis.EditerfilesUploadForm.size()==0)
            {
                multipleThis.formStr			= "";
                multipleThis.formStr			= multipleThis.formStr + "<form name=\"uploadTmpFrm_" + multipleThis.EditerTextArea.attr("name")  + "\" enctype=\"multipart/form-data\" method=\"post\" action=\"/uploader/upload.multiple.exe.php\" target=\"" + this.hiddenIframe.attr("name") + "\"   >";
                multipleThis.formStr			= multipleThis.formStr + "<input type=\"file\" name=\"files[]\" value=\"\"  style=\"display:none;\" >";
                multipleThis.formStr			= multipleThis.formStr + "<input type=\"hidden\" name=\"files_gr\" value=\"\">";
                multipleThis.formStr			= multipleThis.formStr + "<input type=\"hidden\" name=\"files_id\" value=\"\">";
                multipleThis.formStr			= multipleThis.formStr + "<input type=\"hidden\" name=\"updir\" value=\"\">";
                multipleThis.formStr			= multipleThis.formStr + "<input type=\"hidden\" name=\"ftype\" value=\"editor\">";
                multipleThis.formStr			= multipleThis.formStr + "<input type=\"hidden\" name=\"delfile\" value=\"\">";
                multipleThis.formStr			= multipleThis.formStr + "<input type=\"hidden\" name=\"seleclistname\" value=\"\">";
                $(document).find("body").append(multipleThis.formStr);
                multipleThis.EditerfilesUploadForm	= $(document).find("form[name='uploadTmpFrm_" + multipleThis.EditerTextArea.attr("name")  + "']");

            }
        }



        multipleThis.filesUploadFiles	= multipleThis.filesUploadForm.find("input[name='files[]']");
        multipleThis.filesUploadForm.find("input[name='seleclistname']").val(name);

        multipleThis.EditerfilesUploadFiles	= multipleThis.EditerfilesUploadForm.find("input[name='files[]']");


        multipleThis.setDynamicFileList();
        multipleThis.filesUploadForm.find("#filesUploadPreview").unbind("click").bind("click", function(event) {
            $(event.target).hide();
        });


        if (multipleThis.addObjButton().size()>0) {
        multipleThis.addObjButton().unbind("click").bind("click", function(event) {
            multipleThis.file_add(multipleThis.filesUploadForm.find("input[name='seleclistname']").val());
        });


        if (multipleThis.delObjButton().size()>0) {
            multipleThis.delObjButton().unbind("click").bind("click", function(event) {
                multipleThis.file_del(multipleThis.filesUploadForm.find("input[name='seleclistname']").val());
            });
        }

        multipleThis.filesUploadFiles.unbind("change").bind("change", function(event) {
            multipleThis.filesUploadSubmit(multipleThis.filesUploadForm.find("input[name='seleclistname']").val());
        });

        multipleThis.EditerfilesUploadFiles.unbind("change").bind("change", function(event) {
                $(document).find("form select").each(function( i, item ) {
                    if ($.type($(item).attr("contentFlag"))=="string")
                    {
                        if (multipleThis.EditerTextArea.attr("name")==$(item).attr("contentFlag"))
                        {
                            multipleThis.EditerUploadSubmit($(item).attr("name"));
                        }
                    }
                });
            });
        }




        if (multipleThis.pageActionIng.size()==0)
        {
            multipleThis.formStr				= "";
            multipleThis.formStr				= "<div id=\"uploadLoading\" style=\"display:none;position:fixed; z-index:1000;top:0;left:0;height:100%;width:100%;background: rgba( 255, 255, 255, 0.5 ) url('/image/common/FhHRx.gif')  50% 50%  no-repeat; \"></div>";
            $(document).find("body").append(multipleThis.formStr);
            multipleThis.pageActionIng	= $(document).find("body").find("#uploadLoading");
        }

    },

    // 추가버튼
    addObjButton : function()
    {
        return this.selectBox.parent().parent().find(".file_add");
    },

    // 삭제버튼
    delObjButton : function()
    {
        return this.selectBox.parent().parent().find(".file_del");
    },

    // 값이 있으면 속성 부여
    setDynamicFileList : function()
    {
        var multipleThis;
        var elementSelectBox, temp, tempUrl, preViewObj;

        multipleThis = this;
        elementSelectBox = multipleThis.selectBox

        if(elementSelectBox.attr("up_url")=="") elementSelectBox.attr("up_url", "http://" + document.domain );

        elementSelectBox.each(function( i, item ) {
            // 에디터에 넣기
            if($(item).attr("dynamicFileList")=="T") {
                if($(item).attr("contentFlag")!="") {
                    $(item).dblclick(function(event) {
                        $(this).find("option:selected").each(function(si, sitem) {
                            var ckdImg = "\\.(gif|jpg|jpeg|png)$";
                            if(new RegExp(ckdImg,"i").test($(sitem).attr("filename"))) {
                                temp = tinyMCE.get(elementSelectBox.eq(i).attr("contentFlag")).getContent();
                                tempUrl = $(sitem).attr("url");
                                if(!tempUrl) {
                                    tempUrl = "/" + $(sitem).attr("updir") + "/" + $(sitem).attr("filename");
                                    tempUrl = replaceAll(tempUrl, "//", "/");
                                    tempUrl = upload_base + tempUrl;
                                }
                                temp = temp + "<img src='" + tempUrl + "'>";
                                tinymce.get(elementSelectBox.eq(i).attr("contentFlag")).setContent(temp);
                            }
                        });
                    });
                }
            }

        // 미리보기
            if($(item).attr("preView")!="") {

                $(item).dblclick(function(event) {
                    preViewObj	= $(document).find("#" + $(item).attr("preView"));
                    temp		= "";
                    $(this).find("option:selected").each(function(si, sitem) {

                        tempUrl = $(sitem).attr("url");
                        if(!tempUrl) {
                            tempUrl = "/" + $(sitem).attr("updir") + "/" + $(sitem).attr("filename");
                            tempUrl = replaceAll(tempUrl, "//", "/");
                            tempUrl = upload_base + tempUrl;
                        }
                        if (temp=="") {
                            temp = "<img src='" + tempUrl  + "'>";
                        }
                        else {
                            temp = temp + "<img src='" + tempUrl + "'>";
                        }
                    });

                    multipleThis.filesUploadForm.find("#filesUploadPreview").css("position","absolute");
                    multipleThis.filesUploadForm.find("#filesUploadPreview").html(temp);
                    posLayerPopup(multipleThis.filesUploadForm.find("#filesUploadPreview"), 0, 0);
                    multipleThis.filesUploadForm.find("#filesUploadPreview").show();
                });
            }
        });
    },


    // 추가하기 버튼
    file_add : function(name)
    {
        var multipleThis;
        var elementForm, elementFiles;

        multipleThis = this;
        multipleThis.filesUploadForm	= $(document).find("form[name='filesUpload_" + name  + "']");
        elementForm						= multipleThis.filesUploadForm;
        multipleThis.filesUploadFiles	= multipleThis.filesUploadForm.find("input[name='files[]']");
        elementFiles					= multipleThis.filesUploadFiles;
        multipleThis.selectBox			= $(document).find("select[name='"+name+"']");
        elementFiles.click();
    },


    // 다중 파일업로드
    filesUploadSubmit : function(name)
    {

        var multipleThis;
        var elementForm, elementSelectBox, elementFiles;
        var elementFilesGr, elementFilesId, elementUpDir, elementEditor;

        multipleThis					= this;
        multipleThis.selectBox			= $(document).find("select[name='"+name+"']");
        multipleThis.filesUploadForm	= $(document).find("form[name='filesUpload_" + name  + "']");
        multipleThis.filesUploadFiles	= multipleThis.filesUploadForm.find("input[name='files[]']");

        elementForm						= multipleThis.filesUploadForm;
        elementSelectBox				= multipleThis.selectBox;
        elementFiles					= multipleThis.filesUploadFiles;
        elementFilesGr					= elementForm.find("input[name='files_gr']");
        elementFilesId					= elementForm.find("input[name='files_id']");
        elementUpDir					= elementForm.find("input[name='updir']");
        elementEditor					= elementForm.find("input[name='ftype']");


        elementFilesGr.val(elementSelectBox.attr("files_gr"));
        elementFilesId.val(elementSelectBox.attr("files_id"));
        elementUpDir.val(elementSelectBox.attr("up_dir"));
        elementEditor.val(elementSelectBox.attr("ftype"));


        try {
            if (multipleThis.pageActionIng.size()>0) multipleThis.pageActionIng.show();

            submitOption = {
                    success : function(data) {
                        multipleThis.filesUploadReturn(name, elementForm);
                    },
                    error : function(xhr) {
                        alert('업로드 중 에러가 발생하였습니다');
                    }
            }
            elementForm.ajaxSubmit(submitOption);
        } catch (e) {
            setTimeout(function(){ multipleThis.filesUploadSubmit(name); }, 50);
        }

    },

    // 에디터 파일업로드
    EditerUploadSubmit : function(name)
    {

        var multipleThis;
        var elementForm, elementSelectBox, elementFiles;
        var elementFilesGr, elementFilesId, elementUpDir, elementEditor, elementSeleclistName;
        //seleclistname

        multipleThis				= this;
        elementForm					= multipleThis.EditerfilesUploadForm;
        elementSelectBox			= $(document).find("select[name='"+name+"']");

        elementFiles				= elementForm.find("input[name='files[]']");
        elementFilesGr				= elementForm.find("input[name='files_gr']");
        elementFilesId		   		= elementForm.find("input[name='files_id']");
        elementUpDir				= elementForm.find("input[name='updir']");
        elementEditor				= elementForm.find("input[name='ftype']");
        elementSeleclistName		= elementForm.find("input[name='seleclistname']");


        elementFilesGr.val(elementSelectBox.attr("files_gr"));
        elementFilesId.val(elementSelectBox.attr("files_id"));
        elementUpDir.val(elementSelectBox.attr("up_dir"));
        elementSeleclistName.val(elementSelectBox.attr("name"));


        try {
            if (multipleThis.pageActionIng.size()>0) multipleThis.pageActionIng.show();
            submitOption = {
                    success : function(data) {
                        multipleThis.filesUploadReturn(name, elementForm);
                    },
                    error : function(xhr) {
                        alert('업로드 중 에러가 발생하였습니다');
                    }
            }
            elementForm.ajaxSubmit(submitOption);

        } catch (e) {
            setTimeout(function(){ multipleThis.EditerUploadSubmit(name); }, 50);
        }

    },


    // 파일업로드 처리단
    filesUploadReturn : function(name, elementForm)
    {
        var multipleThis;
        var ajaxDate, ajaxRequest;
        var elementForm, elementSelectBox, elementFilesId, elementTextArea;
        var temp, tempImg;

        multipleThis        = this;
        elementSelectBox    = $(document).find("select[name='"+name+"']");
        elementFilesId      = elementForm.find("input[name='files_id']");
        elementTextArea     = $(document).find("textarea[name='"+elementSelectBox.attr("contentFlag")+"']");


        ajaxDate = "files_id=" + elementFilesId.val();

        ajaxRequest = $.ajax({
          url: "/uploader/upload.return.exe.php",
          type: "POST",
          cache: false,
          data:  ajaxDate ,
          dataType: "json"
        });

        ajaxRequest.done(function(data) {

            if (JSON.stringify(data))
            {
                if (elementSelectBox.size()>0) {
                    $.each( data, function( i, item ) {

                        elementSelectBox.append(new Option( item["filename"] + " (" + parseInt(item["size"]/1024, 10) + "KB)" ,item["filename"] + "|N", true, true));
                        elementSelectBox.find("option").eq(elementSelectBox.find("option").size()-1).attr("filename", item["filename"]);
                        elementSelectBox.find("option").eq(elementSelectBox.find("option").size()-1).attr("updir", item["updir"]);
                        elementSelectBox.find("option").eq(elementSelectBox.find("option").size()-1).attr("url", item["url"]);
                    });

                }

                //모바일 브라우저인지 여부 확인 (모바일일 경우에 에디터에서 빠져 나가서 width를 100%를 줌)
                var filter = "win16|win32|win64|mac";
                var width = "";

                if(navigator.platform) {
                    if(filter.indexOf(navigator.platform.toLowerCase())<0) {
                        width = "width='100%'";
                    }
                    if (location.pathname.indexOf("/manage") == 0) {
                        // 관리자 패스일경우 무시.   위쪽 모바일 체크하는 부분은 코드를 수정해야 할 필요가 있음. by kwangsik.shin
                        width = "";
                    }
                }

                if (elementTextArea.size()>0) {
                    $.each( data, function( i, item ) {
                        var ckdImg = "\\.(gif|jpg|jpeg|png)$";
                        if (new RegExp(ckdImg,"i").test(item["filename"])) {
                            temp = tinyMCE.get(elementTextArea.attr("id")).getContent();
                            tempImg = "<img src='" +  item["url"] + "' "+width+">";
                            temp  = temp + tempImg;

                            tinymce.get(elementTextArea.attr("id")).setContent(temp, {format : 'html'});
                            tinymce.get(elementTextArea.attr("id")).save({no_events: true });
                        }
                    });
                }

                if (elementTextArea.size()>0)  tinymce.activeEditor.windowManager.close();
                if (multipleThis.pageActionIng.size()>0) multipleThis.pageActionIng.hide();
            }

        });

        ajaxRequest.fail(function (jqXHR, textStatus, errorThrown) {
            alert("실패하였습니다.");
            return false;
        });
    },


    // 파일삭제
    file_del : function(name)
    {
        var multipleThis;
        var elementForm, elementSelectBox, elementFiles;
        var elementFilesGr, elementFilesId, elementUpDir, elementEditor, elementDelfile, elementTextArea;
        var temp, fileTemp, fileRep;

        multipleThis					= this;
        multipleThis.selectBox			= $(document).find("select[name='"+name+"']");
        multipleThis.filesUploadForm	= $(document).find("form[name='filesUpload_" + name  + "']");
        multipleThis.filesUploadFiles	= multipleThis.filesUploadForm.find("input[name='files[]']");

        elementForm						= multipleThis.filesUploadForm;
        elementSelectBox				= multipleThis.selectBox;
        elementFiles					= multipleThis.filesUploadFiles;
        elementFilesGr					= elementForm.find("input[name='files_gr']");
        elementFilesId					= elementForm.find("input[name='files_id']");
        elementUpDir					= elementForm.find("input[name='updir']");
        elementEditor					= elementForm.find("input[name='ftype']");
        elementDelfile					= elementForm.find("input[name='delfile']");
        elementTextArea					= $(document).find("textarea[name='"+elementSelectBox.attr("contentFlag")+"']");

        elementFilesGr.val(elementSelectBox.attr("files_gr"));
        elementFilesId.val(elementSelectBox.attr("files_id"));
        elementUpDir.val(elementSelectBox.attr("up_dir"));
        elementEditor.val(elementSelectBox.attr("ftype"));

        if (elementSelectBox.find("option:selected").size()==0) alert("파일을 선택해주세요");

        elementDelfile.val("");
        elementSelectBox.find("option:selected").each(function( i, item ) {
            fileTemp = $(item).val().split("|");

            if (elementDelfile.val()=="") {
                elementDelfile.val(fileTemp[0]);
            }
            else {
                elementDelfile.val(elementDelfile.val() + "|" + fileTemp[0]);
            }
        });


        ajaxDate = elementForm.serialize();
        if (multipleThis.pageActionIng.size()>0) multipleThis.pageActionIng.show();
        ajaxRequest = $.ajax({
          url: "/uploader/delete.multiple.exe.php",
          type: "POST",
          cache: false,
          data:  ajaxDate ,
          dataType: "json"
        });

        ajaxRequest.done(function(data) {

            if (JSON.stringify(data)) {

                if (data["success"]) {

                    elementSelectBox.find("option:selected").each(function( i, item ) {

                        fileTemp = $(item).val().split("|");
                        fileTemp = fileTemp[0];

                        if (elementTextArea.size()>0) {
                            temp		= tinyMCE.get(elementTextArea.attr("id")).getContent();
                            fileRep		= eval('/<[^<]*'+fileTemp+'[^>]*>/gi');
                            temp		= temp.replace(fileRep, "");
                            tinymce.get(elementTextArea.attr("id")).setContent(temp, {format : 'html'});
                            tinymce.get(elementTextArea.attr("id")).save({no_events: true });
                        }

                        $(item).remove();
                    });
                }
            }
            if (multipleThis.pageActionIng.size()>0) multipleThis.pageActionIng.hide();
        });

        ajaxRequest.fail(function (jqXHR, textStatus, errorThrown) {
            alert("실패하였습니다.");
            return false;
        });
    }


};

// 삭제예정.
// -----------------------------------------------------------------------------
// 업로드 파일 본문에 삽입
// -----------------------------------------------------------------------------
//function multiaddImg(obj, editor, objList) {
//	var file = obj.name.replace(/\s/g,"");
//	var ext = file.substring(file.lastIndexOf(".")+1);
//	var tempImg;
//	objList = $(objList);
//
//	if(ext.toLowerCase()!="jpg" || ext.toLowerCase()!="gif" || ext.toLowerCase()!="png" || ext.toLowerCase()!="jpeg") {
//
//		tempImg =  "/" + objList.attr("up_dir") + "/" + encodeURIComponent(file);		
//		tempImg = replaceAll(tempImg, "//", "/"); 
//		tempImg =  objList.attr("up_url") + tempImg;		
//		tempImg = "<img src='" +  tempImg + "' id='"+file+"' border=0>"; 
//		//var sHTML = "<img src='"+document.getElementById('edit_dir').value+"/"+encodeURIComponent(file)+"' id='"+file+"' border=0>";
//		var sHTML = tempImg;
//		tinymce.execCommand('mceInsertContent',false,sHTML);
//	}
//}


// -----------------------------------------------------------------------------
// replaceAll 치환
// -----------------------------------------------------------------------------
function replaceAll(str, searchStr, replaceStr) {
    while (str.indexOf(searchStr) != -1) {
        str = str.replace(searchStr, replaceStr);
    }
    return str;
}

var setSearchDate = function(el, period, dest, base) {

    if(typeof Calendar=='function') $('#CalendarLayer').hide();
    if(!period) { $(base).val(''); $(dest).val(''); $('#all_date').prop('checked', true); }
    else {
        $('#all_date').prop('checked', false); // 전체 해제

        var a = $(base).val().split('-');
        var b = period.split(' ');
        var c = new Date();//c = a[0] ? new Date(Date.UTC(a[0], a[1]-1, a[2])) : new Date();
        c.setHours(c.getHours()+9);//한국표준시간으로 맞추기 위해 9시간 더한다.
        $(base).val(c.getUTCString()); // Date().getUTCString() : common.js 에 정의

        if(b[1]=='day') c.setUTCDate(c.getUTCDate() + parseInt(b[0]));
        else if(b[1]=='month') c.setUTCMonth(c.getUTCMonth() + parseInt(b[0])); c.setUTCDate(c.getUTCDate());
        $(dest).val(c.getUTCString());
    };
    searchDate(el.form);
};

function searchDate(f){
    if(typeof Calendar == 'function') $('#CalendarLayer').hide();
    if (f.all_date.checked==true) {
        textDisable(f.start_date,1);
        textDisable(f.finish_date,1);
    }
    else {
        textDisable(f.start_date,'');
        textDisable(f.finish_date,'');
    }
}

//=== URL을 줄인다(ajax를 이용하기 위해 curl 페이지 필요(style : bit or durl) : openlife : 2012.06.13
function shortURL(url){
    var sUrl;
    var rst = jQuery.ajax({
        url:"/include/shorturl_ajax.php?route_path_type=exe",
        type: "POST",
        async:false,
        dataType:"json",
        data:{"stype":"durl","longurl":encodeURIComponent(url)},
        scriptCharset:"euc-kr",
        success: function(data) {
            if(data.status == 'ok') {
                sUrl = data.shortUrl;
                return sUrl.replace(/^\s+|\s+$/g,"");
            }else if(data.status_code == 200){
                sUrl = data.data.url;
                return sUrl.replace(/^\s+|\s+$/g,"");
            }else{
                return sUrl = url;
            }
          }
    });
    return sUrl;
}

function assert_msglen(message, maximum){
    var inc = 0;
    var nbytes = 0;
    var msg = "";
    var msglen = message.length;

    for (i=0; i<msglen; i++) {
        var ch = message.charAt(i);
        if(escape(ch).length > 4){
            inc = 2;
        }else if (ch == '\n'){
            if(message.charAt(i-1) != '\r'){
                inc = 1;
            }
        }else if (ch == '<' || ch == '>'){
            inc = 4;
        }else{
            inc = 1;
        }
        if((nbytes + inc) > maximum){
            break;
        }
        nbytes += inc;
        msg += ch;
    }
    return msg;
}

//=== SNS 연동(type:sns 종류, url:link 주소, title:제목)
function PubSNS(type,url,title,img){
    title = title.replace(/\'/g,"`");

    var sUrl = shortURL(url);
    //var sUrl = url;
    var sns={
            y:{
                url:"http://yozm.daum.net/api/popup/prePost",
                param:"prefix="+encodeURIComponent(title)+" "+encodeURIComponent(sUrl),
                width:472,
                height:340,
                bsize:"no",
                scroll:"no"
            },
            t:{
                url:"https://twitter.com/intent/tweet",
                param:"text="+encodeURIComponent(assert_msglen(title,110))+"&url="+encodeURIComponent(url),
                width:800,
                height:500,
                bsize:"yes",
                scroll:"yes"
            },
            m:{
                url:"http://me2day.net/posts/new",
                param:"new_post[body]="+encodeURIComponent(title)+" "+encodeURIComponent('"'+sUrl+'"')+":"+encodeURIComponent(sUrl),
                width:1024,
                height:500,
                bsize:"yes",
                scroll:"yes"
            },
            f:{
                url:"http://www.facebook.com/sharer/sharer.php",
                param:"u="+encodeURIComponent(url),
                width:800,
                height:500,
                bsize:"no",
                scroll:"no"
            }
        };
    var b=sns[type]["url"]+"?"+sns[type]["param"];
    var g=null;
    var k=(screen.width-sns[type]["width"])/2;
    var f=(screen.height-sns[type]["height"])/3;
    var e="";
    e="height="+sns[type]["height"]+",";
    e+="width="+sns[type]["width"]+",";
    e+="top="+f+",";
    e+="left="+k+",";
    e+="scrollbars="+sns[type]["scroll"]+",";
    e+="resizable="+sns[type]["bsize"]+",";
    e+="status=no";
    g=window.open(b,"SNS",e);

    if(parseInt(navigator.appVersion)>=4){
        g.window.focus();
    }

    jQuery("._reply_").load(function(){
        reSize(this);
    });
}

function div_alert_close(obj){
    obj.hide();
    removeDimmed();
}

function obj_image_src(obj, src, w, h){
    $('#'+obj).attr('src',src);
    if(w) $('#'+obj).attr('width',w);
    if(h) $('#'+obj).attr('height',h);
}

function use_popLayer(obj){
    if(jQuery.type(obj) == 'string') {
        obj = $('#'+obj);
    }

    $('#popup_view').css('z-index',11).css('background','#FFF').html(obj.html()).show();
    if(obj.css('height').replace('px','')>0) {
        $('#popup_view').css('height',obj.css('height'));
    }

    if(obj.css('width').replace('px','')>0) {
        $('#popup_view').css('width',obj.css('width'));
    }

    posLayerPopup($('#popup_view'));
    setDimmed();
}

function parent_go(url){
    parent.document.location.href = url;
}

function entry_action( f, mode, val ){
    f.mode.value = mode;
    f.val.value = val;
    if( mode == "del" ){
        if( !confirm("정말삭제 하시겠습니까?") ) return;
    }
    f.submit();
}

/*레이어관련*/
function setDimmed(alpha, zIndex, click) {
    if(!alpha) alpha = .5;
    if(!zIndex) zIndex = 10;

    if($('#outBG').length > 0) return;

    var dimmedLayer = $(document.createElement('DIV'));
    dimmedLayer.attr('id', 'outBG');
    dimmedLayer.css({
        "position":"absolute",
        "top":"0", "left":"0",
        "width":"100%", "height":"100%",
        "zIndex":zIndex,
        "background":"#ccc",
        "opacity":alpha,
        "filter": "alpha(opacity = 30)"
    });
    $('body').append(dimmedLayer);

    resizeDimmed();

    $(window).resize(function() {
        resizeDimmed();
    });
}

function resizeDimmed() {
    var dimmedLayer = $('#outBG');
    dimmedLayer.css("height",$(document).height()+"px");
}

function removeDimmed() {
    var dimmedLayer = $('#outBG');
    dimmedLayer.remove();
}

function getOffsetCenter(obj, m, m2) {
    if(typeof obj != 'object') return;

    if( typeof m == "undefined" ) m = 0;
    if( typeof m2 == "undefined" ) m2 = 0;

    this.y = Math.max(0, (($(window).height() - $(obj).outerHeight()) / 2)) + $(window).scrollTop() + parseInt(m,10);
    this.x = Math.max(0, (($(window).width() - $(obj).outerWidth()) / 2)) + $(window).scrollLeft() + parseInt(m2,10);


    return this;
}

function posLayerPopup(obj, m, m2) {
    pos = getOffsetCenter(obj, m, m2);

    obj.css({'top':pos.y+'px'});
    obj.css({'left':pos.x+'px'});
}
/*레이어관련*/

// onkeydown 이벤트로 숫자만 입력받기
//숫자만 입력받기 useage : HTML -> <ELEMENT onkeydown="onlyNumber(event)" style="IME-MODE:DISABLED">
function onlyNumber(e, canfloat) {
    var rtn = false;
    if(canfloat!==true) canfloat = false;

    var KeycodeNum = e.which;

//	if(!event.shiftKey) {
    if(KeycodeNum!=16) {
        if(KeycodeNum>=33 && KeycodeNum<=40)	rtn = true;
        if(KeycodeNum>=48 && KeycodeNum<= 57)	rtn = true;
        if(KeycodeNum>=96 && KeycodeNum<=105) rtn = true;
        if(KeycodeNum==8 || KeycodeNum==9 || KeycodeNum==13 || KeycodeNum==46)	rtn = true;
        if(canfloat==true && (KeycodeNum==110 || KeycodeNum==190 || KeycodeNum==109 || KeycodeNum==189 || KeycodeNum==173))	rtn = true;
    }

    if(rtn)	return;
    else{
//		event.returnValue = false;
        if(e.preventDefault)
        {
            e.preventDefault();
        }
    }
}

// 체크박스 이름으로 all checked 컨트롤 by eastaro in 20120926
function chkAllByName(name, bool){
    if(bool)	bool = true;
    else		bool = false;

    $(':checkbox[name="'+name+'"]:visible:enabled').prop('checked',bool);
}


//부가이미지 화살표로 이동 보여주기
function moveAddImg(pno,inc,cnt,files_count,w,h){
    $.get(root_url+"/shop/add_img.exe.php",{"pno":pno,"inc":inc,"cnt":cnt,"files_count":files_count,"w":w,"h":h},function(data){
        $("#addImg").html(data);
    });
}

// create hidden form - jeehoon
function makeForm( name, method, target, action ) {
    var oForm = document.createElement( "FORM" );
    oForm.style.display = "none";
    if( name ) oForm.name = name;
    if( method ) oForm.method = method;
    if( target ) oForm.target = target;
    if( action ) oForm.action = action;
    document.body.appendChild( oForm );

    return oForm;
}

// create hidden form child - jeehoon
function makeElements( oForm, type, name, value ) {
    var oInput = document.createElement( "INPUT" );
    oInput.type = type;
    oInput.name = name;
    oInput.value = value;

    oForm.appendChild( oInput );
}

//주문상세에서 1:1문의 남기기
function orderCounsel(cate,mode) {

    var f= document.getElementById('orderCustFrm');

    f.cate.value=cate;
    f.mode.value=mode;
    f.submit();
}

//=== tinymce 위지윅 에디터 컨텐츠 확인 함수
function checkTinyMceContents(){

    var contents = tinyMCE.activeEditor.getContent();
    var reg = /<br[\S|\s]\/>/g;
    var reg2 = /<p>(&nbsp;)<\/p>/g;
    contents = contents.replace(reg, "");
    contents = contents.replace(reg2, "");
    var contLength = contents.length;
    if( jQuery.trim(contents).length < 1 || contLength < 1){
        return false;
    }
    return true;
}

// phone & cell validate
function checkPhones(el, value) {
    var num = (value||el.value).replace(/[^\d]/g,'');
    switch(num.length) {
        case 8: num = num.substr(0, 4) +'-'+ num.substr(4, 4); break; // ex) 1588-0000
        case 9: if(num.substr(1,1)=='2') num = num.substr(0, 2) +'-'+ num.substr(2, 3) +'-'+ num.substr(5); break; // ex) 02-123-4567
        case 10: num = (num.substr(1,1)=='2') ? num.substr(0, 2) +'-'+ num.substr(2, 4) +'-'+ num.substr(6) : num.substr(0, 3) +'-'+ num.substr(3, 3) +'-'+ num.substr(6); break; // ex) 02-1234-5678 or 031-123-4567
        case 11: num = num.substr(0, 3) +'-'+ num.substr(3, 4) +'-'+ num.substr(7); break; // 031-1234-5678
        case 12: num = num.substr(0, 4) +'-'+ num.substr(4, 4) +'-'+ num.substr(8); break; // 0505-1234-5678
        default: return false;
    }
    if(num.match(/^01[016789]{1}-[1-9]{1}[0-9]{2,3}-[0-9]{4}$/) || // mobile
        num.match(/^0[0-9]{1,3}-[1-9]{1}[0-9]{2,3}-[0-9]{4}$/) || // phone
        num.match(/^[0-9]{4}-[0-9]{4}$/)) { // keynum
        el.value = num; // reform
        return true;
    }
    return false;
}

/**
 * Escaper
 *@author: kurokisi
 */
// LGCNS MALL 스크립트오류 예외 처리 
try{
    if(!top.window.escaper) {
        var $esc = {
            stacks: [],
            listening: false,
            add: function(handler) {
                if(!this.stacks.length) {
                    $.event.add(document, 'keyup', this.listener);
                    this.listening = true;
                }
                if($.inArray(handler, this.stacks)<0) this.stacks.push(handler);
            },
            remove: function(handler) {
                this.stacks = $(this.stacks).map(function(key, stack) { if(stack!=handler) return stack }).get();
                this.kill();
            },
            listener: function(event) {
                if(event.keyCode!=27) return;
                if($esc.stacks.length) { $.globalEval($esc.stacks.pop()), $esc.kill() }
            },
            kill: function() {
                if(!this.stacks.length && this.listening) {
                    $.event.remove(document, 'keyup', this.listener);
                    this.listening = false;
                }
            }
        }
        top.window.escaper = $esc;
    }
}catch(e){}

// Date & String prototype
String.prototype.times = function(a) { var b='', c=0; for(;c<a;c++) b+=this; return b; } //@usage: '0'.times(2); → '00'
String.prototype.padding = function(a, b) { return (b||'0').times(a-this.length)+this; } //@usage: '1'.padding(3); → '001'
Date.prototype.getUTCString = function(a, b) { return this.getUTCFullYear()+(a||'-')+String(this.getUTCMonth()+1).padding(b||2)+(a||'-')+String(this.getUTCDate()).padding(b||2); } //@usage: Date().getUTCString('/') → 'yyyy/mm/dd'


//쿠폰다운로드
function downLoadCoupon(n){
    if(mlv==10){
        c=confirm('로그인이 필요한 서비스입니다.');
        if(c){
            window.location=root_url+'/member/login.php?rURL='+escape(this_url);
        }return;
    }else{
        if (confirm('쿠폰을 다운받으시겠습니까?'))
        {
            curl=root_url+'/mypage/coupon_download.php?no='+n+'&rURL='+escape(this_url);
            window.frames[hid_frame].location.href=curl;
            //location.href=curl;
        }
    }
}


//구매확정
function decisionOrder(ono, opno) {
    if(!confirm("구매확정을 하실경우 교환/반품이 불가능합니다.\n구매확정 하시겠습니까?"))	return;

    $.ajax({
        url: '/mypage/order_decision.exe.php',
        type: 'POST',
        dataType: 'json',
        data: {ono: ono, opno: opno}
    }).done(function(r) {
        if(!opno)	alert("배송중, 배송완료 주문만 구매확정 상태로 변경됩니다.");
        alert(r.msg);
        if(r.success) {
            document.location.reload();
        }
    }).fail(function() {
        alert('잠시 후 다시 진행해주시기 바랍니다.');
    });
}

//R2Slider 1.0 (스크롤 이동시 이동)
R2Slider = function(id, slider, divPitch, marginTop, dElement) {
    if (isNaN(parseInt(marginTop))) marginTop = 0;	// 상단 마진 디폴트
    if (isNaN(parseInt(divPitch))) divPitch = 15;	// 이동 간격 디폴트
    this.timer;	// 타이머 변수
    this.slider = slider;	// 객체 변수명
    this.obj = document.getElementById (id);	// 오브젝트
    this.marginTop = parseInt(marginTop);	// 상단 마진
    this.divPitch = parseInt(divPitch);	// 이동 간격
    this.limitTop;	 // 상단 한계점
    this.limitBottom;	 // 하단 한계점
}
R2Slider.prototype.moveIt = function(){
    var pitch = (parseInt($(document).scrollTop())+ parseInt(this.marginTop)) - parseInt(this.obj.style.top);

    if (pitch == 0) return;
    else nextPos = parseInt(this.obj.style.top) + pitch / this.divPitch
    nextPos = (pitch > 0) ? Math.ceil(nextPos) : Math.floor(nextPos);

    var limitBottom = $(window).scrollTop() + $(window).height() - parseInt(this.limitBottom)- parseInt(this.obj.offsetHeight);
    if ( this.limitTop && nextPos  < this.limitTop ) nextPos = this.limitTop;
    if ( this.limitBottom && nextPos  > limitBottom ) nextPos = limitBottom;
    if (nextPos < this.marginTop) nextPos = this.marginTop;
    if (isNaN(nextPos)) nextPos = 0;

    this.obj.style.top = nextPos+"px";
}


R2Slider.prototype.slide = function() {
    this.timer = setInterval(""+this.slider+".moveIt()", 10);
}
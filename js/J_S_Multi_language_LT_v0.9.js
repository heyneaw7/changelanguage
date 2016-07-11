//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/07/05 ver 0.9 LT
//使用時必須在HTML HEAD標籤掛入本 J_S_Multi_language_v*.*.js檔案
//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片、甚至文字
//主要功能3 : 使用DOM方法，更換下拉顯示介面, 須掛入JSON資源文件檔
//主要功能4 : 使用DOM方法，依照語系更改文件內的文字

// 其他功能a (HTML) : 自動偵測瀏覽器語言，更改語言預設值。




//=====程式開始======






function chg_lang(lang_index){


			//更改標題文字
      changeWebTitle(lang_index);

      //更改BODY 語系標籤
      changeCSSTag_Multi_Lang(lang_index);
      //更改Navbar文件
      changeNavBarUIWording(lang_index);


      //讀外部JSON檔案
      var xmlhttp = new XMLHttpRequest();
      var url = "mlang.txt";

      xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          console.log(myArr);
          changeAllNavBarUIWording(myArr,lang_index);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();





		}

//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
function changeWebTitle(lang_index){
      //變更多語系網頁Title
      document.getElementsByTagName("title")[0].innerHTML = Multi_Lang_Title[lang_index];
      return;


}

//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片
function changeCSSTag_Multi_Lang(lang_index){
    // jQuery 語法:
    //  $("body").removeClass("tw cn en").addClass($(this).data("資料名"));

    //純DOM語法
    document.getElementsByTagName("body")[0].className = "";
    document.getElementsByTagName("body")[0].className = Multi_Lang_Tag[lang_index];//Multi_Lang_Tag[lang_index];
    return;
}

//主要功能3 : 使用DOM方法，更換下拉&Navbar顯示介面
function changeNavBarUIWording(lang_index){

  //更改Drondown UI 語系顯示
  //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];

  document.getElementById('change_dropdown_title').innerHTML =  Multi_Lang_Wording[lang_index]+'<b class="caret"></b>';

  return;
}

function changeAllNavBarUIWording(arr,lang_index){
/*
  document.getElementById('nav_link1_wording').innerHTML = arr[lang_index].NavLink1;
  document.getElementById('nav_link2_wording').innerHTML = arr[lang_index].NavLink2;
  document.getElementById('nav_link3_wording').innerHTML = arr[lang_index].NavLink3;
  document.getElementById('nav_link4_wording').innerHTML = arr[lang_index].NavLink4;
  document.getElementById('nav_link5_wording').innerHTML = arr[lang_index].NavLink5;*/

  document.getElementById('lang_title').innerHTML = arr[lang_index].lang_title;
  document.getElementById('lang_nav_intro').innerHTML = arr[lang_index].lang_nav_intro;
  document.getElementById('lang_nav_contact').innerHTML = arr[lang_index].lang_nav_contact;
  document.getElementById('lang_nav_download').innerHTML = arr[lang_index].lang_nav_download;
  document.getElementById('lang_nav_faq').innerHTML = arr[lang_index].lang_nav_faq;
  document.getElementById('lang_nav_location').innerHTML = arr[lang_index].lang_nav_location;
  document.getElementById('lang_body_intro').innerHTML = arr[lang_index].lang_body_intro;
  document.getElementById('lang_body_intro_title').innerHTML = arr[lang_index].lang_body_intro_title;
  document.getElementById('lang_body_intro_cont1').innerHTML = arr[lang_index].lang_body_intro_cont1;
  document.getElementById('lang_body_intro_right1').innerHTML = arr[lang_index].lang_body_intro_right1;
  document.getElementById('lang_body_intro_right2').innerHTML = arr[lang_index].lang_body_intro_right2;
  document.getElementById('lang_body_slogan').innerHTML = arr[lang_index].lang_body_slogan;
  document.getElementById('lang_body_auromask').innerHTML = arr[lang_index].lang_body_auromask;
  document.getElementById('lang_body_auromask_name').innerHTML = arr[lang_index].lang_body_auromask_name;
  document.getElementById('lang_body_auromask_cont').innerHTML = arr[lang_index].lang_body_auromask_cont;
  document.getElementById('lang_body_auromask_red').innerHTML = arr[lang_index].lang_body_auromask_red;
  document.getElementById('lang_body_auromask_yellow').innerHTML = arr[lang_index].lang_body_auromask_yellow;
  document.getElementById('lang_body_auromask_blue').innerHTML = arr[lang_index].lang_body_auromask_blue;
  document.getElementById('lang_body_material').innerHTML = arr[lang_index].lang_body_material;
  document.getElementById('lang_body_sixfeatures').innerHTML = arr[lang_index].lang_body_sixfeatures;
  document.getElementById('lang_body_six_icon1').innerHTML = arr[lang_index].lang_body_six_icon1;
  document.getElementById('lang_body_six_icon2').innerHTML = arr[lang_index].lang_body_six_icon2;
  document.getElementById('lang_body_six_icon3').innerHTML = arr[lang_index].lang_body_six_icon3;
  document.getElementById('lang_body_six_icon4').innerHTML = arr[lang_index].lang_body_six_icon4;
  document.getElementById('lang_body_six_icon5').innerHTML = arr[lang_index].lang_body_six_icon5;
  document.getElementById('lang_body_six_icon6').innerHTML = arr[lang_index].lang_body_six_icon6;
  document.getElementById('lang_body_certificate').innerHTML = arr[lang_index].lang_body_certificate;
  document.getElementById('lang_body_certificate_box1').innerHTML = arr[lang_index].lang_body_certificate_box1;
  document.getElementById('lang_body_certificate_box1_cont1').innerHTML = arr[lang_index].lang_body_certificate_box1_cont1;
  document.getElementById('lang_body_certificate_box1_cont2').innerHTML = arr[lang_index].lang_body_certificate_box1_cont2;
  document.getElementById('lang_body_certificate_box1_cont3').innerHTML = arr[lang_index].lang_body_certificate_box1_cont3;
  document.getElementById('lang_body_certificate_box1_cont4').innerHTML = arr[lang_index].lang_body_certificate_box1_cont4;
  document.getElementById('lang_body_certificate_box2').innerHTML = arr[lang_index].lang_body_certificate_box2;
  document.getElementById('lang_body_certificate_box2_cont1').innerHTML = arr[lang_index].lang_body_certificate_box2_cont1;
  document.getElementById('lang_body_certificate_box2_cont2').innerHTML = arr[lang_index].lang_body_certificate_box2_cont2;
  document.getElementById('lang_body_certificate_box2_cont3').innerHTML = arr[lang_index].lang_body_certificate_box2_cont3;
  document.getElementById('lang_body_certificate_box2_cont4').innerHTML = arr[lang_index].lang_body_certificate_box2_cont4;
  document.getElementById('lang_body_certificate_box3').innerHTML = arr[lang_index].lang_body_certificate_box3;
  document.getElementById('lang_body_certificate_box3_cont1').innerHTML = arr[lang_index].lang_body_certificate_box3_cont1;
  document.getElementById('lang_body_certificate_box3_cont2').innerHTML = arr[lang_index].lang_body_certificate_box3_cont2;
  document.getElementById('lang_body_certificate_box3_cont3').innerHTML = arr[lang_index].lang_body_certificate_box3_cont3;
  document.getElementById('lang_body_certificate_box3_cont4').innerHTML = arr[lang_index].lang_body_certificate_box3_cont4;
  document.getElementById('lang_body_certificate_box3_cont5').innerHTML = arr[lang_index].lang_body_certificate_box3_cont5;
  document.getElementById('lang_body_productline').innerHTML = arr[lang_index].lang_body_productline;
  document.getElementById('lang_body_pt_premium').innerHTML = arr[lang_index].lang_body_pt_premium;
  document.getElementById('lang_body_pt_premium_cont1').innerHTML = arr[lang_index].lang_body_pt_premium_cont1;
  document.getElementById('lang_body_pt_premium_cont2').innerHTML = arr[lang_index].lang_body_pt_premium_cont2;
  document.getElementById('lang_body_pt_premium_cont3').innerHTML = arr[lang_index].lang_body_pt_premium_cont3;
  document.getElementById('lang_body_pt_premium_cont4').innerHTML = arr[lang_index].lang_body_pt_premium_cont4;
  document.getElementById('lang_body_pt_basicred').innerHTML = arr[lang_index].lang_body_pt_basicred;
  document.getElementById('lang_body_pt_basicred_cont1').innerHTML = arr[lang_index].lang_body_pt_basicred_cont1;
  document.getElementById('lang_body_pt_basicyellow').innerHTML = arr[lang_index].lang_body_pt_basicyellow;
  document.getElementById('lang_body_pt_basicyellow_cont1').innerHTML = arr[lang_index].lang_body_pt_basicyellow_cont1;
  document.getElementById('lang_body_test').innerHTML = arr[lang_index].lang_body_test;
  document.getElementById('lang_body_test_cont').innerHTML = arr[lang_index].lang_body_test_cont;
  document.getElementById('lang_body_test_button').innerHTML = arr[lang_index].lang_body_test_button;
  document.getElementById('lang_body_process').innerHTML = arr[lang_index].lang_body_process;
  document.getElementById('lang_body_process_one').innerHTML = arr[lang_index].lang_body_process_one;
  document.getElementById('lang_body_process_two').innerHTML = arr[lang_index].lang_body_process_two;
  document.getElementById('lang_body_process_three').innerHTML = arr[lang_index].lang_body_process_three;
  document.getElementById('lang_body_led').innerHTML = arr[lang_index].lang_body_led;
  document.getElementById('lang_body_led_cont1').innerHTML = arr[lang_index].lang_body_led_cont1;
  document.getElementById('lang_body_led_cont2').innerHTML = arr[lang_index].lang_body_led_cont2;
  document.getElementById('lang_body_led_red').innerHTML = arr[lang_index].lang_body_led_red;
  document.getElementById('lang_body_led_red_cont').innerHTML = arr[lang_index].lang_body_led_red_cont;
  document.getElementById('lang_body_led_yellow').innerHTML = arr[lang_index].lang_body_led_yellow;
  document.getElementById('lang_body_led_yellow_cont').innerHTML = arr[lang_index].lang_body_led_yellow_cont;
  document.getElementById('lang_body_led_blue').innerHTML = arr[lang_index].lang_body_led_blue;
  document.getElementById('lang_body_led_blue_cont').innerHTML = arr[lang_index].lang_body_led_blue_cont;
  document.getElementById('lang_body_contactus').innerHTML = arr[lang_index].lang_body_contactus;
  document.getElementById('lang_body_contactus_cont').innerHTML = arr[lang_index].lang_body_contactus_cont;
  document.getElementById('lang_body_contactus_button').innerHTML = arr[lang_index].lang_body_contactus_button;
  document.getElementById('lang_body_dowmload').innerHTML = arr[lang_index].lang_body_dowmload;
  document.getElementById('lang_body_dowmload_title').innerHTML = arr[lang_index].lang_body_dowmload_title;
  document.getElementById('lang_body_dowmload_android').innerHTML = arr[lang_index].lang_body_dowmload_android;
  document.getElementById('lang_body_dowmload_android_cont').innerHTML = arr[lang_index].lang_body_dowmload_android_cont;
  document.getElementById('lang_body_dowmload_android_button').innerHTML = arr[lang_index].lang_body_dowmload_android_button;
  document.getElementById('lang_body_dowmload_iphone').innerHTML = arr[lang_index].lang_body_dowmload_iphone;
  document.getElementById('lang_body_dowmload_iphone_cont').innerHTML = arr[lang_index].lang_body_dowmload_iphone_cont;
  document.getElementById('lang_body_dowmload_iphone_button').innerHTML = arr[lang_index].lang_body_dowmload_iphone_button;
  document.getElementById('lang_body_dowmload_userguide').innerHTML = arr[lang_index].lang_body_dowmload_userguide;
  document.getElementById('lang_body_dowmload_userguide_cont').innerHTML = arr[lang_index].lang_body_dowmload_userguide_cont;
  document.getElementById('lang_body_dowmload_userguide_btn').innerHTML = arr[lang_index].lang_body_dowmload_userguide_btn;
  document.getElementById('lang_body_dowmload_manual').innerHTML = arr[lang_index].lang_body_dowmload_manual;
  document.getElementById('lang_body_dowmload_manual_cont').innerHTML = arr[lang_index].lang_body_dowmload_manual_cont;
  document.getElementById('lang_body_dowmload_manual_btn').innerHTML = arr[lang_index].lang_body_dowmload_manual_btn;
  document.getElementById('lang_body_spec').innerHTML = arr[lang_index].lang_body_spec;
  document.getElementById('lang_body_spec_left_tl').innerHTML = arr[lang_index].lang_body_spec_left_tl;
  document.getElementById('lang_body_spec_right_tl').innerHTML = arr[lang_index].lang_body_spec_right_tl;
  document.getElementById('lang_body_spec_left_cont1').innerHTML = arr[lang_index].lang_body_spec_left_cont1;
  document.getElementById('lang_body_spec_right_cont1').innerHTML = arr[lang_index].lang_body_spec_right_cont1;
  document.getElementById('lang_body_spec_left_cont2').innerHTML = arr[lang_index].lang_body_spec_left_cont2;
  document.getElementById('lang_body_spec_right_cont2').innerHTML = arr[lang_index].lang_body_spec_right_cont2;
  document.getElementById('lang_body_spec_left_cont3').innerHTML = arr[lang_index].lang_body_spec_left_cont3;
  document.getElementById('lang_body_spec_right_cont3').innerHTML = arr[lang_index].lang_body_spec_right_cont3;
  document.getElementById('lang_body_spec_left_cont4').innerHTML = arr[lang_index].lang_body_spec_left_cont4;
  document.getElementById('lang_body_spec_right_cont4').innerHTML = arr[lang_index].lang_body_spec_right_cont4;
  document.getElementById('lang_body_spec_left_cont5').innerHTML = arr[lang_index].lang_body_spec_left_cont5;
  document.getElementById('lang_body_spec_right_cont5').innerHTML = arr[lang_index].lang_body_spec_right_cont5;
  document.getElementById('lang_body_spec_left_cont6').innerHTML = arr[lang_index].lang_body_spec_left_cont6;
  document.getElementById('lang_body_spec_right_cont6').innerHTML = arr[lang_index].lang_body_spec_right_cont6;
  document.getElementById('lang_body_spec_left_cont7').innerHTML = arr[lang_index].lang_body_spec_left_cont7;
  document.getElementById('lang_body_spec_right_cont7').innerHTML = arr[lang_index].lang_body_spec_right_cont7;
  document.getElementById('lang_body_spec_left_cont8').innerHTML = arr[lang_index].lang_body_spec_left_cont8;
  document.getElementById('lang_body_spec_right_cont8').innerHTML = arr[lang_index].lang_body_spec_right_cont8;
  document.getElementById('lang_body_spec_left_cont9').innerHTML = arr[lang_index].lang_body_spec_left_cont9;
  document.getElementById('lang_body_spec_right_cont9').innerHTML = arr[lang_index].lang_body_spec_right_cont9;
  document.getElementById('lang_body_spec_left_cont10').innerHTML = arr[lang_index].lang_body_spec_left_cont10;
  document.getElementById('lang_body_spec_right_cont10').innerHTML = arr[lang_index].lang_body_spec_right_cont10;
  document.getElementById('lang_body_spec_left_cont11').innerHTML = arr[lang_index].lang_body_spec_left_cont11;
  document.getElementById('lang_body_spec_right_cont11').innerHTML = arr[lang_index].lang_body_spec_right_cont11;
  document.getElementById('lang_body_faq').innerHTML = arr[lang_index].lang_body_faq;
  document.getElementById('lang_body_faq_btn').innerHTML = arr[lang_index].lang_body_faq_btn;
  return;
}





function detectUserLang(){

    var tempLang = window.navigator.userLanguage || window.navigator.language ;
    var currentBrowserLang = tempLang.toLowerCase();
    console.log(currentBrowserLang);

    switch (currentBrowserLang) {
      case "zh-tw":
            chg_lang(0);
        break;
      case "zh-cn":
            chg_lang(0);
        break;
      case "zh-hk":
            chg_lang(0);
        break;
      case "ja":
            chg_lang(2);
        break;

      default:
            chg_lang(1);
        break;
    }
}




//=====文字儲存區======
//多語系body標籤
Multi_Lang_Tag = new Array();
Multi_Lang_Tag[0]="tw";
Multi_Lang_Tag[1]="eng";
Multi_Lang_Tag[2]="jp";

//Multi_Lang_Wording 供介面顯示
Multi_Lang_Wording = new Array();
Multi_Lang_Wording[0]="TW - 繁體中文";
Multi_Lang_Wording[1]="EN - English";
Multi_Lang_Wording[2]="JP - 日本語";


//多語系網頁Title招呼語 (顯示在瀏覽TAB上)
Multi_Lang_Title= new Array();
Multi_Lang_Title[0]="歡迎來到EQL - PC Stick網站";
Multi_Lang_Title[1]="Welcome to EQL - PC Stick";
Multi_Lang_Title[2]="EQLへようこそ - PC Stick";


//=====文字儲存區 END======

$(function () {
  let setinterval = setInterval(hangulClock, 100);

  // 한글 시계 함수
  function hangulClock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    $('td:not(.alarm)').css('color', '#CCCCCC');

    if (hours == 0 && minutes == 0) {
      $('.midnight').css('color', 'black');
    } else {

      // 정각
      if (minutes == 0) {
        $('.sharp').css('color', 'black');
      }

      // 오전 오후
      if (hours < 12) {
        $('.am').css('color', 'black');
      } else {
        hours = hours - 12;
        $('.pm').css('color', 'black');
      }

      // 분 단위
      if (minutes != 0) {
        $('.min').css('color', 'black');
      }

      // 시간 단위
      if (hours == 0) {
        $('.hour').css('color', '#CCCCCC');
      }

      // 시
      $('.h' + hours).css('color', 'black');
      $('.hour').css('color', 'black');

      // 분
      if (minutes >= 10) {
        $('.m_ten_' + Math.floor(minutes / 10)).css('color', 'black');
        $('.m10').css('color', 'black');
        $('.m' + minutes % 10).css('color', 'black');
      } else {
        $('.m' + minutes).css('color', 'black');
      }
    }
  }

  let alarm = $('.alarm');
  let alarmSet = $('.set');
  let alarmCheck = $('.check');

  // 버튼 클릭 시
  alarm.click(function() {
    // alarm 버튼이 검은색 일 때(alarm 클릭시)
    if (alarmSet.css('color') == 'rgb(0, 0, 0)') {
      $(this).toggleClass('permit');
    } else {
      $(this).not('.deny').toggleClass('permit');
      $('.deny').attr('disabled', true);
    }
  });

  // alarm이 누르면 않으면 check의 deny 클래스를 toggle 시킨다.
  alarmSet.click(function() {
    alarmCheck.toggleClass('deny');
  })

  // check 버튼 클릭 시
  alarmCheck.click(function() {
    clearInterval(setinterval);
    for (let i=0; i<36; i++) {
      $( "td:not('.alarm'):eq( "+ i + " )" ).addClass('n'+i);
    }

    if ($('.deny').length == 0) {
      console.log('설정 완료');
      let i = 0;
      // 알람 설정 시 보이는 디자인(색깔 왔다갔다)
      let alarmDesign = setInterval(function () {
        console.log(i);
        $('.n'+i).css('color', 'lightgreen');
        $('.n'+(i-1)).css('color', '#CCCCCC');
        i++;
        if (i > 36) {
          clearInterval(alarmCheck);
          setTimeout(function (){
            console.log('a');
            setTimeout(hangulClock(), 100);            
          }, 500);
          clearInterval(alarmDesign);
          i=0;
          alarm.click();
        }
      },50);
    }
  });
  
  

  console.log(alarmSet.css('color'));

  if (alarmSet.css('color') != 'rgb(0, 0, 0)') {
    alarmCheck.addClass('deny');
    // $('.deny').attr('disabled', true);
  }

});

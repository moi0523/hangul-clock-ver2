$(function () {
  setInterval(hangulClock, 100);

  function hangulClock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    $('td').css('color', '#CCCCCC');

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
});
$(function () {
  $('time.timeago').each(function () {
      this.innerHTML = Date.create(this.innerHTML).relative()
  });

  $(".date").each(function () {
      this.innerHTML = Date.create(this.innerHTML).format('<span class="daybig">{dd}</span> {Mon} {yyyy}')
  });

  $(".article").tooltip({ 
      track: true, 
      delay: 0,
      showURL: false,
      fade: 250 
  });
});

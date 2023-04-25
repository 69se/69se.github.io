document.getElementById("69se1link").text = "69SE.VIP";
document.getElementById("69se1link").href = "https://www.69se.vip";
document.getElementById("69se2link").text = "69SE.GQ";
document.getElementById("69se2link").href = "https://www.69se.gq";
document.getElementById("69se3link").text = "69SE.GA";
document.getElementById("69se3link").href = "https://www.69se.ga";
document.getElementById("69se4link").text = "69SE.TV";
document.getElementById("69se4link").href = "https://www.69se.tv";

document.getElementById("69se1").href =
  "javascript:web('69se1','www.69se.vip')";
document.getElementById("69se2").href = "javascript:web('69se2','www.69se.gq')";
document.getElementById("69se3").href = "javascript:web('69se3','www.69se.ga')";
document.getElementById("69se4").href = "javascript:web('69se4','www.69se.tv')";

function all() {
  document.getElementById("69se1").click();
  document.getElementById("69se2").click();
  document.getElementById("69se3").click();
  document.getElementById("69se4").click();
}

function web(id, link) {
  $("#" + id).html('<img height="15px" src="./static/loading.gif">');
  $.ajax({
    url: "https://" + link,
    method: "GET",
    dataType: "jsonp",
    cache: false,
    timeout: 5000,
    start_time: new Date().getTime(),
    complete: function (XMLHttpRequest) {
      var newTime = new Date().getTime() - this.start_time;
      if (XMLHttpRequest.status == 200) {
        $("#" + id).text(newTime / 1000 + " 秒");
      } else {
        $("#" + id).text("连接超时");
      }
    },
  });
}

function videosrc() {
  if (
    navigator.userAgent.indexOf("UCBrowser") > -1 ||
    navigator.userAgent.indexOf("MQQBrowser") > -1
  ) {
  } else {
    fetch("./static/video_bg_01.mp4")
      .then((response) => response.blob())
      .then((blob) => {
        const videoUrl = URL.createObjectURL(blob);
        document.getElementById("video_source").src = videoUrl;
        document.getElementById("video_bg").load();
      })
      .catch((error) => console.error(error));
  }
}

videosrc();
setTimeout(all, 2500);

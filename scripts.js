(function(doc) {
  doc.addEventListener('DOMContentLoaded', function() {
    var body = doc.body;
    var topicBar = doc.getElementById('topic_bar');
    body.removeChild(topicBar);
    body.insertBefore(topicBar, body.firstChild);
  });
})(document);

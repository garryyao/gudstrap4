(function(WebFont){
  function isLocalStorageSupported() {
    var testKey = 'ef_gud_font_test',
        storage = window.sessionStorage;
    try {
        storage.setItem(testKey, 'testValue');
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
  }

  var fontLoadedKey = 'ef_gud_fonts_loaded';
  var font_file_path = '../fontface.css';

  var loadStyle = function () {
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = font_file_path;
    document.getElementsByTagName('head')[0].appendChild(link);
  };

  if (isLocalStorageSupported()){
    if(!!localStorage.getItem(fontLoadedKey)) {
      loadStyle();
    }
    else {
      WebFont.load({
        custom: {
          families: ['HelveticaNeueLT:n7,n5,n4,n3','HelveticaNeueLT-TH'],
          urls : [font_file_path]
        },
        active: function() {
          alert('font loaded')
          if(!!window.localStorage){
            localStorage.setItem(fontLoadedKey, true);
          }
        }
      });
    }
  } else {
    loadStyle();
  }
})(WebFont);

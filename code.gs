function doGet() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('index');
  htmlOutput.setTitle('Webフォトアルバム');
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1')
  return htmlOutput;
}

function getFolderImages(folderId) {
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  var imageUrls = [];

  while (files.hasNext()) {
    var file = files.next();
    var mimeType = file.getMimeType();
    if (mimeType.startsWith("image/")) {
      var imageUrl = "https://drive.google.com/uc?id=" + file.getId();
      imageUrls.push(imageUrl);
    }
  }

  return imageUrls;
}

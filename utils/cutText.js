module.exports = (content, maxLength) => {
  if(typeof content == 'string' && typeof maxLength == 'number' && maxLength > 0){
    if(content.length < 1) return 'Error';
    if(content.length <= maxLength) return content;
    return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
  }else{
    return 'Error';
  }
  
};

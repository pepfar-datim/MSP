import { Remarkable } from 'remarkable';

export const sortJSON = function (data, key, direction) {
  if (!data){
    return null;
  }    
    return data.sort(function(a, b) {       
        var x = a[key]; var y = b[key];         
        if (direction === 'asc' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
        if (direction === 'desc') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
        return true;
    });    
  }

  export const convertMarkdown = function convertMarkdown(text) {
    var md = new Remarkable();    
    return md.render(text) ;
  }
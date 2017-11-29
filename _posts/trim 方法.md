[github 地址](https://github.com/edtsech/underscore.string/blob/master/lib/underscore.string.js#L13)

关键代码如下：
```js
var nativeTrim = String.prototype.trim;
var nativeTrimRight = String.prototype.trimRight;
var nativeTrimLeft = String.prototype.trimLeft;

var defaultToWhiteSpace = function(characters) {
  if (characters == null)
    return '\\s';
  else if (characters.source)
    return characters.source;
  else
    return '[' + _s.escapeRegExp(characters) + ']';
};

var _s = {
  trim: function(str, characters){
    if (str == null) return '';
    if (!characters && nativeTrim) return nativeTrim.call(str);
    characters = defaultToWhiteSpace(characters);
    return String(str).replace(new RegExp('\^' + characters + '+|' + characters + '+$', 'g'), '');
  }
}
```

module.exports = function () {
  console.log('HelloWorld');
};
exports.getScriptParams = function () {
  var scripts = document.getElementsByTagName( 'script' );
    var src = scripts[ scripts.length - 1 ].src;
    var query = src.substring( src.indexOf( '?' ) + 1 );
    var parameters = query.split( '&' );
    var result = new Object("");
    for( var i = 0; i < parameters.length; i++ ) {
        var element = parameters[ i ].split( '=' );
        var paramName = decodeURIComponent( element[ 0 ] );
        var paramValue = decodeURIComponent( element[ 1 ] );
        result[ paramName ] = paramValue;
    }
    return result;
}

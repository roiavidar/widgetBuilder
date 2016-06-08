/**
 * Created by roi.avidar on 08/06/2016.
 */

document.addEventListener('DOMContentLoaded', domReady);

function domReady() {
    var widget = widgetBuilder(widgetJson);
    document.body.appendChild(widget);
}
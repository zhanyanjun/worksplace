/*
* @Author: zxchc
* @Date:   2017-01-08 21:05:25
* @Last Modified by:   zxchc
* @Last Modified time: 2017-01-08 21:05:41
*/

'use strict';
script
  $(document).ready(function() {

    $(#getMessage).on(click, function() {
      $.getJSON(jsoncats.json, function(json) {

        var html = ;
         Only change code below this line.

        json.forEach(function(val) {

          var keys = Object.keys(val);

          html += div class = 'cat';

          keys.forEach(function(key) {
            html += b + key + b  + val[key] + br;
          });

          html += divbr;
        });
         Only change code above this line.

        $(.message).html(html);

      });
    });
  });
script

div class=container-fluid
  div class = row text-center
    h2Cat Photo Finderh2
  div
  div class = row text-center
    div class = col-xs-12 well message
      The message will go here
   div
  div
  div class = row text-center
    div class = col-xs-12
      button id = getMessage class = btn btn-primary
        Get Message
      button
    div
  div
div

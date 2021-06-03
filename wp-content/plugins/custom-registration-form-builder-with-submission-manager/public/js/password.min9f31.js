/**
 * @author Òscar Casajuana a.k.a. elboletaire <elboletaire at underave dot net>
 * @link https://github.com/elboletaire/password-strength-meter
 */
!function(a){"use strict";var e=function(e,s){function t(a){return a===-1?s.shortPass:a===-2?s.containsUsername:(a=a<0?0:a,a<34?s.badPass:a<68?s.goodPass:s.strongPass)}function n(a,e){var t=0;if(a.length<s.minimumLength)return-1;if(s.username){if(a.toLowerCase()===e.toLowerCase())return-2;if(s.usernamePartialMatch&&e.length){var n=new RegExp(e.toLowerCase());if(a.toLowerCase().match(n))return-2}}t+=4*a.length,t+=r(1,a).length-a.length,t+=r(2,a).length-a.length,t+=r(3,a).length-a.length,t+=r(4,a).length-a.length,a.match(/(.*[0-9].*[0-9].*[0-9])/)&&(t+=5);var o=".*[!,@,#,$,%,^,&,*,?,_,~]";return o=new RegExp("("+o+o+")"),a.match(o)&&(t+=5),a.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&(t+=10),a.match(/([a-zA-Z])/)&&a.match(/([0-9])/)&&(t+=15),a.match(/([!,@,#,$,%,^,&,*,?,_,~])/)&&a.match(/([0-9])/)&&(t+=15),a.match(/([!,@,#,$,%,^,&,*,?,_,~])/)&&a.match(/([a-zA-Z])/)&&(t+=15),(a.match(/^\w+$/)||a.match(/^\d+$/))&&(t-=10),t>100&&(t=100),t<0&&(t=0),t}function r(a,e){for(var s="",t=!1,n=0;n<e.length;n++){t=!0;for(var r=0;r<a&&r+n+a<e.length;r++)t=t&&e.charAt(r+n)===e.charAt(r+n+a);r<a&&(t=!1),t?(n+=a-1,t=!1):s+=e.charAt(n)}return s}function o(){var r=!0,o=s.showText,h=s.showPercent,i=a("<div>").addClass("pass-graybar"),c=a("<div>").addClass("pass-colorbar"),l=a("<div>").addClass("pass-wrapper").append(i.append(c));return e.parent().addClass("pass-strength-visible"),s.animate&&(l.css("display","none"),r=!1,e.parent().removeClass("pass-strength-visible")),s.showPercent&&(h=a("<span>").addClass("pass-percent").text("0%"),l.append(h)),s.showText&&(o=a("<span>").addClass("pass-text").html(s.enterPass),l.append(o)),e.after(l),e.keyup(function(){var r=s.username||"";r&&(r=a(r).val());var i=n(e.val(),r);e.trigger("password.score",[i]);var l=i<0?0:i;if(c.css({backgroundPosition:"0px -"+l+"px",width:l+"%"}),s.showPercent&&h.html(l+"%"),s.showText){var p=t(i);!e.val().length&&i<=0&&(p=s.enterPass),o.html()!==a("<div>").html(p).html()&&(o.html(p),e.trigger("password.text",[p,i]))}}),s.animate&&(e.focus(function(){r||l.slideDown(s.animateSpeed,function(){r=!0,e.parent().addClass("pass-strength-visible")})}),e.blur(function(){!e.val().length&&r&&l.slideUp(s.animateSpeed,function(){r=!1,e.parent().removeClass("pass-strength-visible")})})),this}var h={shortPass:"The password is too short",badPass:"Weak; try combining letters & numbers",goodPass:"Medium; try using special charecters",strongPass:"Strong password",containsUsername:"The password contains the username",enterPass:"Type your password",showPercent:!1,showText:!0,animate:!0,animateSpeed:"fast",username:!1,usernamePartialMatch:!0,minimumLength:4};return s=a.extend({},h,s),o.call(this)};a.fn.password=function(s){return this.each(function(){new e(a(this),s)})}}(jQuery);
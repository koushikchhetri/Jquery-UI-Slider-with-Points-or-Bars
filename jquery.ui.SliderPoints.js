(function($){
	/*
	Author: Koushik Chhetri
	Email: care.koushik.chhetri@gmail.com
	Date:22/01/2014
	*/
	$.fn.SliderPoints=function(n,t){var r=$.extend({unit:"",unitposition:"right",points:7,labelEnabled:!0,labelfontsize:"11px"},t),h=r.points-1,l=Math.ceil(n.length/h),i="jq_sp",o=$(this),f=o.attr("id"),v=o.offset(),p=v.top,y=v.left,e,u,a,s,c;for($("."+f+"_"+i+"_container").length>0&&$("."+f+"_"+i+"_container").remove(),e=$('<div class="'+f+"_"+i+'_container"/>').css({position:"absolute",left:y,top:p-20,background:"transaprent","z-index":1,height:parseFloat(o.css("height"))+10,width:o.css("width")}),u=0;u<h;u++)r.labelEnabled&&(a=l*u-1,s=$('<div class="'+f+"_"+i+"_size_"+u+" "+i+'_size"/>').css({position:"absolute","margin-left":a+"%","margin-top":"0",width:"1px","font-size":r.labelfontsize}).html(r.unitposition=="left"?r.unit+""+n[l*u]:n[l*u]+""+r.unit),e.append(s)),c=$('<div class="'+f+"_"+i+"_"+u+" "+i+'"/>').css({position:"absolute","margin-left":l*u+"%","margin-top":"12px",width:"1px",height:"42%","background-color":"#000000"}),e.append(c);r.labelEnabled&&(s=$('<div class="'+f+"_"+i+"_size_"+h+" "+i+'_size"/>').css({position:"absolute","margin-left":"98%","margin-top":"0",width:"1px","font-size":r.labelfontsize}).html(r.unitposition=="left"?r.unit+""+n[n.length-1]:n[n.length-1]+""+r.unit),e.append(s)),c=$('<div class="'+f+"_"+i+"_"+h+" "+i+'"/>').css({position:"absolute","margin-left":"100%","margin-top":"12px",width:"1px",height:"42%","background-color":"#000000"}),e.append(c),o.after(e)};
}(jQuery));

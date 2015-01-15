#Jquery-UI-Slider-with-Points-or-Bars

This jquery plugin is used to generate points or bars on the Jquery UI Slider.

##Procedure:

  Take an array where values are label that you want to show on the slider
  Example var arr=array(10,20,30,40,50,60,70,80);
  Consider the jquery ui slider selector object is "#slider"
		
  Now if you want the default behaviour of the slider i.e you want both the points(certain number) and 		
  labels then the following is usable
  ```
  $("#slider").SliderPoints(arr);
  ```
  -The above code generates 7 points with the label
  -If you want custom behaviour the write like below code
  ```
  $("#slider").SliderPoints(arr,{unit:'KB',unitposition:'right',points:10});
  ```
  The above code generates 10 points with label pointing its value and the unit "KB" right to the label position.
  
##If you dont want to show the label then just use like below code

```
$("#slider").SliderPoints(arr,{unit:'KB',unitposition:'right',points:10,labelEnabled:false});
```

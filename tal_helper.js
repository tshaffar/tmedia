function talDropText(code, id, theDelay, x,y,width,str, boxcolor,textcolor) 
{
var g = d3.select("#instructions")
	.append("svg") 
	.append("g")
	
	
	g.append("rect")
		.attr("id",code+"r1") 
		.attr("x", x)
		.attr("y", 0) 
		.attr("width", width)
		.attr("height", 30)
		.attr("fill", boxcolor)
			.attr("rx", 20 )
			.attr("ry", 20 )
			.attr("stroke","black")
			.attr("stroke-width",5)
			.attr("opacity","0") 
			
		
	
	g.append("text")
	.attr("id",code+"t1") 
	.attr("fill",textcolor) 
	.attr("x",x+10)
	.attr("y", 20)
	.text(str)
	.attr("opacity","0") 
	
 d3.select("#"+code+"r1")
    .transition("playStage1")
	  .delay(theDelay) 
      .attr("y",y) 
	  .style('stroke', 'green')
      //.ease('bounce')
	  	  .attr("opacity",.5)
      .duration(1000);
	
 d3.select("#" + code + "t1")
    .transition("playStage1")
	  .delay(theDelay) 
      .attr("y",y+20) 
	  .attr("opacity",1) 
     //.ease('bounce')
      .duration(1000);

}

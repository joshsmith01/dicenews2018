			var map;
			
			function writeDevInfo(event) {
			    document.getElementById("devInfo").innerHTML = event.str;
			}
			
			AmCharts.ready(function() {
			    map = new AmCharts.AmMap();
			    map.fitMapToContainer = true;
			    map.pathToImages = "http://insights.dice.com/wp-content/themes/dicenews2015/assets/d3/2017/heat-map/ammap/images/";
			    map.fontFamily = "helvetica,verdana,arial,sans-serif";
			    map.balloon = {
			    	color: "#FFFFFF",
			    	borderColor: "#566D7E",
			    	borderThickness: 0,
			    	fillColor: "#566D7E",
			    	horizontalPadding: 15,
			    	verticalPadding: 10,
			    	fontSize: 13
			    };

			    map.addTitle("2017-2016 Dice Salary Survey", "21", "#000000", 1, true);
			    map.addLabel("0", "36", "Average U.S. Tech Salaries", "center", "18", "#000000");
				map.panEventsEnabled = true; // this line enables pinch-zooming and dragging on touch devices
			    
			    //map.colorSteps = 10;
			    
			    map.imagesSettings = {
			    	color: "#007C29",
			        rollOverColor: "#000000",
			        selectedScale: 1,
			        selectedColor: "#47D147",
				    descriptionWindowY: 80,
			        descriptionWindowX: 280,
			        descriptionWindowWidth: 250
			    };
			
			    map.areasSettings = {
			        autoZoom: true,
			        color: "#CCCCCC",
			        colorSolid: "#1d75bc",
			        outlineColor: "#CCCCCC",
			        selectedColor: "#f47921",
			        rollOverOutlineColor: "#CCCCCC",
			        rollOverColor: "#768997",
			        descriptionWindowY: 80,
			        descriptionWindowX: 280,
			        descriptionWindowWidth: 250
			    };

			    var dataProvider = {
			        mapVar: AmCharts.maps.usaHigh,
			        images: [
			        	{
			        	latitude: -67.58445,
			        	longitude: 85.636803,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Atlanta",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$73,684<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$72,323<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$74,822<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$78,036<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$78,914<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,944<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,235<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$87,556<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,474<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$86,698<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$95,457<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$88,214<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-7.6%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;0.8%<br>"
			        	},
			        	{
			        	latitude: -86.224574,
			        	longitude: -9.310345,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Austin",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$76,605<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,833<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,503<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,375<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,419<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,680<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$91,994<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$93,135<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$98,672<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$93,962<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-4.8%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;4.8%<br>"
			        	},
			        	{
			        	latitude: 46.018891,
			        	longitude: 132.827586,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Baltimore/Washington D.C. ",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$75,593<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,911<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,750<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$85,354<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,014<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,149<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$94,317<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$97,895<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$97,588<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$98,323<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$101,413<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$97,958<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-3.4%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;0.1%<br>"
			        	},
			        	{
			        	latitude: 81.543844,
			        	longitude: 162,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Boston",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,211<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$80,308<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$83,465<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$84,627<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$85,121<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$86,782<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$88,657<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$94,742<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$94,531<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$97,288<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$101,260<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$103,368<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;2.1%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;9.1%<br>"
			        	},
			        	{
			        	latitude: -49.592946,
			        	longitude: 111.724138,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Charlotte",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$70,985<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,426<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$76,341<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,825<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$84,795<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$86,314<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,352<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,292<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,349<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,215<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-1.3%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;3.4%<br>"
			        	},
			        	{
			        	latitude: 64.170584,
			        	longitude: 56.482759,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Chicago",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$71,496<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$75,154<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$76,407<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,320<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$80,933<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,933<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$83,970<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$85,098<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$86,574<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$88,866<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$93,967<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$94,610<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;0.7%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;11.2%<br>"
			        	},
			        	{
			        	latitude: 64.340753,
			        	longitude: 95.299235,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Cleveland",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$65,045<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$62,451<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$68,131<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$66,725<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$68,519<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$75,773<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,840<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$73,642<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,303<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$78,818<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-4.2%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;4.0%<br>"
			        	},
			        	{
			        	latitude: 42.506948,
			        	longitude: 88.800368,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Columbus",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$64,045<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$69,260<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$76,571<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$74,615<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$76,522<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,831<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$76,035<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$80,196<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$87,209<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,001<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;2.1%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;7.4%<br>"
			        	},
			        	{
			        	latitude: -81.229524,
			        	longitude: -4.089372,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Dallas/Ft. Worth",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$71,494<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$74,656<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$76,560<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$76,836<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$78,438<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,579<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$84,589<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$86,136<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,952<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$91,674<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$93,206<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$95,130<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;2.1%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;10.4%<br>"
			        	},
			        	{
			        	latitude: 31.767331,
			        	longitude: -54.08778,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Denver",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$74,823<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$77,317<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$77,846<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$80,646<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$78,352<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$83,168<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$86,590<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,430<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$93,195<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$94,940<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$96,325<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$96,530<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;0.2%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;6.7%<br>"
			        	},
			        	{
			        	latitude: 72.173516,
			        	longitude: 86.451487,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Detroit",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$64,154<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$67,080<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$67,271<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$73,327<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$69,853<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$71,445<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$71,455<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$76,515<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,832<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$86,970<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$87,406<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$85,400<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-2.3%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;11.6%<br>"
			        	},
			        	{
			        	latitude: -87.402427,
			        	longitude: 10.831618,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Houston",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$68,358<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$71,526<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$72,733<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$75,199<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,499<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$83,625<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,307<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$94,186<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$92,475<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,838<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$93,415<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$88,166<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-5.6%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;-6.4%<br>"
			        	},
			        	{
			        	latitude: 11.147612,
			        	longitude: 12.925793,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Kansas City",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$71,149<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$73,647<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,551<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$66,878<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$75,387<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$77,249<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$77,329<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$73,469<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,448<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$87,452<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-2.2%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;13.2%<br>"
			        	},
			        	{
			        	latitude: -48.143513,
			        	longitude: -155.175654,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Los Angeles",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$73,911<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,583<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,039<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$86,766<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$88,141<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$84,551<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$87,183<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$92,498<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$95,815<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$95,345<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$101,588<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$99,400<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-2.2%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;7.5%<br>"
			        	},
			        	{
			        	latitude: -89.044439,
			        	longitude: 129.078839,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Miami ",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$69,149<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$74,448<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$69,739<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$68,008<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$77,960<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$80,655<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$78,872<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,060<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$83,831<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,478<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-1.6%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;2.3%<br>"
			        	},
			        	{
			        	latitude: 82.309216,
			        	longitude: 22.011447,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Minneapolis",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$100,379<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$99,404<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-1.0%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;n/a<br>"
			        	},
			        	{
			        	latitude: 70.105493,
			        	longitude: 147.724138,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "New York City",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$76,382<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$80,006<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$80,770<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$85,452<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$86,710<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$87,298<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,042<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,669<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$93,915<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$95,586<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$101,087<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$99,345<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-1.7%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;10.8%<br>"
			        	},
			        	{
			        	latitude: -86.979732,
			        	longitude: 115.610841,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Orlando",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$86,621<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$86,490<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-0.2%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;n/a<br>"
			        	},
			        	{
			        	latitude: 61.095184,
			        	longitude: 140.20308,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Philadelphia",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$71,881<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$72,786<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$74,442<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$78,860<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$78,369<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,986<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,041<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$85,672<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$92,138<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,571<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$94,782<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,414<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-4.6%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;5.5%<br>"
			        	},
			        	{
			        	latitude: -65.928221,
			        	longitude: -115.140883,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Phoenix",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$70,023<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$74,976<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$71,246<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$77,303<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$78,792<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$77,141<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$74,950<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$83,607<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$87,114<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$84,404<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,800<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$92,521<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;3.0%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;10.7%<br>"
			        	},
			        	{
			        	latitude: 54.941326,
			        	longitude: 108.532256,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Pittsburgh",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$58,221<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$65,135<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$65,560<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$65,449<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$64,519<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$76,207<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$68,100<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,575<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,788<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$83,193<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;0.5%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;9.2%<br>"
			        	},
			        	{
			        	latitude: 87.915437,
			        	longitude: -157.394271,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Portland  ",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$71,182<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$77,801<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$75,472<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$73,096<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,055<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$89,291<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$84,295<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$91,556<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$92,242<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$85,588<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-7.2%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;-4.1%<br>"
			        	},
			        	{
			        	latitude: -29.434791,
			        	longitude: 125.581103,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Raleigh",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$68,101<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$70,023<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$74,059<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$77,825<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,830<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$83,613<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$85,559<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$87,532<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,039<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$83,504<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-7.3%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;-0.1%<br>"
			        	},
			        	{
			        	latitude: 51.695525,
			        	longitude: -168.307382,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Sacramento",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$72,355<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$75,197<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$83,410<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,193<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,851<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,237<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$87,114<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,127<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$85,100<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$96,788<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$97,237<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,567<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-6.9%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;0.5%<br>"
			        	},
			        	{
			        	latitude: -65.458277,
			        	longitude: -148.90424,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "San Diego",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$72,163<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,416<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$75,994<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,302<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,819<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$85,617<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$85,841<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$97,328<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,849<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$94,121<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$98,934<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$102,899<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;4.0%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;5.7%<br>"
			        	},
			        	{
			        	latitude: 89.063991,
			        	longitude: -149.165549,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Seattle",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$73,105<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,787<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$79,636<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,514<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$84,114<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$86,168<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,362<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$94,335<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$95,048<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$99,423<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$101,660<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$99,290<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-2.3%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;5.3%<br>"
			        	},
			        	{
			        	latitude: 41.967588,
			        	longitude: -174.212368,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Silicon Valley",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;$85,430<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;$90,310<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$93,876<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$97,259<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$96,299<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$99,028<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$104,195<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$101,278<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$108,603<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$112,610<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$114,443<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$114,184<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-0.2%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;12.7%<br>"
			        	},
			        	{
			        	latitude: 1.173552,
			        	longitude: 41.688541,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "St. Louis",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$64,715<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$72,819<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$74,012<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$71,539<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$71,686<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,245<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$76,220<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$93,829<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,208<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$83,717<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;3.1%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;3.0%<br>"
			        	},
			        	{
			        	latitude: -87.919306,
			        	longitude: 108.151378,
			        	type: "circle",
			        	width: 7,
			        	zoomLevel: 5,
			        	fixedSize: false,
			        	title: "Tampa",
			        	description: "<b>2005</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2006</b>:&nbsp;&nbsp;&nbsp;&nbsp;n/a<br><b>2007</b>:&nbsp;&nbsp;&nbsp;&nbsp;$69,547<br><b>2008</b>:&nbsp;&nbsp;&nbsp;&nbsp;$69,440<br><b>2009</b>:&nbsp;&nbsp;&nbsp;&nbsp;$72,720<br><b>2010</b>:&nbsp;&nbsp;&nbsp;&nbsp;$69,711<br><b>2011</b>:&nbsp;&nbsp;&nbsp;&nbsp;$72,802<br><b>2012</b>:&nbsp;&nbsp;&nbsp;&nbsp;$78,104<br><b>2013</b>:&nbsp;&nbsp;&nbsp;&nbsp;$80,273<br><b>2014</b>:&nbsp;&nbsp;&nbsp;&nbsp;$82,932<br><b>2015</b>:&nbsp;&nbsp;&nbsp;&nbsp;$87,992<br><b>2016</b>:&nbsp;&nbsp;&nbsp;&nbsp;$81,285<br><br><b>2015-2016 Change</b>:&nbsp;&nbsp;&nbsp;&nbsp;-7.6%<br><b>2012-2016 Change</b>:&nbsp;&nbsp;&nbsp;4.1%<br>"
			        	}],

			        areas: [
			        {
			            id: "US-AL",
			            title: "Alabama",
			            color: "#89BDD2",
			            description:
			            "<b>2005</b>: $58,701<br><b>2006</b>: $62,771<br><b>2007</b>: $66,386<br><b>2008</b>: $68,243<br><b>2009</b>: $67,594<br><b>2010</b>: $72,955<br><b>2011</b>: $66,563<br><b>2012</b>: $70,546<br><b>2013</b>: $77,901 <br><b>2014</b>: $78,822<br><b>2015</b>: $79,252<br><b>2016</b>: $79,672<br><br><b>2015-2016 Change</b>: 0.5%<br><b>2012-2016 Change</b>: 19.1%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-AK",
			            title: "Alaska",
			            color: "#6199AF",
			            description:
			            "<b>2005</b>: $64,167<br><b>2006</b>: $77,146<br><b>2007</b>: $62,004<br><b>2008</b>: $67,428<br><b>2009</b>: $79,334<br><b>2010</b>: $65,883<br><b>2011</b>: $74,515<br><b>2012</b>: $84,175<br><b>2013</b>: $100,092 <br><b>2014</b>: $94,421<br><b>2015</b>: $67,970<br><b>2016</b>: $78,275<br><br><b>2015-2016 Change</b>: 15.2%<br><b>2012-2016 Change</b>: -8.8%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-AZ",
			            title: "Arizona",
			            color: "#87BBD0",
			            description:
			            "<b>2005</b>: $68,320<br><b>2006</b>: $72,075<br><b>2007</b>: $67,784<br><b>2008</b>: $75,138<br><b>2009</b>: $76,393<br><b>2010</b>: $75,132<br><b>2011</b>: $74,559<br><b>2012</b>: $82,645<br><b>2013</b>: $84,860 <br><b>2014</b>: $84,088<br><b>2015</b>: $89,598<br><b>2016</b>: $91,006<br><br><b>2015-2016 Change</b>: 1.6%<br><b>2012-2016 Change</b>: 20.2%<br>"
			            },
			        {
			            id: "US-AR",
			            title: "Arkansas",
			            color: "#DCDCDC",
			            description:
			            "<b>2005</b>: $54,645<br><b>2006</b>: $65,822<br><b>2007</b>: $67,397<br><b>2008</b>: $67,056<br><b>2009</b>: $68,432<br><b>2010</b>: $68,130<br><b>2011</b>: $64,370<br><b>2012</b>: $69,791<br><b>2013</b>: $75,186 <br><b>2014</b>: $74,353<br><b>2015</b>: $77,553<br><b>2016</b>: $74,038<br><br><b>2015-2016 Change</b>: -4.5%<br><b>2012-2016 Change</b>: 20.5%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-CA",
			            title: "California",
			            color: "#EAEAEA",
			            description:
			            "<b>2005</b>: $78,697<br><b>2006</b>: $83,974<br><b>2007</b>: $85,643<br><b>2008</b>: $89,659<br><b>2009</b>: $89,742<br><b>2010</b>: $90,521<br><b>2011</b>: $93,294<br><b>2012</b>: $95,635<br><b>2013</b>: $98,184 <br><b>2014</b>: $102,950<br><b>2015</b>: $106,044<br><b>2016</b>: $104,706<br><br><b>2015-2016 Change</b>: -1.3%<br><b>2012-2016 Change</b>: 13.7%<br>"
			            },
			        {
			            id: "US-CO",
			            title: "Colorado",
			            color: "#FFFFFF",
			            description:
			            "<b>2005</b>: $70,668<br><b>2006</b>: $74,789<br><b>2007</b>: $75,450<br><b>2008</b>: $79,432<br><b>2009</b>: $77,669<br><b>2010</b>: $81,488<br><b>2011</b>: $86,043<br><b>2012</b>: $89,144<br><b>2013</b>: $91,933 <br><b>2014</b>: $92,905<br><b>2015</b>: $95,943<br><b>2016</b>: $96,018<br><br><b>2015-2016 Change</b>: 0.1%<br><b>2012-2016 Change</b>: 11.5%<br>"
			            },
			        {
			            id: "US-CT",
			            title: "Connecticut",
			            color: "#89BDD2",
			            description:
			            "<b>2005</b>: $75,811<br><b>2006</b>: $76,031<br><b>2007</b>: $76,437<br><b>2008</b>: $77,878<br><b>2009</b>: $85,687<br><b>2010</b>: $82,342<br><b>2011</b>: $91,120<br><b>2012</b>: $85,952<br><b>2013</b>: $89,317 <br><b>2014</b>: $92,395<br><b>2015</b>: $93,296<br><b>2016</b>: $93,632<br><br><b>2015-2016 Change</b>: 0.4%<br><b>2012-2016 Change</b>: 2.4%<br>"
			            },
			        {
			            id: "US-DE",
			            title: "Delaware",
			            color: "#939393",
			            description:
			            "<b>2005</b>: $69,086<br><b>2006</b>: $73,718<br><b>2007</b>: $69,566<br><b>2008</b>: $70,707<br><b>2009</b>: $72,706<br><b>2010</b>: $72,887<br><b>2011</b>: $71,658<br><b>2012</b>: $79,012<br><b>2013</b>: $83,630 <br><b>2014</b>: $89,315<br><b>2015</b>: $93,795<br><b>2016</b>: $73,275<br><br><b>2015-2016 Change</b>: -21.9%<br><b>2012-2016 Change</b>: 30.9%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-DC",
			            title: "District of Columbia",
			            color: "#85B9CE",
			            description:
			            "<b>2005</b>: $79,317<br><b>2006</b>: $81,756<br><b>2007</b>: $86,721<br><b>2008</b>: $84,472<br><b>2009</b>: $87,270<br><b>2010</b>: $92,511<br><b>2011</b>: $94,190<br><b>2012</b>: $100,371<br><b>2013</b>: $98,805 <br><b>2014</b>: $98,274<br><b>2015</b>: $94,788<br><b>2016</b>: $96,645<br><br><b>2015-2016 Change</b>: 2.0%<br><b>2012-2016 Change</b>: 0.6%<br>"
			            },
			        {
			            id: "US-FL",
			            title: "Florida",
			            color: "#E7E7E7",
			            description:
			            "<b>2005</b>: $63,248<br><b>2006</b>: $65,772<br><b>2007</b>: $67,915<br><b>2008</b>: $70,103<br><b>2009</b>: $70,384<br><b>2010</b>: $69,539<br><b>2011</b>: $73,423<br><b>2012</b>: $79,199<br><b>2013</b>: $79,171 <br><b>2014</b>: $79,388<br><b>2015</b>: $84,900<br><b>2016</b>: $83,226<br><br><b>2015-2016 Change</b>: -2.0%<br><b>2012-2016 Change</b>: 15.6%<br>"
			            },
			        {
			            id: "US-GA",
			            title: "Georgia",
			            color: "#D1D1D1",
			            description:
			            "<b>2005</b>: $70,447<br><b>2006</b>: $70,314<br><b>2007</b>: $72,802<br><b>2008</b>: $75,260<br><b>2009</b>: $75,708<br><b>2010</b>: $81,025<br><b>2011</b>: $80,252<br><b>2012</b>: $84,993<br><b>2013</b>: $89,856 <br><b>2014</b>: $86,080<br><b>2015</b>: $92,997<br><b>2016</b>: $85,995<br><br><b>2015-2016 Change</b>: -7.5%<br><b>2012-2016 Change</b>: 15.9%<br>"
			            },
			        {
			            id: "US-HI",
			            title: "Hawaii",
			            color: "#AAAAAA",
			            description:
			            "<b>2005</b>: $67,849<br><b>2006</b>: $64,859<br><b>2007</b>: $67,115<br><b>2008</b>: $66,786<br><b>2009</b>: $80,971<br><b>2010</b>: $73,774<br><b>2011</b>: $82,509<br><b>2012</b>: $91,771<br><b>2013</b>: $85,393 <br><b>2014</b>: $94,233<br><b>2015</b>: $97,619<br><b>2016</b>: $81,047<br><br><b>2015-2016 Change</b>: -17.0%<br><b>2012-2016 Change</b>: 18.3%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-ID",
			            title: "Idaho",
			            color: "#9C9C9C",
			            description:
			            "<b>2005</b>: $58,879<br><b>2006</b>: $65,962<br><b>2007</b>: $63,394<br><b>2008</b>: $58,993<br><b>2009</b>: $67,832<br><b>2010</b>: $60,326<br><b>2011</b>: $66,700<br><b>2012</b>: $71,784<br><b>2013</b>: $75,815 <br><b>2014</b>: $79,739<br><b>2015</b>: $85,452<br><b>2016</b>: $68,342<br><br><b>2015-2016 Change</b>: -20.0%<br><b>2012-2016 Change</b>: 28.1%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-IL",
			            title: "Illinois",
			            color: "#87BBD0",
			            description:
			            "<b>2005</b>: $69,482<br><b>2006</b>: $72,777<br><b>2007</b>: $74,886<br><b>2008</b>: $78,274<br><b>2009</b>: $78,918<br><b>2010</b>: $78,168<br><b>2011</b>: $82,840<br><b>2012</b>: $83,838<br><b>2013</b>: $85,474 <br><b>2014</b>: $87,605<br><b>2015</b>: $92,134<br><b>2016</b>: $93,198<br><br><b>2015-2016 Change</b>: 1.2%<br><b>2012-2016 Change</b>: 11.2%<br>"
			            },
			        {
			            id: "US-IN",
			            title: "Indiana",
			            color: "#DCDCDC",
			            description:
			            "<b>2005</b>: $69,481<br><b>2006</b>: $59,587<br><b>2007</b>: $59,214<br><b>2008</b>: $62,726<br><b>2009</b>: $65,754<br><b>2010</b>: $66,430<br><b>2011</b>: $64,852<br><b>2012</b>: $72,674<br><b>2013</b>: $75,140 <br><b>2014</b>: $74,159<br><b>2015</b>: $77,780<br><b>2016</b>: $74,276<br><br><b>2015-2016 Change</b>: -4.5%<br><b>2012-2016 Change</b>: 19.9%<br>"
			            },
			        {
			            id: "US-IA",
			            title: "Iowa",
			            color: "#E7E7E7",
			            description:
			            "<b>2005</b>: $60,043<br><b>2006</b>: $58,815<br><b>2007</b>: $63,698<br><b>2008</b>: $61,887<br><b>2009</b>: $64,513<br><b>2010</b>: $66,227<br><b>2011</b>: $65,811<br><b>2012</b>: $69,503<br><b>2013</b>: $71,067 <br><b>2014</b>: $73,968<br><b>2015</b>: $80,619<br><b>2016</b>: $78,960<br><br><b>2015-2016 Change</b>: -2.1%<br><b>2012-2016 Change</b>: 22.5%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-KS",
			            title: "Kansas",
			            color: "#85B9CE",
			            description:
			            "<b>2005</b>: $63,744<br><b>2006</b>: $64,844<br><b>2007</b>: $67,657<br><b>2008</b>: $71,686<br><b>2009</b>: $77,761<br><b>2010</b>: $67,641<br><b>2011</b>: $72,419<br><b>2012</b>: $76,333<br><b>2013</b>: $77,022 <br><b>2014</b>: $72,791<br><b>2015</b>: $87,212<br><b>2016</b>: $89,132<br><br><b>2015-2016 Change</b>: 2.2%<br><b>2012-2016 Change</b>: 20.4%<br>"
			            },
			        {
			            id: "US-KY",
			            title: "Kentucky",
			            color: "#77ACC2",
			            description:
			            "<b>2005</b>: $53,774<br><b>2006</b>: $56,297<br><b>2007</b>: $57,916<br><b>2008</b>: $63,782<br><b>2009</b>: $58,613<br><b>2010</b>: $63,184<br><b>2011</b>: $64,442<br><b>2012</b>: $69,136<br><b>2013</b>: $72,752 <br><b>2014</b>: $72,579<br><b>2015</b>: $74,535<br><b>2016</b>: $80,121<br><br><b>2015-2016 Change</b>: 7.5%<br><b>2012-2016 Change</b>: 15.7%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-LA",
			            title: "Louisiana",
			            color: "#E1E1E1",
			            description:
			            "<b>2005</b>: $56,167<br><b>2006</b>: $57,792<br><b>2007</b>: $61,955<br><b>2008</b>: $64,073<br><b>2009</b>: $63,166<br><b>2010</b>: $66,132<br><b>2011</b>: $58,535<br><b>2012</b>: $68,951<br><b>2013</b>: $75,985 <br><b>2014</b>: $76,582<br><b>2015</b>: $77,582<br><b>2016</b>: $74,824<br><br><b>2015-2016 Change</b>: -3.6%<br><b>2012-2016 Change</b>: 32.5%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-ME",
			            title: "Maine",
			            color: "#7CB1C6",
			            description:
			            "<b>2005</b>: $69,540<br><b>2006</b>: $60,980<br><b>2007</b>: $64,165<br><b>2008</b>: n/a<br><b>2009</b>: $67,361<br><b>2010</b>: $68,909<br><b>2011</b>: $67,940<br><b>2012</b>: $78,253<br><b>2013</b>: $75,728 <br><b>2014</b>: $87,212<br><b>2015</b>: $67,712<br><b>2016</b>: $71,172<br><br><b>2015-2016 Change</b>: 5.1%<br><b>2012-2016 Change</b>: -0.3%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-MD",
			            title: "Maryland",
			            color: "#D3D3D3",
			            description:
			            "<b>2005</b>: $70,917<br><b>2006</b>: $73,450<br><b>2007</b>: $74,953<br><b>2008</b>: $80,662<br><b>2009</b>: $86,374<br><b>2010</b>: $82,549<br><b>2011</b>: $91,343<br><b>2012</b>: $93,098<br><b>2013</b>: $95,786 <br><b>2014</b>: $93,748<br><b>2015</b>: $100,328<br><b>2016</b>: $93,551<br><br><b>2015-2016 Change</b>: -6.8%<br><b>2012-2016 Change</b>: 9.8%<br>"
			            },
			        {
			            id: "US-MA",
			            title: "Massachusetts",
			            color: "#83B8CD",
			            description:
			            "<b>2005</b>: $77,467<br><b>2006</b>: $79,464<br><b>2007</b>: $82,771<br><b>2008</b>: $84,271<br><b>2009</b>: $84,854<br><b>2010</b>: $86,541<br><b>2011</b>: $88,872<br><b>2012</b>: $94,890<br><b>2013</b>: $95,264 <br><b>2014</b>: $96,751<br><b>2015</b>: $101,125<br><b>2016</b>: $103,711<br><br><b>2015-2016 Change</b>: 2.6%<br><b>2012-2016 Change</b>: 13.8%<br>"
			            },
			        {
			            id: "US-MI",
			            title: "Michigan",
			            color: "#E4E4E4",
			            description:
			            "<b>2005</b>: $60,220<br><b>2006</b>: $63,931<br><b>2007</b>: $63,699<br><b>2008</b>: $68,773<br><b>2009</b>: $67,929<br><b>2010</b>: $70,140<br><b>2011</b>: $68,771<br><b>2012</b>: $75,702<br><b>2013</b>: $77,783 <br><b>2014</b>: $82,226<br><b>2015</b>: $84,643<br><b>2016</b>: $82,398<br><br><b>2015-2016 Change</b>: -2.7%<br><b>2012-2016 Change</b>: 23.1%<br>"
			            },
			        {
			            id: "US-MN",
			            title: "Minnesota",
			            color: "#89BDD2",
			            description:
			            "<b>2005</b>: $70,047<br><b>2006</b>: $74,387<br><b>2007</b>: $75,124<br><b>2008</b>: $79,105<br><b>2009</b>: $79,637<br><b>2010</b>: $80,588<br><b>2011</b>: $79,402<br><b>2012</b>: $86,721<br><b>2013</b>: $85,674 <br><b>2014</b>: $90,276<br><b>2015</b>: $98,559<br><b>2016</b>: $99,062<br><br><b>2015-2016 Change</b>: 0.5%<br><b>2012-2016 Change</b>: 24.1%<br>"
			            },
			        {
			            id: "US-MS",
			            title: "Mississippi",
			            color: "#87BBD0",
			            description:
			            "<b>2005</b>: $47,609<br><b>2006</b>: $57,385<br><b>2007</b>: $47,678<br><b>2008</b>: $61,778<br><b>2009</b>: $60,073<br><b>2010</b>: $59,329<br><b>2011</b>: $60,859<br><b>2012</b>: $58,196<br><b>2013</b>: $48,912 <br><b>2014</b>: $67,002<br><b>2015</b>: $60,831<br><b>2016</b>: $61,740<br><br><b>2015-2016 Change</b>: 1.5%<br><b>2012-2016 Change</b>: 0.0%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-MO",
			            title: "Missouri",
			            color: "#89BDD2",
			            description:
			            "<b>2005</b>: $62,301<br><b>2006</b>: $61,921<br><b>2007</b>: $62,910<br><b>2008</b>: $69,299<br><b>2009</b>: $72,566<br><b>2010</b>: $65,997<br><b>2011</b>: $69,039<br><b>2012</b>: $78,920<br><b>2013</b>: $73,978 <br><b>2014</b>: $84,205<br><b>2015</b>: $81,668<br><b>2016</b>: $82,284<br><br><b>2015-2016 Change</b>: 0.8%<br><b>2012-2016 Change</b>: 18.3%<br>"
			            },
			        {
			            id: "US-MT",
			            title: "Montana",
			            color: "#6AA1B7",
			            description:
			            "<b>2005</b>: $41,553<br><b>2006</b>: $52,280<br><b>2007</b>: $57,069<br><b>2008</b>: $68,635<br><b>2009</b>: $61,096<br><b>2010</b>: $57,421<br><b>2011</b>: $51,123<br><b>2012</b>: $60,037<br><b>2013</b>: $79,220 <br><b>2014</b>: $67,820<br><b>2015</b>: $67,046<br><b>2016</b>: $75,229<br><br><b>2015-2016 Change</b>: 12.2%<br><b>2012-2016 Change</b>: 31.1%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-NE",
			            title: "Nebraska",
			            color: "#89BDD2",
			            description:
			            "<b>2005</b>: $57,927<br><b>2006</b>: $62,608<br><b>2007</b>: $69,851<br><b>2008</b>: $69,237<br><b>2009</b>: $70,109<br><b>2010</b>: $72,889<br><b>2011</b>: $76,280<br><b>2012</b>: $75,477<br><b>2013</b>: $73,980 <br><b>2014</b>: $79,495<br><b>2015</b>: $81,890<br><b>2016</b>: $82,233<br><br><b>2015-2016 Change</b>: 0.4%<br><b>2012-2016 Change</b>: 7.4%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-NV",
			            title: "Nevada",
			            color: "#75ABC0",
			            description:
			            "<b>2005</b>: $64,367<br><b>2006</b>: $73,116<br><b>2007</b>: $70,185<br><b>2008</b>: $71,438<br><b>2009</b>: $73,408<br><b>2010</b>: $74,942<br><b>2011</b>: $69,511<br><b>2012</b>: $76,227<br><b>2013</b>: $80,133 <br><b>2014</b>: $81,651<br><b>2015</b>: $79,336<br><b>2016</b>: $85,800<br><br><b>2015-2016 Change</b>: 8.1%<br><b>2012-2016 Change</b>: 14.1%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-NH",
			            title: "New Hampshire",
			            color: "#DCDCDC",
			            description:
			            "<b>2005</b>: $67,575<br><b>2006</b>: $79,292<br><b>2007</b>: $76,911<br><b>2008</b>: $80,057<br><b>2009</b>: $83,610<br><b>2010</b>: $76,385<br><b>2011</b>: $72,860<br><b>2012</b>: $90,159<br><b>2013</b>: $85,394 <br><b>2014</b>: $86,438<br><b>2015</b>: $95,462<br><b>2016</b>: $90,985<br><br><b>2015-2016 Change</b>: -4.7%<br><b>2012-2016 Change</b>: 31.0%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-NJ",
			            title: "New Jersey",
			            color: "#FFFFFF",
			            description:
			            "<b>2005</b>: $74,556<br><b>2006</b>: $77,058<br><b>2007</b>: $78,367<br><b>2008</b>: $85,497<br><b>2009</b>: $83,617<br><b>2010</b>: $86,397<br><b>2011</b>: $87,516<br><b>2012</b>: $90,039<br><b>2013</b>: $96,264 <br><b>2014</b>: $95,076<br><b>2015</b>: $98,959<br><b>2016</b>: $99,197<br><br><b>2015-2016 Change</b>: 0.2%<br><b>2012-2016 Change</b>: 13.1%<br>"
			            },
			        {
			            id: "US-NM",
			            title: "New Mexico",
			            color: "#85B9CE",
			            description:
			            "<b>2005</b>: $61,744<br><b>2006</b>: $65,879<br><b>2007</b>: $61,144<br><b>2008</b>: $71,095<br><b>2009</b>: $68,680<br><b>2010</b>: $75,094<br><b>2011</b>: $71,333<br><b>2012</b>: $82,259<br><b>2013</b>: $75,814 <br><b>2014</b>: $83,563<br><b>2015</b>: $78,340<br><b>2016</b>: $80,098<br><br><b>2015-2016 Change</b>: 2.2%<br><b>2012-2016 Change</b>: 9.8%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-NY",
			            title: "New York",
			            color: "#E4E4E4",
			            description:
			            "<b>2005</b>: $72,553<br><b>2006</b>: $76,723<br><b>2007</b>: $78,175<br><b>2008</b>: $81,429<br><b>2009</b>: $83,740<br><b>2010</b>: $83,927<br><b>2011</b>: $84,680<br><b>2012</b>: $86,319<br><b>2013</b>: $90,807 <br><b>2014</b>: $91,677<br><b>2015</b>: $99,705<br><b>2016</b>: $96,801<br><br><b>2015-2016 Change</b>: -2.9%<br><b>2012-2016 Change</b>: 17.7%<br>"
			            },
			        {
			            id: "US-NC",
			            title: "North Carolina",
			            color: "#E1E1E1",
			            description:
			            "<b>2005</b>: $66,254<br><b>2006</b>: $70,921<br><b>2007</b>: $67,470<br><b>2008</b>: $72,510<br><b>2009</b>: $73,418<br><b>2010</b>: $77,892<br><b>2011</b>: $79,132<br><b>2012</b>: $83,460<br><b>2013</b>: $85,889 <br><b>2014</b>: $87,824<br><b>2015</b>: $87,757<br><b>2016</b>: $84,589<br><br><b>2015-2016 Change</b>: -3.6%<br><b>2012-2016 Change</b>: 10.9%<br>"
			            },
			        {
			            id: "US-ND",
			            title: "North Dakota",
			            color: "#DCDCDC",
			            description:
			            "<b>2005</b>: $49,332<br><b>2006</b>: $46,571<br><b>2007</b>: $42,278<br><b>2008</b>: $43,049<br><b>2009</b>: $61,046<br><b>2010</b>: $44,264<br><b>2011</b>: $69,215<br><b>2012</b>: $70,288<br><b>2013</b>: $68,350 <br><b>2014</b>: $64,550<br><b>2015</b>: $81,192<br><b>2016</b>: $77,196<br><br><b>2015-2016 Change</b>: -4.9%<br><b>2012-2016 Change</b>: 17.3%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-OH",
			            title: "Ohio",
			            color: "#89BDD2",
			            description:
			            "<b>2005</b>: $61,827<br><b>2006</b>: $62,403<br><b>2007</b>: $64,705<br><b>2008</b>: $63,804<br><b>2009</b>: $68,292<br><b>2010</b>: $68,876<br><b>2011</b>: $70,749<br><b>2012</b>: $77,363<br><b>2013</b>: $78,280 <br><b>2014</b>: $76,059<br><b>2015</b>: $82,514<br><b>2016</b>: $83,268<br><br><b>2015-2016 Change</b>: 0.9%<br><b>2012-2016 Change</b>: 16.6%<br>"
			            },
			        {
			            id: "US-OK",
			            title: "Oklahoma",
			            color: "#DCDCDC",
			            description:
			            "<b>2005</b>: $57,746<br><b>2006</b>: $57,508<br><b>2007</b>: $63,775<br><b>2008</b>: $62,786<br><b>2009</b>: $61,706<br><b>2010</b>: $59,794<br><b>2011</b>: $71,040<br><b>2012</b>: $74,062<br><b>2013</b>: $77,464 <br><b>2014</b>: $72,637<br><b>2015</b>: $81,114<br><b>2016</b>: $77,206<br><br><b>2015-2016 Change</b>: -4.8%<br><b>2012-2016 Change</b>: 14.2%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-OR",
			            title: "Oregon",
			            color: "#DFDFDF",
			            description:
			            "<b>2005</b>: $66,575<br><b>2006</b>: $69,915<br><b>2007</b>: $69,509<br><b>2008</b>: $76,262<br><b>2009</b>: $74,898<br><b>2010</b>: $71,864<br><b>2011</b>: $80,426<br><b>2012</b>: $84,965<br><b>2013</b>: $81,340 <br><b>2014</b>: $87,992<br><b>2015</b>: $87,740<br><b>2016</b>: $84,073<br><br><b>2015-2016 Change</b>: -4.2%<br><b>2012-2016 Change</b>: 9.1%<br>"
			            },
			        {
			            id: "US-PA",
			            title: "Pennsylvania",
			            color: "#EAEAEA",
			            description:
			            "<b>2005</b>: $64,630<br><b>2006</b>: $66,260<br><b>2007</b>: $69,595<br><b>2008</b>: $72,629<br><b>2009</b>: $72,510<br><b>2010</b>: $74,758<br><b>2011</b>: $73,063<br><b>2012</b>: $78,679<br><b>2013</b>: $81,380 <br><b>2014</b>: $84,614<br><b>2015</b>: $88,279<br><b>2016</b>: $87,350<br><br><b>2015-2016 Change</b>: -1.1%<br><b>2012-2016 Change</b>: 20.8%<br>"
			            },
			        {
			            id: "US-RI",
			            title: "Rhode Island",
			            color: "#7AAFC5",
			            description:
			            "<b>2005</b>: $67,985<br><b>2006</b>: $69,666<br><b>2007</b>: $65,892<br><b>2008</b>: $78,435<br><b>2009</b>: $78,199<br><b>2010</b>: $74,858<br><b>2011</b>: $78,397<br><b>2012</b>: $83,265<br><b>2013</b>: $85,555 <br><b>2014</b>: $89,595<br><b>2015</b>: $82,945<br><b>2016</b>: $88,101<br><br><b>2015-2016 Change</b>: 6.2%<br><b>2012-2016 Change</b>: 5.8%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-SC",
			            title: "South Carolina",
			            color: "#D9D9D9",
			            description:
			            "<b>2005</b>: $56,265<br><b>2006</b>: $57,831<br><b>2007</b>: $68,048<br><b>2008</b>: $68,237<br><b>2009</b>: $60,913<br><b>2010</b>: $69,815<br><b>2011</b>: $68,234<br><b>2012</b>: $78,280<br><b>2013</b>: $78,149 <br><b>2014</b>: $73,374<br><b>2015</b>: $81,221<br><b>2016</b>: $76,784<br><br><b>2015-2016 Change</b>: -5.5%<br><b>2012-2016 Change</b>: 19.0%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-SD",
			            title: "South Dakota",
			            color: "#D6D6D6",
			            description:
			            "<b>2005</b>: $52,230<br><b>2006</b>: $65,576<br><b>2007</b>: $52,933<br><b>2008</b>: $62,002<br><b>2009</b>: $53,584<br><b>2010</b>: $53,759<br><b>2011</b>: $53,726<br><b>2012</b>: $57,572<br><b>2013</b>: $60,515 <br><b>2014</b>: $71,682<br><b>2015</b>: $69,922<br><b>2016</b>: $65,848<br><br><b>2015-2016 Change</b>: -5.8%<br><b>2012-2016 Change</b>: 30.1%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-TN",
			            title: "Tennessee",
			            color: "#7EB3C8",
			            description:
			            "<b>2005</b>: $62,596<br><b>2006</b>: $60,769<br><b>2007</b>: $63,395<br><b>2008</b>: $69,784<br><b>2009</b>: $71,313<br><b>2010</b>: $66,273<br><b>2011</b>: $72,771<br><b>2012</b>: $74,432<br><b>2013</b>: $78,361 <br><b>2014</b>: $74,061<br><b>2015</b>: $78,987<br><b>2016</b>: $82,749<br><br><b>2015-2016 Change</b>: 4.8%<br><b>2012-2016 Change</b>: 8.5%<br>"
			            },
			        {
			            id: "US-TX",
			            title: "Texas",
			            color: "#EAEAEA",
			            description:
			            "<b>2005</b>: $67,274<br><b>2006</b>: $70,199<br><b>2007</b>: $72,900<br><b>2008</b>: $75,295<br><b>2009</b>: $78,027<br><b>2010</b>: $78,438<br><b>2011</b>: $83,751<br><b>2012</b>: $85,672<br><b>2013</b>: $89,026 <br><b>2014</b>: $89,793<br><b>2015</b>: $91,877<br><b>2016</b>: $90,869<br><br><b>2015-2016 Change</b>: -1.1%<br><b>2012-2016 Change</b>: 9.7%<br>"
			            },
			        {
			            id: "US-UT",
			            title: "Utah",
			            color: "#89BDD2",
			            description:
			            "<b>2005</b>: $60,321<br><b>2006</b>: $64,124<br><b>2007</b>: $65,396<br><b>2008</b>: $70,730<br><b>2009</b>: $74,312<br><b>2010</b>: $70,450<br><b>2011</b>: $74,318<br><b>2012</b>: $81,548<br><b>2013</b>: $89,199 <br><b>2014</b>: $87,343<br><b>2015</b>: $89,205<br><b>2016</b>: $89,798<br><br><b>2015-2016 Change</b>: 0.7%<br><b>2012-2016 Change</b>: 20.0%<br>"
			            },
			        {
			            id: "US-VT",
			            title: "Vermont",
			            color: "#EDEDED",
			            description:
			            "<b>2005</b>: $78,181<br><b>2006</b>: $65,040<br><b>2007</b>: $77,321<br><b>2008</b>: $87,497<br><b>2009</b>: $61,082<br><b>2010</b>: $67,626<br><b>2011</b>: $62,896<br><b>2012</b>: $69,346<br><b>2013</b>: $80,809 <br><b>2014</b>: $87,484<br><b>2015</b>: $77,758<br><b>2016</b>: $77,267<br><br><b>2015-2016 Change</b>: -0.6%<br><b>2012-2016 Change</b>: 23.6%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-VA",
			            title: "Virginia",
			            color: "#EDEDED",
			            description:
			            "<b>2005</b>: $72,806<br><b>2006</b>: $79,261<br><b>2007</b>: $81,603<br><b>2008</b>: $83,933<br><b>2009</b>: $85,675<br><b>2010</b>: $87,694<br><b>2011</b>: $90,301<br><b>2012</b>: $96,539<br><b>2013</b>: $92,943 <br><b>2014</b>: $96,658<br><b>2015</b>: $100,550<br><b>2016</b>: $99,835<br><br><b>2015-2016 Change</b>: -0.7%<br><b>2012-2016 Change</b>: 11.3%<br>"
			            },
			        {
			            id: "US-WA",
			            title: "Washington",
			            color: "#DFDFDF",
			            description:
			            "<b>2005</b>: $70,461<br><b>2006</b>: $76,963<br><b>2007</b>: $77,284<br><b>2008</b>: $79,053<br><b>2009</b>: $83,121<br><b>2010</b>: $83,654<br><b>2011</b>: $86,447<br><b>2012</b>: $92,290<br><b>2013</b>: $94,235 <br><b>2014</b>: $96,241<br><b>2015</b>: $100,631<br><b>2016</b>: $96,521<br><br><b>2015-2016 Change</b>: -4.1%<br><b>2012-2016 Change</b>: 16.4%<br>"
			            },
			        {
			            id: "US-WV",
			            title: "West Virginia",
			            color: "#1E5B73",
			            description:
			            "<b>2005</b>: $57,120<br><b>2006</b>: $65,261<br><b>2007</b>: $55,740<br><b>2008</b>: $55,289<br><b>2009</b>: $67,700<br><b>2010</b>: $68,025<br><b>2011</b>: $72,974<br><b>2012</b>: $67,218<br><b>2013</b>: $84,111 <br><b>2014</b>: $70,897<br><b>2015</b>: $66,805<br><b>2016</b>: $93,951<br><br><b>2015-2016 Change</b>: 40.6%<br><b>2012-2016 Change</b>: -8.5%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            },
			        {
			            id: "US-WI",
			            title: "Wisconsin",
			            color: "#C8C8C8",
			            description:
			            "<b>2005</b>: $56,961<br><b>2006</b>: $64,344<br><b>2007</b>: $65,375<br><b>2008</b>: $71,900<br><b>2009</b>: $68,663<br><b>2010</b>: $74,892<br><b>2011</b>: $71,756<br><b>2012</b>: $78,948<br><b>2013</b>: $76,381 <br><b>2014</b>: $81,273<br><b>2015</b>: $87,258<br><b>2016</b>: $79,006<br><br><b>2015-2016 Change</b>: -9.5%<br><b>2012-2016 Change</b>: 21.6%<br>"
			            },
			        {
			            id: "US-WY",
			            title: "Wyoming",
			            color: "#E1E1E1",
			            description:
			            "<b>2005</b>: $67,343<br><b>2006</b>: $65,240<br><b>2007</b>: $46,242<br><b>2008</b>: $47,848<br><b>2009</b>: $55,459<br><b>2010</b>: $54,610<br><b>2011</b>: $65,294<br><b>2012</b>: $75,162<br><b>2013</b>: $96,984 <br><b>2014</b>: $60,516<br><b>2015</b>: $71,236<br><b>2016</b>: $68,850<br><br><b>2015-2016 Change</b>: -3.3%<br><b>2012-2016 Change</b>: 9.1%<br><br>* Sample size is less than 100 respondents, therefore, not statistically valid, but presented for continuity purposes only."
			            }],
			    };
			
			    //zoomControl settings
			    map.zoomControl.zoomControlEnabled = false;
				//map.zoomControl.homeIconColor = "#CCCCCC";
				//map.zoomControl.buttonColorHover = "#999999";
				//map.zoomControl.buttonRollOverColor = "#666666";
				//map.zoomControl.buttonFillColor	= "#CCCCCC";
				//map.zoomControl.buttonIconColor	= "#CCCCCC";
				//map.zoomControl.buttonSize = 20;
				//map.zoomControl.iconSize = 14;
				//map.zoomControl.left = 15;
				//map.zoomControl.top = 15;

			    map.dataProvider = dataProvider;
			
			    //var valueLegend = new AmCharts.ValueLegend();
			    //valueLegend.right = 10;
			    //valueLegend.minValue = "little";
			    //valueLegend.maxValue = "a lot!";
			    //map.valueLegend = valueLegend;
				
			    //developer mode related 
			    //map.developerMode = true;
			    //map.addListener("writeDevInfo", writeDevInfo);
			
			    map.write("mapdiv");
			});

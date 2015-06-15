/**
 * 
 */



function  findSmsDevice(){
	//alert("values:" + $('#findinput3').val());
	
	$.ajax({

	    // The URL for the request
	    url: myUrl + "finddevice.cgi",
	 
	    // The data to send (will be converted to a query string)
	    data: {
	          mac: $('#finddeviceinput1').val(),
	       // last:  $('#findpersoninput2').val(),
	       // email: $('#findpersoninput3').val()
	    },
	 
	    // Whether this is a POST or GET request
	    type: "POST",
	 
	    // The type of data we expect back
	    dataType : "json",
	 
	    // Code to run if the request succeeds;
	    // the response is passed to the function
	    success: function( json ) {    
	        $("#finddeviceresult").html(" Response Code:" + json.responsecode + " RecordId:" + json.id);
	        $("#finddevicetextdiv2").text(json.devicetypetext);
	    },
	 
	    // Code to run if the request fails; the raw request and
	    // status codes are passed to the function
	    error: function( xhr, status, errorThrown ) {
	        //alert( "Sorry, there was a problem!" );
	        console.log( "Error: " + errorThrown );
	        console.log( "Status: " + status );
	        console.dir( xhr );
	    },
	 
	    // Code to run regardless of success or failure
	    complete: function( xhr, status ) {
	        //alert( "The request is complete!" );
	    }
	});

	};
	


//http://wallplatecharger.com/cgi-bin/addsmsnumber.cgi?countrycode=1&areacode=860&smsnumber=5551212&personid=1
function  addSmsNumber(){
	////alert("values:" + $('#findinput3').val());
	
	$.ajax({

	    // The URL for the request
	    url: myUrl + "addsmsnumber.cgi",
	 
	    // The data to send (will be converted to a query string)
	    data: {
	        countrycode:    $('#addsmsdeviceinput1').val(),
	        areacode:       $("#addsmsdeviceinput2").val(),
            smsnumber:      $("#addsmsdeviceinput3").val(),
            personid: 	    $("#addsmsdeviceinput4").val()
	    },
	 
	    // Whether this is a POST or GET request
	    type: "POST",
	 
	    // The type of data we expect back
	    dataType : "json",
	 
	    // Code to run if the request succeeds;
	    // the response is passed to the function
	    success: function( json ) {
	        
	        $("#addsmsdeviceresult").html(" Response Code:" + json.responsecode + " RecordId:" + json.id);
	        //alert( "request id" + json.id); 
	        
	    },
	 
	    // Code to run if the request fails; the raw request and
	    // status codes are passed to the function
	    error: function( xhr, status, errorThrown ) {
	        //alert( "Sorry, there was a problem!" );
	        console.log( "Error: " + errorThrown );
	        console.log( "Status: " + status );
	        console.dir( xhr );
	    },
	 
	    // Code to run regardless of success or failure
	    complete: function( xhr, status ) {
	        //alert( "The request is complete!" );
	    }
	});

	};









function  addDevice(){
	////alert("values:" + $('#findinput3').val());
	
	$.ajax({

	    // The URL for the request
	    url: myUrl + "adddevice.cgi",
	 
	    // The data to send (will be converted to a query string)
	    data: {
	        mac:    $('#adddeviceinput1').val(),
	        typeid: $("#adddeviceselector option:selected").val()

	    },
	 
	    // Whether this is a POST or GET request
	    type: "POST",
	 
	    // The type of data we expect back
	    dataType : "json",
	 
	    // Code to run if the request succeeds;
	    // the response is passed to the function
	    success: function( json ) {
	        $( "<h1>" ).text( json.title ).appendTo( "body" );
	        $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
	        
	        $("#adddeviceresult").html(" Response Code:" + json.responsecode + " RecordId:" + json.id);
	        //alert( "request id" + json.id); 
	        
	        
	    },
	 
	    // Code to run if the request fails; the raw request and
	    // status codes are passed to the function
	    error: function( xhr, status, errorThrown ) {
	        //alert( "Sorry, there was a problem!" );
	        console.log( "Error: " + errorThrown );
	        console.log( "Status: " + status );
	        console.dir( xhr );
	    },
	 
	    // Code to run regardless of success or failure
	    complete: function( xhr, status ) {
	        //alert( "The request is complete!" );
	    }
	});

	};





function  addPerson(){
	////alert("values:" + $('#findinput3').val());
	
	$.ajax({

	    // The URL for the request
	    url: myUrl + "addperson.cgi",
	 
	    // The data to send (will be converted to a query string)
	    data: {
	        first: $('#addpersoninput1').val(),
	        last:  $('#addpersoninput2').val(),
	        email: $('#addpersoninput3').val()
	    },
	 
	    // Whether this is a POST or GET request
	    type: "POST",
	 
	    // The type of data we expect back
	    dataType : "json",
	 
	    // Code to run if the request succeeds;
	    // the response is passed to the function
	    success: function( json ) {
	        $( "<h1>" ).text( json.title ).appendTo( "body" );
	        $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
	        
	        $("#addpersonresult").html(" Response Code:" + json.responsecode + " RecordId:" + json.id);
	        //alert( "request id" + json.id); 
	        
	        
	    },
	 
	    // Code to run if the request fails; the raw request and
	    // status codes are passed to the function
	    error: function( xhr, status, errorThrown ) {
	        //alert( "Sorry, there was a problem!" );
	        console.log( "Error: " + errorThrown );
	        console.log( "Status: " + status );
	        console.dir( xhr );
	    },
	 
	    // Code to run regardless of success or failure
	    complete: function( xhr, status ) {
	        //alert( "The request is complete!" );
	    }
	});

	};
	
	
	function  findPerson(){
		//alert("values:" + $('#findinput3').val());
		
		$.ajax({

		    // The URL for the request
		    url: myUrl + "findperson.cgi",
		 
		    // The data to send (will be converted to a query string)
		    data: {
		        first: $('#findpersoninput1').val(),
		        last:  $('#findpersoninput2').val(),
		        email: $('#findpersoninput3').val()
		    },
		 
		    // Whether this is a POST or GET request
		    type: "POST",
		 
		    // The type of data we expect back
		    dataType : "json",
		 
		    // Code to run if the request succeeds;
		    // the response is passed to the function
		    success: function( json ) {
		        $( "<h1>" ).text( json.title ).appendTo( "body" );
		        $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
		        
		        $("#findpersonresult").html(" Response Code:" + json.responsecode + " RecordId:" + json.id);
		        //alert( "request id" + json.id); 
		        
		        
		    },
		 
		    // Code to run if the request fails; the raw request and
		    // status codes are passed to the function
		    error: function( xhr, status, errorThrown ) {
		        //alert( "Sorry, there was a problem!" );
		        console.log( "Error: " + errorThrown );
		        console.log( "Status: " + status );
		        console.dir( xhr );
		    },
		 
		    // Code to run regardless of success or failure
		    complete: function( xhr, status ) {
		        //alert( "The request is complete!" );
		    }
		});

		};
	
		function  findDevice(){
			//alert("values:" + $('#findinput3').val());
			
			$.ajax({

			    // The URL for the request
			    url: myUrl + "finddevice.cgi",
			 
			    // The data to send (will be converted to a query string)
			    data: {
			          mac: $('#finddeviceinput1').val(),
			       // last:  $('#findpersoninput2').val(),
			       // email: $('#findpersoninput3').val()
			    },
			 
			    // Whether this is a POST or GET request
			    type: "POST",
			 
			    // The type of data we expect back
			    dataType : "json",
			 
			    // Code to run if the request succeeds;
			    // the response is passed to the function
			    success: function( json ) {    
			        $("#finddeviceresult").html(" Response Code:" + json.responsecode + " RecordId:" + json.id);
			        $("#finddevicetextdiv2").text(json.devicetypetext);
			    },
			 
			    // Code to run if the request fails; the raw request and
			    // status codes are passed to the function
			    error: function( xhr, status, errorThrown ) {
			        //alert( "Sorry, there was a problem!" );
			        console.log( "Error: " + errorThrown );
			        console.log( "Status: " + status );
			        console.dir( xhr );
			    },
			 
			    // Code to run regardless of success or failure
			    complete: function( xhr, status ) {
			        //alert( "The request is complete!" );
			    }
			});

			};
			
	
	
	
	
			function  findDeviceType(){
				//alert("values:" + $('#findinput3').val());
				
				$.ajax({

				    // The URL for the request
				    url: myUrl + "devicetypelookup.cgi",
				 
				    // The data to send (will be converted to a query string)
				    data: {
				       // first: $('#findpersoninput1').val(),
				       // last:  $('#findpersoninput2').val(),
				       // email: $('#findpersoninput3').val()
				    },
				 
				    // Whether this is a POST or GET request
				    type: "GET",
				 
				    // The type of data we expect back
				    dataType : "json",
				 
				    // Code to run if the request succeeds;
				    // the response is passed to the function
				    success: function( json ) {

				    	//alert("Hello" + json.toString());
				    	
				    	var _select = $('<select>');
						$.each(json, function(index, val) {
						    _select.append(
						            $('<option></option>').val(val.recordid).html(val.recordtext)
						        );
						});
					
				  
						  $("#adddeviceselector").append(_select.html());
				        
				        
				    },
				 
				    // Code to run if the request fails; the raw request and
				    // status codes are passed to the function
				    error: function( xhr, status, errorThrown ) {
				        //alert( "Sorry, there was a problem!" );
				        console.log( "Error: " + errorThrown );
				        console.log( "Status: " + status );
				        console.dir( xhr );
				    },
				 
				    // Code to run regardless of success or failure
				    complete: function( xhr, status ) {
				        //alert( "The request is complete!" );
				    }
				});

				};
	
	
	
	
	
	
	
	
	
	
	

function  myFunc(){

$.ajax({
	 
    // The URL for the request
    url: myUrl,
 
    // The data to send (will be converted to a query string)
    data: {
        fname: 'david'
    },
 
    // Whether this is a POST or GET request
    type: "GET",
 
    // The type of data we expect back
    dataType : "json",
 
    // Code to run if the request succeeds;
    // the response is passed to the function
    success: function( json ) {
        $( "<h1>" ).text( json.title ).appendTo( "body" );
        $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
    },
 
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: function( xhr, status, errorThrown ) {
        //alert( "Sorry, there was a problem!" );
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.dir( xhr );
    },
 
    // Code to run regardless of success or failure
    complete: function( xhr, status ) {
        //alert( "The request is complete!" );
    }
});

};



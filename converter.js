$(document).ready(function() {
    // Length Converter
    $('#length-convert').click(function() {
    let from = $('#length-from').val();
    let fromUnit = $('#length-from-unit').val();
    let toUnit = $('#length-to-unit').val();
    let result = 0;
    switch (fromUnit) {
    case 'meters':
    switch (toUnit) {
    case 'centimeters':
    result = from * 100;
    break;
    case 'kilometers':
    result = from / 1000;
    break;
    case 'inches':
    result = from * 39.37;
    break;
    case 'feet':
    result = from * 3.281;
    break;
    case 'yards':
    result = from * 1.094;
    break;
    case 'miles':
    result = from / 1609;
    break;
    }
    break;
    case 'centimeters':
    switch (toUnit) {
    case 'meters':
    result = from / 100;
    break;
    case 'kilometers':
    result = from / 100000;
    break;
    case 'inches':
        result = from * 0.3937;
        break;
    case 'feet':
        result = from * 0.03281;
        break;
    case 'yards':
        result = from * 0.01094;
        break;
    case 'miles':
        result = from / 160934;
        break;
}
break;
case 'kilometers':
switch (toUnit) {
    case 'meters':
        result = from * 1000;
        break;
    case 'centimeters':
        result = from * 100000;
        break;
    case 'inches':
        result = from * 39370.1;
        break;
    case 'feet':
        result = from * 3280.84;
        break;
    case 'yards':
        result = from * 1093.61;
        break;
    case 'miles':
        result = from / 1.609;
        break;
}
break;
case 'inches':
switch (toUnit) {
    case 'meters':
        result = from / 39.37;
        break;
    case 'centimeters':
        result = from / 0.3937;
        break;
    case 'kilometers':
        result = from / 39370.1;
        break;
    case 'feet':
        result = from * 0.08333;
        break;
    case 'yards':
        result = from * 0.02778;
        break;
    case 'miles':
        result = from / 63360;
        break;
}
break;
case 'feet':
switch (toUnit) {
    case 'meters':
        result = from / 3.281;
        break;
    case 'centimeters':
        result = from / 0.03281;
        break;
    case 'kilometers':
        result = from / 3280.84;
        break;
    case 'inches':
        result = from * 12;
        break;
    case 'yards':
        result = from / 3;
        break;
    case 'miles':
        result = from / 5280;
        break;
}
break;
case 'yards':
switch (toUnit) {
    case 'meters':
        result = from / 1.094;
        break;
    case 'centimeters':
        result = from / 0.01094;
        break;
    case 'kilometers':
        result = from / 1093.61;
        break;
    case 'inches':
        result = from * 36;
        break;
    case 'feet':
        result = from * 3;
        break;
    case 'miles':
        result = from / 1760;
        break;
}
break;
case 'miles':
switch (toUnit) {
    case 'meters':
        result = from * 1609;
        break;
    case 'centimeters':
        result = from * 160934;
        break;
    case 'kilometers':
        result = from * 1.609;
        break;
    case 'inches':
        result = from * 63360;
        break;
    case 'feet':
        result = from * 5280;
        break;
    case 'yards':
        result = from * 1760;
        break;
}
break;
}
$('#length-to').val(result.toFixed(4));
});

// Temperature Converter
$('#temp-convert').on('click', function() {
    var from = $('#temp-from').val();
    var fromUnit = $('#temp-from-unit').val();
    var toUnit = $('#temp-to-unit').val();
    var result = 0;
    
    // Convert the input temperature to Celsius
    switch (fromUnit) {
        case 'celsius':
            result = from;
            break;
        case 'fahrenheit':
            result = (from - 32) * 5 / 9;
            break;
        case 'kelvin':
            result = from - 273.15;
            break;
    }
    
    // Convert from Celsius to the output temperature
    switch (toUnit) {
        case 'celsius':
            break;
        case 'fahrenheit':
            result = result * 9 / 5 + 32;
            break;
        case 'kelvin':
            result = result + 273.15;
            break;
    }
    
    $('#temp-to').val(result.toFixed(4));
});
    
    // Area Converter
    $('#area-convert').on('click', function() {
        var from = $('#area-from').val();
        var fromUnit = $('#area-from-unit').val();
        var toUnit = $('#area-to-unit').val();
        var result = 0;
    
        switch (fromUnit) {
            case 'square-meters':
                switch (toUnit) {
                    case 'square-centimeters':
                        result = from * 10000;
                        break;
                    case 'square-kilometers':
                        result = from / 1000000;
                        break;
                    case 'square-feet':
                        result = from * 10.764;
                        break;
                    case 'square-yards':
                        result = from * 1.196;
                        break;
                    case 'acres':
                        result = from / 4047;
                        break;
                    case 'hectares':
                        result = from / 10000;
                        break;
                }
                break;
            case 'square-centimeters':
                switch (toUnit) {
                    case 'square-meters':
                        result = from / 10000;
                        break;
                    case 'square-kilometers':
                        result = from / 10000000000;
                        break;
                    case 'square-feet':
                        result = from / 929;
                        break;
                    case 'square-yards':
                        result = from / 8361;
                        break;
                    case 'acres':
                        result = from / 40468564.224;
                        break;
                    case 'hectares':
                        result = from / 100000000;
                        break;
                }
                break;
            case 'square-kilometers':
                switch (toUnit) {
                    case 'square-meters':
                        result = from * 1000000;
                        break;
                    case 'square-centimeters':
                        result = from * 10000000000;
                        break;
                    case 'square-feet':
                        result = from * 10764000.416;
                        break;
                    case 'square-yards':
                        result = from * 1195990.0463;
                        break;
                    case 'acres':
                        result = from * 247.1054;
                        break;
                    case 'hectares':
                        result = from * 100;
                        break;
                }
                break;
            case 'square-feet':
                switch (toUnit) {
                    case 'square-meters':
result = from / 10.764;
break;
case 'square-centimeters':
result = from * 929.03;
break;
case 'square-kilometers':
result = from / 10764000.416;
break;
case 'square-yards':
result = from / 9;
break;
case 'acres':
result = from / 43560;
break;
case 'hectares':
result = from / 107639.1042;
break;
}
break;
case 'square-yards':
switch (toUnit) {
case 'square-meters':
result = from / 1.196;
break;
case 'square-centimeters':
result = from * 8361.2736;
break;
case 'square-kilometers':
result = from / 1195990.0463;
break;
case 'square-feet':
result = from * 9;
break;
case 'acres':
result = from / 4840;
break;
case 'hectares':
result = from / 11959.9005;
break;
}
break;
case 'acres':
switch (toUnit) {
case 'square-meters':
result = from * 4047;
break;
case 'square-centimeters':
result = from * 40468564.224;
break;
case 'square-kilometers':
result = from / 247.1054;
break;
case 'square-feet':
result = from * 43560;
break;
case 'square-yards':
result = from * 4840;
break;
case 'hectares':
result = from * 40.4686;
break;
}
break;
case 'hectares':
switch (toUnit) {
case 'square-meters':
result = from * 10000;
break;
case 'square-centimeters':
result = from * 100000000;
break;
case 'square-kilometers':
result = from / 100;
break;
case 'square-feet':
result = from * 107639.1042;
break;
case 'square-yards':
result = from * 11959.9005;
break;
case 'acres':
result = from * 2.4711;
break;
}
break;
                

}

 $('#area-to').val(result.toFixed(4));
});
// Volume Converter
$('#volume-convert').on('click', function() {
	var from = $('#volume-from').val();
	var fromUnit = $('#volume-from-unit').val();
	var toUnit = $('#volume-to-unit').val();
	var result = 0;

	switch (fromUnit) {
		case 'cubic-meters':
			switch (toUnit) {
				case 'cubic-centimeters':
					result = from * 1000000;
					break;
				case 'cubic-kilometers':
					result = from / 1000000000;
					break;
				case 'liters':
					result = from * 1000;
					break;
				case 'milliliters':
					result = from * 1000000;
					break;
				case 'gallons':
					result = from * 264.172;
					break;
			}
			break;
		case 'cubic-centimeters':
            switch (toUnit) {
            case 'cubic-meters':
            result = from / 1000000;
            break;
            case 'cubic-kilometers':
            result = from / 1000000000000;
            break;
            case 'liters':
            result = from / 1000;
            break;
            case 'milliliters':
            result = from * 1;
            break;
            case 'gallons':
            result = from / 3785.412;
            break;
            }
            break;
            case 'cubic-kilometers':
            switch (toUnit) {
            case 'cubic-meters':
            result = from * 1000000000;
            break;
            case 'cubic-centimeters':
            result = from * 1000000000000;
            break;
            case 'liters':
            result = from * 1000000000;
            break;
            case 'milliliters':
            result = from * 1000000000000;
            break;
            case 'gallons':
            result = from * 264172052.358;
            break;
            }
            break;
            case 'liters':
            switch (toUnit) {
            case 'cubic-meters':
            result = from / 1000;
            break;
            case 'cubic-centimeters':
            result = from * 1000;
            break;
            case 'cubic-kilometers':
            result = from / 1000000000;
            break;
            case 'milliliters':
            result = from * 1000;
            break;
            case 'gallons':
            result = from / 3.7854;
            break;
            }
            break;
            case 'milliliters':
            switch (toUnit) {
            case 'cubic-meters':
            result = from / 1000000;
            break;
            case 'cubic-centimeters':
            result = from * 1;
            break;
            case 'cubic-kilometers':
            result = from / 1000000000000;
            break;
            case 'liters':
            result = from / 1000;
            break;
            case 'gallons':
            result = from / 3785.412;
            break;
            }
            break;
            case 'gallons':
            switch (toUnit) {
            case 'cubic-meters':
            result = from / 264.172;
            break;
            case 'cubic-centimeters':
            result = from * 3785.412;
            break;
            case 'cubic-kilometers':
            result = from / 264172052.358;
            break;
            case 'liters':
            result = from * 3.7854;
            break;
            case 'milliliters':
            result = from * 3785.412;
            break;
            }
            break;
            }
            $('#volume-to').val(result.toFixed(4));
            });
// Weight Converter
$('#weight-convert').on('click', function() {
	var from = $('#weight-from').val();
	var fromUnit = $('#weight-from-unit').val();
	var toUnit = $('#weight-to-unit').val();
	var result = 0;

	switch (fromUnit) {
		case 'kilograms':
			switch (toUnit) {
				case 'grams':
					result = from * 1000;
					break;
				case 'pounds':
					result = from * 2.20462;
					break;
				case 'ounces':
					result = from * 35.5102;
                    break;
                    }
                    break;
                    case 'grams':
                    switch (toUnit) {
                    case 'kilograms':
                    result = from / 1000;
                    break;
                    case 'pounds':
                    result = from / 453.592;
                    break;
                    case 'ounces':
                    result = from / 28.35;
                    break;
                    case 'milligrams':
                    result = from * 1000;
                    break;
                    }
                    break;
                    case 'pounds':
                    switch (toUnit) {
                    case 'kilograms':
                    result = from / 2.20462;
                    break;
                    case 'grams':
                    result = from * 453.592;
                    break;
                    case 'ounces':
                    result = from * 16;
                    break;
                    case 'milligrams':
                    result = from * 453592.37;
                    break;
                    }
                    break;
                    case 'ounces':
                    switch (toUnit) {
                    case 'kilograms':
                    result = from / 35.274;
                    break;
                    case 'grams':
                    result = from * 28.35;
                    break;
                    case 'pounds':
                    result = from / 16;
                    break;
                    case 'milligrams':
                    result = from * 28349.523;
                    break;
                    }
                    break;
                    case 'milligrams':
                    switch (toUnit) {
                    case 'kilograms':
                    result = from / 1000000;
                    break;
                    case 'grams':
                    result = from / 1000;
                    break;
                    case 'pounds':
                    result = from / 453592.37;
                    break;
                    case 'ounces':
                    result = from / 28349.523;
                    break;
                    }
                    break;
                    }
                    $('#weight-to').val(result.toFixed(4));
                    });
                    // Time Converter
$('#time-convert').on('click', function() {
	var from = $('#time-from').val();
	var fromUnit = $('#time-from-unit').val();
	var toUnit = $('#time-to-unit').val();
	var result = 0;

	switch (fromUnit) {
		case 'seconds':
			switch (toUnit) {
				case 'minutes':
					result = from / 60;
					break;
				case 'hours':
					result = from / 3600;
					break;
				case 'days':
					result = from / 86400;
					break;
			}
			break;
		case 'minutes':
			switch (toUnit) {
				case 'seconds':
					result = from * 60;
					break;
				case 'hours':
					result = from / 60;
					break;
				case 'days':
					result = from / 1440;
					break;
			}
			break;
		case 'hours':
			switch (toUnit) {
				case 'seconds':
					result = from * 3600;
					break;
				case 'minutes':
					result = from * 60;
					break;
				case 'days':
					result = from / 24;
					break;
			}
			break;
		case 'days':
			switch (toUnit) {
				case 'seconds':
					result = from * 86400;
					break;
				case 'minutes':
					result = from * 1440;
					break;
				case 'hours':
					result = from * 24;
					break;
			}
			break;
	}
	$('#time-to').val(result.toFixed(4));
});
});
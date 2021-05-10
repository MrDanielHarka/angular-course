"use strict";

(function() {
	const url = "http://api.openweathermap.org/data/2.5/weather?q=";
	const apiKey = "APIKEY"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
	const activities = {
		teamIn: ['basketball','hockey','volleyball'],
		teamOutWarm: ['softball/baseball','football/soccer','American football','rowing','tennis','volleyball','ultimate frisbee','rugby'],
		teamOutCold: ['hockey'],
		soloIn: ['rock climbing','swimming','ice skating'],
		soloOutWarm: ['rowing','running','hiking','cycling','rock climbing'],
		soloOutCold: ['snowshoeing','downhill skiing','cross-country skiing','ice skating']
	}
	let state = {};
	let category = 'all';

	// get weather data when user clicks Forecast button, then add temp & conditions to view
	$('.forecast-button').click(function(e) {
		e.preventDefault();
		const location = $('#location').val();
		$('#location').val('');

		$.get(url + location + '&appid=' + apiKey).done(function(response) {
			updateUISuccess(response);
		}).fail(function() {
			updateUIFailure();
		});
	});

	// update list of sports when user selects a different category (solo/team/all)
	$('.options div').on('click', updateActivityList);

	// handle ajax success
	function updateUISuccess(response) {
		const degC = response.main.temp - 273.15;
		const degCInt = Math.floor(degC);
		const degF = degC * 1.8 + 32;
		const degFInt = Math.floor(degF);
		state = {
			condition: response.weather[0].main,
			icon: "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png",
			degCInt: Math.floor(degCInt),
			degFInt: Math.floor(degFInt),
			city: response.name
		};

		const $into = $('.conditions')[0];

		ReactDOM.render(<Forecast {...state} />, $into);

		function Forecast(props) {
			return (
				<div>
					<p className="city">{props.city}</p>
					<p>{props.degCInt}&#176; C / {props.degFInt}&#176; F <img src={props.icon} alt={props.condition} /></p>
				</div>
			)
		}

		updateActivityList();
	}

	// handle selection of a new category (team/solo/all) 
	function updateActivityList(event) {
		if (event !== undefined && $(this).hasClass('selected')) {
			// if the 'event' parameter is defined, then a tab has been clicked; if not, then this is the
			//   default case and the view simply needs to be updated
			// if the clicked tab has the class 'selected', then no need to change location of 'selected' class
			//   or change the DOM
			return true;
		} else if (event !== undefined && !$(this).hasClass('selected')) {
			// if the 'event' parameter is defined, then a tab has been clicked
			// if the clicked tab does not have the class 'selected', then location of 'selected' class must be added
			//   to the clicked element and removed from its siblings
			category = $(this).attr('id');
			$('.options div').removeClass('selected');
			$(this).addClass('selected');
		} 

		state.activities = [];
		if (state.condition === "Rain") {
			updateState('In');
		} else if (state.condition === "Snow" || state.degFInt < 50) {
			updateState('OutCold');
		} else {
			updateState('OutWarm');
		}

		function updateState(type) {
			if (category === "solo") {
				state.activities.push(...activities['solo' + type]);
			} else if (category === "team") {
				state.activities.push(...activities['team' + type]);
			} else {
				state.activities.push(...activities['solo' + type]);
				state.activities.push(...activities['team' + type]);
			}
		}

		const $into = $('.activities')[0];

		ReactDOM.render(<Activities {...state} />, $into);

		function Activities(props) {
			const activitiesList = props.activities.map(function(activity, index) {
				return <li key={index}>{activity}</li>
			});
			return (
				<div>
					<ul>{activitiesList}</ul>
				</div>
			)
		}

		$('.results').slideDown(300);
	}

	// handle ajax failure
	function updateUIFailure() {
		$(".conditions").text("Weather information unavailable");
	}
})();
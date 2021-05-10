"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=";
	var apiKey = "APIKEY"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
	var activities = {
		teamIn: ['basketball', 'hockey', 'volleyball'],
		teamOutWarm: ['softball/baseball', 'football/soccer', 'American football', 'rowing', 'tennis', 'volleyball', 'ultimate frisbee', 'rugby'],
		teamOutCold: ['hockey'],
		soloIn: ['rock climbing', 'swimming', 'ice skating'],
		soloOutWarm: ['rowing', 'running', 'hiking', 'cycling', 'rock climbing'],
		soloOutCold: ['snowshoeing', 'downhill skiing', 'cross-country skiing', 'ice skating']
	};
	var state = {};
	var category = 'all';

	// get weather data when user clicks Forecast button, then add temp & conditions to view
	//	$('.forecast-button').click(function(e) {
	document.querySelector('.forecast-button').addEventListener('click', function (e) {
		e.preventDefault();
		//		const location = $('#location').val();
		var location = document.querySelector('#location').value;
		//		$('#location').val('');
		document.querySelector('#location').value = '';
		/*
  		$.get(url + location + '&appid=' + apiKey).done(function(response) {
  			updateUISuccess(response);
  		}).fail(function() {
  			updateUIFailure();
  		});
  */

		fetch(url + location + '&appid=' + apiKey).then(function (response) {
			return response.json();
		}).then(function (response) {
			updateUISuccess(response);
		}).catch(function () {
			updateUIFailure();
		});
	});

	// update list of sports when user selects a different category (solo/team/all)
	//$('.options div').on('click', updateActivityList);
	document.querySelectorAll('.options div').forEach(function (el) {
		el.addEventListener('click', updateActivityList, false);
	});

	// handle ajax success
	function updateUISuccess(response) {
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		state = {
			condition: response.weather[0].main,
			icon: "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png",
			degCInt: Math.floor(degCInt),
			degFInt: Math.floor(degFInt),
			city: response.name
		};

		//		const $into = $('.conditions')[0];
		var into = document.querySelector('.conditions');

		//		ReactDOM.render(<Forecast {...state} />, $into);
		//		ReactDOM.render(<Forecast {...state} />, into);

		/*
  		function Forecast(props) {
  			return (
  				<div>
  					<p className="city">{props.city}</p>
  					<p>{props.degCInt}&#176; C / {props.degFInt}&#176; F <img src={props.icon} alt={props.condition} /></p>
  				</div>
  			)
  		}
  */

		var fragment = document.createDocumentFragment();
		var container = document.createElement('div');
		var cityPara = document.createElement('p');
		cityPara.setAttribute('class', 'city');
		cityPara.textContent = state.city;
		var conditionsPara = document.createElement('p');
		//		conditionsPara.textContent = state.degCInt + '\u00B0 C / ' + state.degFInt + '\u00B0 F';
		conditionsPara.textContent = state.degCInt + "\xB0 C / " + state.degFInt + "\xB0 F";
		var iconImage = document.createElement('img');
		iconImage.setAttribute('src', state.icon);
		iconImage.setAttribute('alt', state.condition);
		conditionsPara.appendChild(iconImage);
		container.appendChild(cityPara);
		container.appendChild(conditionsPara);
		fragment.appendChild(container);
		if (document.querySelector('.conditions div')) {
			into.replaceChild(fragment, document.querySelector('.conditions div'));
		} else {
			into.appendChild(fragment);
		}

		updateActivityList();
	}

	// handle selection of a new category (team/solo/all) 
	function updateActivityList(event) {
		//		if (event !== undefined && $(this).hasClass('selected')) {
		if (event !== undefined && event.target.classList.contains('selected')) {
			// if the 'event' parameter is defined, then a tab has been clicked; if not, then this is the
			//   default case and the view simply needs to be updated
			// if the clicked tab has the class 'selected', then no need to change location of 'selected' class
			//   or change the DOM
			return true;
			//		} else if (event !== undefined && !$(this).hasClass('selected')) {
		} else if (event !== undefined && !event.target.classList.contains('selected')) {
			// if the 'event' parameter is defined, then a tab has been clicked
			// if the clicked tab does not have the class 'selected', then location of 'selected' class must be added
			//   to the clicked element and removed from its siblings
			//			category = $(this).attr('id');
			category = event.target.id;

			//			$('.options div').removeClass('selected');

			document.querySelectorAll('.options div').forEach(function (el) {
				el.classList.remove('selected');
			});

			//			$(this).addClass('selected');
			event.target.classList.add('selected');
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
				var _state$activities;

				(_state$activities = state.activities).push.apply(_state$activities, _toConsumableArray(activities['solo' + type]));
			} else if (category === "team") {
				var _state$activities2;

				(_state$activities2 = state.activities).push.apply(_state$activities2, _toConsumableArray(activities['team' + type]));
			} else {
				var _state$activities3, _state$activities4;

				(_state$activities3 = state.activities).push.apply(_state$activities3, _toConsumableArray(activities['solo' + type]));
				(_state$activities4 = state.activities).push.apply(_state$activities4, _toConsumableArray(activities['team' + type]));
			}
		}

		//		const $into = $('.activities')[0];
		var into = document.querySelector('.activities');

		//		ReactDOM.render(<Activities {...state} />, $into);
		//		ReactDOM.render(<Activities {...state} />, into);

		/*
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
  */

		var fragment = document.createDocumentFragment();
		var activitiesContainer = document.createElement('div');
		var list = document.createElement('ul');
		state.activities.forEach(function (activity, index) {
			var listItem = document.createElement('li');
			listItem.setAttribute('key', index);
			listItem.textContent = activity;
			list.appendChild(listItem);
		});
		activitiesContainer.appendChild(list);
		fragment.appendChild(activitiesContainer);
		if (document.querySelector('.activities div')) {
			into.replaceChild(fragment, document.querySelector('.activities div'));
		} else {
			into.appendChild(fragment);
		}

		//		$('.results').slideDown(300);
		document.querySelector('.results').classList.add('open');
	}

	// handle ajax failure
	function updateUIFailure() {
		//		$(".conditions").text("Weather information unavailable");
		document.querySelector(".conditions").textContent = "Weather information unavailable";
	}
})();
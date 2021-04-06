//MODAL
const modal = document.getElementById('about-modal');
const modalOpen = document.getElementById('about-modal-open');
const modalClose =document.getElementById('about-modal-close');
const modalOverlay = document.getElementById('modal-overlay');

modalOpen.addEventListener('click', () => {
	modal.classList.add('active');
	modalOverlay.classList.add('active');
});

modalClose.addEventListener('click', () => {
	modal.classList.remove('active');
	modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', () => {
	modal.classList.remove('active');
	modalOverlay.classList.remove('active');
});

//MENU BUTTON
const sidebar = document.getElementById('side-bar');
const sidebarButton = document.getElementById('menu-button');
const openSidebarButton = document.getElementById('open-menu');
const closeSidebarButton = document.getElementById('close-menu');

openSidebarButton.style.display = "none";
let buttonStateMenu = 0; //0 means the menu is open. 1 means the menu is closed.

sidebarButton.addEventListener('click', () => {
	if (buttonStateMenu === 0) {
		closeSidebarButton.style.display = "none";
		openSidebarButton.style.display = "inline";
		sidebar.classList.add('side-bar-hide');
		buttonStateMenu = 1;
	}
	else {
		openSidebarButton.style.display = "none";
		closeSidebarButton.style.display = "inline";
		sidebar.classList.remove('side-bar-hide');
		buttonStateMenu = 0;
	}
});

//AREA BUTTONS
const areaBackground = document.querySelector('body');

const gardenButton = document.getElementById('garden-button');
const gardenList = document.getElementById('sound-list-garden');

const pondButton = document.getElementById('pond-button');
const pondList = document.getElementById('sound-list-pond');

const sportsButton = document.getElementById('sports-button');
const sportsList = document.getElementById('sound-list-sports');

const uscButton = document.getElementById('usc-button');
const uscList = document.getElementById('sound-list-usc');

gardenButton.classList.add('active-area'); //default

gardenList.style.display = "inline";
pondList.style.display = "none";
sportsList.style.display = "none";
uscList.style.display = "none";


gardenButton.addEventListener('click', () => {
	//BACKGROUND SWITCH
	areaBackground.style.background = 'url(./img/cas-garden.png) no-repeat center center/cover';

	//ACTIVE AREA SWITCH
	gardenButton.classList.add('active-area');
	pondButton.classList.remove('active-area');
	sportsButton.classList.remove('active-area');
	uscButton.classList.remove('active-area');

	//DISPLAYED LIST SWITCH
	gardenList.style.display = "inline";
	pondList.style.display = "none";
	sportsList.style.display = "none";
	uscList.style.display = "none";
	

	//MUSIC STOPPER FOR OTHER AREAS
	/* Pond */
	pauseButtonPond.style.display = "none";
	playButtonPond.style.display = "inline";
	pondAudio.pause();
	buttonStatePond = 0;

	pauseButtonPondPeople.style.display = "none";
	playButtonPondPeople.style.display = "inline";
	pondPeopleAudio.pause();
	buttonStatePondPeople = 0;

	pauseButtonPondStreet.style.display = "none";
	playButtonPondStreet.style.display = "inline";
	pondStreetAudio.pause();
	buttonStatePondStreet = 0;

	/* Sports Bldg */
	pauseButtonPlaying.style.display = "none";
	playButtonPlaying.style.display = "inline";
	playingAudio.pause();
	buttonStatePlaying = 0;

	pauseButtonTalking.style.display = "none";
	playButtonTalking.style.display = "inline";
	talkingAudio.pause();
	buttonStateTalking = 0;

	/* USC */
	pauseButtonCustomers.style.display = "none";
	playButtonCustomers.style.display = "inline";
	customersAudio.pause();
	buttonStateCustomers = 0;

	pauseButtonFan.style.display = "none";
	playButtonFan.style.display = "inline";
	fanAudio.pause();
	buttonStateFan = 0;
});

pondButton.addEventListener('click', () => {
	//BACKGROUND SWITCH
	areaBackground.style.background = 'url(./img/alb-pond.png) no-repeat center center/cover';

	//ACTIVE AREA SWITCH
	pondButton.classList.add('active-area');
	gardenButton.classList.remove('active-area');
	sportsButton.classList.remove('active-area');
	uscButton.classList.remove('active-area');

	//DISPLAYED LIST SWITCH
	gardenList.style.display = "none";
	pondList.style.display = "inline";
	sportsList.style.display = "none";
	uscList.style.display = "none";

	//MUSIC STOPPER FOR OTHER AREAS
	/* Garden */
	pauseButtonBirds.style.display = "none";
	playButtonBirds.style.display = "inline";
	birdsAudio.pause();
	buttonStateBirds = 0;

	pauseButtonPeople.style.display = "none";
	playButtonPeople.style.display = "inline";
	peopleAudio.pause();
	buttonStatePeople = 0;

	pauseButtonStreet.style.display = "none";
	playButtonStreet.style.display = "inline";
	streetAudio.pause();
	buttonStateStreet = 0;

	/* Sports */
	pauseButtonPlaying.style.display = "none";
	playButtonPlaying.style.display = "inline";
	playingAudio.pause();
	buttonStatePlaying = 0;

	pauseButtonTalking.style.display = "none";
	playButtonTalking.style.display = "inline";
	talkingAudio.pause();
	buttonStateTalking = 0;

	/* USC */
	pauseButtonCustomers.style.display = "none";
	playButtonCustomers.style.display = "inline";
	customersAudio.pause();
	buttonStateCustomers = 0;

	pauseButtonFan.style.display = "none";
	playButtonFan.style.display = "inline";
	fanAudio.pause();
	buttonStateFan = 0;	
});

sportsButton.addEventListener('click', () => {
	//BACKGROUND SWITCH
	areaBackground.style.background = 'url(./img/sports-building.png) no-repeat center center/cover';

	//ACTIVE AREA SWITCH
	sportsButton.classList.add('active-area');
	gardenButton.classList.remove('active-area');
	pondButton.classList.remove('active-area');
	uscButton.classList.remove('active-area');

	//DISPLAYED LIST SWITCH
	gardenList.style.display = "none";
	pondList.style.display = "none";
	sportsList.style.display = "inline";
	uscList.style.display = "none";
	

	//MUSIC STOPPER FOR OTHER AREAS
	/* Garden */
	pauseButtonBirds.style.display = "none";
	playButtonBirds.style.display = "inline";
	birdsAudio.pause();
	buttonStateBirds = 0;

	pauseButtonPeople.style.display = "none";
	playButtonPeople.style.display = "inline";
	peopleAudio.pause();
	buttonStatePeople = 0;

	pauseButtonStreet.style.display = "none";
	playButtonStreet.style.display = "inline";
	streetAudio.pause();
	buttonStateStreet = 0;

	/* Pond */
	pauseButtonPond.style.display = "none";
	playButtonPond.style.display = "inline";
	pondAudio.pause();
	buttonStatePond = 0;

	pauseButtonPondPeople.style.display = "none";
	playButtonPondPeople.style.display = "inline";
	pondPeopleAudio.pause();
	buttonStatePondPeople = 0;

	pauseButtonPondStreet.style.display = "none";
	playButtonPondStreet.style.display = "inline";
	pondStreetAudio.pause();
	buttonStatePondStreet = 0;

	/* USC */
	pauseButtonCustomers.style.display = "none";
	playButtonCustomers.style.display = "inline";
	customersAudio.pause();
	buttonStateCustomers = 0;

	pauseButtonFan.style.display = "none";
	playButtonFan.style.display = "inline";
	fanAudio.pause();
	buttonStateFan = 0;
});

uscButton.addEventListener('click', () => {
	//BACKGROUND SWITCH
	areaBackground.style.background = 'url(./img/usc.png) no-repeat center center/cover';

	//ACTIVE AREA SWITCH
	uscButton.classList.add('active-area');
	gardenButton.classList.remove('active-area');
	pondButton.classList.remove('active-area');
	sportsButton.classList.remove('active-area');

	//DISPLAYED LIST SWITCH
	gardenList.style.display = "none";
	pondList.style.display = "none";
	sportsList.style.display = "none";
	uscList.style.display = "inline";

	//MUSIC STOPPER FOR OTHER AREAS
	/* Garden */
	pauseButtonBirds.style.display = "none";
	playButtonBirds.style.display = "inline";
	birdsAudio.pause();
	buttonStateBirds = 0;

	pauseButtonPeople.style.display = "none";
	playButtonPeople.style.display = "inline";
	peopleAudio.pause();
	buttonStatePeople = 0;

	pauseButtonStreet.style.display = "none";
	playButtonStreet.style.display = "inline";
	streetAudio.pause();
	buttonStateStreet = 0;

	/* Pond */
	pauseButtonPond.style.display = "none";
	playButtonPond.style.display = "inline";
	pondAudio.pause();
	buttonStatePond = 0;

	pauseButtonPondPeople.style.display = "none";
	playButtonPondPeople.style.display = "inline";
	pondPeopleAudio.pause();
	buttonStatePondPeople = 0;

	pauseButtonPondStreet.style.display = "none";
	playButtonPondStreet.style.display = "inline";
	pondStreetAudio.pause();
	buttonStatePondStreet = 0;
	
	/* Sports */
	pauseButtonPlaying.style.display = "none";
	playButtonPlaying.style.display = "inline";
	playingAudio.pause();
	buttonStatePlaying = 0;

	pauseButtonTalking.style.display = "none";
	playButtonTalking.style.display = "inline";
	talkingAudio.pause();
	buttonStateTalking = 0;
});

//AUDIO CONTROL OPTIONS
/* Birds */
const playButtonBirds = document.getElementById('play-button-birds');
const pauseButtonBirds = document.getElementById('pause-button-birds');
const controlButtonBirds = document.getElementById('control-button-birds');
const birdsAudio = document.getElementById('birds-audio');

pauseButtonBirds.style.display = "none";
let buttonStateBirds = 0; //0 means the sound is not playing. 1 means the sound is playing.

controlButtonBirds.addEventListener('click', () => {
	if (buttonStateBirds === 0) {
		pauseButtonBirds.style.display = "inline";
		playButtonBirds.style.display = "none";
		birdsAudio.play();
		buttonStateBirds = 1;
	}
	else {
		pauseButtonBirds.style.display = "none";
		playButtonBirds.style.display = "inline";
		birdsAudio.pause();
		buttonStateBirds = 0;
	}
});

/* People */
const playButtonPeople = document.getElementById('play-button-people');
const pauseButtonPeople = document.getElementById('pause-button-people');
const controlButtonPeople = document.getElementById('control-button-people');
const peopleAudio = document.getElementById('people-audio');

pauseButtonPeople.style.display = "none";
let buttonStatePeople = 0; //0 means the sound is not playing. 1 means the sound is playing.

controlButtonPeople.addEventListener('click', () => {
	if (buttonStatePeople === 0) {
		pauseButtonPeople.style.display = "inline";
		playButtonPeople.style.display = "none";
		peopleAudio.play();
		buttonStatePeople = 1;
	}
	else {
		pauseButtonPeople.style.display = "none";
		playButtonPeople.style.display = "inline";
		peopleAudio.pause();
		buttonStatePeople = 0;
	}
});

/* Street */
const playButtonStreet = document.getElementById('play-button-street');
const pauseButtonStreet = document.getElementById('pause-button-street');
const controlButtonStreet = document.getElementById('control-button-street');
const streetAudio = document.getElementById('street-audio');

pauseButtonStreet.style.display = "none";
let buttonStateStreet = 0; //0 means the sound is not playing. 1 means the sound is playing.

controlButtonStreet.addEventListener('click', () => {
	if (buttonStateStreet === 0) {
		pauseButtonStreet.style.display = "inline";
		playButtonStreet.style.display = "none";
		streetAudio.play();
		buttonStateStreet = 1;
	}
	else {
		pauseButtonStreet.style.display = "none";
		playButtonStreet.style.display = "inline";
		streetAudio.pause();
		buttonStateStreet = 0;
	}
});

/* POND */
/* Pond Sounds */
const playButtonPond = document.getElementById('play-button-pond');
const pauseButtonPond = document.getElementById('pause-button-pond');
const controlButtonPond = document.getElementById('control-button-pond');
const pondAudio = document.getElementById('pond-audio');

pauseButtonPond.style.display = "none";
let buttonStatePond = 0; //0 means the sound is not playing. 1 means the sound is playing.

controlButtonPond.addEventListener('click', () => {
	if (buttonStatePond === 0) {
		pauseButtonPond.style.display = "inline";
		playButtonPond.style.display = "none";
		pondAudio.play();
		buttonStatePond = 1;
	}
	else {
		pauseButtonPond.style.display = "none";
		playButtonPond.style.display = "inline";
		pondAudio.pause();
		buttonStatePond = 0;
	}
});

/* Pond - People */
const playButtonPondPeople = document.getElementById('play-button-pond-people');
const pauseButtonPondPeople = document.getElementById('pause-button-pond-people');
const controlButtonPondPeople = document.getElementById('control-button-pond-people');
const pondPeopleAudio = document.getElementById('pond-people-audio');

pauseButtonPondPeople.style.display = "none";
let buttonStatePondPeople = 0; //0 means the sound is not playing. 1 means the sound is playing.

controlButtonPondPeople.addEventListener('click', () => {
	if (buttonStatePondPeople === 0) {
		pauseButtonPondPeople.style.display = "inline";
		playButtonPondPeople.style.display = "none";
		pondPeopleAudio.play();
		buttonStatePondPeople = 1;
	}
	else {
		pauseButtonPondPeople.style.display = "none";
		playButtonPondPeople.style.display = "inline";
		pondPeopleAudio.pause();
		buttonStatePondPeople = 0;
	}
});

/* Pond - Street */
const playButtonPondStreet = document.getElementById('play-button-pond-street');
const pauseButtonPondStreet = document.getElementById('pause-button-pond-street');
const controlButtonPondStreet = document.getElementById('control-button-pond-street');
const pondStreetAudio = document.getElementById('pond-street-audio');

pauseButtonPondStreet.style.display = "none";
let buttonStatePondStreet = 0; //0 means the sound is not playing. 1 means the sound is playing.

controlButtonPondStreet.addEventListener('click', () => {
	if (buttonStatePondStreet === 0) {
		pauseButtonPondStreet.style.display = "inline";
		playButtonPondStreet.style.display = "none";
		pondStreetAudio.play();
		buttonStatePondStreet = 1;
	}
	else {
		pauseButtonPondStreet.style.display = "none";
		playButtonPondStreet.style.display = "inline";
		pondStreetAudio.pause();
		buttonStatePondStreet = 0;
	}
});

/* SPORTS BLDG */
/* People Playing */
const playButtonPlaying = document.getElementById('play-button-playing');
const pauseButtonPlaying = document.getElementById('pause-button-playing');
const controlButtonPlaying = document.getElementById('control-button-playing');
const playingAudio = document.getElementById('playing-audio');

pauseButtonPlaying.style.display = "none";
let buttonStatePlaying = 0; //0 means the sound is not playing. 1 means the sound is playing.

controlButtonPlaying.addEventListener('click', () => {
	if (buttonStatePlaying === 0) {
		pauseButtonPlaying.style.display = "inline";
		playButtonPlaying.style.display = "none";
		playingAudio.play();
		buttonStatePlaying = 1;
	}
	else {
		pauseButtonPlaying.style.display = "none";
		playButtonPlaying.style.display = "inline";
		playingAudio.pause();
		buttonStatePlaying = 0;
	}
});

/* People Talking */
const playButtonTalking = document.getElementById('play-button-talking');
const pauseButtonTalking = document.getElementById('pause-button-talking');
const controlButtonTalking = document.getElementById('control-button-talking');
const talkingAudio = document.getElementById('talking-audio');

pauseButtonTalking.style.display = "none";
let buttonStateTalking = 0; //0 means the sound is not playing. 1 means the sound is playing.

controlButtonTalking.addEventListener('click', () => {
	if (buttonStateTalking === 0) {
		pauseButtonTalking.style.display = "inline";
		playButtonTalking.style.display = "none";
		talkingAudio.play();
		buttonStateTalking = 1;
	}
	else {
		pauseButtonTalking.style.display = "none";
		playButtonTalking.style.display = "inline";
		talkingAudio.pause();
		buttonStateTalking = 0;
	}
});

/* USC */
/* People - USC */
const playButtonCustomers = document.getElementById('play-button-customers');
const pauseButtonCustomers = document.getElementById('pause-button-customers');
const controlButtonCustomers = document.getElementById('control-button-customers');
const customersAudio = document.getElementById('customers-audio');

pauseButtonCustomers.style.display = "none";
let buttonStateCustomers = 0; //0 means the sound is not playing. 1 means the sound is playing.

controlButtonCustomers.addEventListener('click', () => {
	if (buttonStateCustomers === 0) {
		pauseButtonCustomers.style.display = "inline";
		playButtonCustomers.style.display = "none";
		customersAudio.play();
		buttonStateCustomers = 1;
	}
	else {
		pauseButtonCustomers.style.display = "none";
		playButtonCustomers.style.display = "inline";
		customersAudio.pause();
		buttonStateCustomers = 0;
	}
});

/* Fan */
const playButtonFan = document.getElementById('play-button-fan');
const pauseButtonFan = document.getElementById('pause-button-fan');
const controlButtonFan = document.getElementById('control-button-fan');
const fanAudio = document.getElementById('fan-audio');

pauseButtonFan.style.display = "none";
let buttonStateFan = 0; //0 means the sound is not playing. 1 means the sound is playing.

controlButtonFan.addEventListener('click', () => {
	if (buttonStateFan === 0) {
		pauseButtonFan.style.display = "inline";
		playButtonFan.style.display = "none";
		fanAudio.play();
		buttonStateFan = 1;
	}
	else {
		pauseButtonFan.style.display = "none";
		playButtonFan.style.display = "inline";
		fanAudio.pause();
		buttonStateFan = 0;
	}
});

//VOLUME CONTROL
/*CAS GARDEN */
/* Birds */
const volumeSliderBirds = document.getElementById('volume-slider-birds');

volumeSliderBirds.addEventListener('input', (e) => {
	const birdsValue = e.target.value;
	birdsAudio.volume = birdsValue / 100;
});
/* Other People- CAS Garden */
const volumeSliderPeople = document.getElementById('volume-slider-people');

volumeSliderPeople.addEventListener('input', (e) => {
	const peopleValue = e.target.value;
	peopleAudio.volume = peopleValue / 100;
});

/* Street */
const volumeSliderStreet = document.getElementById('volume-slider-street');

volumeSliderStreet.addEventListener('input', (e) => {
	const streetValue = e.target.value;
	streetAudio.volume = streetValue / 100;
});

/* POND */
/* Pond Sounds */
const volumeSliderPond = document.getElementById('volume-slider-pond');

volumeSliderPond.addEventListener('input', (e) => {
	const pondValue = e.target.value;
	pondAudio.volume = pondValue / 100;
});

/* People - Pond */
const volumeSliderPondPeople = document.getElementById('volume-slider-pond-people');

volumeSliderPondPeople.addEventListener('input', (e) => {
	const pondPeopleValue = e.target.value;
	pondPeopleAudio.volume = pondPeopleValue / 100;
});

/* Pond - Street */
const volumeSliderPondStreet = document.getElementById('volume-slider-pond-street');

volumeSliderPondStreet.addEventListener('input', (e) => {
	const pondStreetValue = e.target.value;
	pondStreetAudio.volume = pondStreetValue / 100;
});

/* SPORTS BLDG */
/* People Playing */
const volumeSliderPlaying = document.getElementById('volume-slider-playing');

volumeSliderPlaying.addEventListener('input', (e) => {
	const playingValue = e.target.value;
	playingAudio.volume = playingValue / 100;
});

/* People Talking */
const volumeSliderTalking = document.getElementById('volume-slider-talking');

volumeSliderTalking.addEventListener('input', (e) => {
	const talkingValue = e.target.value;
	talkingAudio.volume = talkingValue / 100;
});

/* USC */
/* Other People - USC */
const volumeSliderCustomers = document.getElementById('volume-slider-customers');

volumeSliderCustomers.addEventListener('input', (e) => {
	const customersValue = e.target.value;
	customersAudio.volume = customersValue / 100;
});

/* Fan */
const volumeSliderFan = document.getElementById('volume-slider-fan');

volumeSliderFan.addEventListener('input', (e) => {
	const fanValue = e.target.value;
	fanAudio.volume = fanValue / 100;
});



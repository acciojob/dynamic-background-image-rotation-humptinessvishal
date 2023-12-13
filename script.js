//your JS code here. If required.
function setBackgroundImage() {
	const body = document.body;
    const landscapeImage = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg';
    const portraitImage = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg';

    const isLandscape = window.innerWidth > window.innerHeight;
	body.style.backgroundImage = `url(${isLandscape ? landscapeImage : portraitImage})`;
};
setBackgroundImage();

window.addEventListener('orientationchange', setBackgroundImage);
window.addEventListener('resize', setBackgroundImage);
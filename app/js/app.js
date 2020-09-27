const TABLET_BREAKPOINT = 768;

document.addEventListener("DOMContentLoaded", function() {
  // drivers section
  fetch('/data.json')
    .then(res => res.json())
    .then(renderDrivers);
});

// burger menu logic
document.querySelector('.header__burger').onclick = burgerCollapse;
document.querySelector('.header__menu-background_mobile').onclick = burgerCollapse;
document.querySelectorAll('.header__link').forEach(link => {
  link.onclick = burgerCollapse;
})

function burgerCollapse () {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');

  if (window.innerWidth < TABLET_BREAKPOINT)
    document.querySelector('.header__menu-background_mobile').classList.toggle('active');
}

const renderDrivers = ({ drivers }) => {
  const container = document.getElementById('drivers-container')

  drivers.map((driver, i) => {
    const date = new Date(driver.dateOfBirth)
    const dateString = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

    const reverse = (i % 2) !== 0

    container.insertAdjacentHTML('beforeend',`
        <div class="drivers__driver-container_mobile">
            <img src="${driver.imageUrl}" class="drivers__driver-photo" alt=""/>
            <div class="drivers__driver-position">${driver.position}</div>
            <div class="drivers__line"></div>
            <div class="drivers__driver-name">${driver.firstName} ${driver.lastName}</div>
            <div class="drivers__description">
                <div>
                    <div>Races: <span>${driver.races}</span></div>
                    <div>Pole-positions: <span>${driver.polePositions}</span></div>
                    <div>Podiums: <span>${driver.podiums}</span></div>
                </div>
                <div>
                    <div>Wins: <span>${driver.wins}</span></div>
                    <div>Date of birth: <span>${dateString}</span></div>
                    <div>Place of birth: <span>${driver.city}, ${driver.country}</span></div>
                </div>
            </div>
        </div>
      `);
    container.insertAdjacentHTML('beforeend',`
          <div class="drivers__driver-container${reverse ? '_reverse' : ''}">
            <div class="drivers__line"></div>
            <div class="drivers__driver-profile">
              <img src="${driver.imageUrl}" class="drivers__driver-photo" alt=""/>
              <div class="drivers__driver-info">
                  <div class="drivers__title">
                      <div class="drivers__driver-position">${driver.position}</div>
                      <div class="drivers__driver-name">${driver.firstName} ${driver.lastName}</div>
                  </div>
                  <div class="drivers__description">
                    <div>
                      <div>Races: <span>${driver.races}</span></div>
                      <div>Pole-positions: <span>${driver.polePositions}</span></div>
                      <div>Podiums: <span>${driver.podiums}</span></div>
                    </div>
                    <div>
                      <div>Wins: <span>${driver.wins}</span></div>
                      <div>Date of birth: <span>${dateString}</span></div>
                      <div>Place of birth: <span>${driver.city}, ${driver.country}</span></div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        `);
  })
}

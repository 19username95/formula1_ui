document.addEventListener("DOMContentLoaded", function() {
  // drivers section
  fetch('/data.json')
    .then(res => res.json())
    .then(renderDrivers);
});

// burger menu logic
document.querySelector('.header__burger').onclick = burgerCollapse;
document.querySelector('.header__menu-background-mobile').onclick = burgerCollapse;
document.querySelectorAll('.header__link').forEach(link => {
  link.onclick = burgerCollapse;
})

function burgerCollapse () {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
  document.querySelector('.header__menu-background-mobile').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
}

const renderDrivers = ({ drivers }) => {
  const container = document.getElementById('drivers-container')

  drivers.map((driver, i) => {
    const date = new Date(driver.dateOfBirth)
    const dateString = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

    const reverse = (i % 2) !== 0

    container.insertAdjacentHTML('beforeend',`
        <div class="driver-container-mobile">
            <img src="${driver.imageUrl}" class="driver-photo" alt=""/>
            <div class="driver-position">${driver.position}</div>
            <div class="line"></div>
            <div class="driver-name">${driver.firstName} ${driver.lastName}</div>
            <div class="description">
                <div class="column">
                    <div>Races: <span>${driver.races}</span></div>
                    <div>Pole-positions: <span>${driver.polePositions}</span></div>
                    <div>Podiums: <span>${driver.podiums}</span></div>
                </div>
                <div class="column--last">
                    <div>Wins: <span>${driver.wins}</span></div>
                    <div>Date of birth: <span>${dateString}</span></div>
                    <div>Place of birth: <span>${driver.city}, ${driver.country}</span></div>
                </div>
            </div>
        </div>
      `);
    container.insertAdjacentHTML('beforeend',`
          <div class="driver-container${reverse ? '-reverse' : ''}">
            <div class="line"></div>
            <div class="driver-profile">
              <img src="${driver.imageUrl}" class="driver-photo" alt=""/>
              <div class="driver-info">
                  <div class="title">
                      <div class="driver-position">${driver.position}</div>
                      <div class="driver-name">${driver.firstName} ${driver.lastName}</div>
                  </div>
                  <div class="description">
                    <div class="column">
                      <div>Races: <span>${driver.races}</span></div>
                      <div>Pole-positions: <span>${driver.polePositions}</span></div>
                      <div>Podiums: <span>${driver.podiums}</span></div>
                    </div>
                    <div class="column--last">
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

const counters = document.querySelectorAll(
  '.counter'
) as NodeListOf<HTMLDivElement>;

counters.forEach((counter) => {
  const element = counter;

  element.innerText = '0';

  const updateCounter = () => {
    const attr = element.getAttribute('data-target');
    const target = +attr!;
    const c = +element.innerText;

    const increment = target / 200;

    if (c < target) {
      element.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      element.innerText = target.toString();
    }
  };

  updateCounter();
});

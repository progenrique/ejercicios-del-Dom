export default function scrollEspia() {
  const $section = document.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    // console.log(entries);

    entries.forEach((entry) => {
      const id = entry.target.id;
      if (entry.isIntersecting) {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.add("active-menu");
      } else {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.remove("active-menu");
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    //rootMargin: "-250px",
    threshold: [0.5, 0.75], //del 0 al 1 // se debe ver min del 50 al 70 porciento
    threshold: "0.3",
  });

  $section.forEach((el) => {
    observer.observe(el);
  });
}

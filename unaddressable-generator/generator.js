// Generates once per load — no memory, no repeatability

(function generate() {
  const seed = crypto.getRandomValues(new Uint32Array(1))[0];
  const fragments = [
    "Something appeared without request.",
    "This was not meant for you.",
    "Presence does not imply permission.",
    "The system did not notice you."
  ];

  const index = seed % fragments.length;
  const output = fragments[index];

  document.getElementById("output").textContent = output;
})();

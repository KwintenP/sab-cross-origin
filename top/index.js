function addIFrame() {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = `https://example.com:7588`;

  document.body.appendChild(iframe);

  return new Promise(
    (resolve) =>
      (iframe.onload = () => {
        console.log("loaded");
        resolve(iframe);
      })
  );
}

async function start() {
  const iframe = await addIFrame();

  console.log("sending");
  iframe.contentWindow.postMessage("foo", "https://example.com:7588");
  var sab = new SharedArrayBuffer(1024);
  iframe.contentWindow.postMessage(sab, "https://example.com:7588");
  iframe.contentWindow.postMessage("bar", "https://example.com:7588");
}

start();

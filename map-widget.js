// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(() => {
//     const widget = document.createElement("div");
//     widget.id = "uf-map-script";
//     widget.style.width = "300px";
//     widget.style.height = "300px";
//     widget.style.position = "fixed";
//     widget.style.top = "50%";
//     widget.style.right = "20px";
//     widget.style.transform = "translateY(-50%)";
//     widget.style.backgroundColor = "#ffffff";
//     widget.style.border = "1px solid #ccc";
//     widget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
//     widget.style.zIndex = "99999";
//     widget.style.borderRadius = "12px";
//     widget.style.overflow = "hidden";
//     widget.style.display = "flex";
//     widget.style.flexDirection = "column";
//     widget.style.justifyContent = "space-between";
//     widget.style.transition = "opacity 0.5s ease";
//     widget.style.opacity = "0";

//     const lat = 26.862555;   // Replace with your latitude
//     const lng = 80.9989484;  // Replace with your longitude
//     const zoom = 11;        // Replace with your preferred zoom

//     widget.innerHTML = `

//        <iframe
//          src="https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed"
//          style="border:0; width: 100%; height: 260px; border-radius: 12px 12px 0 0;"
//          allowfullscreen=""
//          loading="lazy"
//          referrerpolicy="no-referrer-when-downgrade"
//          title="Google Map"
//        ></iframe>
//       <button id="close-widget" class="btn btn-sm btn-danger" style="border-radius: 0 0 12px 12px; margin: 0;">Close</button>
//     `;

//     document.body.appendChild(widget);

//     requestAnimationFrame(() => {
//       widget.style.opacity = "1";
//     });

//     widget.querySelector("#close-widget").addEventListener("click", () => {
//       widget.style.opacity = "0";
//       setTimeout(() => widget.remove(), 300);
//     });
//   }, 2000);
// });
///////////////////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//   const scriptTag = document.getElementById("uf-map-script");
//   if (!scriptTag) return;

//   const lat = parseFloat(scriptTag.getAttribute("data-lat")) || 0;
//   const lng = parseFloat(scriptTag.getAttribute("data-lng")) || 0;
//   const zoom = parseInt(scriptTag.getAttribute("data-zoom")) || 10;

//   // Create the floating widget
//   const widget = document.createElement("div");
//   widget.id = "map-widget";
//   widget.style.width = "300px";
//   widget.style.height = "300px";
//   widget.style.position = "fixed";
//   widget.style.top = "50%";
//   widget.style.right = "20px";
//   widget.style.transform = "translateY(-50%)";
//   widget.style.backgroundColor = "#ffffff";
//   widget.style.border = "1px solid #ccc";
//   widget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
//   widget.style.zIndex = "99999";
//   widget.style.borderRadius = "12px";
//   widget.style.overflow = "hidden";
//   widget.style.display = "flex";
//   widget.style.flexDirection = "column";
//   widget.style.justifyContent = "space-between";
//   widget.style.transition = "opacity 0.5s ease";
//   widget.style.opacity = "0";

//   widget.innerHTML = `
//     <iframe
//       src="https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed"
//       style="border:0; width: 100%; height: 260px; border-radius: 12px 12px 0 0;"
//       allowfullscreen=""
//       loading="lazy"
//       referrerpolicy="no-referrer-when-downgrade"
//       title="Google Map"
//     ></iframe>
//     <button id="close-widget" class="btn btn-sm btn-danger" style="border-radius: 0 0 12px 12px; margin: 0;">Close</button>
//   `;

//   document.body.appendChild(widget);

//   requestAnimationFrame(() => {
//     widget.style.opacity = "1";
//   });

//   widget.querySelector("#close-widget").addEventListener("click", () => {
//     widget.style.opacity = "0";
//     setTimeout(() => widget.remove(), 300);
//   });
// });
///////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const scriptTag = document.getElementById("uf-map-script");
  if (!scriptTag) return;

  const lat = parseFloat(scriptTag.getAttribute("data-lat")) || 0;
  const lng = parseFloat(scriptTag.getAttribute("data-lng")) || 0;
  const zoom = parseInt(scriptTag.getAttribute("data-zoom")) || 10;

  // Create the map widget
  const widget = document.createElement("div");
  widget.id = "map-widget";
  widget.style.width = "300px";
  widget.style.height = "300px";
  widget.style.position = "fixed";
  widget.style.top = "50%";
  widget.style.right = "20px";
  widget.style.transform = "translateY(-50%)";
  widget.style.backgroundColor = "#ffffff";
  widget.style.border = "1px solid #ccc";
  widget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
  widget.style.zIndex = "99999";
  widget.style.borderRadius = "12px";
  widget.style.overflow = "hidden";
  widget.style.display = "flex";
  widget.style.flexDirection = "column";
  widget.style.justifyContent = "space-between";
  widget.style.transition = "opacity 0.5s ease";
  widget.style.opacity = "0";

  widget.innerHTML = `
    <iframe
      src="https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed"
      style="border:0; width: 100%; height: 260px; border-radius: 12px 12px 0 0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
    <button id="close-widget" class="btn btn-sm btn-danger" style="border-radius: 0 0 12px 12px; margin: 0;">Close</button>
  `;

  document.body.appendChild(widget);

  requestAnimationFrame(() => {
    widget.style.opacity = "1";
  });

  // Create a circular reopen button (hidden by default)
  const reopenBtn = document.createElement("button");
  reopenBtn.id = "reopen-map-widget";
  reopenBtn.innerHTML = `<i class="fas fa-map-marked-alt"></i>`;
  reopenBtn.style.position = "fixed";
  reopenBtn.style.top = "50%";
  reopenBtn.style.right = "20px";
  reopenBtn.style.transform = "translateY(-50%)";
  reopenBtn.style.width = "60px";
  reopenBtn.style.height = "60px";
  reopenBtn.style.borderRadius = "50%";
  reopenBtn.style.backgroundColor = "#007bff";
  reopenBtn.style.color = "#fff";
  reopenBtn.style.border = "none";
  reopenBtn.style.fontSize = "24px";
  reopenBtn.style.zIndex = "99998";
  reopenBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
  reopenBtn.style.cursor = "pointer";
  reopenBtn.style.display = "none";

  document.body.appendChild(reopenBtn);

  // Close functionality
  widget.querySelector("#close-widget").addEventListener("click", () => {
    widget.style.opacity = "0";
    setTimeout(() => {
      widget.style.display = "none";
      reopenBtn.style.display = "block";
    }, 300);
  });

  // Reopen functionality
  reopenBtn.addEventListener("click", () => {
    widget.style.display = "flex";
    requestAnimationFrame(() => {
      widget.style.opacity = "1";
    });
    reopenBtn.style.display = "none";
  });
});


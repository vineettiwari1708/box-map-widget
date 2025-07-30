<script>
document.addEventListener("DOMContentLoaded", function () {
  // Wait 20 seconds before showing the widget
  setTimeout(() => {
    // Create the widget container
    const widget = document.createElement("div");
    widget.id = "custom-widget";
    widget.style.width = "300px";
    widget.style.height = "300px";
    widget.style.position = "fixed";
    widget.style.bottom = "20px";
    widget.style.left = "50%";
    widget.style.transform = "translateX(-50%)";
    widget.style.backgroundColor = "#ffffff";
    widget.style.border = "1px solid #ccc";
    widget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
    widget.style.zIndex = "99999";
    widget.style.borderRadius = "12px";
    widget.style.overflow = "hidden";
    widget.style.display = "flex";
    widget.style.alignItems = "center";
    widget.style.justifyContent = "center";
    widget.style.transition = "opacity 0.5s ease";
    widget.style.opacity = "0"; // start hidden

    // Content inside the widget
    widget.innerHTML = `
      <div class="text-center p-3">
        <h5>Hello there! 👋</h5>
        <p>This is a sample 300x300 widget.</p>
        <button id="close-widget" class="btn btn-sm btn-danger mt-2">Close</button>
      </div>
    `;

    // Append to body
    document.body.appendChild(widget);

    // Fade in
    requestAnimationFrame(() => {
      widget.style.opacity = "1";
    });

    // Close button functionality
    widget.querySelector("#close-widget").addEventListener("click", () => {
      widget.style.opacity = "0";
      setTimeout(() => widget.remove(), 300);
    });
  }, 2000); // 20 seconds
});
</script>

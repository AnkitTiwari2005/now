// Block right-click
document.addEventListener('contextmenu', e => e.preventDefault());

// Block DevTools shortcuts
document.onkeydown = e => {
  if (
    e.keyCode === 123 || // F12
    (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && ['U','S'].includes(e.key.toUpperCase()))
  ) {
    return false;
  }
};

// Detect DevTools via size difference
setInterval(() => {
  const threshold = 160;
  if (
    window.outerWidth - window.innerWidth > threshold ||
    window.outerHeight - window.innerHeight > threshold
  ) {
    document.body.innerHTML = '<h1 style="color:red;text-align:center;margin-top:100px;">Access Denied</h1>';
  }
}, 500);

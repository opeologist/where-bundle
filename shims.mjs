if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  await import("es-module-shims");
}

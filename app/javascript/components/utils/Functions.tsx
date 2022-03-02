export function truncateText(title, length) {
  if (title.length > 90) {
    return title.substring(0, length) + "...";
  } else {
    return title;
  }
}

export function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
}

export function toCapitalize(string) {
  return string[0].toUpperCase() + string.substring(1);
}
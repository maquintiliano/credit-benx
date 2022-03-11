export const boldString = (str, substr) => {
	var strRegExp = new RegExp(substr, 'g');
	return str.replace(strRegExp, '<b>' + substr + '</b>');
};

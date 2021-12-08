function sayHello(languageCode) {
	const languageMap = {
		en: 'Hello',
		vi: 'Xin Chào',
		fr: 'Bonjour',
		cn: 'Nǐn hǎo',
		ja: 'Konnichiwa',
		ko: 'Anyoung haseyo',
	};
	return languageMap[languageCode] || 'Hello';
}

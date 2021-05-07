describe('Googling Wikipedia Test', () => {
    it('Open Google page', () => {
        return browser.url('https://www.google.com/')
    });

    it('Search Wikipedia', () => {
        let input = browser.$('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div.SDkEP > div.a4bIc > input');
        input.addValue('Wikipedia');
        browser.keys('Enter')
    })

    it('Enter Wikipedia and verify the url', () => {
        let wikipedia = browser.$('#rso > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)');
        wikipedia.click();
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    })
});
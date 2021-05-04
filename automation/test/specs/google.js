describe('Googling Wikipedia', () => {
    it('Open Google page', () => {
        browser.url('https://www.google.com/')
    });

    it('Search Wikipedia', () => {
        let input = $('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
        input.addValue('Wikipedia');
        browser.keys('Enter')
    })

    it('Enter Wikipedia and verify the url', () => {
        let wikipedia = $('#rso > div:nth-child(1) > div:nth-child(1) > div > div.tF2Cxc > div.yuRUbf > a');
        wikipedia.click();
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    })
});
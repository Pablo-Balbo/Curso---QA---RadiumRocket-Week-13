describe('Googling Wikipedia Test', () => {
    it('Open Google page', () => {
        return browser.url('https://www.google.com/')
    });

    it('Search Wikipedia', () => {
        let input = browser.$('.gLFyf.gsfi');
        input.addValue('Wikipedia');
        browser.keys('Enter')
    })

    it('Enter Wikipedia and verify the url', () => {
        let wikipedia = browser.$("*=Wikipedia");
        wikipedia.click();
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    })
});
window.addEventListener('DomContent', () => {
    const body = document.querySelector('body');

    function recursy (elem) {
        elem.childNodes.forEach(node => {
            console.log(node);
            if (elem.chilNodes.length > 1) {
                recursy(node);
            }
        });
    }

    recursy(body);
});
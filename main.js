document.addEventListener('DOMContentLoaded', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const generateBtn = document.getElementById('generate-btn');
    const themeBtn = document.getElementById('theme-btn');
    const htmlElement = document.documentElement;

    // Dark Mode Toggle Logic
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    updateThemeButton(currentTheme);

    themeBtn.addEventListener('click', () => {
        const targetTheme = htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('theme', targetTheme);
        updateThemeButton(targetTheme);
    });

    function updateThemeButton(theme) {
        themeBtn.textContent = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    }

    // Lotto Generator Logic
    generateBtn.addEventListener('click', () => {
        lottoNumbersContainer.innerHTML = '';
        const numbers = generateLottoNumbers();
        numbers.forEach((number, index) => {
            setTimeout(() => {
                const numberElement = createNumberElement(number);
                lottoNumbersContainer.appendChild(numberElement);
            }, index * 200);
        });
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function createNumberElement(number) {
        const element = document.createElement('div');
        element.classList.add('lotto-number');
        element.textContent = number;
        return element;
    }
});

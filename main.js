
document.addEventListener('DOMContentLoaded', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const generateBtn = document.getElementById('generate-btn');

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

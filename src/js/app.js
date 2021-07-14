export default class ErrorRepository {
    constructor() {
        this.repo = new Map([
            [100, 'something about error 100'],
            [101, 'something about error 101'],
            [102, 'something about error 102'],
            [103, 'something about error 103'],
            [104, 'something about error 104'],
            [105, 'something about error 105'],
        ]);
    }

    translate(code) {
        const array = [...this.repo];

        const result = array.find((element) => {
            const [key] = element;

            return key === code;
        });

        if (result) {
            const [, value] = result;

            return value;
        }

        return 'Unknown error';
    }
}

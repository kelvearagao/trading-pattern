const UP = 1
const DOWN = 2

export const patterns = [
    {
        name: 'Harami de alta',
        trend: 1,
        data: [
            {
                date: new Date('2020-01-10T02:01Z'),
                open: 50,
                high: 52,
                low: 43,
                close: 45
            },
            {
                date: new Date('2020-01-10T02:02Z'),
                open: 47,
                high: 49,
                low: 40,
                close: 42
            },
            {
                date: new Date('2020-01-10T02:03Z'),
                open: 43.5,
                high: 46,
                low: 42.5,
                close: 45
            }
        ],
        description: `
            <p>O Harami é também conhecido como "mulher grávida" por sua semelhança com essa figura. Ele é formado por um candle maior (candle-mãe) e um candle menor, cujo corpo está integralmente inserido entre os limites do corpo do candle-mãe. Conhecido padrão de reversão, ele costuma aparecer após uma tendência definida. Ele é um caso particular de inside candle e apresenta um alto índice de acerto.</p>
            <p>Existe o harami de alta, que ocorre após longas tendências de baixa – e têm este nome justamente porque revertem o movimento para cima. E há também o harami de baixa, que ocorrem após longas tendências de alta, revertendo o movimento para baixo.</p>
        `
    },
    {
        name: 'Harami de baixa',
        trend: 2,
        data: [
            {
                date: new Date('2020-01-10T02:01Z'),
                open: 42,
                high: 50,
                low: 40,
                close: 48
            },
            {
                date: new Date('2020-01-10T02:02Z'),
                open: 46,
                high: 54,
                low: 43.5,
                close: 52
            },
            {
                date: new Date('2020-01-10T02:03Z'),
                open: 50,
                high: 52,
                low: 46,
                close: 48
            }
        ],
        description: `
            <p>O Harami é também conhecido como "mulher grávida" por sua semelhança com essa figura. Ele é formado por um candle maior (candle-mãe) e um candle menor, cujo corpo está integralmente inserido entre os limites do corpo do candle-mãe. Conhecido padrão de reversão, ele costuma aparecer após uma tendência definida. Ele é um caso particular de inside candle e apresenta um alto índice de acerto.</p>
            <p>Existe o harami de alta, que ocorre após longas tendências de baixa – e têm este nome justamente porque revertem o movimento para cima. E há também o harami de baixa, que ocorrem após longas tendências de alta, revertendo o movimento para baixo.</p>
        `
    }
]
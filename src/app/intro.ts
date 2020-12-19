export const intro = [
    {
        id: 0,
        question: `Здоровеньки!`,
        answers: [
            {
                input: true,
                correctAnswer: 'гречка и подливка',
                placeholder: 'я инпут',
                label: 'Введи пароль!',
                errorText: `Подсказка(три слова, кириллицей)!`
            },
            {
                text: 'Готово',
                submitAnswer: true,
                redirect: {
                    id: 1
                }
            },
        ]
    },
    {
        id: 1,
        question: `Пройди квест чтоб узнать где лежит главный подарок!
        Получи поощрительные подарки за удачные решения.
        
        СОВЕТ ДНЯ:
        Перед тем как начать, лучше накати или хотя бы покури грибов.
        `,
        answers: [
            {
                text: 'Начать',
                link: '/fairytale'
            },
            {
                text: 'Нажать',
                link: '/fairytale'
            },
            {
                text: 'Жужжать',
                link: '/fairytale'
            }
        ]
    },
       
]
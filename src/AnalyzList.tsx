import reactLogo from './assets/react.svg'

function Analyze() {
    return (
        <>
            <h1 className=" mb-4 mt-3 text-[tomato] fs-12 font-bold">Чек лист</h1>
            {/* <h2 className=" mb-6 mt-6 text-[tomato] text-3xl font-bold"></h2> */}
            <div>
                {/* <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a> */}
                <div className='hover:color-green cursor-pointer'> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
                <table className="border-collapse border border-gray-400 ...">
                    <thead>
                        <tr>
                            <th className="p-4 border border-gray-300 ...">магазин №999999 </th>
                            <th className="p-4 border border-gray-300 ...">г. Мурманск ул. Капитана Буркова, д.13
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td className="border border-gray-300 ...">Дата открытия магазина</td>
                            <td className="border border-gray-300 ...">05.02.2023 г.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">ФИО администратора</td>
                            <td className="border border-gray-300 ...">Пупкин Вася</td>

                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">Стаж</td>
                            <td className="border border-gray-300 ...">
                                Администратором 1 год 4 месяца. <br />В компании 2 год 4 месяца
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">Штат</td>
                            <td className="border border-gray-300 ...">5/5</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">Средняя выручка</td>
                            <td className="border border-gray-300 ...">135916руб.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">Среднее количество чеков</td>
                            <td className="border border-gray-300 ...">353шт.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">Средний чек</td>
                            <td className="border border-gray-300 ...">398руб.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">Доли продаж</td>
                            <td className="border border-gray-300 ...">
                                Алкоголь: 29,07% <br />
                                Табак: 28,63% <br />
                                Пиво: 30,95% <br />
                                Продукты: 1,25% <br />
                                Соки/воды: 85,96% <br />
                                Нон-фуд: 20,63% <br />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">Конкуренты</td>
                            <td className="border border-gray-300 ...">
                                Пятерочка» - г. Мурманск, ул. Самойловой, д.14а <br />
                                «Fix price» - г. Мурманск, ул. Воровского,д. 5/23 <br />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">Последняя ревизия</td>
                            <td className="border border-gray-300 ...">
                                22.08.2025 г. <br />
                                0,15% 30042 руб. <br />
                                Экономия 28437,57руб. <br />
                                Недостача 1604,43 руб. <br />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">Потери за прошлый межинвентаризационный <br /> период (150 дней)</td>
                            <td className="border border-gray-300 ...">
                            Алкоголь: 0 руб. <br />
                            Пиво: 559 ( 559 ЛР / 0  ПТВ) руб. <br />
                            Коктейли с/а:  95 (95 ЛР / 0 ПТВ) руб. <br />
                            Сигареты: 0 руб. <br />
                            Продукты: 1517 (1517 ЛР / 965  ПТВ) руб. <br />
                            Соки/воды: 673 (673 ЛР / 525 ПТВ) руб. <br />
                            Нон-фуд: 100 руб. <br />
                            Всего 2944 руб., из них индивидуальных распределений <br /> на 2620  руб./коэф. 0,08%,
                            27 дней.
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">Автоматические списания за <br /> межинвентаризационный период (27 дней) </td>
                            <td className="border border-gray-300 ...">Скоропорт 1444  руб.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">
                                Факты хищения/поданные<br /> заявления/задержания вора/ПКО за <br /> межинвентаризационный период
                            </td>
                            <td className="border border-gray-300 ...">
                            Текущий МИП: 
                            КУСП – 0 <br />
                            Задержание вора - 0 <br />
                            ПКО – 0 руб. <br />
                            Прошлый МИП: <br />
                            КУСП – 8823 от 15.04.25 <br />
                            КУСП – 11695 от 19.05.25 <br />
                            КУСП – 14298 от 19.06.25 <br />
                            Задержание вора - 1 <br />
                            ПКО – 729,99 руб. <br />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex-col text-left">
                    <p>ИДПП Федоров П.Н (нагрузка 12 магазинов, стаж работы 1 год 2 месяца).</p>
                    <p>ЗРУ ДПП Супруненко В.В.</p>
                    <p className=''>РУ ДПП Куликолв Н.В.</p>
                </div>
            </div>
            <button>сохранить в пдф</button>
        </>
    )
}
export default Analyze
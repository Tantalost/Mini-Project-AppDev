export default function WeatherLayout() 

{
    const cities = {
        'Isabela': {
            hourly: [
                { time: '8 AM', temp: '28°C' },
                { time: '12 PM', temp: '30°C' }
            ],
            weekly: [
                { day: 'Monday', temp: '29°C', desc: 'Sunny' },
                { day: 'Tuesday', temp: '28°C', desc: 'Cloudy' }
            ]
        },
        'Lamitan': {
            hourly: [
                { time: '8 AM', temp: '27°C' },
                { time: '12 PM', temp: '29°C' }
            ],
            weekly: [
                { day: 'Monday', temp: '28°C', desc: 'Partly Cloudy' },
                { day: 'Tuesday', temp: '27°C', desc: 'Rainy' }
            ]
        },
        'Pagadian City': {
            hourly: [
                 { time: '8 AM', temp: '26°C' },
                 { time: '12 PM', temp: '28°C' },
                 { time: '4 PM', temp: '27°C' }
                    ],
            weekly: [
              { day: 'Monday', temp: '27°C', desc: 'Rain Showers' },
              { day: 'Tuesday', temp: '28°C', desc: 'Cloudy' },
             { day: 'Wednesday', temp: '29°C', desc: 'Sunny' }
                    ]   
         },
         'Dipolog City': {
            hourly: [
                 { time: '8 AM', temp: '27°C' },
                 { time: '12 PM', temp: '29°C' },
                 { time: '4 PM', temp: '28°C' }
                     ],
             weekly: [
             { day: 'Monday', temp: '28°C', desc: 'Partly Cloudy' },
            { day: 'Tuesday', temp: '27°C', desc: 'Rainy' },
            { day: 'Wednesday', temp: '29°C', desc: 'Sunny' }
                    ]
        },
        'Zamboanga City': {
             hourly: [
              { time: '8 AM', temp: '30°C' },
              { time: '12 PM', temp: '32°C' },
              { time: '4 PM', temp: '31°C' }
                     ],
         weekly: [
             { day: 'Monday', temp: '31°C', desc: 'Sunny' },
              { day: 'Tuesday', temp: '30°C', desc: 'Partly Cloudy' },
             { day: 'Wednesday', temp: '29°C', desc: 'Cloudy' }
             ]
         }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-300 to-emerald-200 text-slate-900 p-6">
            <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>

            {Object.entries(cities).map(([city, data]) => (
                <div key={city} className="mb-6 p-4 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-semibold">{city}</h2>

                    <p className="text-slate-600">
                        Today: {data.weekly[0].temp} — {data.weekly[0].desc}
                    </p>

                    <div className="flex gap-3 mt-2">
                        {data.hourly.map((h, i) => (
                            <div key={i} className="p-2 bg-slate-100 rounded">
                                <p>{h.time}</p>
                                <p>{h.temp}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

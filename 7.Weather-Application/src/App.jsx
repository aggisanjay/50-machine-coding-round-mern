import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getWeather = async () => {
        if (!city.trim()) return;

        try {
            setLoading(true);
            setError("");

            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            if (!res.ok) throw new Error();

            const data = await res.json();
            setWeather(data);
        } catch {
            setWeather(null);
            setError("City not found");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>

            <div style={styles.card}>

                <h1 style={styles.heading}>🌦 Weather App</h1>

                <div style={styles.searchRow}>
                    <input
                        style={styles.input}
                        value={city}
                        placeholder="Enter city name"
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && getWeather()}
                    />

                    <button style={styles.button} onClick={getWeather}>
                        Search
                    </button>
                </div>

                {loading && <p style={styles.info}>Loading...</p>}
                {error && <p style={styles.error}>{error}</p>}

                {weather && (
                    <div style={styles.result}>

                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt="icon"
                        />

                        <h2>{weather.name}</h2>

                        <p style={styles.temp}>
                            {Math.round(weather.main.temp)}°C
                        </p>

                        <p style={styles.desc}>
                            {weather.weather[0].description}
                        </p>

                        <div style={styles.statsRow}>
                            <div style={styles.statBox}>
                                <p>Humidity</p>
                                <b>{weather.main.humidity}%</b>
                            </div>

                            <div style={styles.statBox}>
                                <p>Wind</p>
                                <b>{weather.wind.speed} m/s</b>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom,#4facfe,#00f2fe)",
        fontFamily: "Arial, sans-serif"
    },
    card: {
        width: 350,
        background: "#fff",
        padding: 20,
        borderRadius: 16,
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        textAlign: "center"
    },
    heading: {
        marginBottom: 15
    },
    searchRow: {
        display: "flex",
        gap: 8
    },
    input: {
        flex: 1,
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: 10,
        outline: "none"
    },
    button: {
        padding: "10px 15px",
        background: "#2196f3",
        color: "#fff",
        border: "none",
        borderRadius: 10,
        cursor: "pointer"
    },
    info: {
        marginTop: 12,
        color: "#444"
    },
    error: {
        marginTop: 12,
        color: "red"
    },
    result: {
        marginTop: 20
    },
    temp: {
        fontSize: 40,
        margin: "5px 0"
    },
    desc: {
        textTransform: "capitalize",
        color: "#555"
    },
    statsRow: {
        display: "flex",
        marginTop: 15,
        justifyContent: "space-between"
    },
    statBox: {
        background: "#f2f2f2",
        borderRadius: 12,
        padding: 10,
        width: "45%"
    }
};

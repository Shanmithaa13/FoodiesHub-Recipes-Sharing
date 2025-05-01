import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
//import "../partials/_settings.scss"; // Ensure this file contains updated styles

export default function Settings() {
    const [settings, setSettings] = useState({
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--primary-color": "rgb(255, 0, 86)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
        "--font-size": "16px",
        "--animation-speed": 1
    });

    useEffect(() => {
        const root = document.documentElement;
        for (let key in settings) {
            root.style.setProperty(key, settings[key]);
        }
    }, [settings]);

    const [theme, setTheme] = useState("light");

    const themes = [
        {
            "--background-color": "#ffffff",  // White theme
            "--background-light": "#ffffff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757",
        },
        {
            "--background-color": "#000000",  // Black theme
            "--background-light": "#222222",
            "--shadow-color": "rgba(255,255,255,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea",
        }
    ];

    function changeTheme(i) {
        const _theme = { ...themes[i] };
        setTheme(i === 0 ? "light" : "dark");

        let _settings = { ...settings };
        for (let key in _theme) {
            _settings[key] = _theme[key];
        }
        setSettings(_settings);
    }

    function changeColor(i) {
        const _color = primaryColors[i];
        let _settings = { ...settings };
        _settings["--primary-color"] = _color;
        setPrimaryColor(i);
        setSettings(_settings);
    }

    function changeFontSize(i) {
        const _size = fontSizes[i];
        let _settings = { ...settings };
        _settings["--font-size"] = _size.value;
        setFontSize(i);
        setSettings(_settings);
    }

    function changeAnimationSpeed(i) {
        let _speed = animationSpeeds[i];
        let _settings = { ...settings };
        _settings["--animation-speed"] = _speed.value;
        setAnimationSpeed(i);
        setSettings(_settings);
    }

    const primaryColors = [
        "rgb(255, 0, 86)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)"
    ];

    const fontSizes = [
        { title: "Small", value: "12px" },
        { title: "Medium", value: "16px" },
        { title: "Large", value: "20px" }
    ];

    const animationSpeeds = [
        { title: "Slow", value: 2 },
        { title: "Medium", value: 1 },
        { title: "Fast", value: 0.5 }
    ];

    const [primaryColor, setPrimaryColor] = useState(0);
    const [fontSize, setFontSize] = useState(1);
    const [animationSpeed, setAnimationSpeed] = useState(1);

    return (
        <div className="settings-container">
            {/* Theme Options */}
            <div className="section">
                <h2>Primary Theme</h2>
                <div className="option-container">
                    <div
                        className="option"
                        onClick={() => changeTheme(0)}
                        style={{ backgroundColor: "#ffffff", border: "1px solid black" }}
                    >
                        {theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} color="black" />
                            </div>
                        )}
                    </div>
                    <div
                        className="option"
                        onClick={() => changeTheme(1)}
                        style={{ backgroundColor: "#000000", border: "1px solid white" }}
                    >
                        {theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} color="white" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Preferred Color */}
            <div className="section">
                <h2>Preferred Colour</h2>
                <div className="option-container">
                    {primaryColors.map((color, index) => (
                        <div
                            key={index}
                            className="option"
                            style={{ backgroundColor: color }}
                            onClick={() => changeColor(index)}
                        >
                            {primaryColor === index && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Font Size */}
            <div className="section">
                <h2>Font Size</h2>
                <div className="option-container">
                    {fontSizes.map((size, index) => (
                        <button
                            key={index}
                            className={`btn ${fontSize === index ? "active" : ""}`}
                            onClick={() => changeFontSize(index)}
                        >
                            {size.title}
                            {fontSize === index && <FontAwesomeIcon icon={faCheck} />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Animation Speed */}
            <div className="section">
                <h2>Animation Speed</h2>
                <div className="option-container">
                    {animationSpeeds.map((speed, index) => (
                        <button
                            key={index}
                            className={`btn ${animationSpeed === index ? "active" : ""}`}
                            onClick={() => changeAnimationSpeed(index)}
                        >
                            {speed.title}
                            {animationSpeed === index && <FontAwesomeIcon icon={faCheck} />}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

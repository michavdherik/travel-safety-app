import React, { useState } from 'react';
import CountryStatus from '../components/CountryStatus';
import { fetchCountryStatus } from '../utils/api';
import styles from './HomePage.module.css'; // Import CSS Modules

const HomePage: React.FC = () => {
    const [country, setCountry] = useState<string>('');
    const [status, setStatus] = useState<any>(null); // Change type to any to handle the response data
    const [possibleCountries, setPossibleCountries] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    };

    const checkStatus = async () => {
        try {
            setLoading(true);
            if (country) {
                const safetyStatus = await fetchCountryStatus(country);
                setStatus(safetyStatus);
                setPossibleCountries([]);
                setError(null);
            }
        } catch (error) {
            setStatus(null);
            setError('Country not found. Please try one of the following:');
            setPossibleCountries(['Netherlands', 'Germany', 'France', 'Spain', 'Italy']); // Example list of possible countries
        } finally {
            setLoading(false);
        }
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        checkStatus();
    };

    return (
        <div className={styles.homepage}>
            <div className={styles.container}>
                <h1 className={styles.title}>Travel Safety Checker</h1>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter country name"
                        value={country}
                        onChange={handleCountryChange}
                    />
                    <button className={styles.button} type="submit">Check Status</button>
                </form>
                {loading && <p className={styles.message}>Loading...</p>}
                {error && <p className={styles.message}>{error}</p>}
                {possibleCountries.length > 0 && (
                    <ul className={styles.list}>
                        {possibleCountries.map((possibleCountry) => (
                            <li className={styles.listItem} key={possibleCountry}>{possibleCountry}</li>
                        ))}
                    </ul>
                )}
                {status && <CountryStatus country={country} status={status} />}
            </div>
        </div>
    );
};

export default HomePage;
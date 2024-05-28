import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [nextPrayer, setNextPrayer] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const calculateTimeLeft = (endTime) => {
    const now = new Date();
    const [hours, minutes] = endTime.split(':').map(Number);
    let endDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hours,
      minutes
    );
    if (endDate < now) {
      // Eğer endTime geçmişse, bir sonraki gün için ayarla
      endDate.setDate(endDate.getDate() + 1);
    }
    const distance = endDate - now;
    return Math.max(0, Math.floor(distance / 1000)); // Saniye olarak kalan süreyi döndür
  };

  const fetchPrayerTimes = async () => {
    try {
      const response = await fetch(
        'https://api.collectapi.com/pray/all?data.city=elazig',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization:
              'apikey 6IpduJYMKDgFOGNZ6MVord:0HROohamAVEW6rcegp5Czu',
          },
        }
      );
      const data = await response.json();
      const now = new Date();
      let closestTime = null;
      let closestDistance = Infinity;
      let nextPrayerName = '';

      data.result.forEach((item) => {
        const [hours, minutes] = item.saat.split(':').map(Number);
        let prayerTime = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          hours,
          minutes
        );
        if (prayerTime < now) {
          prayerTime.setDate(prayerTime.getDate() + 1); // Eğer namaz vakti geçmişse, bir sonraki gün için ayarla
        }
        const distance = prayerTime - now;
        if (distance < closestDistance) {
          closestDistance = distance;
          closestTime = item.saat;
          nextPrayerName = item.vakit;
        }
      });

      const timeLeftInSeconds = calculateTimeLeft(closestTime);
      setTimeLeft(timeLeftInSeconds);
      setNextPrayer(nextPrayerName);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchPrayerTimes();
  }, []);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 60 : 0));
    }, 60000); // Her dakika (60,000 milisaniye) bir geri sayım yap

    return () => clearInterval(timerId);
  }, [timeLeft]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${h} saat ${m} dakika`;
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.prayerText}>{nextPrayer}</Text>
        <Text style={styles.timerText}>Ezanına </Text>
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
        <Text style={styles.timerText}> Kaldı</Text>
      </View>
    </View>
  );
}
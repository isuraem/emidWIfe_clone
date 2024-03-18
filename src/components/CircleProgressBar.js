import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

const CircleProgressBar = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Limit the progress value between 0 and 100
    const limitedProgress = Math.min(Math.max(0, percentage), 100);
    setProgress(limitedProgress);
  }, [percentage]);

  // Calculate the circumference of the circle
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  // Calculate the stroke-dashoffset based on the progress
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <View style={styles.container}>
      <Svg height="80" width="120">
        <Circle
          cx="60"
          cy="40"
          r={radius}
          fill="transparent"
          stroke="#d3d3d3"
          strokeWidth="10"
        />
        <Circle
          cx="60"
          cy="40"
          r={radius}
          fill="transparent"
          stroke="#00ff00"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
        {/* Positioning percentage text in the center */}
        <SvgText
          x="50%"
          y="50%"
          textAnchor="middle"
          stroke="#000000"
          fontSize="12"
          marginTop="5"
          fontWeight="bold">
          {`${progress}%`}
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CircleProgressBar;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const [done, setDone] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const throwError = async () => {
    return new Promise((resolve, reject) => {
      if (1 == 1) {
        // Always throw an error.
        // This will cause "Possible Unhandled Promise Rejection"
        throw new Error('Something went wrong in the promise');
      }
      resolve('Promise resolved successfully!!');
    }).then(() => {
      console.log('Promise.then called!!');
    });
  }

  useEffect(() => {
    console.log('useEffect 1 starts');
    if (!done) {
      const f = async () => {
        setDone(true);
        try {
          // If you do not await this method, you will not catch the error.
          throwError();
        } catch (e) {
          console.error('(1) Trying to catch an error inside a promise!!');
        }
      }
      console.log('useEffect 1 calling f() which calls throwError');
      f();
    }
    return () => {};
  }, [done]);

  useEffect(() => {
    console.log('useEffect 2 starts');
    if (!done) {
      const f = async () => {
        setDone(true);
        try {
          // If you do not await this method, you will not catch the error.
          await throwError();
        } catch (e) {
          console.error('(2) Trying to catch an error inside a promise!!');
        }
      }
      console.log('useEffect 2 calling f() which calls throwError with await');
      f();
    }
    return () => {};
  }, [done]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import { NativeEventEmitter, NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-nikishkin-test-work' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

export const NikishkinTestWork = NativeModules.NikishkinTestWork
  ? NativeModules.NikishkinTestWork
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );
export const NikishkinTestWorkEvent = new NativeEventEmitter(NikishkinTestWork);

export enum EventType {
  onChangeText = 'onChangeText',
}

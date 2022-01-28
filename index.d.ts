declare module 'react-native-call-detection' {
  export type Event = 'Disconnected' | 'Connected' | 'Incoming' | 'Dialing' | 'Offhook' | 'Missed';

  export type CallDetectorManagerCallback = (event: Event, phoneNumber: string) => void;

  export default class CallDetectorManager {
    constructor(callback: CallDetectorManagerCallback);

    dispose: () => void;
  }
}

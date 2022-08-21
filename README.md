# react-native-nikishkin-test-work
test work
## Installation

```sh
npm install react-native-nikishkin-test-work
```

## Usage

```js
import {
  NikishkinTestWork,
  NikishkinTestWorkEvent,
  EventType,
} from 'react-native-nikishkin-test-work';

NikishkinTestWork.changeText('text');

NikishkinTestWorkEvent.addListener(EventType.onChangeText, (res) => {
  console.log(res);
});
```

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

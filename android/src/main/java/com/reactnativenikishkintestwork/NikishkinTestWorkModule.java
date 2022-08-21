package com.reactnativenikishkintestwork;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;

@ReactModule(name = NikishkinTestWorkModule.NAME)
public class NikishkinTestWorkModule extends ReactContextBaseJavaModule {
    public static final String NAME = "NikishkinTestWork";
    private String text = "";

    public NikishkinTestWorkModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void changeText(String value) {
      if (!text.equals(value)) {
        this.text = value;
        sendEvent(getReactApplicationContext(), "onChangeText", value);
      }
    }

    private void sendEvent(ReactContext reactContext,
                           String eventName, String params) {
      reactContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit(eventName, params);
    }

}

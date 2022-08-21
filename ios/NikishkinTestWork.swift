import Foundation
import React

@objc(NikishkinTestWork)
class NikishkinTestWork: RCTEventEmitter {
    private var hasListeners = false;
    private var text: NSString = "";
    override init() {
      super.init();
    }
    
    override func startObserving() {
      hasListeners = true;
      
      NotificationCenter.default.addObserver(self,
        selector:  #selector(textModeDidChange), name: Notification.Name("NotificationText"), object: nil)
    }
    
    override func stopObserving() {
      hasListeners = false;
      
      NotificationCenter.default.removeObserver(self,
        name: Notification.Name("NotificationText"), object: nil)
    }
    
    @objc
    func onChangeText(_ callback: RCTPromiseResolveBlock) {
      callback(text);
    }
    
    @objc
    func textModeDidChange(){
      if(!hasListeners){
        return;
      }
      
      self.sendEvent(withName: "onChangeText", body: text)
    }
    
    override func supportedEvents() -> [String]! {
      return ["onChangeText"]
    }
    
    override class func requiresMainQueueSetup() -> Bool {
      return false;
    }
    
    @objc
    func changeText(_ value: NSString){
      if text != value {
        text = value
        NotificationCenter.default.post(name: Notification.Name("NotificationText"), object: nil)
      }
    }
}

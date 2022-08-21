#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(NikishkinTestWork, RCTEventEmitter)
RCT_EXTERN_METHOD(onChangeText: (RCTPromiseResolveBlock)callback)
RCT_EXTERN_METHOD(changeText: (NSString)value)
@end

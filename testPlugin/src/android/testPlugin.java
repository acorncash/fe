package com.test.myPlugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import android.util.Log;

import android.app.Activity;
import com.igaworks.adpopcorn.Adpopcorn;

public class testPlugin extends CordovaPlugin {

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    if (action.equals("coolMethod")) {
      String userId = args.getString(0);
      coolMethod(userId, callbackContext);
      return true;
    }
    return false;
  }
  private void coolMethod(String userId, CallbackContext callbackContext) {
    try {
      // 현재 실행 중인 액티비티를 가져옵니다.
      Activity currentActivity = cordova.getActivity();

      if (currentActivity != null) {
        // currentActivity 변수에 들어 있는 값을 로그에 출력합니다.
        Log.d("CurrentActivity", currentActivity.getClass().getName());
        // Adpopcorn을 사용하여 오퍼월을 엽니다.
        Adpopcorn.setUserId(currentActivity, userId);
        Adpopcorn.openCPMOfferwall(currentActivity);
        callbackContext.success("OfferWall opened successfully");
      } else {
        callbackContext.error("currentActivity is null");
      }
    } catch (Exception e) {
      callbackContext.error("Error opening OfferWall: " + e.getMessage());
    }
  }

}

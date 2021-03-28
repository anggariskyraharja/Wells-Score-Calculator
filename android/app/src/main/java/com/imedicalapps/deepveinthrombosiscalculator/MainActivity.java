package com.imedicalapps.deepveinthrombosiscalculator;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;
import com.getcapacitor.community.firebaseanalytics.FirebaseAnalytics;
import app.xplatform.capacitor.plugins.AdMob;


public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(FirebaseAnalytics.class);
      add(AdMob.class);  // Add AdMob as a Capacitor Plugin

    }});
  }
}

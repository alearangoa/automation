$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("positions.feature");
formatter.feature({
  "line": 1,
  "name": "Show  available position",
  "description": "",
  "id": "show--available-position",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "option career is available in menu",
  "description": "",
  "id": "show--available-position;option-career-is-available-in-menu",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@aleja"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "a user select the option \u0027careers\u0027 from huge site",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "open the link \u0027\u003cciudad\u003e\u0027 from technology page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "\u003ccantidad\u003e open position for QA rol are shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "show--available-position;option-career-is-available-in-menu;",
  "rows": [
    {
      "cells": [
        "ciudad",
        "cantidad"
      ],
      "line": 21,
      "id": "show--available-position;option-career-is-available-in-menu;;1"
    },
    {
      "cells": [
        "Bogota",
        "2"
      ],
      "line": 22,
      "id": "show--available-position;option-career-is-available-in-menu;;2"
    },
    {
      "cells": [
        "Bogota",
        "9"
      ],
      "line": 23,
      "id": "show--available-position;option-career-is-available-in-menu;;3"
    }
  ],
  "keyword": "Scenarios"
});
formatter.before({
  "duration": 333719119006,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027H7057.ad.hugeinc.com\u0027, ip: \u002710.11.82.38\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: AutomationDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d46.0, platform\u003dMAC, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9d35fd4b-19c3-ef47-b4f6-1094608b3c03\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\n\tat step_definitions.AutomationDriver.open_url(AutomationDriver.java:31)\n\tat step_definitions.hooks.before_scenarios(hooks.java:22)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:237)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7056 [/127.0.0.1] failed: Connection refused\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:151)\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:160)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:380)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\n\t... 57 more\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:134)\n\t... 72 more\n",
  "status": "failed"
});
formatter.scenario({
  "line": 22,
  "name": "option career is available in menu",
  "description": "",
  "id": "show--available-position;option-career-is-available-in-menu;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@aleja"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "a user select the option \u0027careers\u0027 from huge site",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "open the link \u0027Bogota\u0027 from technology page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "2 open position for QA rol are shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "careers",
      "offset": 26
    }
  ],
  "location": "contactsSteps.a_user_select_the_option_careers_from_huge_site(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "positionsSteps.open_the_link_Bogota_from_technology_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 0
    }
  ],
  "location": "positionsSteps.open_position_for_QA_rol_are_shown(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 8153388,
  "error_message": "java.lang.NullPointerException\n\tat step_definitions.AutomationDriver.open_url(AutomationDriver.java:31)\n\tat step_definitions.hooks.before_scenarios(hooks.java:22)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:237)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 23,
  "name": "option career is available in menu",
  "description": "",
  "id": "show--available-position;option-career-is-available-in-menu;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@aleja"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "a user select the option \u0027careers\u0027 from huge site",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "open the link \u0027Bogota\u0027 from technology page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "9 open position for QA rol are shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "careers",
      "offset": 26
    }
  ],
  "location": "contactsSteps.a_user_select_the_option_careers_from_huge_site(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "positionsSteps.open_the_link_Bogota_from_technology_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 0
    }
  ],
  "location": "positionsSteps.open_position_for_QA_rol_are_shown(int)"
});
formatter.result({
  "status": "skipped"
});
});
# webdriverio-samples

## Pre-requisites
- Clone the repo
- Download selenium standalone jar file from here http://www.seleniumhq.org/download/
- Download Chromedriver from  https://sites.google.com/a/chromium.org/chromedriver/
- Download Appium server from http://appium.io/downloads.html

## Usage
- Add the path of `chromedriver` file in your PATH. Add following to your ~/.bash_profile. Change the path of `chromedriver` to where it is saved in your system.
 ```
 export CHROMEDRIVER=~$HOME/chromedriver
 export PATH=${PATH}:$JAVA_HOME/bin
 export PATH=${PATH}:$CHROMEDRIVER
 ```

- Make sure you have the selenium standalone server running. Run by command :
```
java -jar selenium-server-standalone-3.4.0.jar

```

-
```
cd webdriverio_samples
npm install
```

-  Run tests locally
```
npm run test-local
```

- Run tests on saucelabs

 You will need to get a `username` and `accesskey` from saucelabs by registering in their site. https://saucelabs.com. You can get a trail account for limited period.

- add the `username` and `accesskey` in environment variables

```
export SAUCE_USERNAME=<username>
export SAUCE_ACCESS_KEY=<accesskey>

npm run test-sauce

```

The above command will run the tests on saucelabs which can be seen in their dashboards.





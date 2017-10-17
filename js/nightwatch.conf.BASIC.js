//require('env')('.env'); // Enviroment varaiblar sparas i .env
const Pkg = require('../package.json'); // Så att  vi kan se projektets verion.
const Binpath = '../node_modules/nightwatch/bin/'; //Ändra sökväg bid behov
const Screenshot_path = "../node_modules/nightwatch/screenshots" + Pkg.version + "/";



const config = { //Använder nightwatch.conf.js för kommentarer och hjälpfunktioner.
    "src_folders": ["test/e2e"], //Katalog för tester
    "output_folder": "./node_modules/nightwatch/reports", //Output för de tester som Nightwatch utför.
    "selenium": {
        "start_process": true,
        "server_path": Binpath + "selenium.jar",  //Laddas ned av Selenium (se nedan)
        "log_path": "",
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": Binpath + "chromedriver"
        }
    },
    "test_workers": {"enabled": true, "workers": "auto"}, //öppnar upp för att flera tester ska kunna köras pararellt.
    "test_settings":
        {
            "default": {
                "launch_url": "http://localhost", // Ändras till önskad endpoint.
                "selenium_port": 80,
                "silent": true,
                "screenshots": {
                    "enabled": true, //Spara screenhots till den angivna sökvägen (som är ignorerad i .gitignore).
                    "path": Screenshot_path
                },
                "username": "${SAUCE_USERNAME}", //Öppnar upp för att man ska kunna köra tillsammans med Saucelabs
                "access_key": "${SAUCE_ACCESS_KEY}", // Exporterar enviorment variablar (se read me på Saucelabs)
                "globals": {
                    "waitForConditionTimeout": 10000

                }
            },
            "local": {
                "launch_url": "http://localhost",
                "selenium_port": 4444,
                "selenium_host": "127.0.0.1",
                "silent": true,
                "screenshots": {
                    "enabled": true, //Spara sceenshots i
                    "path": Screenshot_path
                }, //Gör det möjligt att kontrollera
                "globals": {
                    "waitForConditionTimeout": 15000 // på localhost. Göt att Nightwatch väntar ifall att det behövs.
                },
                "desiredCapabilities": {
                    "browserName": "chrome",
                    "chromeOptions": {
                        "args": [
                            `Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46
            (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3`,
                            "--window-size=640,1136" // iphone 5
                        ]
                    },
                    "javascriptEnabled": true,
                    "acceptSslCerts": true
                }
            },
            "chrome": { // your local Chrome browser (chromedriver)
                "desiredCapabilities": {
                    "browserName": "chrome",
                    "javascriptEnabled": true,
                    "acceptSslCerts": true
                }
            },
            "chromemac": { // browsers used on saucelabs:
                "desiredCapabilities": {
                    "browserName": "chrome",
                    "platform": "OS X 10.11",
                    "version": "47"
                }
            },
            "ie11": {
                "desiredCapabilities": {
                    "browserName": "internet explorer",
                    "platform": "Windows 10",
                    "version": "11.0"
                }
            },
            "firefox": {
                "desiredCapabilities": {
                    "platform": "XP",
                    "browserName": "firefox",
                    "version": "33"
                }
            },
            "internet_explorer_10": {
                "desiredCapabilities": {
                    "platform": "Windows 7",
                    "browserName": "internet explorer",
                    "version": "10"
                }
            },
            "android_s4_emulator": {
                "desiredCapabilities": {
                    "browserName": "android",
                    "deviceOrientation": "portrait",
                    "deviceName": "Samsung Galaxy S4 Emulator",
                    "version": "4.4"
                }
            },
            "iphone_6_simulator": {
                "desiredCapabilities": {
                    "browserName": "iPhone",
                    "deviceOrientation": "portrait",
                    "deviceName": "iPhone 6",
                    "platform": "OSX 10.10",
                    "version": "8.4"
                }
            }
        }
};
module.exports = config;


/**
 * Selenium-download laddar ned eller uppdaterar Selenium (@ chromedriver) på localhost,
 * där den kan användas av Nightwatch.
 */

require('fs').stat(Binpath + 'selenium.jar', function (err, stat) { // got it?
    if (err || !stat || stat.size < 1) {
        require('selenium-download').ensure(Binpath, function(error) {
            if (error) throw new Error(error); // no point continuing so exit!
            console.log('✔ Selenium & Chromedriver downloaded to:', Binpath);
        });
    }
});


function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
    return count < 10 ? '0' + count : count.toString();
}

var Filecount = 0; // Räknar screenshots.
function imgpath (browser) {
    var a = browser.options.desiredCapabilities;
    var meta = [a.platform];
    meta.push(a.browserName ? a.browserName : 'any');
    meta.push(a.version ? a.version : 'any');
    meta.push(a.name); // this is the test filename so always exists.
    var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
    return Screenshot_path + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.Screenshot_path = Screenshot_path;







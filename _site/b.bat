@echo off
setlocal

rem Define source and destination directories
set "SOURCE_DIR=E:\dev-bkp\github\sk web\skwm-dev"
set "BUILD_DIR=E:\dev-bkp\github\sk web\skwm"

echo Processing final build...

rem Use robocopy to copy the source directory to the build directory, excluding specified directories
robocopy "%SOURCE_DIR%" "%BUILD_DIR%" /E /XD "_site" ".jekyll-cache" "tools" "community" "node_modules" "user" "b" "backup"

rem Check if robocopy was successful
if %errorlevel% geq 8 (
    echo Error during final build. Error Code: %errorlevel%
    exit /b %errorlevel%
)

echo Build completed successfully!

rem Run the npm javascript-obfuscator command
echo Obfuscating JavaScript files...
REM javascript-obfuscator "%BUILD_DIR%" --output "%BUILD_DIR%" --compact true --control-flow-flattening true --control-flow-flattening-threshold 1 --dead-code-injection true --dead-code-injection-threshold 1 --self-defending true --rename-globals true --split-strings true --split-strings-chunk-length 5 --string-array true --string-array-threshold 1 --string-array-encoding base64 --string-array-index-shift true --string-array-wrappers-chained-calls true --string-array-wrappers-count 5 --string-array-wrappers-type function --transform-object-keys true --disable-console-output true

javascript-obfuscator "%BUILD_DIR%" --output "%BUILD_DIR%" --compact true --control-flow-flattening true --dead-code-injection true --string-array true --string-array-threshold 0.75 --string-array-encoding rc4 --disable-console-output true


rem Check if the obfuscation was successful
if %errorlevel% neq 0 (
    echo Error during obfuscation. Error Code: %errorlevel%
    exit /b %errorlevel%
)

echo Obfuscation completed successfully!

endlocal

@echo off
setlocal

rem Define source and destination directories
set "SOURCE_DIR=E:\dev-bkp\github\sk web\skwm-dev"
set "BUILD_DIR=E:\dev-bkp\github\sk web\skwm"

echo Processing final build...

rem Use robocopy to copy source to build directory, excluding specific folders and git-related data
robocopy "%SOURCE_DIR%" "%BUILD_DIR%" /E /XD ".git" "_site" ".jekyll-cache" "tools" "community" "node_modules" "user" "b" "backup" /XF ".gitignore"

rem Check if robocopy was successful
if %errorlevel% geq 8 (
    echo Error during final build. Error Code: %errorlevel%
    exit /b %errorlevel%
)

echo Build completed successfully!

rem Run the npm javascript-obfuscator command
echo Obfuscating JavaScript files...
javascript-obfuscator "%BUILD_DIR%\assets\js" --output "%BUILD_DIR%\assets\js" --compact true --control-flow-flattening true --dead-code-injection true --string-array true --string-array-threshold 0.75 --string-array-encoding rc4 --disable-console-output true

rem Check if the obfuscation was successful
if %errorlevel% neq 0 (
    echo Error during obfuscation. Error Code: %errorlevel%
    exit /b %errorlevel%
)

echo Obfuscation completed successfully!

endlocal

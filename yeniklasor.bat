cd \users\tugberk\desktop
set  counter=0
mkdir "yeni klasor" 2>nul || goto :TryNext
:continue
REM rest of your code

goto :eof
:TryNext
set /a counter+=1
mkdir "yeni klasor(%counter%)" 2>nul || goto :TryNext
goto :continue

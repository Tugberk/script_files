@echo off
cls
echo "season folder creator"
set /p sayi="sezon? --"
echo %sayi% "-- sezon olusturuluyor..."

for /l %%x in (1,1,%sayi%) do (
	mkdir "Season "%%x
	)

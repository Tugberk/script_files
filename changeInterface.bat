@echo off
echo "1. Ethernet to Wifi"
echo "2. Wifi to Ethernet"
set /p secenek=Sec:
echo secim: %secenek%
if %secenek%==1 (
	echo "Eth disabled!"
	netsh interface set interface Ethernet disable
	echo "Wifi enabled! Happy surfing!"
	netsh interface set interface Wi-Fi enable
	)
if %secenek%==2 (
	echo "Wifi disabled!"
	netsh interface set interface Wi-Fi disable
	echo "Eth enabled! Happy surfing!"
	netsh interface set interface Ethernet enable
)

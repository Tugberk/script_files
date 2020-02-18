Set oShell = CreateObject("WScript.Shell")
WScript.Sleep 300
oShell.AppActivate "chrome"
WScript.Sleep 300
oShell.SendKeys "İyi günler Türkiye, her nerede yaşıyor ve yaşatılıyorsan.."
oShell.SendKeys "{ENTER}"
'bunu dosya olarak kaydedip kisayol atandiginda chrome icerisinde yazip gonderiyor. chrome degistirilerek ayarlanabilir

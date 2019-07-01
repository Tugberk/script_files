@echo off
if exist *.png mkdir images
if exist *.jpg mkdir images
if exist *.jpeg mkdir images
move *.png images
move *.jpg images
move *.jpeg images

if exist *.gif mkdir gifler
if exist *.webm mkdir gifler


if exist *.mp3 mkdir mp3ler
if exist *.flac mkdir mp3ler
if exist *.m4a mkdir mp3ler
move *.mp3 mp3ler
move *.flac mp3ler
move *.m4a mp3ler

if exist *.flv mkdir flvler
move *.flv flvler

if exist *.mkv mkdir videos
if exist *.avi mkdir videos
if exist *.mp4 mkdir videos
if exist *.3gp mkdir videos
if exist *.mov mkdir videos
move *.mkv videos
move *.avi videos
move *.mp4 videos
move *.3gp videos
move *.mov videos

if exist *.doc mkdir dokumanlar\word
if exist *.docx mkdir dokumanlar\word
if exist *.xls mkdir dokumanlar\excel
if exist *.xlsx mkdir dokumanlar\excel
if exist *.ppt mkdir dokumanlar\sunum
if exist *.pptx mkdir dokumanlar\sunum
if exist *.pdf mkdir dokumanlar\pdf

move *.doc dokumanlar\word
move *.docx dokumanlar\word
move *.xls dokumanlar\excel
move *.xlsx dokumanlar\excel
move *.ppt dokumanlar\sunum
move *.pptx dokumanlar\sunum
move *.pdf dokumanlar\pdf
move *.rtf dokumanlar\word
move *.ps dokumanlar\ps
move *.csv dokumanlar\csv
move *.htm* dokumanlar\html
move *.epub dokumanlar\epub




rem if exist *.exe mkdir exeler
move *.exe exeler

mkdir msi
move *.msi msi

mkdir zip
move *.zip zip
move *.rar zip

mkdir textler
move *.txt textler
move *.iso iso
